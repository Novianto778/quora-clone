/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['www.gravatar.com', 'picsum.photos'],
    },
    fontLoaders: [
        { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
};

module.exports = nextConfig;
