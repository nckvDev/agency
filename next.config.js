// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
   sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
   },
   experimental: {
      // outputStandalone: true,
      serverActions: true,
   },
   webpack: (config) => {
      config.ignoreWarnings = [
         { module: /node_modules\/node-fetch\/lib\/index\.js/ },
         { file: /node_modules\/node-fetch\/lib\/index\.js/ },
      ]
      return config
   },
}

module.exports = nextConfig
