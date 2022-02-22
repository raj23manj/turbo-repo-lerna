//const { webpack } = require("webpack");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
//const { path } = require("path");


const devConfig = (env, args) => {
  return {
    mode: 'development',
    devServer: {
      port: 8001
    },
  };
};

module.exports = (env, argv) => {
  return merge(baseConfig(env, argv), devConfig(env, argv));
}
