/** @type {import('next').NextConfig} */
const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '',
    domains: ['images.microcms-assets.io'],
  },
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
