const path = require('path');

module.exports = {
    entry: {
        dist: './src/logicFormulaParser.js',
        test: './test/specs.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        libraryTarget: 'var',
        library: 'EntryPoint'
    },
    node: { module: "empty", net: "empty", fs: "empty" },
    devtool: "source-map"
};