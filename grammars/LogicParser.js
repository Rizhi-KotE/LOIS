// Generated from Logic.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LogicListener = require('./LogicListener').LogicListener;
var grammarFileName = "Logic.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\fC\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004\r",
    "\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\"\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n4",
    "\n\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0002\u0002",
    "\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0002",
    "\u0003\u0003\u0002\u0003\u0004<\u0002\u001a\u0003\u0002\u0002\u0002",
    "\u0004!\u0003\u0002\u0002\u0002\u0006#\u0003\u0002\u0002\u0002\b%\u0003",
    "\u0002\u0002\u0002\n\'\u0003\u0002\u0002\u0002\f)\u0003\u0002\u0002",
    "\u0002\u000e+\u0003\u0002\u0002\u0002\u0010-\u0003\u0002\u0002\u0002",
    "\u00123\u0003\u0002\u0002\u0002\u00145\u0003\u0002\u0002\u0002\u0016",
    "7\u0003\u0002\u0002\u0002\u0018<\u0003\u0002\u0002\u0002\u001a\u001b",
    "\u0005\u0004\u0003\u0002\u001b\u001c\u0007\u0002\u0002\u0003\u001c\u0003",
    "\u0003\u0002\u0002\u0002\u001d\"\u0005\u0006\u0004\u0002\u001e\"\u0005",
    "\u0014\u000b\u0002\u001f\"\u0005\u0016\f\u0002 \"\u0005\u0018\r\u0002",
    "!\u001d\u0003\u0002\u0002\u0002!\u001e\u0003\u0002\u0002\u0002!\u001f",
    "\u0003\u0002\u0002\u0002! \u0003\u0002\u0002\u0002\"\u0005\u0003\u0002",
    "\u0002\u0002#$\t\u0002\u0002\u0002$\u0007\u0003\u0002\u0002\u0002%&",
    "\u0007\u0005\u0002\u0002&\t\u0003\u0002\u0002\u0002\'(\u0007\u0006\u0002",
    "\u0002(\u000b\u0003\u0002\u0002\u0002)*\u0007\u0007\u0002\u0002*\r\u0003",
    "\u0002\u0002\u0002+,\u0007\b\u0002\u0002,\u000f\u0003\u0002\u0002\u0002",
    "-.\u0007\t\u0002\u0002.\u0011\u0003\u0002\u0002\u0002/4\u0005\u000e",
    "\b\u000204\u0005\n\u0006\u000214\u0005\f\u0007\u000224\u0005\u0010\t",
    "\u00023/\u0003\u0002\u0002\u000230\u0003\u0002\u0002\u000231\u0003\u0002",
    "\u0002\u000232\u0003\u0002\u0002\u00024\u0013\u0003\u0002\u0002\u0002",
    "56\u0007\f\u0002\u00026\u0015\u0003\u0002\u0002\u000278\u0007\n\u0002",
    "\u000289\u0005\b\u0005\u00029:\u0005\u0004\u0003\u0002:;\u0007\u000b",
    "\u0002\u0002;\u0017\u0003\u0002\u0002\u0002<=\u0007\n\u0002\u0002=>",
    "\u0005\u0004\u0003\u0002>?\u0005\u0012\n\u0002?@\u0005\u0004\u0003\u0002",
    "@A\u0007\u000b\u0002\u0002A\u0019\u0003\u0002\u0002\u0002\u0004!3"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'1'", "'0'", "'!'", "'&'", "'|'", "'->'", "'~'", 
                     "'('", "')'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, "SYMBOL" ];

var ruleNames =  [ "file", "formula", "const", "negatiation", "conjunction", 
                   "disjunction", "implication", "eqivalencio", "binary_couple", 
                   "atom", "unary_formula", "binary_formula" ];

function LogicParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LogicParser.prototype = Object.create(antlr4.Parser.prototype);
LogicParser.prototype.constructor = LogicParser;

