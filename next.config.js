/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/company", permanent: true },
      { source: "/work/:path*", destination: "/apps", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
