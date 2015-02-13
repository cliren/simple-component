var dest = './dist',
  src = './src';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest]
    },
    files: [
      dest + '/**'
    ]
  },
  less: {
    src: src + '/less/main.less',
    watch: [
      src + '/less/**'
    ],
    dest: dest
  },
  markup: {
    src: src + "/**/*.html",
    dest: dest
  },
  images: {
    src: src + "/**/*.png",
    dest: dest
  },
  js: src + "/**/*.js"
};
