module.exports = {
  siteUrl: process.env.VERCEL_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      // { userAgent: '*', disallow: '/secret' },
      { userAgent: '*', disallow: '/' },
    ],
    // additionalSitemaps: [
    //   `${siteUrl}/sitemap.xml`,
    //   `${siteUrl}/server-sitemap.xml`,
    // ],
  },
  // exclude: ['/secret'],
}
