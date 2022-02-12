import { createElement, PropsWithChildren, ReactElement } from 'react'

const getClassName = (variant: 1 | 2 | 3 | 4 | 5 | 6) => {
  switch (variant) {
    case 1:
      return 'text-5xl'
    case 2:
      return 'text-4xl'
    case 3:
      return 'text-3xl'
    case 4:
      return 'text-2xl'
    case 5:
      return 'text-xl'
    default:
      return 'text-lg'
  }
}

interface HeadingProps {
  variant: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading = ({ children, variant }: PropsWithChildren<HeadingProps>): ReactElement => {
  return createElement(`h${variant}`, { className: getClassName(variant) }, children)
}

export default Heading
