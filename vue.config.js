const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // rules: [
  //   {
  //     test: /\.(csv|xlsx|xls|zip)$/,
  //     loader: "file-loader",
  //     options: {
  //       name: `files/[name].[ext]`,
  //     },
  //   },
  // ],

  // rules: { 'prettier/prettier': 'off' },
});
