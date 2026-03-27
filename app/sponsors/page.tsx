'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

export default function SponsorsPage() {
  const currentSponsors = [
    {
      name: 'PETA',
      role: 'Official Animal Welfare Partner',
      logo: '/images/sponsors/peta.png',
      gradient: 'from-red-600 to-red-800'
    },
    {
      name: 'M.O.M',
      role: 'Snacking Partner',
      logo: '/images/sponsors/mom.png',
      gradient: 'from-red-700 to-gray-900'
    },
    {
      name: 'Skullcandy',
      role: 'Official Audio Partner',
      logo: '/images/sponsors/skullcandy.png',
      gradient: 'from-red-800 to-gray-900'
    },
    {
      name: 'Nissin',
      role: 'Cup Noodles Partner',
      logo: '/images/sponsors/nissin.png',
      gradient: 'from-red-800 to-black'
    },
    {
      name: 'JoloChip',
      role: 'Conference Partner',
      logo: '/images/sponsors/jolochip.png',
      gradient: 'from-gray-900 to-red-900'
    },
    {
      name: 'Bryan and Candy',
      role: 'Official Body Care Partner',
      logo: '/images/sponsors/bryanandcandy.png',
      gradient: 'from-red-900 to-gray-800'
    },
    {
      name: 'Plum',
      role: 'Co Powered By',
      logo: '/images/sponsors/plum.png',
      gradient: 'from-gray-800 to-black'
    },
    {
      name: 'Times Prime',
      role: 'Conference Partner',
      logo: '/images/sponsors/timesprime.png',
      gradient: 'from-black to-red-700'
    },
    {
      name: 'EaseMyTrip',
      role: 'Official Travel Partner',
      logo: '/images/sponsors/easemytrip.png',
      gradient: 'from-gray-900 to-red-800'
    },
    {
      name: 'Muscleblaze',
      role: 'Official Nutrition Partner',
      logo: '/images/sponsors/muscleblaze.png',
      gradient: 'from-gray-900 to-black'
    },
    {
      name: 'Prime',
      role: 'Official Beverage Partner',
      logo: '/images/sponsors/prime.png',
      gradient: 'from-black to-gray-900'
    }
  ];

  const pastSponsors = [
    {
      name: 'Red Bull',
      logo: '/images/sponsors/redbull.png',
      gradient: 'from-red-600 to-red-800'
    },
    {
      name: 'Hyundai',
      logo: '/images/sponsors/hyundai.png',
      gradient: 'from-red-700 to-gray-900'
    },
    {
      name: 'Nexus Malls',
      logo: '/images/sponsors/nexusmalls.png',
      gradient: 'from-red-800 to-black'
    },
    {
      name: 'SBI',
      logo: '/images/sponsors/sbi.png',
      gradient: 'from-gray-900 to-red-900'
    },
    {
      name: 'Beardo',
      logo: '/images/sponsors/beardo.png',
      gradient: 'from-black to-red-800'
    },
    {
      name: 'Snackible',
      logo: '/images/sponsors/snackible.png',
      gradient: 'from-red-900 to-gray-800'
    },
    {
      name: 'Double Horse',
      logo: '/images/sponsors/doublehorse.png',
      gradient: 'from-gray-800 to-black'
    },
    {
      name: 'SAIL',
      logo: '/images/sponsors/sail.png',
      gradient: 'from-red-800 to-gray-900'
    },
    {
      name: 'LIC',
      logo: '/images/sponsors/lic.png',
      gradient: 'from-black to-red-700'
    },
    {
      name: 'Mirchi (It\'s Hot!)',
      logo: '/images/sponsors/mirchi.png',
      gradient: 'from-gray-900 to-red-800'
    },
    {
      name: 'Indian Oil',
      logo: '/images/sponsors/indianoil.png',
      gradient: 'from-red-900 to-black'
    },
    {
      name: 'BORÉCHA',
      logo: '/images/sponsors/borecha.png',
      gradient: 'from-black to-gray-900'
    },
    {
      name: 'EaseMyTrip',
      logo: '/images/sponsors/easemytrip.png',
      gradient: 'from-gray-900 to-red-800'
    },
    {
      name: 'Ola',
      logo: '/images/sponsors/ola.png',
      gradient: 'from-red-800 to-gray-900'
    },
    {
      name: 'Zoho',
      logo: '/images/sponsors/zoho.png',
      gradient: 'from-black to-red-700'
    }
  ];

  const CurrentSponsorCard = ({ sponsor, index }: { sponsor: typeof currentSponsors[0]; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-red-900/30 hover:border-red-600/50 transition-all duration-500 hover:scale-105"
        style={{
          animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
        }}
      >
        {/* Spotlight effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(230, 43, 30, 0.15), transparent 80%)`
          }}
        />

        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${sponsor.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

        <div className="relative p-8 flex flex-col items-center text-center h-full">
          {/* Logo */}
          <div className="mb-6 w-full h-24 flex items-center justify-center bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 filter brightness-110 group-hover:brightness-125"
              style={{
                maxHeight: '80px',
                width: 'auto',
                maxWidth: '200px'
              }}
            />
          </div>

          {/* Name */}
          <h3 className="text-2xl font-black mb-2 text-white group-hover:text-red-400 transition-colors">
            {sponsor.name}
          </h3>

          {/* Role */}
          <p className="text-sm text-red-400 mb-4 font-medium">
            {sponsor.role}
          </p>

          {/* Decorative line */}
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-600/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    );
  };

  const SponsorCard = ({ sponsor, index }: { sponsor: typeof pastSponsors[0]; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-red-900/30 hover:border-red-600/50 transition-all duration-500 hover:scale-105"
        style={{
          animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
        }}
      >
        {/* Spotlight effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(230, 43, 30, 0.15), transparent 80%)`
          }}
        />

        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${sponsor.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

        <div className="relative p-8 flex flex-col items-center text-center h-full">
          {/* Logo */}
          <div className="mb-6 w-full h-24 flex items-center justify-center bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 filter brightness-110 group-hover:brightness-125"
              style={{
                maxHeight: '80px',
                width: 'auto',
                maxWidth: '200px'
              }}
            />
          </div>

          {/* Name */}
          <h3 className="text-2xl font-black mb-3 text-white group-hover:text-red-400 transition-colors">
            {sponsor.name}
          </h3>

          {/* Decorative line */}
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-600/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    );
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
              <Link href="/sponsors" className="text-sm font-semibold text-red-500 transition-colors duration-300">
                SPONSORS
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
            Our <span className="text-red-600">Sponsors</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Honoring the organizations that support TEDxBITSGoa 2026 and our journey of spreading ideas
          </p>
          <div className="inline-block px-6 py-3 bg-red-600/10 border border-red-600/30 rounded-full">
            <p className="text-red-400 font-semibold">Thank you for believing in ideas worth spreading</p>
          </div>
        </div>
      </section>

      {/* Current Sponsors Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-red-600">2026</span> Sponsors
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our incredible partners making TEDxBITSGoa 2026 possible
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentSponsors.map((sponsor, index) => (
              <CurrentSponsorCard key={index} sponsor={sponsor} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Sponsors Section */}
      <section className="py-16 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Past <span className="text-red-600">Sponsors</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Honoring the organizations that supported TEDxBITSGoa events in previous years
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastSponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
                Become a Sponsor
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Join us in spreading ideas that matter. Partner with TEDxBITSGoa and reach thousands of innovators, thinkers, and change-makers.
              </p>
              <button className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl">
                Get Sponsorship Details
              </button>
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
              <a href="/" className="hover:text-red-500 transition-colors">
                Home
              </a>
              <span>•</span>
              <a href="/#about" className="hover:text-red-500 transition-colors">
                About
              </a>
              <span>•</span>
              <Link href="/speakers" className="hover:text-red-500 transition-colors">
                Speakers
              </Link>
              <span>•</span>
              <Link href="/sponsors" className="hover:text-red-500 transition-colors">
                Sponsors
              </Link>
            </div>

            <div className="pt-6 border-t border-gray-800 w-full">
              <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} TEDxBITSGoa. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
