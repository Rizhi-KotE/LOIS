const path = require('path');

module.exports = {
    entry: {
        antlr4: '/home/rizhi-kote/Student/labs/LOIS/node_modules/antlr4/index.js',
        Logic: './antlr/src/Logic.index.js'
        // dist: './src/logicFormulaParser.js',
        // test: './test/specs.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        libraryTarget: 'var',
        library: '[name]',
        // devtoolModuleFilenameTemplate: '../[resource]'
    },
    node: { module: "empty", net: "empty", fs: "empty" },
    devtool: "inline-source-map"
};