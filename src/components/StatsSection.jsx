import React from 'react'
import { motion, animate } from 'framer-motion'
import { HiStar } from 'react-icons/hi'

const Counter = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = React.useState("0");
  const nodeRef = React.useRef(null);
  const isInView = React.useRef(false);

  // Parse value to get numeric part and suffix
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  const isDecimal = value.includes('.');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView.current) {
          isInView.current = true;
          const controls = animate(0, numericPart, {
            duration: duration,
            onUpdate: (latest) => {
              setDisplayValue(
                isDecimal 
                  ? latest.toFixed(2) 
                  : Math.floor(latest).toLocaleString()
              );
            },
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [numericPart, duration, isDecimal]);

  return <span ref={nodeRef}>{displayValue}{suffix}</span>;
};

const stats = [
  {
    label: 'Products Offered',
    value: '1+',
    delay: 0.1,
  },
  {
    label: 'Services Offered',
    value: '1+',
    delay: 0.2,
  },
  {
    label: 'Customer Reviews',
    value: '4.80',
    subValue: '297 Reviews',
    icon: <HiStar className="text-amber-400" />,
    delay: 0.3,
  },
  {
    label: 'Happy Customers',
    value: '9000+',
    delay: 0.4,
  },
]

const StatsSection = () => {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Trusted by our customers
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Proven Success in Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group p-8 rounded-[2.5rem] bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-xl hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-black bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                    <Counter value={stat.value} />
                  </span>
                  {stat.icon && <span className="text-3xl">{stat.icon}</span>}
                </div>
                <span className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {stat.label}
                </span>
                {stat.subValue && (
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {stat.subValue}
                  </span>
                )}
              </div>

              {/* Decorative accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800 group-hover:bg-emerald-500 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
