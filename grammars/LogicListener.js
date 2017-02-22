// Generated from Logic.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by LogicParser.
function LogicListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

LogicListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
LogicListener.prototype.constructor = LogicListener;

// Enter a parse tree produced by LogicParser#file.
LogicListener.prototype.enterFile = function(ctx) {
};

// Exit a parse tree produced by LogicParser#file.
LogicListener.prototype.exitFile = function(ctx) {
};


// Enter a parse tree produced by LogicParser#formula.
LogicListener.prototype.enterFormula = function(ctx) {
};

// Exit a parse tree produced by LogicParser#formula.
LogicListener.prototype.exitFormula = function(ctx) {
};


// Enter a parse tree produced by LogicParser#const.
LogicListener.prototype.enterConst = function(ctx) {
};

// Exit a parse tree produced by LogicParser#const.
LogicListener.prototype.exitConst = function(ctx) {
};


// Enter a parse tree produced by LogicParser#negatiation.
LogicListener.prototype.enterNegatiation = function(ctx) {
};

// Exit a parse tree produced by LogicParser#negatiation.
LogicListener.prototype.exitNegatiation = function(ctx) {
};


// Enter a parse tree produced by LogicParser#conjunction.
LogicListener.prototype.enterConjunction = function(ctx) {
};

// Exit a parse tree produced by LogicParser#conjunction.
LogicListener.prototype.exitConjunction = function(ctx) {
};


// Enter a parse tree produced by LogicParser#disjunction.
LogicListener.prototype.enterDisjunction = function(ctx) {
};

// Exit a parse tree produced by LogicParser#disjunction.
LogicListener.prototype.exitDisjunction = function(ctx) {
};


// Enter a parse tree produced by LogicParser#implication.
LogicListener.prototype.enterImplication = function(ctx) {
};

// Exit a parse tree produced by LogicParser#implication.
LogicListener.prototype.exitImplication = function(ctx) {
};


// Enter a parse tree produced by LogicParser#eqivalencio.
LogicListener.prototype.enterEqivalencio = function(ctx) {
};

// Exit a parse tree produced by LogicParser#eqivalencio.
LogicListener.prototype.exitEqivalencio = function(ctx) {
};


// Enter a parse tree produced by LogicParser#binary_couple.
LogicListener.prototype.enterBinary_couple = function(ctx) {
};

// Exit a parse tree produced by LogicParser#binary_couple.
LogicListener.prototype.exitBinary_couple = function(ctx) {
};


// Enter a parse tree produced by LogicParser#atom.
LogicListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by LogicParser#atom.
LogicListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by LogicParser#unary_formula.
LogicListener.prototype.enterUnary_formula = function(ctx) {
};

// Exit a parse tree produced by LogicParser#unary_formula.
LogicListener.prototype.exitUnary_formula = function(ctx) {
};


// Enter a parse tree produced by LogicParser#binary_formula.
LogicListener.prototype.enterBinary_formula = function(ctx) {
};

// Exit a parse tree produced by LogicParser#binary_formula.
LogicListener.prototype.exitBinary_formula = function(ctx) {
};



exports.LogicListener = LogicListener;