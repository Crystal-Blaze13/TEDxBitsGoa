# TEDx BITS Goa

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Official website for TEDx BITS Goa, an independently organized TED event at BITS Pilani K K Birla Goa Campus.

## 🚀 Features

- Modern, responsive design that works on all devices
- Fast page loads and smooth animations
- Sections for speakers, schedule, about, and contact information
- Built with Next.js 14 and Tailwind CSS
- Optimized for performance and SEO

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## 📦 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/tedx-bits-goa.git
   cd tedx-bits-goa
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Customization

### Update Content

- **Homepage**: Edit `app/page.tsx`
- **Global Styles**: Edit `app/globals.css`
- **Components**: Add new components in the `components` directory
- **Images**: Add images to the `public` directory

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SITE_URL=https://tedxbitsgoa.com
# Add other environment variables here
```

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Ftedx-bits-goa)

### GradientText
Animated gradient text component used for the main theme title.

### ScrollStack
Smooth scroll-based stacking animation (Lenis-powered).

## Pages

- **Home (`/`)** - Hero section with theme, about, speakers preview, and social links
- **Speakers (`/speakers`)** - Current speakers (2025) and past speakers archive
- **Team (`/team`)** - Core coordinators and vertical heads
- **Sponsors (`/sponsors`)** - Sponsor showcase with tier-based cards

## Speakers 2025

- **Rachel Gupta** - Miss Grand International 2024
- **S. Vijayalakshmi** - India's First Woman Grandmaster
- **Dr. Tanu Jain** - Founder, Tathastu IAS
- **Athil Krishna** - AI & Robotics Innovator
- **Rakesh Asthaana** - Former Commissioner of Police, Delhi

## Team

### Core Coordinators
- Aryan Dangi - Chief Coordinator
- Mahi Vijayvargia - Curator
- Sreehari V S - Licensee

### Vertical Heads
- Sponsorship, Publicity, Design, and Content teams

## Deployment

The site is optimized for deployment on Vercel:

```bash
npm run build
npm run start
```

Or deploy directly:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/tedxbitsgoa-2025)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

- **Email:** contact@tedxbitsgoa.com
- **Instagram:** [@tedxbitsgoa](https://instagram.com/tedxbitsgoa)
- **LinkedIn:** [TEDxBITSGoa](https://linkedin.com/company/tedxbitsgoa)
- **Twitter:** [@tedxbitsgoa](https://x.com/tedxbitsgoa)
- **YouTube:** [@tedxbitsgoa](https://youtube.com/@tedxbitsgoa)

## Acknowledgments

- This independent TEDx event is operated under license from TED
- Built with ❤️ by the TEDxBITSGoa team
