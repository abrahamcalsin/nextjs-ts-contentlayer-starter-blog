import * as React from 'react'

export default function LinkedHeading({ as: Component = 'h2', ...props }: any) {
  return (
    <Component style={{ scrollMarginBlock: '30px', position: 'relative' }} {...props}>
      <span>{props.children}</span>
      {props.id && (
        <a aria-label="anchor" className="select-anchor" href={`#${props.id}`}>
          #
        </a>
      )}
    </Component>
  )
}
