import React, { useEffect, useMemo, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import BrandsStrip from './components/BrandsStrip'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  const [theme, setTheme] = useState('light')
  const themeRef = useRef('light')
  const activeTransition = useRef(null)

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    themeRef.current = theme
  }, [theme])

  const toggleTheme = (e) => {
    // Determine the NEXT theme based on the current REF, not state,
    // to handle rapid clicks before state updates.
    const nextTheme = themeRef.current === 'light' ? 'dark' : 'light'
    themeRef.current = nextTheme

    if (prefersReducedMotion || !document.startViewTransition) {
      setTheme(nextTheme)
      return
    }

    // Skip the previous transition if it's still running
    if (activeTransition.current) {
      activeTransition.current.skipTransition()
    }

    const x = e?.clientX ?? window.innerWidth - 40
    const y = e?.clientY ?? 40
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme)
    })

    activeTransition.current = transition

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 10000,
          easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })

    transition.finished.then(() => {
      if (activeTransition.current === transition) {
        activeTransition.current = null
      }
    })
  }

  return (
    <div className="min-h-screen bg-surface-light text-slate-900 transition-colors duration-500 dark:bg-surface-dark dark:text-slate-100">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="pb-24">
        <Hero />
        <Services />
        <BrandsStrip />
        <CallToAction />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App