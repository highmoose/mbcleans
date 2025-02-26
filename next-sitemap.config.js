/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.mbcleans.co.uk", // Change this to your domain
    generateRobotsTxt: true, // Generates robots.txt
    sitemapSize: 5000,
    exclude: ["/admin", "/dashboard"], // Pages to exclude
    changefreq: "daily",
    priority: 0.7,
};
