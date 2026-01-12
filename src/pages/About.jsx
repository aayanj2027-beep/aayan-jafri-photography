import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';

export default function About() {
  const skills = [
    'Portrait Photography',
    'Nature & Wildlife',
    'Automotive Photography',
    'Street Photography',
    'Astrophotography',
    'Photo Editing',
  ];

  const stats = [
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
          <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Aayan Jafri
          </span>
        </motion.h1>



        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4 text-white/70 leading-relaxed mb-12 max-w-3xl"
        >
          <p>
            Hey, I'm Aayan. I'm a 16-year-old photographer with a passion for capturing the world and editing shots to my own specific style. What started as just a hobby has definitely turned into something much bigger that I'm now pursuing seriously.
          </p>
          <p>
            I mostly focus on portraits, but I love experimenting with different styles. My interest in cars has also naturally moved into my photography—some of my favorite shots are automotive. People sometimes joke about me taking pictures of 'random' things, but I've found that those usually end up being the best shots.
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
              className="px-4 py-2 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 text-sm"
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
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">
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
            <h2 className="text-2xl font-bold text-white">My Journey</h2>
          </div>

          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              My photography journey actually started with a hand-me-down Canon T1i and a couple of kit lenses. I learned all the basics on that camera, but after three years, I felt like the gear was finally starting to limit what I could do and the results I wanted. I eventually upgraded to a Canon R10 with a much better Sigma lens.
            </p>
            <p>
              With this setup being much more "raw," I discovered how much I love the editing process in Lightroom. I can spend hours tweaking every little dial and button until I like what I see. Today, I'm still exploring new perspectives, and my latest interest is diving into astrophotography.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}