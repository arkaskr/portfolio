import React, { useState } from 'react'
import { motion } from 'framer-motion'

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = "Ujaan, a 13-year-old trusted Rubber Stamp Shop in Barasat, West Bengal, offers a wide range of services including Photo Lab, Printing, Offset Printing, Graphic Design, and Office Supplies.";
  const remainingText = " With a team of expert designers and printers, we deliver high-quality rubber stamps, prints, and designs that meet your unique needs. ️ From business logos to event invitations, our creative solutions will take your brand to the next level. Visit us today and experience the best in town!";
  return (
    <section id="hero" className="relative flex min-h-[75vh] items-center justify-center overflow-hidden px-6 pt-16 sm:pt-44 pb-12 md:px-4 sm:-mt-[8rem] lg:px-8">
      {/* --- Background Effects (Light/Dark Support) --- */}

      {/* Light Theme Background Elements */}
      <div className="pointer-events-none absolute inset-0 block dark:hidden">
        <div className="absolute top-0 right-0 h-full w-full bg-[radial-gradient(40%_50%_at_50%_-10%,rgba(20,184,166,0.08),transparent)]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-full bg-[linear-gradient(to_top,rgba(248,250,252,1),transparent)]" />
      </div>

      {/* Dark Theme Background Elements */}
      <div className="pointer-events-none absolute inset-0 hidden bg-[#050a14] dark:block">
        <div className="absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050a14_100%)] opacity-60" />
      </div>

      {/* --- Main Content --- */}
      <motion.div
        className="relative z-10 flex w-full max-w-7xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-12"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="flex-1 sm:ml-[8rem] text-center md:text-left">
          <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700 md:px-4 md:text-xs dark:bg-emerald-500/10 dark:text-emerald-300">
            Premium Digital Agency
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[1.15] tracking-tight text-slate-900 sm:text-5xl md:text-5xl dark:text-white">
            Ujjan
            <br />
            <span className="bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Rubber Stamp Store
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-slate-600 md:mx-0 md:text-base dark:text-slate-300">
            {isExpanded ? (
              <>
                {shortText}
                {remainingText}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="ml-2 inline-flex items-center font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
                >
                  Read Less
                </button>
              </>
            ) : (
              <>
                {shortText}
                <button
                  onClick={() => setIsExpanded(true)}
                  className="ml-2 inline-flex items-center font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
                >
                  Read More...
                </button>
              </>
            )}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <button 
              onClick={() => scrollToId('services')}
              className="w-full rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 transition hover:bg-slate-800 sm:w-auto dark:bg-white dark:text-slate-900 dark:shadow-white/10 dark:hover:bg-slate-100"
            >
              View Services
            </button>
            <button 
              onClick={() => scrollToId('contact')}
              className="w-full rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm shadow-slate-900/5 transition hover:border-slate-300 sm:w-auto dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:shadow-black/30 dark:hover:border-slate-500"
            >
              Contact Us
            </button>
          </div>
        </div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
        >
          {/* Right side illustration container */}
          <div className="relative mx-auto h-[320px] w-[320px] max-w-sm rounded-[40px] bg-gradient-to-br from-white/20 to-white/5 p-[1px] shadow-[0_40px_80px_rgba(15,23,42,0.15)] backdrop-blur-3xl dark:from-white/10 dark:to-transparent dark:shadow-[0_40px_90px_rgba(0,0,0,0.7)]">
            <div className="relative flex h-full w-full items-center justify-center rounded-[38px] bg-white/80 dark:bg-slate-950/80">
              <div className="absolute inset-8 rounded-[32px] border border-emerald-200/70 dark:border-emerald-500/40" />
              <div className="absolute inset-14 rounded-[28px] border border-emerald-100/60 dark:border-emerald-500/20" />
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-emerald-200/80 dark:border-emerald-500/60">
                <div className="absolute inset-[22%] border border-emerald-200/70 dark:border-emerald-500/50" />
                <span className="text-2xl font-bold tracking-widest text-emerald-500 dark:text-emerald-400">DC</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
