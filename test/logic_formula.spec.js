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

        describe('Test ((Q|R)->((P|Q)->(P|R))) formula', () => {
            let tree = parseLogicFormula('((Q|R)->((P|Q)->(P|R)))').tree;
            let result = [true, true, true, true, false, true, true, true,];

            for (let i = 0; i < 8; i++) {
                it(`Attempt number ${i}`, () => {
                    let q = i >> 2 & 1;
                    let r = i >> 1 & 1;
                    let p = i & 1;
                    let visitor = new EvaluateVisitor({Q: q, R: r, P: p});
                    expect(visitor.visit(tree)).toBe(result[i]);
                })
            }
        });

        describe('Test (Q|R) formula', () => {
            let tree = parseLogicFormula('(Q|R)').tree;
            let result = [false, true, true, true];

            for (let i = 0; i < 4; i++) {
                it(`Attempt number ${i}`, () => {
                    let q = i >> 1 & 1;
                    let r = i & 1;
                    let visitor = new EvaluateVisitor({Q: q, R: r});
                    expect(visitor.visit(tree)).toBe(result[i]);
                })
            }
        });

        describe('Test (Q&R) formula', () => {
            let tree = parseLogicFormula('(Q&R)').tree;
            let result = [false, false, false, true];

            for (let i = 0; i < 4; i++) {
                it(`Attempt number ${i}`, () => {
                    let q = i >> 1 & 1;
                    let r = i & 1;
                    let visitor = new EvaluateVisitor({Q: q, R: r});
                    expect(visitor.visit(tree)).toBe(result[i]);
                })
            }
        });

        describe('Test (Q->R) formula', () => {
            let tree = parseLogicFormula('(Q->R)').tree;
            let result = [true, true, false, true];

            for (let i = 0; i < 4; i++) {
                it(`Attempt number ${i}`, () => {
                    let q = i >> 1 & 1;
                    let r = i & 1;
                    let visitor = new EvaluateVisitor({Q: q, R: r});
                    expect(visitor.visit(tree)).toBe(result[i]);
                })
            }
        });

        describe('Test ((!A)|(!B)) formula', () => {
            let tree = parseLogicFormula('((!A)|(!B))').tree;
            let result = [true, true, true, false];

            for (let i = 0; i < 4; i++) {
                it(`Attempt number ${i}`, () => {
                    let a = i >> 1 & 1;
                    let b = i & 1;
                    let visitor = new EvaluateVisitor({A: a, B: b});
                    expect(visitor.visit(tree)).toBe(result[i]);
                })
            }
        });

        describe('Test (A~(B~C)) formula', () => {
            let tree = parseLogicFormula('(A~(B~C))').tree;
            let result = [false, true, true, false, true, false, false, true];

            for (let i = 0; i < 4; i++) {
                it(`Attempt number ${i}`, () => {
                    let a = i >> 2 & 1;
                    let b = i >> 1 & 1;
                    let c = i & 1;
                    let visitor = new EvaluateVisitor({A: a, B: b, C: c});
                    expect(visitor.visit(tree)).toBe(result[i]);
                })
            }
        });

        describe('Test ((P|Q)->(P|R)) formula', () => {
            let tree = parseLogicFormula('((P|Q)->(P|R))').tree;
            let result = [true, true, false, true, true, true, true, true];

            for (let i = 0; i < 8; i++) {
                it(`Attempt number ${i}`, () => {
                    let p = i >> 2 & 1;
                    let q = i >> 1 & 1;
                    let r = i & 1;
                    let visitor = new EvaluateVisitor({Q: q, R: r, P: p});
                    expect(visitor.visit(tree)).toBe(result[i]);
                })
            }
        })

    });
});