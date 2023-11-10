module.exports = {
  siteUrl: 'https://www.baxterip.com.au/',
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      // { userAgent: '*', disallow: '/secret' },
      { userAgent: '*', disallow: '' },
    ],
    additionalSitemaps: 'https://www.baxterip.com.au/sitemap.xml',
  },
  // exclude: ['/secret'],
}
