import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Graphics Designing',
    description:
      'Logo creation, brand identity systems, and visual strategy aligned with your core values.',
    points: ['Logo & Branding', 'Marketing Collateral'],
    iconBg: 'bg-emerald-100 dark:bg-emerald-500/15',
  },
  {
    title: 'Digital Marketing',
    description:
      'Data-driven campaigns across Facebook and Google to maximize reach and ROI.',
    points: ['Paid Ads Strategy', 'Social Media Strategy'],
    iconBg: 'bg-sky-100 dark:bg-sky-500/15',
  },
  {
    title: 'Web & App Dev',
    description:
      'Responsive experiences optimized for performance-first mobile and web.',
    points: ['E-commerce Platforms', 'Custom Web Apps'],
    iconBg: 'bg-indigo-100 dark:bg-indigo-500/15',
  },
  {
    title: 'Custom Stamping',
    description:
      'Bespoke physical stamping and embossing services for premium brands.',
    points: ['Corporate Seals', 'Business Stationery'],
    iconBg: 'bg-amber-100 dark:bg-amber-500/15',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.08 * index,
      ease: [0.22, 0.61, 0.36, 1],
    },
  }),
}

const Services = () => {
  return (
    <section id="services" className="mt-8 flex justify-center px-6 md:mt-12 md:px-4 scroll-mt-32">
      <div className="w-full max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-300">
            Comprehensive digital solutions engineered to scale your business and engage your audience effectively.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-100/80 bg-white/95 p-7 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-900/10 dark:border-slate-800/80 dark:bg-slate-900/80 dark:shadow-black/40 dark:hover:border-slate-700"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={index}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:opacity-60 dark:group-hover:opacity-80 [background:radial-gradient(600px_circle_at_0%_0%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(700px_circle_at_100%_100%,rgba(16,185,129,0.16),transparent_55%)]" />
              <div className="relative flex items-center justify-between gap-2">
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${service.iconBg}`}>
                  <span className="text-lg font-semibold text-slate-800 dark:text-white">
                    {service.title.charAt(0)}
                  </span>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300 dark:text-slate-500">
                  0{index + 1}
                </span>
              </div>
              <h3 className="relative mt-5 text-base font-semibold text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
              <ul className="relative mt-4 space-y-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-[6px] w-[6px] rounded-full bg-emerald-400/70 group-hover:bg-emerald-400 dark:bg-emerald-400/60" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />
              <button className="relative mt-4 inline-flex items-center text-xs font-semibold text-emerald-600 transition group-hover:translate-x-0.5 group-hover:text-emerald-500 dark:text-emerald-300 dark:group-hover:text-emerald-200">
                Learn more
                <span className="ml-1 text-[11px]">→</span>
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

