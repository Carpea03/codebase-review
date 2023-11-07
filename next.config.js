/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      'cdn.sanity.io',
      'source.unsplash.com',
      'flowbite.s3.amazonaws.com',
      'baxterip.vercel.app',
      'www.baxterip.com.au',
      'localhost:3000',
      'maps.googleapis.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/patent-design-australia',
        destination: '/australian-registered-design',
        permanent: true,
      },
      {
        source: '/global/',
        destination: '/global',
        permanent: true,
      },
      {
        source: '/melbourne/binh-rey',
        destination: '/melbourne',
        permanent: true,
      },
      {
        source: '/patent-attorney-profiles',
        destination: '/patent-attorney',
        permanent: true,
      },
      {
        source: '/fastcircle',
        destination: '/ip-strategy',
        permanent: true,
      },
      {
        source: '/patent-specialisations',
        destination: '/specialisations',
        permanent: true,
      },
      {
        source: '/after-patent-pending',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/patent-applications',
        destination: '/provisional-patents',
        permanent: true,
      },
      // Add more redirects here as required
    ]
  },
}
