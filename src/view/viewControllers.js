let $ = require('../../node_modules/jquery/dist/jquery.min.js');
let EntryPoint = require('../logicFormulaParser.js');

function submitFunction() {
    var listener = EntryPoint.parseLogicFormula($('input.formula').val()).errorListener;
    if (listener.hasNotError()) {
        setMessage("This string is logic formula", "alert-success")
    } else {
        setMessage(listener.getError(), "alert-warning");
    }
};

function setMessage(message, clazz) {
    $('.message').empty();
    $('.message').append(message);
    setClass(clazz);
}
var setClass;
$(document).ready(function () {
    var currentClass = "alert-info";
    $('.message').addClass(currentClass);
    setClass = function (clazz) {
        $('.message').removeClass(currentClass);
        currentClass = clazz;
        $('.message').addClass(clazz);
    }
});


var testFormulaView = (function () {
    var currentClass = "alert-info";

    function setClass(clazz) {
        $('#testFormulaMessage').removeClass(currentClass);
        currentClass = clazz;
        $('#testFormulaMessage').addClass(clazz);
    }

    function setMessage(message, clazz) {
        $('#testFormulaMessage').empty();
        $('#testFormulaMessage').append(message);
        setClass(clazz)
    }

    var formulas = ['(A&B)', 'A&B', '(A&B&C)', '((A&B)&C)'];

    var counter = 1;

    return {
        testFormula: function (userAnswer) {
            var formula = $('#formulaSpan').text();
            var listener = EntryPoint.parseLogicFormula(formula).errorListener;
            if (userAnswer === listener.hasNotError()) {
                setMessage('Верно', "alert-success")
            } else {
                setMessage(listener.getError(), "alert-warning");
            }
        },


        changeTestFormula: function () {

            $('#formulaSpan').text(formulas[counter++ % formulas.length])
        }
    }
})();

let changeState = (function () {
    var states = ['checkFormulaState', 'testFormulaState', 'checkSKNFState', 'testSKNFState']

    function checkFormulaState() {
        states.forEach(state => $(`#${state}`).css('display', 'none'));
        $('#checkFormulaState').css('display', 'block')
    }

    function testFormulaState() {
        states.forEach(state => $(`#${state}`).css('display', 'none'));
        $('#testFormulaState').css('display', 'block')
    }

    function checkSKNFState() {
        states.forEach(state => $(`#${state}`).css('display', 'none'));
        $('#checkSKNFState').css('display', 'block')
    }

    function testSKNFState() {
        states.forEach(state => $(`#${state}`).css('display', 'none'));
        $('#testSKNFState').css('display', 'block')
    }
    return {
        checkFormulaState: checkFormulaState,
        testFormulaState: testFormulaState,
        checkSKNFState: checkSKNFState,
        testSKNFState: testSKNFState
}
})();

$(changeState.checkFormulaState);
$(testFormulaView.changeTestFormula);

exports.checkFormulaView =
exports.testFormulaView = testFormulaView;
exports.changeState = changeState;