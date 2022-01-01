import type { InferGetStaticPropsType } from 'next'
import { Heading } from '@chakra-ui/layout'
import { FC } from 'react'
import { getPost, getPostPaths } from '@/lib/posts';

export async function getStaticProps({ params }: any) {
  return {
      props: {
        post: await getPost(params.postname)
      }
  }
}
  
export async function getStaticPaths() {
    const paths = await getPostPaths();
    return {
      paths,
      fallback: false
    }
  }

const Blogs: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ post }) => {
  return (
    <>
      <Heading mb={2}>{post.heading}</Heading>
      <div className="blog-content" dangerouslySetInnerHTML={{__html: post.content}}></div>
    </>
  )
}

export default Blogs