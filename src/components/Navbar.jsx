import React, { useState } from 'react'
import { PiMoonFill, PiSunFill, PiListBold, PiXBold } from 'react-icons/pi'
import { motion, AnimatePresence } from 'framer-motion'

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <header className="sticky top-6 z-50 flex justify-center px-4">
      <nav className="relative flex w-full max-w-7xl items-center justify-between rounded-full border border-slate-100 bg-white/80 px-4 py-2 shadow-lg shadow-slate-900/5 backdrop-blur-md md:px-6 md:py-3 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/40">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white shadow-md shadow-emerald-500/40 md:h-9 md:w-9 md:text-sm">
            U
          </div>
          <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
            Ujaan
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex dark:text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToId(link.id)}
              className="transition hover:text-slate-900 dark:hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <PiMoonFill className="h-4 w-4" /> : <PiSunFill className="h-4 w-4" />}
          </button>
          
          <button className="hidden rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-500/40 transition hover:bg-emerald-600 md:inline-flex">
            Get Started
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <PiXBold className="h-5 w-5" /> : <PiListBold className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-16 right-0 left-0 overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-6 shadow-2xl md:hidden dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => {
                      scrollToId(link.id)
                      setIsOpen(false)
                    }}
                    className="flex w-full items-center justify-center rounded-xl py-3 text-base font-medium text-slate-600 active:bg-slate-50 dark:text-slate-300 dark:active:bg-slate-800"
                  >
                    {link.label}
                  </button>
                ))}
                <button className="mt-2 rounded-full bg-emerald-500 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar

