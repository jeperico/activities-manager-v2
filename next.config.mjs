/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone', // Outputs a Single-Page Application (SPA).
  distDir: './build', // Changes the build output directory to `./build`.
  images: {
    unoptimized: true, // Disables the Image Optimization API.
  },
};

export default nextConfig;
