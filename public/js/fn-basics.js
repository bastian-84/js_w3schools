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

// ====================================================== //
// ================= fn param vorgegeben ================ //
// ====================================================== //
let fnParamVorg = (paramA, paramB = 2) => {
    return paramA * paramB;
}
console.log(fnParamVorg(4));

// ====================================================== //
// ====================== find max ====================== //
// ====================== funktioniert nicht mit arrow function! ====================== //
// ====================================================== //
let iMax;

function fnFindMax () {
    let i;
    let iMaxValue = -Infinity;
    for(i = 0; i < arguments.length; i++){
        if(arguments[i] > iMaxValue){
            iMaxValue = arguments[i];
        }
    }
    return iMaxValue;
}
console.log(fnFindMax(4,6,2));

// ====================================================== //
// =================== call( ) fn obj =================== //
// ====================================================== //
let sPerson = {
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
}
let sPerson1 = {
    firstName: 'Claire',
    lastName: 'Redfield'
}
let sPerson2 = {
    firstName: 'Chris',
    lastName: 'Redfield'
}

console.log(sPerson.fullName.call(sPerson1));
console.log(sPerson.fullName.call(sPerson2));

// ====================================================== //
// =================== call( ) fn param obj ============= //
// ====================================================== //
let sPersonXX = {
    fullName: function(paramCity, paramCountry){
        return this.firstName + ' ' + this.lastName + ', ' + paramCity + ', ' + paramCountry;
    }
}
let sPerson3 = {
    firstName: 'Claire',
    lastName: 'Redfield'
}
let sPerson4 = {
    firstName: 'Chris',
    lastName: 'Redfield'
}

console.log(sPersonXX.fullName.call(sPerson3, 'Raccoon City', 'U.S.'));

// ====================================================== //
// ====================== apply( ) ====================== //
// ====================================================== //
let sPersonXY = {
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
}
let sPerson5 = {
    firstName: 'Claire',
    lastName: 'Redfield'
}
console.log(`apply( ) = `+ sPersonXY.fullName.apply(sPerson5));

// ====================================================== //
// ==================== apply( ) arr ==================== //
// ====================================================== //

let sPersonYY = {
    fullName: function(paramCity, paramCountry){
        return this.firstName + ' ' + this.lastName + ', ' + paramCity + ', ' + paramCountry;
    }
}
let sPerson6 = {
    firstName: 'Claire',
    lastName: 'Redfield'
}
console.log(`apply( ) = `+ sPersonYY.fullName.apply(sPerson6, ['Oslo', 'Norway']));

// ====================================================== //
// ================== apply( ) Math.max ================= //
// ====================================================== //
console.log(Math.max(1,2,3));
console.log(Math.max.apply(null, [1,2,3]));