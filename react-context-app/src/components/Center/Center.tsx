import { PropsWithChildren, ReactElement } from 'react'

interface CenterProps {
  className?: string
  max: string
}

const Center = ({ children, className, max }: PropsWithChildren<CenterProps>): ReactElement => {
  return (
    <div
      className={className}
      style={{
        boxSizing: 'content-box',
        marginInline: 'auto',
        maxInlineSize: max
      }}
    >
      {children}
    </div>
  )
}

export default Center
