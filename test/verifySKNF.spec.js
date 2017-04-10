describe('verify that this formula is SKNF', function () {
    it('formula (A&B) sknf ((A|B)&((A|(!B))&((!A)|B)))', function () {
        let formula = '(A&B)';
        let sknf = '((A|B)&((A|(!B))&((!A)|B)))';
        expect(verifySKNF(formula, sknf)).toBe(true);
    });

    it('remove one atom', function () {
        let formula = '(A&B)';
        let sknf = '((A|B)&(A&((!A)|B)))';
        expect(verifySKNF(formula, sknf)).toBe(false);
    });

    it('change order of disjunctions', function () {
        let formula = '(A&B)';
        let sknf = '((A|B)&(((!A)|B)&(A|(!B))))';
        expect(verifySKNF(formula, sknf)).toBe(true);
    });

    it('remove one disjunction', function () {
        let formula = '(A&B)';
        let sknf = '((A|B)&((!A)|B))';
        expect(verifySKNF(formula, sknf)).toBe(false);
    });

    it('incorrect formulas', function () {
        let formula = '(A&)';
        let sknf = '(((A|B)&((!A)|B))';
        expect(() => verifySKNF(formula, sknf)).toThrow(new Error('formula is incorrect logic formula'));
        expect(() => verifySKNF('(A&B)', sknf)).toThrow(new Error('sknf is incorrect logic formula'));
    })
});

describe('sknf visitor', function () {
    it('', function () {
        let formula = '((A|B)&((A|(!B))&((!A)|B)))';
        let tree = parseLogicFormula(formula).tree;
        let visitor = new SKNFVisitor();
        expect(visitor.visit(tree)).toEqual([
            [['A', 0], ['B', 0]],
            [['A', 0], ['B', 1]],
            [['A', 1], ['B', 0]]
        ])
    });

    let input = [
        ['A', [['A', 0]]],
        ['(!A)', [['A', 1]]],
        ['(A|((!B)|C))', [['A', 0], ['B', 1], ['C', 0]]],
        ['(A|(B|C))', [['A', 0], ['B', 0], ['C', 0]]],
    ];
    input.forEach((tuple) => {
        it(`${tuple[0]} verify disjunction`, function () {
            let tree = parseLogicFormula(tuple[0]).tree;
            let visitor = new SKNFVisitor();
            let binary_formula = tree.formula();
            expect(visitor.buildElementaryDisjunction(binary_formula))
                .toEqual(tuple[1])
        });
    });


    [
        ['((A|((!B)|C))&(A|(B|C)))', [
            [['A', 0], ['B', 1], ['C', 0]],
            [['A', 0], ['B', 0], ['C', 0]]]],
        ['(A|((!B)|C))', [
            [['A', 0], ['B', 1], ['C', 0]]]]
    ]
        .forEach((tuple) => {
            it(`${tuple[0]} verify conjunctions`, function () {
                let tree = parseLogicFormula(tuple[0]).tree;
                let visitor = new SKNFVisitor();
                let binary_formula = tree.formula();
                expect(visitor.buildConjunction(binary_formula))
                    .toEqual(tuple[1])
            })
        });
});