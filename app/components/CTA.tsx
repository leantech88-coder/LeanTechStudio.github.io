'use client'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="bg-indigo-600 text-white py-20 text-center px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-6"
      >
        准备好了吗？
      </motion.h2>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg shadow-lg"
      >
        立即注册
      </motion.button>
    </section>
  )
}
