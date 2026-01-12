import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';

export default function About() {
  const skills = [
    'Portrait Photography',
    'Nature & Wildlife',
    'Automotive Photography',
    'Street Photography',
    'Golden Hour Chasing',
    'Photo Editing',
  ];

  const stats = [
    { label: 'Age', value: '16' },
    { label: 'Years Shooting', value: '3+' },
    { label: 'Photos Taken', value: '10K+' },
  ];

  return (
    <div className="min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block text-xs text-white/40 uppercase tracking-widest">About Me</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Aayan Jafri
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-white/60 mb-12"
        >
          16 y/o • Hobbyist
        </motion.p>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4 text-white/70 leading-relaxed mb-12 max-w-3xl"
        >
          <p>
            Hey! I'm Aayan, a 16-year-old photographer who fell in love with capturing the world through a lens. What started as a hobby has 
            grown into a passion that I'm now pursuing as a photographer.
          </p>
          <p>
            I specialize in landscapes and nature photography, but I love experimenting with different styles. Whether I'm chasing golden hour 
            light, flying my drone for epic aerials, or just exploring my neighborhood with my camera, I'm always looking for that perfect shot.
          </p>
        </motion.div>

        {/* Skills/Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
              className="px-4 py-2 rounded-full bg-orange-950/40 border border-orange-500/30 text-orange-300 text-sm"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 mb-16"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
          <a
            href="mailto:aayanjafri73@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/20 via-gray-900/20 to-slate-800/20 backdrop-blur-sm p-8 mb-16"
        >
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* My Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl drop-shadow-lg">📅</span>
            <h2 className="text-2xl font-bold text-white">My Journey</h2>
          </div>

          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              My photography journey began with a Canon T1i, learning the fundamentals of exposure, composition, and lighting. 
              As I grew more passionate, I upgraded to the Canon R10 with professional lenses.
            </p>
            <p>
              Along the way, I discovered my love for automotive photography, urban landscapes, and aerial shots. Each genre 
              taught me something new about storytelling through images.
            </p>
            <p>
              Today, I continue to push my creative boundaries with every shoot, always searching for unique perspectives 
              and moments that tell compelling visual stories.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}