var antlr4 = require('./node_modules/antlr4/index.js');
var LogicLexer = require('./grammars/LogicLexer');
var LogicParser = require('./grammars/LogicParser');


function isFormula(str) {
    var errorListener = parseLogicFormula(str);
    return errorListener.hasNotError();
};

function parseLogicFormula(str) {
    function listener() {
        var listener = new antlr4.error.ErrorListener();
        var errors = [];
        listener.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
            errors.push("line " + line + ":" + column + " " + msg);
        };
        listener.getError = function () {
            return errors[0] || "";
        };
        listener.hasNotError = function () {
            return errors.length == 0;
        };
        return listener;
    };
    var chars = new antlr4.InputStream(str);
    var lexer = new LogicLexer.LogicLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new LogicParser.LogicParser(tokens);
    parser.buildParseTrees = true;
    var listener = new listener();
    parser.removeErrorListeners();
    parser.addErrorListener(listener);
    parser.file();
    return listener;
}

module.exports = {
    isFormula: isFormula,
    parseLogicFormula: parseLogicFormula
}
