// @ts-check 

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    /************ ELEMENTY ******/
    let calculator = document.querySelector('.calculator');
    let calcPanel = document.querySelector('.calcPanel');
    let equalButton = document.querySelector('.calcBtnEq');
    let changeViewButton = document.querySelector('.changeViewBtn');


    /************ ZDARZENIA ******/

    // wykorzystanie bąbelkowania zdarzenia
    calcPanel.addEventListener('click', Calculator.setScreen, false);

    // .bind - pierwszy argument określa wyraźnie obiekt kontektu this dla funkcji/metody, kolejne określają argumentu
    equalButton.addEventListener('click', Calculator.parseExpression.bind(Calculator, true));

    // obsługa klawiatury
    document.onkeydown = function (e) {
        switch (e.key) {
        case '0':
            Calculator.setScreen('0');
            break;
        case '1':
            Calculator.setScreen('1');
            break;
        case '2':
            Calculator.setScreen('2');
            break;
        case '3':
            Calculator.setScreen('3');
            break;
        case '4':
            Calculator.setScreen('4');
            break;
        case '5':
            Calculator.setScreen('5');
            break;
        case '6':
            Calculator.setScreen('6');
            break;
        case '7':
            Calculator.setScreen('7');
            break;
        case '8':
            Calculator.setScreen('8');
            break;
        case '9':
            Calculator.setScreen('9');
            break;
        case '+':
            Calculator.setScreen('+');
            break;
        case '-':
            Calculator.setScreen('-');
            break;
        case '*':
            Calculator.setScreen('*');
            break;
        case '/':
            Calculator.setScreen('/');
            break;
        case '^':
            Calculator.setScreen('^');
            break;
            // c nie działa?
        case 'c' || 'C':
            Calculator.setScreen('C');
            break;
        case 'Enter' || ('Shift' && '+'):
            Calculator.parseExpression();
            break;
        }
        event.preventDefault();
    };

    changeViewButton.addEventListener('click', () => {
        if (window.innerWidth > 600) {
            calculator.classList.toggle('calculator--traditional');
            calculator.classList.toggle('calculator--original');
        }
    });
});