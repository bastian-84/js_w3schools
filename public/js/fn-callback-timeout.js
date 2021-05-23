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
let sOutput01 = fnGetEl('output01');

// ====================================================== //
// ================== callback ================== //
// ====================================================== //
/* 
let fnCallback = () => {
    console.log('Test');
}
let fnDoConsoleLog = (param) => {
    let x = param;
    x.fnCallback();
}
 */
/* 
function fnCallback(){
    console.log('Test');
}
function fnDoConsoleLog (fnCallback){
    fnCallback();
}
fnCallback();
fnDoConsoleLog();
 */

// ====================================================== //
// ============== Basic ============== //
// ====================================================== //
/* 
let fnTaskOne = () => {
    console.log('Task 1');
}
let fnTaskTwo = () => {
    console.log('Task 2');
}

fnTaskOne();
fnTaskTwo();
 */
// ====================================================== //
// ============== Bsp. 1 mit setTimeout( ) ============== //
// ====================================================== //
/* 
let fnTaskOne = () => {
    console.log('Task 1');
}
 */

setTimeout(fnTaskOne = () => {
    console.log('Task 1');
}, 1000);

// ====================================================== //
// ============= eventlistener & callback-fn ============ //
// ====================================================== //
let b4 = document.querySelector('#b4');

b4.addEventListener('click', function fnTaskOne () {
    console.log('Button b4 clicked...');
})



