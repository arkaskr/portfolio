import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { motion } from 'framer-motion'

const CallToAction = () => {
  return (
    <section id="contact" className="mt-12 -mb-12 flex justify-center px-6 md:mt-24 md:px-4 scroll-mt-32">
      <motion.div
        className="w-full max-w-7xl"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="relative overflow-hidden rounded-[3rem] border border-slate-800/40 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-1 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-sm">
          <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(1200px_circle_at_50%_-200px,rgba(56,189,248,0.18),transparent_55%),radial-gradient(900px_circle_at_0%_100%,rgba(16,185,129,0.14),transparent_55%)]" />
          
          <div className="relative flex flex-col md:flex-row items-stretch min-h-[450px]">
            {/* Left Content Column */}
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center text-center md:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6 w-fit mx-auto md:mx-0">
                Get in Touch
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
                Let&apos;s Build Something <br /> Great Together
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300 md:text-lg">
                Ready to transform your digital presence? Reach out to our team today for a free consultation at our Barasat store.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-xl shadow-black/20 transition hover:bg-slate-100">
                  <HiOutlineMail className="h-4 w-4" />
                  <span>Email Us</span>
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-600">
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Right Map Column */}
            <div className="flex-1 relative min-h-[300px] md:min-h-full">
              <div className="absolute inset-4 md:inset-8 rounded-[2rem] overflow-hidden border border-slate-700/50 transition-all duration-700">
                <iframe
                  title="Store Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?q=22.723679,88.484458&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default CallToAction

