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
// ================== Herausfinden was "this" ist ======= //
// ====================================================== //
let fnWhatIsTHIS = () => {
    return this;
};
let fnParamWhatIsTHIS = (param) => {
    let output = param;
    output = this;
    return param;
};

let sTHIS = fnWhatIsTHIS();
console.log(sTHIS);

let sY = 'Y';
let sTHIS2 = fnParamWhatIsTHIS(sY);
console.log(sTHIS2);

// ====================================================== //
// ================== Herausfinden was "this" ist ======= //
// ====================================================== //
let oGameCharacter = {
    firstName: 'Claire',
    lastName: 'Redfield',
    xyz: function(){
        return this;
    }
}
console.log(oGameCharacter.xyz());