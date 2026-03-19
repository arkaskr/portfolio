import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { motion } from 'framer-motion'

const CallToAction = () => {
  return (
    <section id="contact" className="mt-12 -mb-12 flex justify-center px-6 md:mt-20 sm:mx-[23rem] md:px-4 scroll-mt-32">
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-800/40 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12 text-center shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-sm md:px-12 md:py-16">
          <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(1200px_circle_at_50%_-200px,rgba(56,189,248,0.18),transparent_55%),radial-gradient(900px_circle_at_0%_100%,rgba(16,185,129,0.14),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-40 [background:linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_35%,transparent_70%,rgba(255,255,255,0.03))]" />
          <h2 className="relative text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            Ready to transform your digital presence? Reach out to our team today for a free consultation.
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-xl shadow-black/20 transition hover:bg-slate-100 sm:w-auto">
              <HiOutlineMail className="h-4 w-4" />
              <span>Email Us</span>
            </button>
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-600 sm:w-auto">
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default CallToAction

