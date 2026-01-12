'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        打造你的完美产品体验
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl mb-8"
      >
        快速上线，吸引更多用户
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-lg"
      >
        立即体验
      </motion.button>
    </section>
  )
}