Object.defineProperty(LogicParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LogicParser.EOF = antlr4.Token.EOF;
LogicParser.T__0 = 1;
LogicParser.T__1 = 2;
LogicParser.T__2 = 3;
LogicParser.T__3 = 4;
LogicParser.T__4 = 5;
LogicParser.T__5 = 6;
LogicParser.T__6 = 7;
LogicParser.T__7 = 8;
LogicParser.T__8 = 9;
LogicParser.SYMBOL = 10;

LogicParser.RULE_file = 0;
LogicParser.RULE_formula = 1;
LogicParser.RULE_const = 2;
LogicParser.RULE_negatiation = 3;
LogicParser.RULE_conjunction = 4;
LogicParser.RULE_disjunction = 5;
LogicParser.RULE_implication = 6;
LogicParser.RULE_eqivalencio = 7;
LogicParser.RULE_binary_couple = 8;
LogicParser.RULE_atom = 9;
LogicParser.RULE_unary_formula = 10;
LogicParser.RULE_binary_formula = 11;

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.formula = function() {
    return this.getTypedRuleContext(FormulaContext,0);
};

FileContext.prototype.EOF = function() {
    return this.getToken(LogicParser.EOF, 0);
};

FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitFile(this);
	}
};




LogicParser.FileContext = FileContext;

LogicParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LogicParser.RULE_file);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.formula();
        this.state = 25;
        this.match(LogicParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FormulaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_formula;
    return this;
}

FormulaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaContext.prototype.constructor = FormulaContext;

FormulaContext.prototype.const = function() {
    return this.getTypedRuleContext(ConstContext,0);
};

FormulaContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

FormulaContext.prototype.unary_formula = function() {
    return this.getTypedRuleContext(Unary_formulaContext,0);
};

FormulaContext.prototype.binary_formula = function() {
    return this.getTypedRuleContext(Binary_formulaContext,0);
};

FormulaContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterFormula(this);
	}
};

FormulaContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitFormula(this);
	}
};




LogicParser.FormulaContext = FormulaContext;

LogicParser.prototype.formula = function() {

    var localctx = new FormulaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LogicParser.RULE_formula);
    try {
        this.state = 31;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 27;
            this.const();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 28;
            this.atom();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 29;
            this.unary_formula();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 30;
            this.binary_formula();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_const;
    return this;
}

ConstContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstContext.prototype.constructor = ConstContext;


ConstContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterConst(this);
	}
};

ConstContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitConst(this);
	}
};




LogicParser.ConstContext = ConstContext;

LogicParser.prototype.const = function() {

    var localctx = new ConstContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LogicParser.RULE_const);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        _la = this._input.LA(1);
        if(!(_la===LogicParser.T__0 || _la===LogicParser.T__1)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NegatiationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_negatiation;
    return this;
}

NegatiationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegatiationContext.prototype.constructor = NegatiationContext;


NegatiationContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterNegatiation(this);
	}
};

NegatiationContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitNegatiation(this);
	}
};




LogicParser.NegatiationContext = NegatiationContext;

LogicParser.prototype.negatiation = function() {

    var localctx = new NegatiationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LogicParser.RULE_negatiation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        this.match(LogicParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConjunctionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_conjunction;
    return this;
}

ConjunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConjunctionContext.prototype.constructor = ConjunctionContext;


ConjunctionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterConjunction(this);
	}
};

ConjunctionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitConjunction(this);
	}
};




LogicParser.ConjunctionContext = ConjunctionContext;

LogicParser.prototype.conjunction = function() {

    var localctx = new ConjunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LogicParser.RULE_conjunction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this.match(LogicParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DisjunctionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_disjunction;
    return this;
}

DisjunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DisjunctionContext.prototype.constructor = DisjunctionContext;


DisjunctionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterDisjunction(this);
	}
};

DisjunctionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitDisjunction(this);
	}
};




LogicParser.DisjunctionContext = DisjunctionContext;

LogicParser.prototype.disjunction = function() {

    var localctx = new DisjunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, LogicParser.RULE_disjunction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this.match(LogicParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ImplicationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_implication;
    return this;
}

ImplicationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImplicationContext.prototype.constructor = ImplicationContext;


ImplicationContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterImplication(this);
	}
};

ImplicationContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitImplication(this);
	}
};




LogicParser.ImplicationContext = ImplicationContext;

LogicParser.prototype.implication = function() {

    var localctx = new ImplicationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, LogicParser.RULE_implication);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.match(LogicParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EqivalencioContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_eqivalencio;
    return this;
}

EqivalencioContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EqivalencioContext.prototype.constructor = EqivalencioContext;


EqivalencioContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterEqivalencio(this);
	}
};

EqivalencioContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitEqivalencio(this);
	}
};




LogicParser.EqivalencioContext = EqivalencioContext;

LogicParser.prototype.eqivalencio = function() {

    var localctx = new EqivalencioContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, LogicParser.RULE_eqivalencio);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this.match(LogicParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Binary_coupleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_binary_couple;
    return this;
}

Binary_coupleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Binary_coupleContext.prototype.constructor = Binary_coupleContext;

Binary_coupleContext.prototype.implication = function() {
    return this.getTypedRuleContext(ImplicationContext,0);
};

Binary_coupleContext.prototype.conjunction = function() {
    return this.getTypedRuleContext(ConjunctionContext,0);
};

Binary_coupleContext.prototype.disjunction = function() {
    return this.getTypedRuleContext(DisjunctionContext,0);
};

Binary_coupleContext.prototype.eqivalencio = function() {
    return this.getTypedRuleContext(EqivalencioContext,0);
};

Binary_coupleContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterBinary_couple(this);
	}
};

Binary_coupleContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitBinary_couple(this);
	}
};




LogicParser.Binary_coupleContext = Binary_coupleContext;

LogicParser.prototype.binary_couple = function() {

    var localctx = new Binary_coupleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, LogicParser.RULE_binary_couple);
    try {
        this.state = 49;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LogicParser.T__5:
            this.enterOuterAlt(localctx, 1);
            this.state = 45;
            this.implication();
            break;
        case LogicParser.T__3:
            this.enterOuterAlt(localctx, 2);
            this.state = 46;
            this.conjunction();
            break;
        case LogicParser.T__4:
            this.enterOuterAlt(localctx, 3);
            this.state = 47;
            this.disjunction();
            break;
        case LogicParser.T__6:
            this.enterOuterAlt(localctx, 4);
            this.state = 48;
            this.eqivalencio();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.SYMBOL = function() {
    return this.getToken(LogicParser.SYMBOL, 0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitAtom(this);
	}
};




LogicParser.AtomContext = AtomContext;

LogicParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, LogicParser.RULE_atom);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.match(LogicParser.SYMBOL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Unary_formulaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_unary_formula;
    return this;
}

Unary_formulaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_formulaContext.prototype.constructor = Unary_formulaContext;

Unary_formulaContext.prototype.negatiation = function() {
    return this.getTypedRuleContext(NegatiationContext,0);
};

Unary_formulaContext.prototype.formula = function() {
    return this.getTypedRuleContext(FormulaContext,0);
};

Unary_formulaContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterUnary_formula(this);
	}
};

Unary_formulaContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitUnary_formula(this);
	}
};




LogicParser.Unary_formulaContext = Unary_formulaContext;

LogicParser.prototype.unary_formula = function() {

    var localctx = new Unary_formulaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, LogicParser.RULE_unary_formula);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(LogicParser.T__7);
        this.state = 54;
        this.negatiation();
        this.state = 55;
        this.formula();
        this.state = 56;
        this.match(LogicParser.T__8);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Binary_formulaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_binary_formula;
    return this;
}

Binary_formulaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Binary_formulaContext.prototype.constructor = Binary_formulaContext;

Binary_formulaContext.prototype.formula = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormulaContext);
    } else {
        return this.getTypedRuleContext(FormulaContext,i);
    }
};

Binary_formulaContext.prototype.binary_couple = function() {
    return this.getTypedRuleContext(Binary_coupleContext,0);
};

Binary_formulaContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterBinary_formula(this);
	}
};

Binary_formulaContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitBinary_formula(this);
	}
};




LogicParser.Binary_formulaContext = Binary_formulaContext;

LogicParser.prototype.binary_formula = function() {

    var localctx = new Binary_formulaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, LogicParser.RULE_binary_formula);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.match(LogicParser.T__7);
        this.state = 59;
        this.formula();
        this.state = 60;
        this.binary_couple();
        this.state = 61;
        this.formula();
        this.state = 62;
        this.match(LogicParser.T__8);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.LogicParser = LogicParser;
