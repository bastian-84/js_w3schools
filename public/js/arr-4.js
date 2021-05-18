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
// ================== arr for each ====================== //
// ====================================================== //
let sTxt = '';
let aNumbers = [45, 4, 9, 16, 25];

function fnForeach(value, index, array){
    sTxt = sTxt + value + " ";
}

aNumbers.forEach(fnForeach);

console.log(sTxt);

// ====================================================== //
// ===================== arr Map( ) ===================== //
// ===================== creates new arr with fn ======== //
// ====================================================== //

function fnMultiplay(value, index, array){
    return value * 2;
}
let aNumbers2 = aNumbers.map(fnMultiplay);
console.log(aNumbers2);

// ====================================================== //
// ==================== arr filter( ) =================== //
// ==================== creates new arr due filter( ) === //
// ====================================================== //
function fnShowOver18(value, index, array){
    return value > 18;
}
let aNumbers18 = aNumbers.filter(fnShowOver18);
console.log(aNumbers18);

// ====================================================== //
// ==================== arr every( ) ==================== //
// ==================== filters, true / false =========== //
// ====================================================== //
function fnOver18True(value, index, array){
    return value > 18;
}
let aNumbers18T = aNumbers.every(fnOver18True);
console.log(aNumbers18T);

// ====================================================== //
// ==================== arr some( ) ===================== //
// ==================== filters, are some true / false == //
// ====================================================== //
function fnOver18S(value, index, array){
    return value > 18;
}
let aNumbers18S = aNumbers.some(fnOver18S);
console.log(`Some over 18 is: `  + aNumbers18S);



// ====================================================== //
// ==================== arr reduce( ) =================== //
// ==================== show sum ======================== //
// ====================================================== //
function fnShowSum(total, value, index, array){
    return total + value;
}
let aNumbers3 = aNumbers.reduce(fnShowSum);
console.log(aNumbers3);

// ====================================================== //
// ==================== arr reduceRight( ) ============== //
// ==================== show sum ======================== //
// ====================================================== //
function fnShowSumRight(total, value, index, array){
    return total + value;
}
let aNumbers4 = aNumbers.reduceRight(fnShowSumRight);
console.log(aNumbers4);


