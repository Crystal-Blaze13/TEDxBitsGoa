/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ❗ This makes ESLint *not block* production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
