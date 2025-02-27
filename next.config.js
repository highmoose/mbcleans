/** @type {import('next').NextConfig} */
const nextConfig = { distDir: "dist" }; // ADD ' output: "export" here in next.config.js

module.exports = {
    async redirects() {
        return [
            {
                source: "/old-page",
                destination: "/new-page",
                permanent: true,
            },
        ];
    },
};
