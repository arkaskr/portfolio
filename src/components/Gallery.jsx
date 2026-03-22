import React from 'react'
import { motion } from 'framer-motion'

const galleryItems = [
  {
    title: 'Custom Rubber Stamps',
    category: 'Product',
    image: '/assets/gallery/stamps.png',
  },
  {
    title: 'Brand Identity Design',
    category: 'Graphic Design',
    image: '/assets/gallery/design.png',
  },
  {
    title: 'High-Quality Printing',
    category: 'Services',
    image: '/assets/gallery/printing.png',
  },
]

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-surface-light dark:bg-surface-dark overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
              Our Creative Portfolio
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              A showcase of our finest work, from precision rubber stamps to bespoke brand identities.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-500">
              Scroll to explore
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden bg-slate-200 dark:bg-slate-800"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <div className="h-1 w-0 bg-emerald-500 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
