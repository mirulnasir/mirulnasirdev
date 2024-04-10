/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    rewrites: async () => {
        return [
            {
                source: '/api/:path*',
                destination: 'http://cors.mirwulqt.com:3000/api/:path*',

            },
        ];
    },
};

export default nextConfig;
