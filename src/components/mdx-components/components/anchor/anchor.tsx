import * as React from 'react'

// eslint-disable-next-line react/display-name, @typescript-eslint/no-explicit-any
const Anchor = React.forwardRef((props: any, ref: any) => {
  const isNotExternal = props.href.startsWith('/')

  if (isNotExternal) {
    return <a ref={ref} />
  }

  return (
    <a
      ref={ref}
      target={isNotExternal ? undefined : '_blank'}
      rel={isNotExternal ? undefined : 'noopener noreferrer'}
      {...props}
    />
  )
})

export default Anchor
