'use client';

import Link from 'next/link';

export default function SpeakersPage() {
  const currentSpeakers = [
    {
      name: 'Dr. Harsh Vardhan',
      description: 'Former Union Minister of Health and Family Welfare, Dr. Harsh Vardhan played a key role in guiding India\'s public health response during the COVID-19 pandemic. A distinguished physician and policymaker, he has long been at the forefront of national health initiatives and disease eradication programs that have impacted millions across the country. Hear his insights on leadership, healthcare, and public service at TEDxBITSGOA.',
      photo: '/images/speakers/speaker-1.jpg'
    },
    {
      name: 'Anupriya Goenka',
      description: 'From the grandeur of Padmaavat to the high stakes worlds of War and Tiger Zinda Hai, Anupriya Goenka has built a career defined by range and quiet power. Her performances in Sacred Games and Criminal Justice further showcase her depth and authenticity. With acclaimed work across formats, including the IIFA Digital Content Award for Berlin and OTT awards for Criminal Justice and Asur, her journey reflects craft over noise. Step beyond the screen and hear the story behind the work.',
      photo: '/images/speakers/speaker-2.jpg'
    },
    {
      name: 'RJ Naved',
      description: 'Growing up, his voice was the soundtrack to every car ride. The man who turned prank calls into an art form, say hello to the one and only RJ Naved! He\'s the brain behind Mirchi Murga - India\'s most iconic prank call show. He has been making India laugh for over two decades, since winning Radio Mirchi\'s RJ Hunt in 2000. But Best RJ, Golden Mike winner, and Indian Icon Award holder are just some of the accolades to his name. With 11M+ Instagram followers and a "Best Comedy Influencer" award, he\'s a certified digital powerhouse.',
      photo: '/images/speakers/speaker-3.jpg'
    },
    {
      name: 'Aalekh Sharan',
      description: 'A dynamic and brilliant mind - responsible for transforming AI from theoretic concepts to practical models on all our devices, say hello to Aalekh Sharan. Head of Agentic AI at Sarvam, one of India\'s premier homegrown AI companies, responsible for models that incorporate Indian languages and context. A radical thinker, he brings with him a live demonstration previously only shown at the International AI Summit held in Delhi, straight to TEDxBITS Goa, for a talk that promises to be as illuminating as it will be inspiring.',
      photo: '/images/speakers/speaker-4.jpg'
    },
    {
      name: 'Dr. Radhika Vathsan',
      description: 'An ancient Indian instrument explained by a quantum physics researcher, that\'s what is in store for you when Dr. Radhika Vathsan takes the stage this Sunday on March 22nd. An expert in the Veena, and classically trained in Carnatic music by a lineage of maestros, she\'s going to walk through the science behind what makes music. She\'ll be topping it all off by performing live. Make sure not to miss it.',
      photo: '/images/speakers/speaker-5.jpg'
    }
  ];

  const pastSpeakersByYear = {
    '2025': [
      'Rachel Gupta',
      'S. Vijayalakshmi',
      'Dr. Tanu Jain',
      'Athil Krishna',
      'Rakesh Asthaana'
    ],
    '2024': [
      'Ashok Kumar Er',
      'Mukesh Chhabra', 
      'Nandini Srikar',
      'Striver',
      'Vivek Atray'
    ],
    '2023': [
      'Gamerfleet',
      'Amit Sial',
      'Anshul Rustaggi',
      'Rajeev Mehajan',
      'Avani Awasthee'
    ],
    '2022': [
      'Ria Wahi',
      'Shamon Tainer Hanna',
      'Akshay Chopra',
      'Chandrachur Ghose',
      'Hormazd Sorabjee',
      'Avanti Nagral'
    ],
    '2021': [
      'Neelesh Hundekari',
      'Aditya Seal',
      'Dr. Vinay Singh',
      'Sandeep Jain',
      'Abhiir Bhalla',
      'Major General Vikram Dev Dogra',
      'Prof. George Elerick'
    ],
    '2020': [
      'Jimmy Mistry',
      'Priya Mishra',
      'Viraj Ghelani',
      'Elli Avrram',
      'Sudhir R',
      'Rajan Singh',
      'Archis Patil',
      'Anand Bhaskar',
      'Padmashri Sarvanan',
      'Anil Lamba'
    ],
    '2019': [
      'Kriti Kulhari',
      'Dr. Jagdish Chaturvedi',
      'Prateep Basu',
      'Karishma Boolani',
      'Vilas Nayak',
      'Gayatri Parameswaran',
      'Hormis Tharakan',
      'Franz Gastler',
      'Elena Fernandez'
    ],
    '2018': [
      'Jay Weinstein',
      'Ami Shroff',
      'Ritesh Malik'
    ],
    '2017': [
      'Suvrat Raju',
      'Piyush Mishra',
      'Ulaike Reinhard',
      'Sumeet Vyas',
      'Malaika Vaz',
      'Sarah Todd'
    ],
    '2016': [
      'Kavita Seth',
      'Sudip Dutta',
      'Kamlesh Patel',
      'A. R. K. Pillai',
      'Benny Prasad',
      'Kiran Bedi',
      'Gen. Vijay Oberoi',
      'Ritu Dalmia',
      'Tushar Lall',
      'Swayam Lalwani'
    ]
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
              <Link href="/speakers" className="text-sm font-semibold text-red-500 transition-colors duration-300">
                SPEAKERS
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

      {/* Current Speakers 2026 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              TEDxBITSGoa <span className="text-red-600">2026</span>
            </h2>
            <p className="text-gray-400 text-lg">Join us on 22nd March 2026</p>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-red-600">2026</span> Speakers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the incredible minds sharing their ideas at TEDxBITSGoa 2026
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentSpeakers.map((speaker, index) => (
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
                  <h3 className="text-2xl font-black mb-4 text-white group-hover:text-red-400 transition-colors">
                    {speaker.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                    {speaker.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-600/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl mb-6 text-gray-300">Join us on 22nd March 2026 for an unforgettable experience!</p>
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
              Celebrating incredible voices who have graced our stage and inspired our community
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(pastSpeakersByYear).reverse().map(([year, speakers]) => (
              <div key={year} className="text-center">
                <h3 className="text-3xl md:text-4xl font-black mb-6 text-red-600">
                  {year}
                </h3>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  {speakers.map((speaker, index) => (
                    <div
                      key={index}
                      className="bg-gray-900/50 border border-gray-800 rounded-full px-6 py-3 hover:bg-red-600/10 hover:border-red-600/50 transition-all duration-300 hover:scale-105"
                      style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both` }}
                    >
                      <span className="text-white font-medium text-sm md:text-base">
                        {speaker}
                      </span>
                    </div>
                  ))}
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
