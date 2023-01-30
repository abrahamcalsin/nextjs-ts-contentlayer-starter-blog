import * as React from 'react'
import Link from 'next/link'

import { DateFormat } from '~/components/date-format'
import { PostPreviewProps } from '~/typings/components/post-preview'

export default function PostPreview(props: PostPreviewProps) {
  const { posts } = props

  return (
    <>
      {posts.map(post => {
        return (
          <Link href={`/blog/${post.slug}`} key={post._id}>
            <h3 className="post-preview-title">{post.title}</h3>
            <p className="post-preview-date">
              <DateFormat date={post.date} dateFormat="MMMM D, YYYY" />
            </p>
            <div className="post-preview-cover-image">
              <img src={post.coverImage} alt={post.slug} />
            </div>
            <p className="post-preview-description">{post.description}</p>
          </Link>
        )
      })}
    </>
  )
}
