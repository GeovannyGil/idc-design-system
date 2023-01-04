import React, { useEffect } from 'react'

export const useLockScroll = (lockScroll) => {
  useEffect(() => {
    if (lockScroll) {
      document.body.classList.add('lock-body-scroll')
    } else {
      document.body.classList.remove('lock-body-scroll')
    }
  }, [lockScroll])
  return (
    <div>useLockScroll</div>
  )
}
