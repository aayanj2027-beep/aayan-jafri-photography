import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Camera, Instagram, Mail, Image, Settings, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Layout({ children, currentPageName }) {
  const navItems = [
    { name: 'Gallery', page: 'Home', icon: Image },
    { name: 'Gear', page: 'Gear', icon: Settings },
    { name: 'About', page: 'About', icon: User },
  ];

  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Moving Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              y: [0, -30, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      {/* Grayish-blueish gradient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gray-700/5 rounded-full blur-[200px]" />
      </div>
      
      {/* Fixed Floating Glass Navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/20">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-500/10 via-gray-500/10 to-slate-500/10 opacity-50 blur-sm -z-10" />
          
          <div className="px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <div className="hidden sm:block">
                <div className="text-white font-semibold text-lg">Aayan Jafri</div>
                <div className="text-blue-400 text-xs uppercase tracking-wider">digital portfolio</div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                      currentPageName === item.page
                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/30'
                        : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:aayanjafri73@gmail.com"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </header>
      
      <main className="relative z-10 pt-24">
        {children}
      </main>
    </div>
  );
}