"use strict";
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
// ================== json, ext. .json ================== //
// ====================================================== //

//"use strict"; // OBEN EINGESETZT

// Siehe Evernote https://www.evernote.com/shard/s423/nl/73470048/6c10bcaa-6c85-4871-8ee1-51ccd78ee5c0?title=%5B.json%201%5D%20Auslesen%20ext.%20.json%20file

// Es wird ein php Server (lokal gebraucht)

// ====================================================== //
// =================== w3Schools Bsp. =================== //
// ====================================================== //
let sText = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

let jObj = JSON.parse(sText);

let sOutput = jObj.employees[1].firstName + ' ' + jObj.employees[1].lastName;
console.log(sOutput);

