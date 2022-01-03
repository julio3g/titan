module.exports = {
  reactStrictMode: true,
};

// next.config.js
module.exports = {
  images: {
    domains: ['images.prismic.io'],
  },
};

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

const path = require('path');
const withImages = require('next-images');
module.exports = withImages({
  exclude: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config, options) {
    return config;
  },
});
