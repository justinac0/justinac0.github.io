import type { InferGetStaticPropsType } from 'next'
import { get_posts } from "@/lib/parse_md"
import { FC } from 'react'

import { Heading } from '@chakra-ui/layout'

export const getStaticProps = async () => {
  const posts = await get_posts()

  return {
      props: {
        posts
      }
  }
}

const Blogs: FC<InferGetStaticPropsType<typeof getStaticProps>>  = ({  posts  }) => {

  return (
    <>
      <Heading mb={2}>BLOGS</Heading>

      {posts?.map((post) => {
        <Heading>{post}</Heading>
      })}
    </>
  )
}

export default Blogs
