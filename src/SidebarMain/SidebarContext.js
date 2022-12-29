import { createContext, useContext } from 'react'

export const SideBarMainContext = createContext()

export const useSidebarMainContext = () => useContext(SideBarMainContext)
