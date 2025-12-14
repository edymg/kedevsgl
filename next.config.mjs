/** @type {import('next').NextConfig} */

//Antigua declaracion de IMG source
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/landing",
        destination: "/",
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/w20/**",
      },
    ],
    domains: [
      "images.pexels.com",
      "www.ceupe.pe",
      "encrypted-tbn0.gstatic.com",
      "cdn.prod.website-files.com",
      "covalto-production-website.s3.amazonaws.com",
      "https://flagcdn.com/",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

//Nueva declaracion de IMG source
//Not working
/*module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
        search: "",
      },
    ],
  },
};*/
export default nextConfig;
