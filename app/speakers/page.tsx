'use client';

import Link from 'next/link';

export default function SpeakersPage() {
  const currentSpeakers = [
    {
      name: 'Rachel Gupta',
      title: 'Miss Grand International 2024',
      nickname: 'The Radiance',
      icon: '👑',
      description: 'First Indian to win Miss Grand International. From small-town dreamer to global icon with 1.5M followers, inspiring millions worldwide.',
      gradient: 'from-red-900 to-gray-800'
    },
    {
      name: 'S. Vijayalakshmi',
      title: "India's First Woman Grandmaster",
      nickname: 'The MasterMind',
      icon: '♟️',
      description: '6 National Championships, Arjuna Award winner, and two Olympiad Silver Medals. A living legend inspiring the chess world.',
      gradient: 'from-gray-700 to-black'
    },
    {
      name: 'Dr. Tanu Jain',
      title: 'Founder, Tathastu IAS',
      nickname: 'The Mentor',
      icon: '📚',
      description: 'Former civil servant, dental surgeon, and DRDO Assistant Director. Leading UPSC mentor helping thousands achieve their dreams.',
      gradient: 'from-red-800 to-gray-900'
    },
    {
      name: 'Athil Krishna',
      title: 'AI & Robotics Innovator',
      nickname: 'The Futurist',
      icon: '🤖',
      description: 'From rural Kerala to global AI pioneer. Founder of iHub Robotics revolutionizing robotics, education, and aerospace with Robot TARA.',
      gradient: 'from-gray-800 to-red-900'
    },
    {
      name: 'Rakesh Asthaana',
      title: 'Former Commissioner of Police, Delhi',
      nickname: 'The Exemplary',
      icon: '⚖️',
      description: '40 years of exemplary service. DG of BSF, Special Director CBI. Investigated Fodder Scam and 2008 Ahmedabad bombings.',
      gradient: 'from-red-900 to-black'
    }
  ];

  const pastSpeakers = [
    {
      name: 'Dr. Arvind Kumar',
      title: 'Neuroscientist',
      year: '2024',
      icon: '🧠',
      description: 'Groundbreaking research in cognitive neuroscience and brain-computer interfaces.',
      gradient: 'from-gray-800 to-gray-900'
    },
    {
      name: 'Priya Malhotra',
      title: 'Social Entrepreneur',
      year: '2024',
      icon: '🌱',
      description: 'Founded NGO empowering rural women through sustainable livelihood programs.',
      gradient: 'from-gray-700 to-black'
    },
    {
      name: 'Kabir Sharma',
      title: 'Tech Innovator',
      year: '2023',
      icon: '💡',
      description: 'Created affordable EdTech solutions reaching 10 million students across India.',
      gradient: 'from-black to-gray-800'
    },
    {
      name: 'Dr. Meera Nair',
      title: 'Climate Scientist',
      year: '2023',
      icon: '🌍',
      description: 'Leading research on climate change adaptation strategies for coastal communities.',
      gradient: 'from-gray-900 to-black'
    },
    {
      name: 'Rohan Desai',
      title: 'Film Director',
      year: '2023',
      icon: '🎬',
      description: 'Award-winning documentaries highlighting untold stories of Indian heritage.',
      gradient: 'from-gray-800 to-black'
    },
    {
      name: 'Ananya Iyer',
      title: 'Sports Psychologist',
      year: '2022',
      icon: '🏆',
      description: 'Mental conditioning coach for Olympic athletes and national teams.',
      gradient: 'from-black to-gray-900'
    }
  ];

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
              <Link href="/speakers" className="text-sm font-semibold text-red-500 transition-colors duration-300">
                SPEAKERS
              </Link>
              <Link href="/team" className="text-sm font-semibold hover:text-red-500 transition-colors duration-300">
                TEAM
              </Link>
              <Link href="/sponsors" className="text-sm font-semibold hover:text-red-500 transition-colors duration-300">
                SPONSORS
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full filter blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-800 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            Our <span className="text-red-600">Speakers</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Visionaries, innovators, and thought leaders sharing ideas worth spreading
          </p>
        </div>
      </section>

      {/* Current Speakers 2025 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              TEDxBITSGoa <span className="text-red-600">2025</span>
            </h2>
            <p className="text-gray-400 text-lg">Join us on 22nd February 2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentSpeakers.map((speaker, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-300 hover:scale-105 border border-gray-800"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
              >
                <div className={`relative h-80 bg-gradient-to-br ${speaker.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center text-7xl">{speaker.icon}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {speaker.nickname}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors">{speaker.name}</h3>
                  <p className="text-red-400 font-semibold mb-3">{speaker.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{speaker.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Speakers Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Past <span className="text-red-600">Speakers</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Celebrating the incredible voices who have graced our stage and inspired our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastSpeakers.map((speaker, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-300 hover:scale-105 border border-gray-800/50"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
              >
                <div className={`relative h-64 bg-gradient-to-br ${speaker.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-70">{speaker.icon}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-gray-800/80 text-gray-300 text-xs font-bold px-3 py-1 rounded-full">
                    {speaker.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">{speaker.name}</h3>
                  <p className="text-gray-400 font-semibold mb-3 text-sm">{speaker.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{speaker.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Archive Message */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gray-900/50 border border-gray-800 rounded-2xl p-8 max-w-2xl">
              <p className="text-gray-400 leading-relaxed">
                Want to relive the magic? Watch TED talks on the{' '}
                <a href="https://www.youtube.com/TED" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 font-semibold underline">
                  official TED YouTube channel
                </a>
              </p>
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
              <Link href="/team" className="hover:text-red-500 transition-colors">
                Team
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
