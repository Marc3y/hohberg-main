"use client"

import { useEffect } from "react"
import { scrollToHashWithOffset } from "./scroll-to-hash"

export function HashScrollHandler() {
  useEffect(() => {
    // Prüfe ob ein Hash in der URL ist (z.B. /#contact)
    const hash = window.location.hash
    
    if (hash) {
      scrollToHashWithOffset(hash)
    }
  }, [])

  return null
}
