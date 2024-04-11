/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    rewrites: async () => {
        return [
            {
                source: '/api/:path*',
                destination: 'https://www.mirulnasir.dev/api/:path*' // Proxy to Backend
            },
        ];
    },
};

export default nextConfig;
