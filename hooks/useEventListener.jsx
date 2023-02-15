import { useEffect } from 'react'

export default function useEventListener(eventType, handler) {
  useEffect(() => {
    window.addEventListener(eventType, handler)
    return () => {
      window.removeEventListener(eventType, handler)
    }
  }, [eventType, handler])
}
