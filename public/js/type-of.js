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
// ================== typeof ============================ //
// ====================================================== //

let x = "Claire";

console.log(`typeof output: ` + typeof(x));

// ====================================================== //
// ======================== Null ======================== //
// ====================================================== //
let oObj1 = {
    firstName: 'Claire',
    lastName: 'Redfield',
    age: 24
}
let aArr1 = [
    5,
    6, 
    8
]
let sString = 'Claire';
let iNr = 8;
// ~~~~~~~~~~~~~~~~~ null ~~~~~~~~~~~~~~~~ //
console.log(oObj1);     // outputs firstName: 'Claire', lastName: 'Redfield', age: 24
oObj1 = null;
console.log(oObj1);     // outputs object, (datatype)

console.log(aArr1);
aArr1 = null;
console.log(aArr1);

console.log(sString);
sString = null;
console.log(sString);

console.log(iNr);
iNr = null;
console.log(iNr);

// ~~~~~~~~~~~~~~ undefined ~~~~~~~~~~~~~~ //
console.log(oObj1);     // outputs firstName: 'Claire', lastName: 'Redfield', age: 24
oObj1 = undefined;
console.log(oObj1);     // outputs object, (datatype)

console.log(aArr1);
aArr1 = undefined;
console.log(aArr1);

console.log(sString);
sString = undefined;
console.log(sString);

console.log(iNr);
iNr = undefined;
console.log(iNr);

let sString2;           // undefined
console.log(sString2);

// ~~~~~~~~~~~ typeof function ~~~~~~~~~~~ //
let fnDoThis = () => {

}
console.log(typeof(fnDoThis));