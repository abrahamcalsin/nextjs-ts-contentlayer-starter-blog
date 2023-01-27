import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { MdxComponentsProps } from '~/typings/components/mdx-components'

import { Anchor } from './components/anchor'

export default function MdxComponents(props: MdxComponentsProps) {
  const { rawContent } = props

  const Component = useMDXComponent(rawContent)

  const components = React.useMemo(() => {
    return {
      a: Anchor as React.FunctionComponent,
    }
  }, [])

  return <Component components={components} />
}
