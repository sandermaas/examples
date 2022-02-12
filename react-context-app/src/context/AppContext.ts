import { createContext, useContext } from 'react'

export interface IAppContext {
  query: string,
  setQuery: (query: string) => void
}

// The inital value of the context is null
// it will be added to <AppProvider> as a value prop
const AppContext = createContext<IAppContext | null>(null)

export const AppProvider = AppContext.Provider
export const AppConsumer = AppContext.Consumer

// Hook for accessing the context value
export const useAppContext = () => {
  // No need to export AppContext if it is already included in the hook
  const appContext = useContext(AppContext)

  // Throw an error to warn other developers they can't use it outside an <AppProvider>
  if (!appContext) {
    throw new Error('You can only use the useAppContext hook inside an AppProvider component')
  }

  return appContext
}
