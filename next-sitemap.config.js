/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.mbcleans.co.uk",
    generateRobotsTxt: true,
    sitemapSize: 5000,
    exclude: ["/admin", "/dashboard"],
    changefreq: "daily",
    priority: 0.7,
};
