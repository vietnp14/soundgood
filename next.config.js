const path = require('path');

const imageExtensionRegexp = /\.(png|jpe?g|gif)$/i;

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, options) => {
    // Important: return the modified config
    console.log('Webpack version', options.webpack.version);
    console.log('Default loader : ', options.defaultLoaders);
    const newRules = [
      {
        test: imageExtensionRegexp,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[name][contenthash:4][ext]',
        },
      },
    ];

    config.module.strictExportPresence = true;

    //Remove nextjs default image loader
    config.module.rules.pop();
    config.module.rules.push(...newRules);
    console.log('Rules : ', config.module.rules);

    return config;
  },
};
