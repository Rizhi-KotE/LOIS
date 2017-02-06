function Tokenizer(string) {
    var pos = 0;
    return {
        nextToken: function() {
            var char = string.slice(pos, pos + 1);
            if (char == '(') {
                pos++;
                return char;
            } else if (char == ')') {
                pos++;
                return char;
            } else if (char == '!') {
                pos++;
                return char;
            } else if (char == '&') {
                pos++;
                return char;
            } else if (char == '|') {
                pos++;
                return char;
            } else if (char == '~') {
                pos++;
                return '~';
            } else if (char == '-') {
                pos++;
                if (string.slice(pos, pos + 1) == '>') {
                    char += string.slice(pos, pos + 1);
                    pos++;
                    return char;
                } else {
                    throw Error(`not a token in position ${pos} [${char}]`);
                }
            } else if (/[A-B]/.test(char)) {
                pos++;
                for (; /[0-9]/.test(string.slice(pos, pos + 1)); pos++) {
                    char += string.slice(pos, pos + 1);
                }
                return char;
            } else if (/[01]/.test(char)) {
                pos++;
                return char;
            } else
                throw Error(`not a token in position ${pos} [${char}]`);

        },
        predictNextToken: function() {
            var oldPos = pos;
            var nextToken = this.nextToken();
            pos = oldPos;
            return nextToken;
        },
        hasNextToken: function() {
            try {
                var nextToken = this.predictNextToken();
                return true;
            } catch (err) {
                return false;
            }
        }
    }
}

function TreeNode(left, node, right) {
    this.left = left;
    this.node = node;
    this.right = right;
}

var parseLogicFormula = (function() {
    function classifyToken(str) {
        if (str == '(') {
            return str;
        } else if (str == ')') {
            return str;
        } else if (str == '!') {
            return str;
        } else if (/[&|(->)~]/.test(str)) {
            return 'binary';
        } else if (/[A-Z][0-9]*/.test(str)) {
            return 'atom';
        } else if (/[01]/.test(str)) {
            return 'constant';
        } else
            throw Error(`not a token [${str}]`);

    }

    function unaryFormula(tokenizer) {
        var node = tokenizer.nextToken();
        var left = formula(tokenizer);
        var nextToken = tokenizer.nextToken();
        if (classifyToken(nextToken) !== ')') throw Error('binary formula should to be closed');
        return new TreeNode(left, node)
    }

    function binaryFormula(tokenizer) {
        var left = formula(tokenizer);
        var node = tokenizer.nextToken();
        if (classifyToken(node) !== 'binary') {
            throw Error('not a binary formula');
        }
        var right = formula(tokenizer);
        var nextToken = tokenizer.nextToken();
        if (classifyToken(nextToken) !== ')') throw Error('binary formula should to be closed');
        return new TreeNode(left, node, right);
    }

    function formula(tokenizer) {
        var nextToken = tokenizer.nextToken();
        if (classifyToken(nextToken) === 'atom') {
            return new TreeNode('atom', nextToken);
        } else if (classifyToken(nextToken) === 'constant') {
            return new TreeNode('constant', nextToken);
        } else if (classifyToken(nextToken) === '(') {
            nextToken = tokenizer.predictNextToken();
            if (classifyToken(nextToken) === '!') {
                return unaryFormula(tokenizer);
            } else {
                return binaryFormula(tokenizer);
            }
        } else {
            throw Error('is not a formula')
        }
    }

    return function(str) {
        var tokenizer = new Tokenizer(str);
        var f = formula(tokenizer);
        if (tokenizer.hasNextToken()) throw Error('left untreated tokens');
        return f;
    }
})();

function isFormula(str) {
    try {
        parseLogicFormula(str);
        return true;
    } catch (err) {
        return false;
    }
}

