import * as React from 'react'

import { DateFormat } from '~/components/date-format'
import { MdxComponents } from '~/components/mdx-components'
import { Post } from '~/types/post'
import { dateFormat } from '~/utils/date-format'

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
          <DateFormat date={date} dateFormat={dateFormat.USA} locale="en" />
        </p>
      </header>
      <main>
        <MdxComponents rawContent={content} />
      </main>
    </article>
  )
}
