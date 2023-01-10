import { useRef, useId } from 'react'
// import { genId } from './genId'

export const useIdRef = (prefix, initialId) => {
  const idRef = useRef(initialId || `${prefix}-${useId()}`)

  return idRef.current
}
