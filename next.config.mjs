/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // rewrites: async () => {
    //     return [
    //         {
    //             source: '/api/:path*',
    //             destination: 'https://www.mirulnasir.dev/api/:path*' // Proxy to Backend
    //         },
    //         {
    //             source: '/rewrite',
    //             destination: 'http://localhost:3001'
    //         }
    //     ];
    // },
    transpilePackages: ['jotai-devtools'],
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
};

export default nextConfig;
