import { ReactElement, useState } from 'react'

import { useAppContext } from 'context/AppContext'

import { Button } from 'components/Button'
import { Heading } from 'components/Heading'
import { TextArea } from 'components/TextArea'

const TextQuery = (): ReactElement => {
  const { setQuery } = useAppContext()

  const [textValue, setTextValue] = useState<string>('')

  return (
    <div>
      <Heading variant={4}>Insert your text here:</Heading>
      <div>
        <TextArea
          rows={10}
          value={textValue}
          onChange={(value: string) => setTextValue(value)}
        />
        <Button text="Query" onClick={() => setQuery(textValue)} />
      </div>
    </div>
  )
}

export default TextQuery
