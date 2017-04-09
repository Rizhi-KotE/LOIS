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
