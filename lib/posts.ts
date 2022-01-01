import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import prism from 'remark-prism';

const is_dev = process.env.NODE_ENV === "development";
const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostMetaData {
  heading: string,
  desc: string,
  author: string,
  date: string,
  published?: boolean,
  preview?: string,
  [key: string]: string | any | undefined
}

export interface Post extends PostMetaData {
  filename: string,
  content: string,
  preview: string
}

const fileExt = /\.md$/;

const markdown_pipeline = remark()
  .use(html, { sanitize: false }) // sanitize: false is needed to allow for <script>, <style> and other tags
  .use(gfm)
  .use(prism);

const MAX_RECURSIVE_DEPTH = 3;
const MAX_PREVIEW_LENGTH  = 256;
function generatePreview(preview: string | undefined, content: string) {
  if (preview)
    return preview;

  var text = content;

  text = text.replaceAll(/<style[^>]*?>.*?<\/style>/gms, ''); // Remove Styles
  text = text.replaceAll(/<script[^>]*?>.*?<\/script>/gms, ''); // Remove Scripts
  for (var i = 0; i < MAX_RECURSIVE_DEPTH; i++)
    text = text.replaceAll(/<\/?[^>]*?>/gms, '');
  text.replaceAll(/\s+/gm, ' '); // Remove excess white space

  return text.length <= MAX_PREVIEW_LENGTH ? text : text.substring(0, MAX_PREVIEW_LENGTH - 3) + '...';
}

export function getPostFileNames() {
  return fs
    .readdirSync(postsDirectory)
    .filter(filename => fileExt.test(filename))
    .map(filename => filename.replace(fileExt, ''));
}

export async function getPosts(): Promise<Post[]> {
  const filenames = getPostFileNames();
  const post_promises = filenames.map(filename => getPost(filename))
  const posts = await Promise.all(post_promises)

  return posts.filter(post => post.published || is_dev); // Allow unpublished posts in dev mode
}

const sortByDateDesc = (a: PostMetaData, b: PostMetaData) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime();
export async function getSortedPosts(): Promise<Post[]> {
  const posts = await getPosts();
  return posts.sort(sortByDateDesc);
}

export async function getPostPaths(): Promise<{ params: { postname: string } }[]> {
  const posts = await getPosts();
  return posts.map(post => ({ params: { postname: post.filename } }));
}

export async function getPost(filename: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, filename + ".md");
  const fileContents = await fs.promises.readFile(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const { content: rawContent, data: metadata }: { content: string, data: PostMetaData } = matter(fileContents) as any;
  const content = await markdown_pipeline.process(rawContent).then(result => result.toString());

  const post: Post = {
    filename,
    preview: generatePreview(metadata.preview, content),
    ...metadata,
    content,
  };

  return post;
}