import { allBlogs } from 'contentlayer/generated'
import Head from 'next/head'
import Link from 'next/link'

import { PostPreview } from '~/components/post-preview'
import { Post } from '~/types/post'

interface HomeProps {
  posts: Post[]
}

export default function Home(props: HomeProps) {
  const { posts } = props

  const somePosts = posts.slice(0, 3)

  return (
    <>
      <Head>
        <title>Nextjs + TS + ContentLayer</title>
      </Head>
      <h1>Nextjs + TS + ContentLayer - Starter Blog</h1>
      <div style={{ marginTop: '25px' }}>
        <h2>
          Latest posts: <Link href="/blog">see all</Link>
        </h2>
        <PostPreview posts={somePosts} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = allBlogs.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return {
    props: {
      posts,
    },
  }
}
