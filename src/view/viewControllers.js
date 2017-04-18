//
// let $ = require('../../node_modules/jquery/dist/jquery.min.js');
// let EntryPoint = require('../logicFormulaParser.js');

checkFormulaView = (function () {
    let currentClass = "alert-info";
    let selector = '#checkFormulaState .message';
    let setClass = (function () {
        return function (clazz) {
            $(selector).removeClass(currentClass);
            currentClass = clazz;
            $(selector).addClass(clazz);

        }
    })();


    function submitFunction() {
        var listener = parseLogicFormula($('input.formula').val()).errorListener;
        if (listener.hasNotError()) {
            setMessage("This string is logic formula", "alert-success")
        } else {
            setMessage(listener.getError(), "alert-warning");
        }
    }

    function setMessage(message, clazz) {
        $(selector).empty();
        $(selector).append(message);
        setClass(clazz);
    }

    function init() {
        $(selector).addClass(currentClass);
    }

    return {
        submitFunction: submitFunction,
        init: init
    }
})();


let testFormulaView = (function () {
    let currentClass = "alert-info";
    let messageSelector = '#testFormulaMessage';

    function setClass(clazz) {
        $(messageSelector).removeClass(currentClass);
        currentClass = clazz;
        $(messageSelector).addClass(clazz);
    }

    function setMessage(message, clazz) {
        $(messageSelector).empty();
        $(messageSelector).append(message);
        setClass(clazz)
    }

    let formulas = ['(A&B)', 'A&B', '(A&B&C)', '((A&B)&C)'];

    let counter = 1;

    let formulaSpanSelector = '#formulaSpan';

    function changeTestFormula() {
        $(formulaSpanSelector).text(formulas[counter++ % formulas.length])
    }

    function init() {
        setClass(currentClass);
        $(formulaSpanSelector).addClass('alert-info');
        changeTestFormula();
    }

    return {
        testFormula: function (userAnswer) {
            var formula = $(formulaSpanSelector).text();
            var listener = parseLogicFormula(formula).errorListener;
            if (userAnswer === listener.hasNotError()) {
                setMessage('Верно', "alert-success")
            } else {
                if (listener.hasNotError()) {
                    setMessage("Формула верна!", "alert-warning")
                } else {
                    setMessage(listener.getError(), "alert-warning");
                }
            }
        },


        changeTestFormula: changeTestFormula,

        init: init,
    }
})();

let buildSCNFView = (function () {
    let currentClass = "alert-info";
    let messageSelector = '#buildSCNF > form > div.message.alert';
    let formulaSelector = '#buildSKNFFormula';
    let scnfSelector = '#buildSCNFOut';

    function setClass(clazz) {
        $(messageSelector).removeClass(currentClass);
        currentClass = clazz;
        $(messageSelector).addClass(clazz);
    }

    function setMessage(message, clazz) {
        $(messageSelector).empty();
        $(messageSelector).append(message);
        $(messageSelector).css('display', 'block');
        setClass(clazz)
    }

    function setFormula(formula) {
        $(scnfSelector).val(formula);
    }

    return {
        buildSCNF: function () {
            try {
                let formula = $(formulaSelector).val();
                let scnf = buildSCNF(formula);
                setFormula(scnf);
                $(messageSelector).css('display', 'none');
            } catch (e) {
                setMessage(e, "alert-warning");
            }
        }
    }
})();

let scnfTestView = (function () {
    let currentClass = "alert-info";
    let messageSelector = '#SCNFTestMessage';

    let formulaExampleSelector = '#SCNFTestExample';
    let scnfSelector = '#SCNFTestFormula';

    let formulas = ['(A&B)', '((A&B)&C)', '(A|(B|C))'];

    let counter = 1;

    function changeTestFormula() {
        $(formulaExampleSelector).val(formulas[counter++ % formulas.length])
    }

    function setClass(clazz) {
        $(messageSelector).removeClass(currentClass);
        currentClass = clazz;
        $(messageSelector).addClass(clazz);
    }

    function setMessage(message, clazz) {
        $(messageSelector).empty();
        $(messageSelector).append(message);
        $(messageSelector).css('display', 'block');
        setClass(clazz)
    }

    return {
        testSCNF: function () {
            try {
                let example = $(formulaExampleSelector).val();
                let formula = $(scnfSelector).val();
                if(!verifySKNF(formula, example)){
                    throw 'not equal formulas';
                }
                $(messageSelector).css('display', 'none')
                setMessage('Верно', 'alert-success')
            } catch (e) {
                setMessage(e, "alert-warning");
            }
        },

        init: function () {
            changeTestFormula();
        },

        changeTestFormula: changeTestFormula
    }
})();


let changeState = (function () {
    var states = ['#checkFormulaState', '#testFormulaState', '#buildSCNF', '#SCNFTest'];

    function checkFormulaState() {
        states.forEach(state => $(state).css('display', 'none'));
        $('#checkFormulaState').css('display', 'block')
    }

    function testFormulaState() {
        states.forEach(state => $(state).css('display', 'none'));
        $('#testFormulaState').css('display', 'block')
    }

    function buildSKNFState() {
        states.forEach(state => $(state).css('display', 'none'));
        $('#buildSCNF').css('display', 'block')
    }

    function testSKNFState() {
        states.forEach(state => $(state).css('display', 'none'));
        $('#SCNFTest').css('display', 'block')
    }

    return {
        checkFormulaState: checkFormulaState,
        testFormulaState: testFormulaState,
        buildSKNFState: buildSKNFState,
        testSKNFState: testSKNFState
    }
})();

$(changeState.checkFormulaState);
$(testFormulaView.init);
$(checkFormulaView.init);
$(scnfTestView.init);

// exports.checkFormulaView = checkFormulaView;
// exports.testFormulaView = testFormulaView;
// exports.changeState = changeState;