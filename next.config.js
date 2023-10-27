/** @type {import('next').NextConfig} */
// const nextConfig = {
 
// }

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/sounds/[name].[hash].[ext]',
              esModule: false,
            },
          },
        ],
      });
    }

    return config;
  },
};