module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['PhantomJS'],
    autoWatch: true,
    preprocessors: {
      'test/*.js': ['babel'],
      'src/js/*.js': ['babel']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      }
    },



    // these are default values anyway
    singleRun: false,
    colors: true,
    
    files : [
      //3rd Party Code
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/js/*.js',

      //Test-Specific Code
      'test/*.js'
    ]
  });
};

