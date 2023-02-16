import { useEffect } from 'react'

export default function useEventListener(eventType, eventFunc) {
  useEffect(() => {
    window.addEventListener(eventType, eventFunc)
    return () => {
      window.removeEventListener(eventType, eventFunc)
    }
  }, [])
}
