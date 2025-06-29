'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Award, Users, Globe } from 'lucide-react';
import Link from 'next/link';
import { ThreeScene } from './three-scene';

const stats = [
  { icon: Award, value: '24+', label: 'Years Experience' },
  { icon: Users, value: '50M+', label: 'Garments Produced' },
  { icon: Globe, value: '100+', label: 'Global Clients' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
  },
};

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      {/* Background with Three.js Scene */}
      <div className="absolute inset-0 z-0 opacity-80">
        <ThreeScene />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8 lg:space-y-10">
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.9] tracking-tight"
                  variants={itemVariants}
                >
                  Premium
                  <motion.span 
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 mt-2"
                    initial={{ backgroundPosition: '0% 50%' }}
                    animate={{ backgroundPosition: '100% 50%' }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                  >
                    Garment
                  </motion.span>
                  <span className="block text-white">Manufacturing</span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed"
                  variants={itemVariants}
                >
                  Crafting exceptional apparel with innovative designs, 
                  sustainable practices, and uncompromising quality since 2001.
                </motion.p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                variants={itemVariants}
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link href="/product-gallery">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold shadow-2xl group border-0 w-full sm:w-auto"
                    >
                      Explore Products
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                </motion.div>
                
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm px-8 py-4 text-lg font-semibold w-full sm:w-auto transition-all duration-300"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Our Story
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Stats */}
            <motion.div 
              className="lg:justify-self-end w-full max-w-md lg:max-w-lg"
              variants={itemVariants}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-white/20 shadow-2xl">
                <div className="space-y-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.5 + index * 0.2,
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl lg:text-4xl font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="text-gray-300 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm"
          whileHover={{ scale: 1.1, borderColor: 'rgba(255, 255, 255, 0.8)' }}
        >
          <motion.div 
            className="w-1 h-3 bg-white/80 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-red-500 rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-blue-500 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-80 animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
}