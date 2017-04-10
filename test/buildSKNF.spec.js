describe('build SKNF function', function () {
    describe('create params map', function () {
        it('', function () {
            let atoms = ['A', 'B'];
            let params = generateParams(atoms);
            expect(params[0]).toEqual({A: 0, B: 0});
            expect(params[1]).toEqual({A: 0, B: 1});
            expect(params[2]).toEqual({A: 1, B: 0});
            expect(params[3]).toEqual({A: 1, B: 1});
        })
    })

    describe('generate row params map', function () {
        it('Atoms A and B it row with index 2', function () {
            let atoms = ['A', 'B'];
            let row = generateRow(atoms, 2);
            expect(row['A']).toBe(1);
            expect(row['B']).toBe(0);
        })
    })

    describe('calculate table', function () {
        it('', function () {

            let tree = parseLogicFormula('(A&(!A))').tree;
            let atoms = collectAtoms(tree);
            let table = calculateTableOfThruth(tree, atoms);

            expect(table).toEqual([[{A: 0}, false], [{A: 1}, false]]);
        });
    });

    it('calculate sknf table', function () {

        let tree = parseLogicFormula('(A|B)').tree;
        let table = calculateSKNFTable(tree);
        expect(table).toEqual([
            [['A', 0], ['B', 0]]
        ]);
    });

    describe('build elementary disjunction', function () {

        it('without negatiations', function () {
            let row = [['A', 0], ['B', 0], ['C', 0]];
            expect(elementaryDisjunction(row)).toBe('(A|(B|C))');
        });

        it('has negatiations', function () {
            let row = [['A', 1], ['B', 0], ['C', 1]];
            expect(elementaryDisjunction(row)).toBe('((!A)|(B|(!C)))');
        });

    })

    describe('build SKNF', function () {

        it('without negatiations', function () {
            let sknf = buildSKNF('(A|B)');
            expect(sknf).toBe('(A|B)');
        });

        it('has negatiations', function () {
            let sknf = buildSKNF('(A&B)');
            expect(sknf).toBe('((A|B)&((A|(!B))&((!A)|B)))');
        });

    })
});