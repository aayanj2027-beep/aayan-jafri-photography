import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
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
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/40 border border-blue-500/30 backdrop-blur-sm mb-8"
            >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">16 y/o Photographer</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">From My </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Lens
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-white/60 max-w-2xl mx-auto mb-10"
          >
            Some of my best pictures
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/30"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <ImageGallery images={images} />
        </div>
      </section>
    </div>
  );
}