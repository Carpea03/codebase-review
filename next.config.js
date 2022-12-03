/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
      { hostname: 'flowbite.s3.amazonaws.com' },
      { hostname: 'baxterip.vercel.app' },
    ],
  },
}
