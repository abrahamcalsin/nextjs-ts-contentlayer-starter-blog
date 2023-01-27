import { allBlogs } from 'contentlayer/generated'

import { PostPreview } from '~/components/post-preview'
import { Post } from '~/types/post'

interface BlogProps {
  posts: Post[]
}

function Blog(props: BlogProps) {
  const { posts } = props

  const allPosts = posts.slice(0)

  return (
    <>
      <header>
        <h1>Blog</h1>
        <p>Here my best posts.</p>
      </header>
      <PostPreview posts={allPosts} />
    </>
  )
}

export default Blog

export async function getStaticProps() {
  const posts = allBlogs.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return {
    props: {
      posts,
    },
  }
}
