import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { MdxComponentsProps } from '~/typings/components/mdx-components'

import { Anchor } from './components/anchor'
import { LinkedHeading } from './components/linked-heading'

export default function MdxComponents(props: MdxComponentsProps) {
  const { rawContent } = props

  const Component = useMDXComponent(rawContent)

  const components = React.useMemo(() => {
    return {
      // Heading
      h1: (props: any) => <LinkedHeading as="h1" {...props} />,
      h2: (props: any) => <LinkedHeading as="h2" {...props} />,
      h3: (props: any) => <LinkedHeading as="h3" {...props} />,
      h4: (props: any) => <LinkedHeading as="h4" {...props} />,
      h5: (props: any) => <LinkedHeading as="h5" {...props} />,
      h6: (props: any) => <LinkedHeading as="h6" {...props} />,

      a: Anchor as React.FunctionComponent,
    }
  }, [])

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}
