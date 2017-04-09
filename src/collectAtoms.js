let collectAtoms = (function collectAtoms() {

    let atoms = {};

    function CollectAtomsVisitor() {
        this.visitAtom = function (ctx) {
            atoms[ctx.getText()] = 1;
        };
    }

    CollectAtomsVisitor.prototype = Object.create(Logic.LogicVisitor.prototype);


    return function (ctx) {
        atoms = {};
        new CollectAtomsVisitor().visit(ctx);
        return Object.keys(atoms);
    }
})();
