/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'goodshelf.app',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'goodshelf-images-s3-bucket.s3.ap-south-1.amazonaws.com',
            port: '',
            pathname: '/**',
          },

          
        ],
      },
}

module.exports = nextConfig
