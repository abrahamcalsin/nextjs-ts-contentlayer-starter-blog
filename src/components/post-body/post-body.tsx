import * as React from 'react'

import { MdxComponents } from '~/components/mdx-components'
import { Post } from '~/types/post'

interface PostBodyProps {
  title: Post['title']
  date: Post['date']
  content: string
}

export default function PostBody(props: PostBodyProps) {
  const { title, date, content } = props

  return (
    <article>
      <header style={{ marginBottom: '50px' }}>
        <h1 style={{ fontSize: '30px', marginBottom: '10px' }}>{title}</h1>
        <p>
          <span>Published: </span>
          <span>{date}</span>
        </p>
      </header>
      <main>
        <MdxComponents rawContent={content} />
      </main>
    </article>
  )
}
