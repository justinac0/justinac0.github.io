import type { InferGetStaticPropsType } from 'next'
import { FC } from 'react'
import { getSortedPosts } from '@/lib/posts'
import { Heading } from "@chakra-ui/react"
import BlogCard from '@/components/blog-card'

export async function getStaticProps() {
  return {
      props: {
        posts: await getSortedPosts()
      }
  }
}

const Blogs: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {
  return (
    <>
      <Heading mb={2}>BLOGS</Heading>

      {posts?.map(post => (
          <BlogCard key={post.filename} {...post} /> 
         
      ))}

    </>
  )
}

export default Blogs
