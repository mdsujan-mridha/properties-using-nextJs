/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'imgbb.com',
                port: '',
                pathname: '/ibb.co/**',
            },
        ],
    },
};
export default nextConfig;




