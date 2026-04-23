export function scrollToHashWithOffset(hash: string) {
  if (!hash) return

  const doScroll = () => {
    const element = document.querySelector(hash)
    if (!element) return

    const nav = document.querySelector("nav.sticky") as HTMLElement | null
    const navHeight = nav?.offsetHeight ?? 0

    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const targetY = rect.top + scrollTop - navHeight // kleiner zusätzlicher Abstand

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    })
  }

  // Einmaliger Scroll nach kurzer Verzögerung,
  // damit Layout/Bilder/Animationen initial Zeit haben
  setTimeout(doScroll, 250)
}

