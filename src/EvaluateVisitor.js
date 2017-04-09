function EvaluateVisitor(params) {

    let logic_functions = {
        '&': function (a, b) {
            return a & b;
        },
        '|': (function (a, b) {
            let table = {
                0b00: 0,
                0b01: 1,
                0b10: 1,
                0b11: 1
            };
            return function (a, b) {
                return table[a << 1 | b];
            }
        })(),
        '->': (function () {
            let table = {
                0b00: 1,
                0b01: 1,
                0b10: 0,
                0b11: 1
            };
            return function (a, b) {
                return table[a << 1 | b];
            }
        })(),
        '~': (function () {
            let table = {
                0b00: 1,
                0b01: 0,
                0b10: 0,
                0b11: 1
            };
            return function (a, b) {
                return table[a << 1 | b];
            }
        })(),
        '!': function (a) {
            return !a;
        }
    };

    this.visitFile = function (ctx) {
        return this.visitFormula(ctx.children[0]) === 1;
    };

    this.visitFormula = function (ctx) {
        return this.visit(ctx.children[0]);
    };


    this.visitAtom = function (ctx) {
        return params[ctx.getText()];
    };

    this.visitConstant = function (ctx) {
        return ctx.getText === '1';
    };

    this.visitBinary_formula = function (ctx) {
        let a = this.visitFormula(ctx.formula()[0]);
        let b = this.visitFormula(ctx.formula()[1]);
        let couple = ctx.binary_couple().getText();
        return logic_functions[couple](a, b);
    };
    
    this.visitUnary_formula = function (ctx) {
        let a = this.visitFormula(ctx.formula());
        return logic_functions['!'](a);
    }
}

EvaluateVisitor.prototype = Object.create(Logic.LogicVisitor.prototype);