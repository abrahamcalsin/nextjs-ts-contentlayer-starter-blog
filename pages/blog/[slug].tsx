import { allBlogs } from 'contentlayer/generated'
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'

import { PostBody } from '~/components/post-body'
import { Post as PostTypes } from '~/types/post'

interface PostProps {
  post: PostTypes
}

const Post = (props: PostProps) => {
  const { post } = props

  const router = useRouter()

  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      {router.isFallback ? <p>Loading</p> : <PostBody title={post.title} date={post.date} content={post.body.code} />}
    </>
  )
}

export default Post

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = allBlogs.map(post => {
    return {
      params: { slug: post.slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

type ParamsProps = {
  slug: string
}

export async function getStaticProps(
  context: GetStaticPropsContext<ParamsProps>,
): Promise<GetStaticPropsResult<PostProps>> {
  const { params } = context

  const post = allBlogs.find(post => {
    return post.slug === params?.slug
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 10,
  }
}
