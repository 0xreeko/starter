module.exports = {
    siteUrl: process.env.SITE_URL || 'https://example.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {userAgent: '*', disallow: '/wozethanksyou'},
            {userAgent: '*', disallow: '/tokenroute'}
        ]
    },
    exclude: ['/wozethanksyou', '/tokenroute']
  }