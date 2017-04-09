const antlr4 = require('../node_modules/antlr4/index.js');
const LogicLexer = require('../antlr/src/LogicLexer');
const LogicParser = require('../antlr/src/LogicParser');
const LogicVisitor = require('../antlr/src/LogicVisitor').LogicVisitor;

function isFormula(str) {
    var parser = parseLogicFormula(str);
    return parser.errorListener.hasNotError();
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
    var tree = parser.file();
    parser.errorListener = listener;
    return {
        errorListener: listener,
        tree: tree
    };
}

function EvaluateVisitor() {
    LogicVisitor.call(this);
    undefined.asd();

    this.visitConjunction = function (ctx) {
        console.log(ctx)
    };
    return this;
}

module.exports = {
    isFormula: isFormula,
    parseLogicFormula: parseLogicFormula,
    EvaluateVisitor: EvaluateVisitor
};
