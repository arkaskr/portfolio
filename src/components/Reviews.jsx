import React from 'react'
import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'

const reviews = [
  {
    name: 'Chandana S.',
    role: 'Sajher Alo Branding',
    review: 'Needed a custom stamp urgently. Ujaan delivered! Quick turnaround, good quality, and fairly priced. Conveniently located near Barasat Station.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Animesh+Das&background=random',
  },
  {
    name: 'Saint D.',
    role: 'Local Business Owner',
    review: 'Needed a custom stamp quickly and Ujaan delivered! The quality is superb, the impression is crisp, and the service was fast. Definitely worth visiting if youre in Barasat.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Priya+Mukherjee&background=random',
  },
  {
    name: 'To Krisan G.',
    role: 'Creative Director',
    review: 'Needed a custom stamp quickly. This place delivered! Quality is solid and the service was quick. Very convenient location near Barasat station.Happy with the purchase.',
    rating: 4,
    image: 'https://ui-avatars.com/api/?name=Rahul+Sen&background=random',
  },
  {
    name: 'Siddarth B.',
    role: 'Sajher Alo Branding',
    review: 'Needed a custom stamp urgently. Ujaan delivered a crisp, durable product quickly. The service was helpful and the pricing felt fair for the quality. Solid choice near Barasat Station.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Animesh+Das&background=random',
  },
  {
    name: 'Sujit B.',
    role: 'Local Business Owner',
    review: 'Needed a custom stamp quickly. This place delivered! Fast, friendly service and the stamp quality is just what I wanted. Perfect for my small business needs. Conveniently located near the station too.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Priya+Mukherjee&background=random',
  },
  {
    name: 'Biswajit K.',
    role: 'Creative Director',
    review: 'Needed a custom stamp quickly. Ujaans shop had a good selection & provided fast, friendly service. The finished stamp is clear & precise. Very satisfied with the quality and speed!',
    rating: 4,
    image: 'https://ui-avatars.com/api/?name=Rahul+Sen&background=random',
  },
  {
    name: 'Suprio K.',
    role: 'Sajher Alo Branding',
    review: "Ujaan's stamps are precisely crafted! Needed a custom stamp quickly & they delivered. Appreciate the attention to detail & fast turnaround time. Located conveniently near the station too.",
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Animesh+Das&background=random',
  },
  {
    name: 'Rashikul I.',
    role: 'Local Business Owner',
    review: 'Needed a custom stamp quickly. They were efficient and the stamp quality is really impressive. The detail is sharp and clear. Very satisfied with their service and the product.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Priya+Mukherjee&background=random',
  },
  {
    name: 'Katha',
    role: 'Creative Director',
    review: 'Quick, precise rubber stamps! The quality is solid, and Ujaan understood exactly what I needed. Convenient location near Barasat Station makes it super easy to swing by.',
    rating: 4,
    image: 'https://ui-avatars.com/api/?name=Rahul+Sen&background=random',
  },
  {
    name: 'Sourav P.',
    role: 'Creative Director',
    review: 'Crafted a quality stamp exactly to my specifications. Quick turnaround & fair pricing at this Barasat location. Very satisfied! Definitely worth checking out for your stamping needs.',
    rating: 4,
    image: 'https://ui-avatars.com/api/?name=Rahul+Sen&background=random',
  },
]

const Reviews = () => {
  // Split reviews into two rows for the marquee
  const row1 = reviews.slice(0, Math.ceil(reviews.length / 2));
  const row2 = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <section id="reviews" className=" bg-surface-light dark:bg-surface-dark overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 inline-block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Trusted by Hundreds
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience with Ujaan.
          </p>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-8">
        {/* Row 1: Moving Right to Left */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group/marquee1">
          <motion.div 
            className="flex gap-8 py-4 pr-8"
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            whileHover={{ transition: { duration: 1000 } }} // Hack to slow it down nearly to a stop
            style={{ width: "max-content" }}
          >
            {[...row1, ...row1, ...row1].map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Left to Right */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group/marquee2">
          <motion.div 
            className="flex gap-8 py-4 pr-8"
            animate={{ x: [-1920, 0] }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear"
            }}
            whileHover={{ transition: { duration: 1000 } }}
            style={{ width: "max-content" }}
          >
            {[...row2, ...row2, ...row2].map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const ReviewCard = ({ review }) => (
  <div className="flex-shrink-0 w-[350px] p-8 rounded-[2rem] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20 hover:border-emerald-500/30 transition-colors group">
    <div className="flex items-center gap-4 mb-6">
      <img 
        src={review.image} 
        alt={review.name} 
        className="w-12 h-12 rounded-full border-2 border-emerald-500/20"
      />
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white text-sm">
          {review.name}
        </h4>
        <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
          {review.role}
        </p>
      </div>
    </div>

    <div className="flex gap-1 mb-4 text-emerald-500 text-xs">
      {[...Array(5)].map((_, i) => (
        <HiStar key={i} className={i < review.rating ? 'opacity-100' : 'opacity-20'} />
      ))}
    </div>

    <p className="text-slate-600 dark:text-slate-300 text-xs italic leading-relaxed">
      "{review.review}"
    </p>
  </div>
);

export default Reviews
