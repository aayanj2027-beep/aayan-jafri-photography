import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Camera, Instagram, Mail } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const navItems = [
    { name: 'Portfolio', page: 'Home', icon: '🖼️' },
    { name: 'Gear', page: 'Gear', icon: '⚙️' },
    { name: 'About', page: 'About', icon: '👤' },
  ];

  return (
    <div className="min-h-screen bg-[#0d0810] text-white overflow-x-hidden">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px]" />
      </div>
      
      {/* Header Navigation */}
      <header className="relative z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-lg">Aayan Jafri</div>
                <div className="text-pink-400 text-xs uppercase tracking-wider">Photography</div>
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
                      ? 'bg-pink-600/20 text-pink-400 border border-pink-500/30'
                      : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
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
                href="mailto:contact@aayanjafri.com"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </header>
      
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}