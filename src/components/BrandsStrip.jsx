import React from 'react'
import { motion } from 'framer-motion'

const brands = new Array(10).fill(null).map((_, i) => `Brand ${i + 1}`)

const BrandsStrip = () => {
  return (
    <section id="brands" className="mt-12 flex justify-center px-6 md:mt-20 md:px-4 scroll-mt-32">
      <div className="w-full max-w-7xl">
        <motion.p
          className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 md:text-left md:text-xs dark:text-slate-500"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          Trusted by innovative brands
        </motion.p>
        <motion.div
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              className="flex h-12 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-white/70 text-[10px] font-medium text-slate-400 shadow-sm shadow-slate-900/5 transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-500 dark:shadow-black/30 dark:hover:border-slate-700"
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.4, delay: i * 0.02, ease: [0.22, 0.61, 0.36, 1] },
                },
              }}
            >
              {brand}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BrandsStrip

