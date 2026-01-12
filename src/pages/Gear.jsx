import React from 'react';
import { motion } from 'framer-motion';
import GearCard from '@/components/GearCard';

const gearData = {
  cameras: [
    {
      name: 'Canon EOS R10',
      type: 'Primary Camera',
      description: 'My main workhorse. The APS-C mirrorless body that handles everything from fast automotive shoots to detailed urban photography.',
      specs: ['24.2MP', 'APS-C Sensor', '4K 60fps', '23fps Burst'],
    },
    {
      name: 'Canon EOS Rebel T1i',
      type: 'Backup Camera',
      description: 'Where it all started. This classic DSLR taught me the fundamentals and still comes in handy for specific situations.',
      specs: ['15.1MP', 'APS-C Sensor', '1080p Video'],
    },
    {
      name: 'DJI Mini 3',
      type: 'Drone',
      description: 'For aerial perspectives and capturing scenes from above. Lightweight and perfect for travel and outdoor shoots.',
      specs: ['4K HDR', '48MP Photos', '38min Flight', '<249g'],
    },
  ],
  lenses: [
    {
      name: 'Sigma 17-70mm f/2.8-4 DC Macro OS HSM',
      type: 'Primary Lens',
      description: 'My go-to lens for most situations. The versatile zoom range and fast aperture make it incredibly flexible for automotive and low-light work.',
      specs: ['f/2.8-4', '17-70mm', 'OS Stabilization', 'HSM Motor'],
    },
    {
      name: 'Canon RF 50-200mm f/4.5-7.1 IS STM',
      type: 'Telephoto Zoom',
      description: 'Compact telephoto for reaching distant subjects. Great for car shows and compressed perspective shots.',
      specs: ['f/4.5-7.1', '50-200mm', 'IS Stabilization', 'STM Motor'],
    },
    {
      name: 'Canon RF 18-45mm f/4.5-6.3 IS STM',
      type: 'Kit Lens',
      description: 'Ultra-compact wide-angle option. Perfect for everyday carry when I want to travel light.',
      specs: ['f/4.5-6.3', '18-45mm', 'IS Stabilization', 'Compact'],
    },
    {
      name: 'Canon EF-S 55-250mm f/4-5.6 IS STM',
      type: 'Legacy Telephoto',
      description: 'Telephoto reach for the T1i system. Still produces great results for wildlife and distant subjects.',
      specs: ['f/4-5.6', '55-250mm', 'IS Stabilization', 'EF-S Mount'],
    },
    {
      name: 'Canon EF-S 18-55mm f/3.5-5.6 IS STM',
      type: 'Legacy Kit Lens',
      description: 'The classic kit lens that helped me learn photography. Reliable and versatile for general use.',
      specs: ['f/3.5-5.6', '18-55mm', 'IS Stabilization', 'EF-S Mount'],
    },
  ],
};

export default function Gear() {
  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs text-white/40 uppercase tracking-widest mb-4">Equipment</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4">
            <span className="text-white">My</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Gear</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            The tools I use to capture moments. From cameras to lenses, here's what's in my bag.
          </p>
        </motion.div>

        {/* Cameras & Drone Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
            <h2 className="text-lg font-medium text-white/80">Cameras & Drone</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-purple-500/50 to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gearData.cameras.map((item, index) => (
              <GearCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Lenses Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
            <h2 className="text-lg font-medium text-white/80">Lenses</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-pink-500/50 to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gearData.lenses.map((item, index) => (
              <GearCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Setup Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 backdrop-blur-sm p-8 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-2xl opacity-50" />
            <div className="relative z-10">
              <h3 className="text-xl font-light text-white mb-3">Current Favorite Setup</h3>
              <p className="text-white/60 text-lg">
                Canon R10 + Sigma 17-70mm f/2.8-4
              </p>
              <p className="text-white/40 text-sm mt-2">
                The perfect combination for automotive and low-light photography
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}