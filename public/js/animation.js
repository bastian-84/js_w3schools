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
let btnAni = fnGetEl('#aniBtn');
let sId = null;

let fnAnimate = () => {
    let sElem = fnGetEl('#animate');
    let iPos = 0;
    clearInterval(sId);     // JS core method
    sId = setInterval(fnFrame, 5);
    function fnFrame(){
        if(iPos == 350){
            clearInterval(sId);
        }else{
            iPos++;
            sElem.style.top = iPos + 'px';
            sElem.style.left = iPos + 'px';
        }
    }
}
btnAni.addEventListener('click', fnAnimate);


