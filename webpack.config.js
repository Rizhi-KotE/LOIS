const path = require('path');

module.exports = {
    entry: {
        dist: './logic_formula.js',
        test: './logic_formula.spec.js'
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