const path = require('path');
//export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점
  entry: './js/main.js',
  output: {
    // path: path.resolve(__dirname, 'dist'), // output의 path는 절대경로를 사용!
    // filename: 'main.js', // default-> dist
    clean: true
  }
} 