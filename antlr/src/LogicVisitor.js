// Generated from Logic.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by LogicParser.

function LogicVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

LogicVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
LogicVisitor.prototype.constructor = LogicVisitor;

// Visit a parse tree produced by LogicParser#file.
LogicVisitor.prototype.visitFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LogicParser#formula.
LogicVisitor.prototype.visitFormula = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LogicParser#constant.
LogicVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LogicParser#negatiation.
LogicVisitor.prototype.visitNegatiation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LogicParser#conjunction.
LogicVisitor.prototype.visitConjunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LogicParser#disjunction.
LogicVisitor.prototype.visitDisjunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LogicParser#implication.
LogicVisitor.prototype.visitImplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LogicParser#eqivalencio.
LogicVisitor.prototype.visitEqivalencio = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LogicParser#binary_couple.
LogicVisitor.prototype.visitBinary_couple = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LogicParser#atom.
LogicVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LogicParser#unary_formula.
LogicVisitor.prototype.visitUnary_formula = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LogicParser#binary_formula.
LogicVisitor.prototype.visitBinary_formula = function(ctx) {
  return this.visitChildren(ctx);
};



exports.LogicVisitor = LogicVisitor;