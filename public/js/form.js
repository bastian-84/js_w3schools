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
// ================== form validation =================== //
// ====================================================== //

let sB2 = fnGetEl('b2');


let fnVerify = () => {
    let sTxt;

    let sX = fnGetEl('sFormNumber').value;
    console.log(sX);

    if(isNaN(sX) || sX < 1 || sX > 10){
        sTxt = 'Input not valid.';
    }else{
        sTxt = 'Input OK';
    }
    sOutput01.innerHTML = sTxt;

}
sB2.addEventListener('click', fnVerify);


// ====================================================== //
// ================== form validation =================== //
// ================== checkValidity( ) ================== //
// ====================================================== //

let sB3 = fnGetEl('b3');


let fnVerify2 = () => {
   let inpObj = fnGetEl('id1');
   if(!inpObj.checkValidity()){
    sOutput01.innerHTML = inpObj.validationMessage;
   }else{
    sOutput01.innerHTML = 'Input OK.';
   }
    

}
sB3.addEventListener('click', fnVerify2);


