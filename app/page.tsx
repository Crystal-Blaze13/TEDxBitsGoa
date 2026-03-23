'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white scroll-smooth">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div>
              <span className="text-2xl font-black tracking-tight">
                TEDx<span className="text-red-600">BITSGoa</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/#home" className="text-sm font-semibold hover:text-red-500 transition-colors duration-300">HOME</Link>
              <Link href="/#about" className="text-sm font-semibold hover:text-red-500 transition-colors duration-300">ABOUT</Link>
              <Link href="/speakers" className="text-sm font-semibold hover:text-red-500 transition-colors duration-300">SPEAKERS</Link>
              <Link href="/sponsors" className="text-sm font-semibold hover:text-red-500 transition-colors duration-300">SPONSORS</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        position: 'relative',
        minHeight: '100vh',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'black',
        paddingTop: '80px',
      }}>
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* Layer 1 - Copper radial glow */}
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-8 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(200, 134, 10, 0.08) 0%, transparent 70%)',
              animation: 'pulse 8s ease-in-out infinite',
            }}
          />
          
          {/* Layer 2 - TEDxLightRays (reduced opacity) */}
          <div className="absolute inset-0 opacity-35">
            {/* Existing TEDxLightRays component would go here */}
          </div>
          
          {/* Layer 3 - Subtle grain texture */}
          <div 
            className="absolute inset-0 opacity-3"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div style={{
          position: 'relative',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 2rem',
          gap: '0',
        }}>

          {/* LOGO */}
          <div style={{
            width: '100%',
            maxWidth: '780px',
          }}>
            <img
              src="/images/theme_logo.png"
              alt="Odyssey Within"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
                marginTop: '-20%',
                marginBottom: '-20%',
                filter: 'drop-shadow(0 0 50px rgba(200, 134, 10, 0.85))',
              }}
            />
          </div>

          {/* BODY TEXT */}
          <p style={{
            fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
            color: '#9CA3AF',
            lineHeight: '1.85',
            maxWidth: '100%',
            width: '100%',
            textAlign: 'center',
            margin: '0',
            padding: '0',
          }}>
            Too often, we look outward for what was always meant to be 
            uncovered in silence. Unaware that the answers have always been 
            forming, we wait for a spark powerful enough to break our stillness 
            and summon the courage to begin our own odyssey inward. This 22nd 
            March at TEDxBITSGoa, be ready to cross the threshold. Be ready to 
            explore the{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C8860A, #E8A830)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Odyssey Within</span>.
          </p>

          {/* DATE LINE */}
          <p style={{
            marginTop: '1.25rem',
            fontSize: '1rem',
            fontWeight: '600',
            color: 'white',
            textAlign: 'center',
          }}>
            Join us on{' '}
            <span style={{ color: '#F87171' }}>22nd March 2026</span>
            {' '}at TEDxBITSGoa
          </p>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4" style={{ background: 'linear-gradient(to bottom, #000000, #0D0A06)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              About <span style={{ color: '#E62B1E' }}>TEDx</span><span style={{ color: 'white' }}>BITSGoa</span>
            </h2>
            <div className="relative inline-block">
              <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto relative z-10 px-4">
                India's oldest running institutional TEDx conference
              </p>
              <div className="absolute -bottom-2 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #E62B1E, #C8860A, transparent)', opacity: 0.7 }}></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - About TEDx */}
            <div className="space-y-6">
              <div className="p-8 rounded-2xl shadow-2xl" style={{ background: '#0D0A06', border: '1px solid rgba(200, 134, 10, 0.2)' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#E8A830' }}>What is TEDx?</h3>
                <p className="leading-relaxed mb-4" style={{ color: '#D1D5DB' }}>
                  In the spirit of "ideas worth spreading", TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxBITSGoa, where x = independently organized TED event.
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#D1D5DB' }}>
                  At our TEDxBITSGoa event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
                </p>
                <a 
                  href="https://www.ted.com/tedx/events" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block font-semibold underline hover:no-underline transition-all"
                  style={{ color: '#C8860A' }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#E8A830'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#C8860A'}
                >
                  Learn more about the TEDx program →
                </a>
              </div>
              
            </div>
            
            {/* Right Column - Event Details */}
            <div className="space-y-6">
              <div className="p-8 rounded-2xl shadow-2xl" style={{ background: 'linear-gradient(135deg, #3D0A06, #1A0000)', border: '1px solid rgba(230, 43, 30, 0.4)' }}>
                <h3 className="text-3xl font-black mb-6" style={{ color: 'white' }}>Event Details</h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📅</div>
                    <div>
                      <p className="font-bold text-lg" style={{ color: 'white' }}>Date</p>
                      <p style={{ color: '#FECACA' }}>22nd March, 2026</p>
                      <p className="text-sm" style={{ color: '#FECACA' }}>10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📍</div>
                    <div>
                      <p className="font-bold text-lg" style={{ color: 'white' }}>Venue</p>
                      <p style={{ color: '#FECACA' }}>BITS Pilani K K Birla Goa Campus</p>
                      <p className="text-sm" style={{ color: '#FECACA' }}>Zuarinagar, Goa 403726, India</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">🎯</div>
                    <div>
                      <p className="font-bold text-lg" style={{ color: 'white' }}>Theme</p>
                      <p className="text-xl font-semibold" style={{ color: '#E8A830' }}>"Odyssey Within"</p>
                      <p className="text-sm mt-1" style={{ color: '#9CA3AF' }}>The journey inward begins</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">🎫</div>
                    <div>
                      <p className="font-bold text-lg" style={{ color: 'white' }}>Tickets</p>
                      <p style={{ color: '#FECACA' }}>Registration opens soon</p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105" 
                        style={{ 
                          background: 'linear-gradient(135deg, #E62B1E, #C0392B)',
                          color: 'white'
                        }}
                        onMouseEnter={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.filter = 'brightness(1.15)';
                          target.style.boxShadow = '0 0 20px rgba(200, 134, 10, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.filter = 'brightness(1)';
                          target.style.boxShadow = 'none';
                        }}>
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-6">
            Our <span style={{ color: '#E62B1E' }}>Speakers</span>
          </h2>
          <p className="text-center text-xl mb-16 max-w-3xl mx-auto text-gray-300">
            Visionaries, innovators, and thought leaders sharing ideas worth spreading
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: 'Dr. Harsh Vardhan',
                description: 'Former Union Minister of Health & Family Welfare, COVID-19 response leader, and distinguished physician.',
                photo: '/images/speakers/speaker-1.jpg'
              },
              {
                name: 'Anupriya Goenka',
                description: 'Actress from Padmaavat, Sacred Games, and Criminal Justice with acclaimed performances across formats.',
                photo: '/images/speakers/speaker-2.jpg'
              },
              {
                name: 'RJ Naved',
                description: 'Creator of Mirchi Murga, India\'s iconic prank call show, with 11M+ followers and 20+ years in radio.',
                photo: '/images/speakers/speaker-3.jpg'
              },
              {
                name: 'Aalekh Sharan',
                description: 'Head of Agentic AI at Sarvam, transforming AI concepts into practical models with Indian context.',
                photo: '/images/speakers/speaker-4.jpg'
              },
              {
                name: 'Dr. Radhika Vathsan',
                description: 'Quantum physics researcher and Veena expert, exploring the science behind music with live performance.',
                photo: '/images/speakers/speaker-5.jpg'
              }
            ].map((speaker, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-red-900/30 hover:border-red-600/50 transition-all duration-500 hover:scale-105"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-8">
                  {/* Speaker Photo */}
                  <div className="mb-6 w-full aspect-square flex items-center justify-center bg-white/5 rounded-xl overflow-hidden">
                    <img
                      src={speaker.photo}
                      alt={speaker.name}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-black mb-3 text-white group-hover:text-red-400 transition-colors">
                    {speaker.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {speaker.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-600/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-xl mb-6 text-gray-300">Join us on <span style={{ color: '#E8A830' }}>22nd March 2026</span> for an unforgettable experience!</p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Follow <span style={{ color: '#E62B1E' }}>TEDxBITSGoa</span>
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            Stay updated with the latest news, speaker announcements, and event updates
          </p>
          
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {/* Instagram */}
            <a 
              href="https://instagram.com/tedxbitsgoa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl transition-all duration-300 hover:scale-110" 
              style={{ 
                background: '#0D0A06', 
                border: '1px solid rgba(200, 134, 10, 0.18)'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.background = 'rgba(200, 134, 10, 0.06)';
                target.style.borderColor = 'rgba(200, 134, 10, 0.45)';
                target.style.boxShadow = '0 0 24px rgba(200, 134, 10, 0.2)';
                const svg = target.querySelector('svg');
                if (svg) svg.style.color = '#E8A830';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.background = '#0D0A06';
                target.style.borderColor = 'rgba(200, 134, 10, 0.18)';
                target.style.boxShadow = 'none';
                const svg = target.querySelector('svg');
                if (svg) svg.style.color = '#C8860A';
              }}>
              <svg className="h-12 w-12" style={{ color: '#C8860A' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.976.045-1.505.207-1.858.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/tedx-bitsgoa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl transition-all duration-300 hover:scale-110" 
              style={{ 
                background: '#0D0A06', 
                border: '1px solid rgba(200, 134, 10, 0.18)'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.background = 'rgba(200, 134, 10, 0.06)';
                target.style.borderColor = 'rgba(200, 134, 10, 0.45)';
                target.style.boxShadow = '0 0 24px rgba(200, 134, 10, 0.2)';
                const svg = target.querySelector('svg');
                if (svg) svg.style.color = '#E8A830';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.background = '#0D0A06';
                target.style.borderColor = 'rgba(200, 134, 10, 0.18)';
                target.style.boxShadow = 'none';
                const svg = target.querySelector('svg');
                if (svg) svg.style.color = '#C8860A';
              }}>
            <svg className="h-12 w-12" style={{ color: '#C8860A' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            
            {/* X (Twitter) */}
            <a 
              href="https://x.com/tedxbitsgoa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl transition-all duration-300 hover:scale-110" 
              style={{ 
                background: '#0D0A06', 
                border: '1px solid rgba(200, 134, 10, 0.18)'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.background = 'rgba(200, 134, 10, 0.06)';
                target.style.borderColor = 'rgba(200, 134, 10, 0.45)';
                target.style.boxShadow = '0 0 24px rgba(200, 134, 10, 0.2)';
                const svg = target.querySelector('svg');
                if (svg) svg.style.color = '#E8A830';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.background = '#0D0A06';
                target.style.borderColor = 'rgba(200, 134, 10, 0.18)';
                target.style.boxShadow = 'none';
                const svg = target.querySelector('svg');
                if (svg) svg.style.color = '#C8860A';
              }}>
            <svg className="h-12 w-12" style={{ color: '#C8860A' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            
            {/* YouTube */}
            <a 
              href="https://www.youtube.com/TED" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl transition-all duration-300 hover:scale-110" 
              style={{ 
                background: '#0D0A06', 
                border: '1px solid rgba(200, 134, 10, 0.18)'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.background = 'rgba(200, 134, 10, 0.06)';
                target.style.borderColor = 'rgba(200, 134, 10, 0.45)';
                target.style.boxShadow = '0 0 24px rgba(200, 134, 10, 0.2)';
                const svg = target.querySelector('svg');
                if (svg) svg.style.color = '#E8A830';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.background = '#0D0A06';
                target.style.borderColor = 'rgba(200, 134, 10, 0.18)';
                target.style.boxShadow = 'none';
                const svg = target.querySelector('svg');
                if (svg) svg.style.color = '#C8860A';
              }}>
            <svg className="h-12 w-12" style={{ color: '#C8860A' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12" style={{ borderTop: '1px solid rgba(200, 134, 10, 0.15)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="flex items-center">
              <span className="text-2xl font-black">
                TEDx<span style={{ color: '#E62B1E' }}>BITSGoa</span>
              </span>
            </div>
            
            <p className="text-base text-gray-300 font-semibold max-w-2xl">
              This independent TEDx event is operated under license from TED.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: '#9CA3AF' }}>
              <a href="#home" className="transition-colors" style={{ color: '#9CA3AF' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#E8A830'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#9CA3AF'}>Home</a>
              <span style={{ color: 'rgba(200, 134, 10, 0.1)' }}>•</span>
              <a href="#about" className="transition-colors" style={{ color: '#9CA3AF' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#E8A830'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#9CA3AF'}>About</a>
              <span style={{ color: 'rgba(200, 134, 10, 0.1)' }}>•</span>
              <Link href="/speakers" className="transition-colors" style={{ color: '#9CA3AF' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#E8A830'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#9CA3AF'}>Speakers</Link>
              <span style={{ color: 'rgba(200, 134, 10, 0.1)' }}>•</span>
              <Link href="/sponsors" className="transition-colors" style={{ color: '#9CA3AF' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#E8A830'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#9CA3AF'}>Sponsors</Link>
            </div>
            
            <div className="pt-6 border-t w-full" style={{ borderTopColor: 'rgba(200, 134, 10, 0.1)' }}>
              <p className="text-sm" style={{ color: '#4B5563' }}>
                &copy; {new Date().getFullYear()} TEDxBITSGoa. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
