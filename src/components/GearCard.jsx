import React from 'react';
import { motion } from 'framer-motion';

export default function GearCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300 overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10">
          {/* Icon/Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
            <span className="text-xs text-white/70 uppercase tracking-wider">{item.type}</span>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-medium text-white mb-2">{item.name}</h3>
          
          {/* Description */}
          <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
          
          {/* Specs if any */}
          {item.specs && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {item.specs.map((spec, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-white/60"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}