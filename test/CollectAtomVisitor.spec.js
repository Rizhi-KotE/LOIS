describe('CollectAtomVisitor', function () {
    it('((A&(B|C))&A) contains 3 atoms', function () {
        let tree = parseLogicFormula('((A&(B|C))&A)').tree;
        let atoms = collectAtoms(tree);
        expect(atoms.length).toBe(3);
        expect(atoms.includes('A')).toBeTruthy();
        expect(atoms.includes('B')).toBeTruthy();
        expect(atoms.includes('C')).toBeTruthy();
    })
});