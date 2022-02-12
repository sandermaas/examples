import { MouseEventHandler, ReactElement } from 'react'

interface ButtonProps {
  text: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ text, onClick }: ButtonProps): ReactElement => {
  return (
    <button
      className="border border-black px-4 py-1 hover:cursor-pointer"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
