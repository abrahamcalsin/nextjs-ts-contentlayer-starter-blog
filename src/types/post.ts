import type { Blog } from 'contentlayer/generated'

type Post = Pick<Blog, '_id' | 'type' | '_raw' | 'title' | 'slug' | 'description' | 'coverImage' | 'date' | 'body'>

export type { Post }
