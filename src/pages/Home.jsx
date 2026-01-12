import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import ImageGallery from '@/components/ImageGallery';

const images = [
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/a58ab9d56_IMG_7747-2.jpg', title: 'Porsche 911 Turbo S' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/cee7ae1a9_IMG_8328.jpg', title: 'Times Square Night' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/b5399a7b4_IMG_8500-2.jpg', title: 'Ferrari SF90' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/97e379943_IMG_7726.jpg', title: 'Porsche Details' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/bf3ad8c3a_IMG_8362.jpg', title: 'Radio City Music Hall' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/11b991483_IMG_8388.jpg', title: 'Christmas Tree' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/3e3482f73_IMG_8401-2.jpg', title: 'NYC Skyline' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/eb66bd54a_IMG_7744.jpg', title: 'Porsche Wheel' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/df4bf2e55_IMG_8418.jpg', title: 'Brooklyn Bridge' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/b45067f73_IMG_8447.jpg', title: 'Wall Street Station' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/ec026418b_IMG_8383.jpg', title: 'Light Trails' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/360a7dea8_IMG_8462.jpg', title: 'Gas Station Snow' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/6969231fd_IMG_8471-2.jpg', title: 'Winter Snowflake' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/569c5f268_IMG_8480.jpg', title: 'Street Signs' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/0a5baf36a_IMG_8497-2.jpg', title: 'Ferrari Wheel' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/8cc147676_IMG_8503.jpg', title: 'Ferrari Side' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/7981eacad_IMG_8505.jpg', title: 'Ferrari Interior' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/053df8b46_IMG_8506.jpg', title: 'SF90 Headlight' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/267469923_IMG_8516-2.jpg', title: 'Ferrari Badge' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/84eb27faf_IMG_8517.jpg', title: 'White Ferrari' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/d282c11ce_IMG_8384.jpg', title: 'Ferrari Seat' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/b5399a7b4_IMG_8500-2.jpg"
            alt="Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-white/70">Hobbyist Photographer</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-extralight tracking-tight mb-6"
          >
            <span className="text-white">AAYAN</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
              JAFRI
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/50 font-light max-w-xl mx-auto mb-12"
          >
            Capturing moments through the lens. Automotive, urban, and everything in between.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/40 uppercase tracking-widest">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5 text-white/40" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="text-xs text-white/40 uppercase tracking-widest">Portfolio</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-center">
              <span className="text-white">Selected</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Works</span>
            </h2>
          </motion.div>

          <ImageGallery images={images} />
        </div>
      </section>
    </div>
  );
}