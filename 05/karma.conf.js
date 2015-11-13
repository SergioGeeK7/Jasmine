module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            'app/lib/angular/angular.min.js',
            'app/lib/angular-mocks/angular-mocks.js',
            'app/js/**/*.js',
            'tests/**/*.js'
        ],
        autoWatch: false,
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        singleRun: true,
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
            'karma-phantomjs-launcher'
        ],
        junitReporter: {
            outputFile: 'test_reports/junit/junit.xml',
            suite: 'unit'
        },
        preprocessors: {
            'app/js/**/*.js': ['coverage']
        },
        coverageReporter: {
            dir: 'test_reports/coverage/',
            reporters: [
                {
                    type: 'lcov',
                    subdir: '.'
                },
                {
                    type: 'cobertura',
                    subdir: '.',
                    file: 'cobertura.xml'
                }
            ]
        }
    });
};
