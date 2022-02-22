//const { webpack } = require("webpack");
const { merge } = require("webpack-merge");
const baseConfig = require("./../webpack.base.config");
//const { path } = require("path");

const prodConfig = (env, args) => {
  return {
    mode: 'production',
  };
};

module.exports = (env, argv) => {
  return merge(baseConfig(env, argv), prodConfig(env, argv));
}
