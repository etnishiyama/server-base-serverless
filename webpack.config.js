const slsw = require("serverless-webpack");
const bluebird = require('bluebird');
const webpack = require('webpack');

module.exports = bluebird.try(() => {
  return slsw.lib.serverless.providers.aws.getAccountId()
    .then(accountId => ({
      entry: slsw.lib.entries,
      mode: slsw.lib.webpack.isLocal ? "development" : "production",
      target: 'node',
      devtool: "source-map",
      plugins: [
        new webpack.DefinePlugin({
          AWS_ACCOUNT_ID: `${accountId}`,
        }),
      ]
    }));
});