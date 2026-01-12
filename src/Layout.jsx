import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Camera, Instagram, Mail } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const navItems = [
    { name: 'Portfolio', page: 'Home' },
    { name: 'Gear', page: 'Gear' },
    { name: 'About', page: 'About' },
  ];

  return (
    <div className="min-h-screen bg-[#0f1419] text-white overflow-x-hidden">
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-semibold text-lg">Aayan Jafri</div>
                <div className="text-orange-400 text-xs uppercase tracking-wider">digital portfolio</div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    currentPageName === item.page
                      ? 'bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-400 border border-orange-500/30'
                      : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
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