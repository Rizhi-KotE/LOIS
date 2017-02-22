grammar Logic;

file            :formula EOF;
formula		    :const|atom|unary_formula|binary_formula;
const           :'1'|'0';
negatiation		:'!';
conjunction		:'&';
disjunction		:'|';
implication		:'->';
eqivalencio		:'~';
binary_couple	:implication|conjunction|disjunction|eqivalencio;
atom		    :SYMBOL;
unary_formula   :'('negatiation formula')';
binary_formula  :'('formula binary_couple formula')';


SYMBOL: [A-Z];