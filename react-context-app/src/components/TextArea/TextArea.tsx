import { ReactElement } from 'react'

interface TextAreaProps {
  rows?: number
  value: string
  onChange: (value: string) => void
}

const TextArea = ({ rows, value, onChange }: TextAreaProps): ReactElement => {
  return (
    <textarea
      className="border resize-none w-full"
      rows={rows}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}

export default TextArea
