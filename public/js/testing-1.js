// ##################################################################### //
// ########################## Hilfsfunktionen ########################## //
// ##################################################################### //
var fnGetEl = (param1) => {
    //return document.getElementById(param1);
    return document.querySelector(param1);
}

// ##################################################################### //
// ################################ Code ############################### //
// ##################################################################### //
//let sOutput01 = fnGetEl('output01');
let sOutput01 = fnGetEl('#output01');

// ====================================================== //
// ================== xxx ================== //
// ====================================================== //
let btnTesting = fnGetEl('#testing');

let fnAdd = (paramA, paramB) => {
    return paramA + paramB;
}
console.log(fnAdd(4,5));

let fnConsoleLog = () => {
    console.log('fnConsoleLog output...');
    console.log(fnAdd(4,3));
}
let obj1 = {
    output: fnAdd(1,3)
}
let fnConsLogObj = () => {
    console.log(obj1.output);
}
//btnTesting.addEventListener('click', fnAdd(4,3));
btnTesting.addEventListener('click', fnConsLogObj);
btnTesting.addEventListener('click', fnConsoleLog);

