function verifySKNF(formula, sknf) {
    let formulaParseResult = parseLogicFormula(formula);
    if (!formulaParseResult.errorListener.hasNotError()) throw new Error('formula is incorrect logic formula');
    let sknfParseResult = parseLogicFormula(sknf);
    if (!sknfParseResult.errorListener.hasNotError()) throw new Error('sknf is incorrect logic formula');
    let formulaTable = calculateSKNFTable(formulaParseResult.tree);
    let sknfTable = new SKNFVisitor().visit(sknfParseResult.tree);
    return compareTables(formulaTable, sknfTable);
}

function compareTables(t1, t2) {
    function normalizeTable(t) {
        return t
            .map(row => row.sort((l, r) => l[0].localeCompare(r[0])))
            .map(row => [row, row.reduce((sum, tuple, index) => sum | tuple[1] << (row.length - 1 - index), 0)])
            .sort((row1, row2) => row1[1] - row2[1])
            .map(tuple => tuple[0]);
    }

    //normalize tables for compare it as strings
    return JSON.stringify(normalizeTable(t1)).localeCompare(JSON.stringify(normalizeTable(t2))) === 0;
}

function SKNFVisitor() {
    let table = [];
    let self = this;

    this.buildElementaryDisjunction = function (ctx) {

        function buildAtoms(ctx, disjunction) {
            if (ctx.atom()) {
                return disjunction.concat([[ctx.atom().getText(), 0]]);
            } else if (ctx.unary_formula()) {
                let negatiation = ctx.unary_formula().formula();
                if (negatiation.atom()) {
                    return disjunction.concat([[negatiation.atom().getText(), 1]]);
                } else throw Error("elementary disjunction cannot has negatiation of non atom formula");
            } else if (ctx.binary_formula()) {
                return buildBinary(ctx.binary_formula(), disjunction)
            } else if (ctx.constant()) {
                throw new Error('elementary disjunction cannot have constant');
            }
        }

        function buildBinary(ctx, disjunction) {
            if (ctx.binary_couple().getText() === '|') {
                return buildAtoms(ctx.formula()[0], disjunction)
                    .concat(buildAtoms(ctx.formula()[1], disjunction));
            } else {
                throw new Error(`elementary disjunction should has | binary_couple but exist ${ctx.binary_couple().getText()}`)
            }
        }

        if (ctx.binary_formula()) {
            return buildBinary(ctx.binary_formula(), []);
        } else {
            return buildAtoms(ctx, [])
        }

    };

    this.buildConjunction = function (ctx) {

        // function buildElementary(ctx, conjunction) {
        //     if (ctx.binary_formula()) {
        //         return conjunction.concat([self.buildElementaryDisjunction(ctx.binary_formula())]);
        //     }
        // }

        function buildBinary(ctx, conjunction) {
            if (ctx.binary_couple().getText() === '&') {
                return buildFromFormula(ctx.formula()[0], conjunction).concat(
                    buildFromFormula(ctx.formula()[1], conjunction));
            } else if (ctx.binary_couple().getText() === '|') {
                return conjunction.concat([self.buildElementaryDisjunction(ctx.parentCtx)]);
            } else {
                throw new Error(`elementary disjunction should has & binary_couple but exist ${ctx.binary_couple().getText()}`)
            }
        }

        function buildFromFormula(ctx, conjunction) {
            if (ctx.atom()) {
                return conjunction.concat([self.buildElementaryDisjunction(ctx)]);
            } else if (ctx.unary_formula()) {
                return conjunction.concat([self.buildElementaryDisjunction(ctx)]);
            } else if (ctx.binary_formula()) {
                return conjunction.concat(buildBinary(ctx.binary_formula(), conjunction));
            } else if (ctx.constant()) {
                throw new Error('conjunction cannot have constant');
            }
        }

        return buildFromFormula(ctx, []);
    };

    this.visit = function (ctx) {
        if (ctx.formula()) {
            return self.buildConjunction(ctx.formula());
        } else throw Error('incorrect tree node')
    };
}
SKNFVisitor.prototype = Object.create(new Logic.LogicVisitor());