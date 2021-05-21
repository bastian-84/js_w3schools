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
// ================== fn Aufruf basics ================== //
// ====================================================== //

(function doThis1(){
    console.log("test1");
})();
var doThis2 = (function(){
    console.log("test2");
})();

doThis3 = () => {
    console.log("test3");
} 
let doThis4 = () => {
    console.log("test4");
} 

doThis3();
doThis4();

// ====================================================== //
// =============== Zeige Anzahl Parameter =============== //
// ====================================================== //
/* let fn2 = (paramA, paramB, paramC) => {
    return arguments.length;
} */
function fn2(paramA, paramB, paramC){
    return arguments.length;
}
console.log(fn2(1, 2, 3));      



// ====================================================== //
// ================= fn param to String ================= //
// ====================================================== //
let fn3 = (paramA, paramB) => {
    return paramA * paramB;
}
console.log(fn3(2,2));
let iX = fn3(2,2);
console.log(iX);
let iY = iX.toString(iX);
console.log(iY);
console.log(typeof(iY));

console.log(fn3.toString());