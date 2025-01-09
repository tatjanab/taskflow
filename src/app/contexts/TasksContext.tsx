import { createContext, useContext, ReactNode } from 'react'

const TasksContext = createContext({})

export function TasksContextProvider({ children }: { children: ReactNode }) {
  return <TasksContext.Provider value={{}}>{children}</TasksContext.Provider>
}
