module.exports = {
    entry: './test/literalNumbers.spec.js',
    output: {
        filename: 'bundle.js'
    },
    node: {
        fs: 'empty'
    },
    mode: 'development',   
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['../node_modules/babel-preset-env']
              }
            }
          }
        ]
      }
};