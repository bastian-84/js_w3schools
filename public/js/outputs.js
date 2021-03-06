// ##################################################################### //
// ########################## Hilfsfunktionen ########################## //
// ##################################################################### //
/* 
function fnGetEl(param1){
    return document.getElementById(param1);
}
 */
var fnGetEl = (param1) => {
    return document.getElementById(param1);
}

// ##################################################################### //
// ################################ Code ############################### //
// ##################################################################### //

// ====================================================== //
// ================== outputs =========================== //
// ====================================================== //

// ====================================================== //
// ====================== innerHTML ===================== //
// ====================================================== //
const output01 = fnGetEl('output01');

let fnDoInnerHTML = () => {
    output01.innerHTML = 'fnDoInnerHTML output';
} 
fnDoInnerHTML();

// ====================================================== //
// ================== document.write( ) ================= //
// ====================================================== //
document.write('Output from document.write( )');

// ====================================================== //
// =================== window.alert( ) ================== //
// ====================================================== //
//window.alert('here is some alert.')

// ====================================================== //
// ===================== console.log ==================== //
// ====================================================== //
let fnDoConsoleLog = () => {
    console.log(`console log s output`);
}
fnDoConsoleLog();

// ====================================================== //
// =================== window.print( ) ================== //
// ====================================================== //
const b1 = fnGetEl('b1');

let fnDoWindowPrint = () => {
    window.print();
}
b1.addEventListener('click', fnDoWindowPrint);