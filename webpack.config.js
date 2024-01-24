const path = require('path');

module.exports = {
  entry: './src/ChemDoodleWeb.js', // 入口文件
  output: {
    filename: 'ChemDoodleWeb.js', // 输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出目录
  },
};
