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
// ================== for-each ========================== //
// ====================================================== //
let sTxt = '';
//let sGns = ['M9', '228', 'FN HP', '1911'];
let sGns = [9, 4,  23];
function fnForEach(value, index, array){
    sTxt = sTxt + value + ' ';
}
sGns.forEach(fnForEach);
console.log(sTxt);





var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}
console.log(txt);

