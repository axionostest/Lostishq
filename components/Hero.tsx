\'use client\'
import { motion } from \'framer-motion\'
import { Play } from \'lucide-react\'
export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 via-transparent to-transparent blur-3xl" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">LOST ISHQ</h1>
        <p className="mt-4 text-xl text-neutral-400 max-w-xl mx-auto">Music for the lost hearts. Lo-fi stories, love and memories.</p>
        <a href="#tracks" className="inline-flex mt-8 bg-white text-black px-8 py-3 rounded-full font-medium min-h-[44px] items-center hover:bg-neutral-200 transition"><Play className="mr-2 h-4 w-4 fill-black"/> Listen Now</a>
      </motion.div>
    </section>
  )
}
