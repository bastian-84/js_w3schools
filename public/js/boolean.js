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
//let bX;               // undefined
let bX = '';         // <empty string>

let fnBooleanIs = (param) => {
    if(bX == true){
        console.log('var is TRUE');
    }else{
        console.log('var is FALSE');
    };
}

console.log(bX);

fnBooleanIs(bX);

//bX = new Boolean(true);
bX = true;

console.log(bX);

fnBooleanIs(bX);