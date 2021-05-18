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
// ================== xxx ================== //
// ====================================================== //

console.log(Math.PI);

console.log(Math.round(4.9));
console.log(Math.ceil(4.2));    // outputs 5
console.log(Math.floor(4.2));   // outputs 4
console.log(Math.trunc(4.9));   // outputs 4
console.log(Math.sign(4));   // outputs 1, null or positive
console.log(Math.pow(8, 2));   // 8 * 8
console.log(Math.sqrt(36));   // outputs 6, Wurzel aus
console.log(Math.min(36, 11, 12));   // 
console.log(Math.max(36, 11, 12));   // 
console.log(Math.random());   // 
console.log(Math.round(Math.random() * 1000));   // random Nr 0 - 1000, gerundet
