// Generated from Logic.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\f,\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0002\u0002\f\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0003\u0002\u0003\u0003\u0002",
    "C\\+\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0003\u0017\u0003\u0002\u0002\u0002\u0005\u0019\u0003\u0002\u0002",
    "\u0002\u0007\u001b\u0003\u0002\u0002\u0002\t\u001d\u0003\u0002\u0002",
    "\u0002\u000b\u001f\u0003\u0002\u0002\u0002\r!\u0003\u0002\u0002\u0002",
    "\u000f$\u0003\u0002\u0002\u0002\u0011&\u0003\u0002\u0002\u0002\u0013",
    "(\u0003\u0002\u0002\u0002\u0015*\u0003\u0002\u0002\u0002\u0017\u0018",
    "\u00073\u0002\u0002\u0018\u0004\u0003\u0002\u0002\u0002\u0019\u001a",
    "\u00072\u0002\u0002\u001a\u0006\u0003\u0002\u0002\u0002\u001b\u001c",
    "\u0007#\u0002\u0002\u001c\b\u0003\u0002\u0002\u0002\u001d\u001e\u0007",
    "(\u0002\u0002\u001e\n\u0003\u0002\u0002\u0002\u001f \u0007~\u0002\u0002",
    " \f\u0003\u0002\u0002\u0002!\"\u0007/\u0002\u0002\"#\u0007@\u0002\u0002",
    "#\u000e\u0003\u0002\u0002\u0002$%\u0007\u0080\u0002\u0002%\u0010\u0003",
    "\u0002\u0002\u0002&\'\u0007*\u0002\u0002\'\u0012\u0003\u0002\u0002\u0002",
    "()\u0007+\u0002\u0002)\u0014\u0003\u0002\u0002\u0002*+\t\u0002\u0002",
    "\u0002+\u0016\u0003\u0002\u0002\u0002\u0003\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function LogicLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

LogicLexer.prototype = Object.create(antlr4.Lexer.prototype);
LogicLexer.prototype.constructor = LogicLexer;

LogicLexer.EOF = antlr4.Token.EOF;
LogicLexer.T__0 = 1;
LogicLexer.T__1 = 2;
LogicLexer.T__2 = 3;
LogicLexer.T__3 = 4;
LogicLexer.T__4 = 5;
LogicLexer.T__5 = 6;
LogicLexer.T__6 = 7;
LogicLexer.T__7 = 8;
LogicLexer.T__8 = 9;
LogicLexer.SYMBOL = 10;


LogicLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

LogicLexer.prototype.literalNames = [ null, "'1'", "'0'", "'!'", "'&'", 
                                      "'|'", "'->'", "'~'", "'('", "')'" ];

LogicLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                       null, null, null, null, "SYMBOL" ];

LogicLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                   "T__5", "T__6", "T__7", "T__8", "SYMBOL" ];

LogicLexer.prototype.grammarFileName = "Logic.g4";



exports.LogicLexer = LogicLexer;

