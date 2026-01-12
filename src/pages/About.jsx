import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, MapPin, Calendar } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Age', value: '16', icon: Calendar },
    { label: 'Location', value: 'California', icon: MapPin },
    { label: 'Style', value: 'Automotive & Urban', icon: Camera },
    { label: 'Passion', value: 'Photography', icon: Heart },
  ];

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
          <span className="inline-block text-xs text-white/40 uppercase tracking-widest mb-4">About Me</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4">
            <span className="text-white">The Story</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Behind the Lens</span>
          </h1>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-3xl blur-3xl opacity-50" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6964ac45e34a1cc29463b736/a58ab9d56_IMG_7747-2.jpg"
                alt="Featured Work"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-light text-white">Hey, I'm Aayan</h2>
            
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                I'm a 16-year-old hobbyist photographer with a deep passion for capturing the beauty 
                in everyday moments. What started as casual phone snapshots has evolved into a serious 
                pursuit of the art form.
              </p>
              <p>
                My focus lies primarily in automotive photography and urban landscapes. There's 
                something magical about the curves of a supercar or the glow of city lights at 
                night that I find endlessly inspiring.
              </p>
              <p>
                When I'm not behind the camera, I'm probably researching new techniques, studying 
                the work of professional photographers, or planning my next shoot. Photography 
                isn't just a hobby for me—it's how I see and interpret the world.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <stat.icon className="w-5 h-5 text-cyan-400 mb-2" />
                  <p className="text-white font-medium">{stat.value}</p>
                  <p className="text-white/40 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12">
            <h3 className="text-2xl font-light text-white mb-6">My Photography Journey</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <span className="text-cyan-400 font-medium">01</span>
                </div>
                <h4 className="text-white font-medium mb-2">The Beginning</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Started with a Canon T1i, learning the basics of exposure, composition, and light.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 flex items-center justify-center mb-4">
                  <span className="text-purple-400 font-medium">02</span>
                </div>
                <h4 className="text-white font-medium mb-2">Finding My Style</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Discovered my love for automotive and night photography. Upgraded to the Canon R10.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 border border-pink-500/20 flex items-center justify-center mb-4">
                  <span className="text-pink-400 font-medium">03</span>
                </div>
                <h4 className="text-white font-medium mb-2">Expanding Horizons</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Added a DJI Mini 3 to capture aerial perspectives and continue pushing creative boundaries.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}