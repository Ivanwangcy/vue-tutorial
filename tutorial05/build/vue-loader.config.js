module.exports = {
  postcss: [
    require('auotoprefixer')({
      browsers: ['last 3 versions']
    })
  ]
};
