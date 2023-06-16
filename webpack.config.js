const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // index.html을 기본 템플릿으로 반영할 수 있도록 설정
    }),
  ],
  devServer: {
    // 개발 서버가 dist 폴더를 제공할 수 있도록 설정
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules) | (dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        // use 배열은 뒤에서부터 적용된다.
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
