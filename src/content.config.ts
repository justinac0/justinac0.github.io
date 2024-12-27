import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { BlogSchema, ProjectSchema } from "./types";

const blog = defineCollection({
    loader: glob({ pattern: "*.{md,mdx}", base: "./src/data/blog" }),
    schema: BlogSchema
});

const project = defineCollection({
    loader: glob({ pattern: "*.json", base: "./src/data/project" }),
    schema: ProjectSchema
});

export const collections = {
    blog,
    project
};