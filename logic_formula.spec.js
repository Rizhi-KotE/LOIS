describe('Determine that string is logic formula', function() {

    it('atom in braces is not formula', function() {
        expect(isFormula('(A)')).toBe(false);
    });

    it('binary formula', function() {
        expect(isFormula('(A&B)')).toBe(true);
    });

    it('atom should not have braces', function() {
        expect(isFormula('A')).toBeTruthy();
    });

    it('binary formula should have braces', function() {
        expect(isFormula('A&B')).toBe(false);
    });

    it('unary formula should have braces', function() {
        expect(isFormula('(!A)')).toBe(true);
    });

    it('recursive unary formula should have braces', function() {
        expect(isFormula('(!(!A))')).toBe(true);
    });

    it('recursive atom should not have braces', function() {
        expect(isFormula('(!(A))')).toBe(false);
    });

    it('recursive binary with atom should not have braces', function() {
        expect(isFormula('(A&(!A))')).toBe(true);
    });

    it('recursive binary formulas should not have braces', function() {
        expect(isFormula('(A&(B|A))')).toBe(true);
    });

    describe('Tokenizer', function() {
        it('sbc', function() {
            var tokenizer = new Tokenizer("((A11->)!&|~102");
            expect(tokenizer.nextToken()).toBe('(');
            expect(tokenizer.nextToken()).toBe('(');
            expect(tokenizer.nextToken()).toBe('A11');
            expect(tokenizer.nextToken()).toBe('->');
            expect(tokenizer.nextToken()).toBe(')');
            expect(tokenizer.nextToken()).toBe('!');
            expect(tokenizer.nextToken()).toBe('&');
            expect(tokenizer.nextToken()).toBe('|');
            expect(tokenizer.nextToken()).toBe('~');
            expect(tokenizer.nextToken()).toBe('1');
            expect(tokenizer.nextToken()).toBe('0');
        })
    })
});