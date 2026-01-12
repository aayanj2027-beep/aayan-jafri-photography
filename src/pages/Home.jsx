import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import ImageGallery from '@/components/ImageGallery';

const images = [
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/12f547859_IMG_7747-2.jpg', title: 'Porsche 911 Turbo S' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/4a62a2ccb_IMG_8328.jpg', title: 'Times Square Night' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/6c3450153_IMG_8500.jpg', title: 'Ferrari SF90' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/894a27876_IMG_7726-4.jpg', title: 'Porsche Details' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/cb673d1da_IMG_8362.jpg', title: 'Radio City Music Hall' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/697a74784_IMG_8388.jpg', title: 'Christmas Tree' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/c9dd6639d_IMG_8401-2.jpg', title: 'NYC Skyline' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/b33e27dad_IMG_7730-2.jpg', title: 'Porsche Wheel' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/d1a559fa3_IMG_8421.jpg', title: 'Brooklyn Bridge' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/c405666e9_IMG_8447.jpg', title: 'Wall Street Station' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/b964f34f1_IMG_8383.jpg', title: 'Light Trails' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/b28b14c07_IMG_8462-2.jpg', title: 'Gas Station Snow' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/58e9171a8_IMG_8471-2.jpg', title: 'Winter Snowflake' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/c36f228fd_IMG_8480.jpg', title: 'Street Signs' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/1f01dbfc5_IMG_8497.jpg', title: 'Ferrari Wheel' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/c5aa1955d_IMG_8503.jpg', title: 'Ferrari Side' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/6d6bcae97_IMG_8505.jpg', title: 'Ferrari Interior' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/d65084859_IMG_8506.jpg', title: 'SF90 Headlight' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/3ee8e0279_IMG_8516-2.jpg', title: 'Ferrari Badge' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/97d70b577_IMG_8517.jpg', title: 'White Ferrari' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/0fb339d1f_IMG_8384.jpg', title: 'Ferrari Seat' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/f7496d3bf_IMG_7681.jpg', title: 'Horse Portrait' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/bd0ceb6a5_IMG_7727Edited.jpg', title: 'Porsche at Coast' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/a574cff17_IMG_7742-3.jpg', title: 'Porsche Interior' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/93a662a4c_IMG_7854.jpg', title: 'Porsche Wheel Detail' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/536badf93_IMG_79422.jpg', title: 'Porsche Chronograph' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/a654442f4_IMG_8117-5.jpg', title: 'Vintage Wheel' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/fdd8f3c4f_IMG_8122-5.jpg', title: 'Big Sur Coast' },
  { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964ad65b4b6031b39646456/2a7aa96fe_IMG_8329.jpg', title: 'Waterfall Creek' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
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