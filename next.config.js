/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.themoviedb.org",
      // add splash image domain
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
