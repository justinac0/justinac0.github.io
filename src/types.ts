import { z } from "astro:content";

export const BlogSchema = z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
    tags: z.array(z.string()),
    published: z.boolean()
});

export const ProjectSchema = z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    url: z.string().optional(),
});

export type Blog = z.infer<typeof BlogSchema>
export type Project = z.infer<typeof ProjectSchema>