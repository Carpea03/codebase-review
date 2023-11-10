module.exports = {
  siteUrl: 'https://www.baxterip.com.au/',
  // generateIndexSitemap: false,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      // { userAgent: '*', disallow: '/secret' },
      { userAgent: '*', disallow: '' },
    ],
    // additionalSitemaps: [
    //   `${process.env.VERCEL_URL || 'http://localhost:3000'}/sitemap.xml`,
    //   `${process.env.VERCEL_URL || 'http://localhost:3000'}/sitemap-0.xml`,
    // ],
  },
  // exclude: ['/secret'],
}
