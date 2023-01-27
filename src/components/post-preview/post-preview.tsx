import * as React from 'react'
import Link from 'next/link'

import { PostPreviewProps } from '~/typings/components/post-preview'

export default function PostPreview(props: PostPreviewProps) {
  const { posts } = props

  return (
    <>
      {posts.map(post => {
        return (
          <Link href={`/blog/${post.slug}`} key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.date}</p>
            <p>{post.description}</p>
          </Link>
        )
      })}
    </>
  )
}
