import { createContext, useContext } from 'react'

export interface IAppContext {
  query: string,
  setQuery: (query: string) => void
}

const AppContext = createContext<IAppContext | null>(null)

export const AppProvider = AppContext.Provider
export const AppConsumer = AppContext.Consumer

export const useAppContext = () => {
  const appContext = useContext(AppContext)

  if (!appContext) {
    throw new Error('You can only use the useAppContext inside an AppProvider component')
  }

  return appContext
}
