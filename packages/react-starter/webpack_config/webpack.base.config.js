const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  return ({
    module: {
      rules: [
        {
          test:  /(\.js|\.jsx)$/,
          resolve: { extensions: [".js", ".jsx"] },
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            }
          }
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ]
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
    ],
  });
};

