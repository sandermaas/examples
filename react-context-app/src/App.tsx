import { ReactElement, useState } from 'react'

import { AppProvider, IAppContext } from 'context/AppContext'

import { Center } from 'components/Center'
import { Heading } from 'components/Heading'
import { TextQuery, TextSummary } from 'features'

const App = (): ReactElement => {
  const [textQuery, setTextQuery] = useState<string>('')

  const appProviderValue: IAppContext = {
    query: textQuery,
    setQuery: setTextQuery
  }

  return (
    <AppProvider value={appProviderValue}>
      <Center className="flex flex-col gap-8" max="40rem">
        <Heading variant={2}>React Context App</Heading>
        <TextQuery />
        <TextSummary />
      </Center>
    </AppProvider>
  )
}

export default App
