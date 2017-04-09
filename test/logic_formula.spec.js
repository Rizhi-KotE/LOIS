const logicFormula = require("../src/logicFormulaParser.js");
const isFormula = logicFormula.isFormula;
describe('Determine that string is logic formula', function () {

    it('atom in braces is not formula', function () {
        expect(isFormula('(A)')).toBe(false);
    });

    it('binary formula', function () {
        expect(isFormula('(A&B)')).toBe(true);
    });

    it('atom should not have braces', function () {
        expect(isFormula('A')).toBeTruthy();
    });

    it('binary formula should have braces', function () {
        expect(isFormula('A&B')).toBe(false);
    });

    it('unary formula should have braces', function () {
        expect(isFormula('(!A)')).toBe(true);
    });

    it('recursive unary formula should have braces', function () {
        expect(isFormula('(!(!A))')).toBe(true);
    });

    it('recursive atom should not have braces', function () {
        expect(isFormula('(!(A))')).toBe(false);
    });

    it('recursive binary with atom should not have braces', function () {
        expect(isFormula('(A&(!A))')).toBe(true);
    });

    it('recursive binary formulas should not have braces', function () {
        expect(isFormula('(A&(B|A))')).toBe(true);
    });

    it('recursive binary formulas should not have braces', function () {
        expect(isFormula('((A&B)|(D|C))')).toBe(true);
    });


    describe('EvaluateVisitor', function () {
        let visitor, parseLogicFormula;
        beforeEach(function () {
            visitor = new logicFormula.EvaluateVisitor();
            parseLogicFormula = logicFormula.parseLogicFormula;
        });

        it('(A&B) interpretation of [1,1] has value true', function () {

            var tree = parseLogicFormula('(A&B)').tree;
            expect(visitor.visit(tree, {A: true, B: true})).toBe(true)

        });
    });
});