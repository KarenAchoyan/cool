/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'hy', 'ru'],
    defaultLocale: 'hy',
    localeDetection: false
  },
  env: {
    API_URL: "https://cool.dahk.am/api",
    IMAGE_URL: "https://cool.dahk.am/storage/",
  },
};

export default nextConfig;
