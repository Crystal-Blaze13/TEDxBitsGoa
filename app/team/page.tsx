'use client';

import Link from 'next/link';
import ChromaGrid from '../../components/ChromaGrid';
import ProfileCard from '../../components/ProfileCard';

export default function TeamPage() {
  const coordinators = [
    {
      avatarUrl: 'https://i.pravatar.cc/400?img=5',
      name: 'Mahi Vijayvargia',
      title: 'Curator',
      handle: 'mahivijay',
      status: 'TEDxBITSGoa'
    },
    {
      avatarUrl: 'https://i.pravatar.cc/400?img=12',
      name: 'Aryan Dangi',
      title: 'Chief Coordinator',
      handle: 'aryandangi',
      status: 'TEDxBITSGoa'
    },
    {
      avatarUrl: 'https://i.pravatar.cc/400?img=13',
      name: 'Sreehari V S',
      title: 'Licensee',
      handle: 'sreeharivs',
      status: 'TEDxBITSGoa'
    }
  ];

  const verticalHeads = [
    {
      image: 'https://i.pravatar.cc/300?img=27',
      title: 'Palak Kshetrapal',
      subtitle: 'Sponsorship Head',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(145deg, #F59E0B, #000)',
      url: '#'
    },
    {
      image: 'https://i.pravatar.cc/300?img=33',
      title: 'Neev Sharma',
      subtitle: 'Sponsorship Head',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg, #F59E0B, #000)',
      url: '#'
    },
    {
      image: 'https://i.pravatar.cc/300?img=15',
      title: 'Aditya Kothari',
      subtitle: 'Publicity Head',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(185deg, #8B5CF6, #000)',
      url: '#'
    },
    {
      image: 'https://i.pravatar.cc/300?img=52',
      title: 'Adarsh Nair',
      subtitle: 'Publicity Head',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(205deg, #8B5CF6, #000)',
      url: '#'
    },
    {
      image: 'https://i.pravatar.cc/300?img=68',
      title: 'Nipun Saxena',
      subtitle: 'Design Head',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(225deg, #06B6D4, #000)',
      url: '#'
    },
    {
      image: 'https://i.pravatar.cc/300?img=59',
      title: 'Vidit Bhansali',
      subtitle: 'Design Head',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(245deg, #06B6D4, #000)',
      url: '#'
    },
    {
      image: 'https://i.pravatar.cc/300?img=31',
      title: 'Aarsh Bhavsar',
      subtitle: 'Content Head',
      borderColor: '#10B981',
      gradient: 'linear-gradient(265deg, #10B981, #000)',
      url: '#'
    },
    {
      image: 'https://i.pravatar.cc/300?img=14',
      title: 'Varun Jayakumar',
      subtitle: 'Content Head',
      borderColor: '#10B981',
      gradient: 'linear-gradient(285deg, #10B981, #000)',
      url: '#'
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
              <Link href="/#home" className="text-sm font-semibold hover:text-red-500 transition-colors duration-300">HOME</Link>
              <Link href="/#about" className="text-sm font-semibold hover:text-red-500 transition-colors duration-300">ABOUT</Link>
              <Link href="/#speakers" className="text-sm font-semibold hover:text-red-500 transition-colors duration-300">SPEAKERS</Link>
              <Link href="/team" className="text-sm font-semibold text-red-500 transition-colors duration-300">TEAM</Link>
              <Link href="/sponsors" className="text-sm font-semibold hover:text-red-500 transition-colors duration-300">SPONSORS</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            Meet The <span className="text-red-600">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            The passionate individuals behind TEDxBITSGoa 2025
          </p>
        </div>
      </section>

      {/* Coordinators Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Core <span className="text-red-600">Coordinators</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Leading the vision and execution of TEDxBITSGoa
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {coordinators.map((coordinator, index) => (
              <ProfileCard
                key={index}
                avatarUrl={coordinator.avatarUrl}
                name={coordinator.name}
                title={coordinator.title}
                handle={coordinator.handle}
                status={coordinator.status}
                showUserInfo={false}
                onContactClick={() => console.log(`Contact ${coordinator.name}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Heads Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Vertical <span className="text-red-600">Heads</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Driving excellence across all domains
          </p>
          <div className="min-h-[800px]">
            <ChromaGrid items={verticalHeads} radius={400} damping={0.45} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="flex items-center">
              <span className="text-2xl font-black">TEDx<span className="text-red-600">BITSGoa</span></span>
            </div>
            
            <p className="text-base text-gray-300 font-semibold max-w-2xl">
              This independent TEDx event is operated under license from TED.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link href="/#home" className="hover:text-red-500 transition-colors">Home</Link>
              <span>•</span>
              <Link href="/#about" className="hover:text-red-500 transition-colors">About</Link>
              <span>•</span>
              <Link href="/#speakers" className="hover:text-red-500 transition-colors">Speakers</Link>
              <span>•</span>
              <Link href="/team" className="hover:text-red-500 transition-colors">Team</Link>
              <span>•</span>
              <Link href="/sponsors" className="hover:text-red-500 transition-colors">Sponsors</Link>
            </div>
            
            <div className="pt-6 border-t border-gray-800 w-full">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} TEDxBITSGoa. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
