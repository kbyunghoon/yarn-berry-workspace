// webpack.config.js

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 앱이 시작되는 지점
  entry: './src/index.js',

  // 번들링 결과물의 저장 위치/파일명 설정
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  // 번들링 결과물에 추가적인 기능을 실행하는 플러그인 등록
  plugins: [new HTMLWebpackPlugin({ template: './public/index.html' })],

  // 여러 유형의 파일들 처리 방법 설정
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
        },
      }, // babel을 사용하여 node_modules 폴더 내 파일들을 제외한 모든 js 파일을 트랜스파일링
    ],
  },
};
