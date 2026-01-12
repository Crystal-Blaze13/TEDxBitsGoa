'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

export default function MerchandisePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/">
              <span className="text-2xl font-black tracking-tight cursor-pointer">
                TEDx<span className="text-red-600">BITSGoa</span>
              </span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#home" className="text-sm font-semibold hover:text-red-500 transition-colors duration-300">
                HOME
              </Link>
              <Link href="/#about" className="text-sm font-semibold hover:text-red-500 transition-colors duration-300">
                ABOUT
              </Link>
              <Link href="/speakers" className="text-sm font-semibold hover:text-red-500 transition-colors duration-300">
                SPEAKERS
              </Link>
              <Link href="/sponsors" className="text-sm font-semibold hover:text-red-500 transition-colors duration-300">
                SPONSORS
              </Link>
              <Link href="/merchandise" className="text-sm font-semibold text-red-500 transition-colors duration-300">
                MERCHANDISE
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full filter blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-800 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            Our <span className="text-red-600">Merchandise</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Wear your support for ideas worth spreading
          </p>
          <div className="inline-block px-6 py-3 bg-red-600/10 border border-red-600/30 rounded-full">
            <p className="text-red-400 font-semibold">Coming soon - Stay tuned!</p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-red-900/30"
            onMouseMove={handleMouseMove}
          >
            {/* Spotlight effect */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(230, 43, 30, 0.2), transparent 80%)`
              }}
            />

            <div className="relative p-16 text-center">
              {/* Animated icon */}
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto bg-red-600/20 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
                Something <span className="text-red-600">Awesome</span> is Coming
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-black/40 p-6 rounded-xl border border-red-900/30">
                  <div className="text-3xl mb-3">👕</div>
                  <h3 className="text-lg font-bold text-white mb-2">Premium Apparel</h3>
                  <p className="text-gray-400 text-sm">High-quality t-shirts, hoodies and more</p>
                </div>
                <div className="bg-black/40 p-6 rounded-xl border border-red-900/30">
                  <div className="text-3xl mb-3">🎒</div>
                  <h3 className="text-lg font-bold text-white mb-2">Accessories</h3>
                  <p className="text-gray-400 text-sm">Bags, caps and other essentials</p>
                </div>
                <div className="bg-black/40 p-6 rounded-xl border border-red-900/30">
                  <div className="text-3xl mb-3">📱</div>
                  <h3 className="text-lg font-bold text-white mb-2">Tech Gear</h3>
                  <p className="text-gray-400 text-sm">Phone cases, stickers and more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="flex items-center">
              <span className="text-2xl font-black">
                TEDx<span className="text-red-600">BITSGoa</span>
              </span>
            </div>

            <p className="text-base text-gray-300 font-semibold max-w-2xl">
              This independent TEDx event is operated under license from TED.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link href="/#home" className="hover:text-red-500 transition-colors">
                Home
              </Link>
              <span>•</span>
              <Link href="/#about" className="hover:text-red-500 transition-colors">
                About
              </Link>
              <span>•</span>
              <Link href="/speakers" className="hover:text-red-500 transition-colors">
                Speakers
              </Link>
              <span>•</span>
              <Link href="/sponsors" className="hover:text-red-500 transition-colors">
                Sponsors
              </Link>
              <span>•</span>
              <Link href="/merchandise" className="hover:text-red-500 transition-colors">
                Merchandise
              </Link>
            </div>

            <div className="pt-6 border-t border-gray-800 w-full">
              <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} TEDxBITSGoa. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
