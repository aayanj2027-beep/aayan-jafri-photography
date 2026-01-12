import React from 'react';
import { motion } from 'framer-motion';

const cameras = [
  {
    name: 'Canon EOS R10',
    badge: 'PRIMARY BODY',
    subtitle: '24.2MP APS-C Mirrorless',
    isPrimary: true,
  },
  {
    name: 'Canon EOS Rebel T1i',
    badge: 'BACKUP BODY',
    subtitle: '15.1MP APS-C DSLR',
    isPrimary: false,
  },
];

const lenses = [
  {
    name: 'Sigma 17-40mm f/1.8 DC DN Art',
    badge: 'PRIMARY LENS',
    tags: ['RF Mount', 'Everyday, Low Light, Landscapes'],
    isPrimary: true,
  },
  {
    name: 'Canon RF 50-200mm f/4.5-6.3 IS STM',
    badge: 'TELEPHOTO ZOOM',
    tags: ['RF Mount', 'Wildlife, Sports, Portraits'],
  },
  {
    name: 'Canon RF 18-45mm f/4.5-6.3 IS STM',
    badge: 'KIT ZOOM',
    tags: ['RF Mount', 'Travel, General Purpose'],
  },
  {
    name: 'Canon EF-S 55-250mm f/4-5.6 IS STM',
    badge: 'TELEPHOTO ZOOM',
    tags: ['EF-S Mount', 'Wildlife, Sports'],
  },
  {
    name: 'Canon EF-S 18-55mm f/3.5-5.6 IS STM',
    badge: 'KIT ZOOM',
    tags: ['EF-S Mount', 'General Purpose'],
  },
];

export default function Gear() {
  return (
    <div className="min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Camera Bodies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
              <span className="text-2xl">📷</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Camera Bodies</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {cameras.map((camera, index) => (
              <motion.div
                key={camera.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    camera.isPrimary 
                      ? 'bg-gradient-to-br from-pink-950/60 to-pink-900/40 border border-pink-500/30' 
                      : 'bg-white/5 border border-white/10'
                  }`}>
                    <span className="text-2xl">📷</span>
                  </div>
                  <div className="flex-1">
                    {camera.isPrimary && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-pink-400 font-semibold uppercase tracking-wider">
                          {camera.badge}
                        </span>
                        <span className="text-yellow-400">⭐</span>
                      </div>
                    )}
                    {!camera.isPrimary && (
                      <span className="inline-block text-xs text-white/40 font-semibold uppercase tracking-wider mb-2">
                        {camera.badge}
                      </span>
                    )}
                    <h3 className="text-lg font-semibold text-white mb-1">{camera.name}</h3>
                    <p className="text-sm text-white/60">{camera.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lenses Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Lenses</h2>
          </div>

          <div className="space-y-4">
            {lenses.map((lens, index) => (
              <motion.div
                key={lens.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    lens.isPrimary 
                      ? 'bg-gradient-to-br from-pink-950/60 to-pink-900/40 border border-pink-500/30' 
                      : 'bg-white/5 border border-white/10'
                  }`}>
                    <span className="text-2xl">🔍</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className={`text-xs font-semibold uppercase tracking-wider ${
                        lens.isPrimary ? 'text-pink-400' : 'text-cyan-400'
                      }`}>
                        {lens.badge}
                      </span>
                      {lens.isPrimary && (
                        <span className="px-2 py-0.5 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs font-medium">
                          PRIMARY
                        </span>
                      )}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-white mb-3">{lens.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {lens.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/60 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}