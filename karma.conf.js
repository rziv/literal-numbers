module.exports = (config) => {
    config.set({
        // ... normal karma configuration
        files: [
            // all files ending in ".spec"
            { pattern: 'test/*.spec.js', watched: false },
            { pattern: 'test/**/*.spec.js', watched: false }
            // each file acts as entry point for the webpack configuration
        ],
        frameworks: ["jasmine"],
        browsers: [ "ChromeHeadless"],
        preprocessors: {
            // add webpack as preprocessor
            'test/*.spec.js': ['webpack'],
            'test/**/*.spec.js': ['webpack']
        },

        webpack: {
            // karma watches the test entry points
            // (you don't need to specify the entry option)
            // webpack watches dependencies

            // webpack configuration
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only'
        }
    })
}