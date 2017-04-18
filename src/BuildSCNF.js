function generateParams(atoms) {
    return new Array(2 ** atoms.length)
        .fill(1)
        .map((a, row_num) => row_num)
        .map(num_row => generateRow(atoms, num_row));
}

function generateRow(atoms, num_row) {
    return atoms
        .reduce((map, atom, atom_num) => {
            map[atom] = num_row >> (atoms.length - 1 - atom_num) & 1;
            return map;
        }, {});
}

function calculateTableOfThruth(tree, atoms) {
    return generateParams(atoms)
        .map((params => [params, new EvaluateVisitor(params).visit(tree)]))
}

function elementaryDisjunction(row) {
    let leftFormula = !row[0][1] ? row[0][0] : `(!${row[0][0]})`;
    return row.length === 1 ? leftFormula :
        `(${leftFormula}|${elementaryDisjunction(row.slice(1))})`
}

function buildSCNFString(table) {
    let leftFormula = elementaryDisjunction(table[0]);
    return table.length === 1 ? leftFormula :
        `(${leftFormula}&${buildSCNFString(table.slice(1))})`;
}

function calculateSCNFTable(tree) {
    let atoms = collectAtoms(tree);
    if (atoms.length === 0) throw "formula has not any atom";
    return calculateTableOfThruth(tree, atoms)
        .filter(tuple => tuple[1] === false)
        .map(tuple =>
            Object.keys(tuple[0]).map(key => [key, tuple[0][key]]));
}

function buildSCNF(str) {
    let result = parseLogicFormula(str);
    if(!result.errorListener.hasNotError()){
        throw result.errorListener.getError();
    }
    let sknfTable = calculateSCNFTable(result.tree);
    if (sknfTable.length === 0) throw "formula is identicaly true";
    return buildSCNFString(sknfTable);
}