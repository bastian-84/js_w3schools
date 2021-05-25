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
// ================== read nodes  ======================= //
// ====================================================== //
let id01 = fnGetEl('#id01');
console.log(`Node name id01 = `+ id01.nodeName);

// ====================================================== //
// ================== create nodes  ===================== //
// ====================================================== //

let nElement = fnGetEl('#nElement');
let nPara = document.createElement('p');
let nNode = document.createTextNode('This is a new textNode');

nPara.appendChild(nNode);
nElement.appendChild(nPara);

// ====================================================== //
// ================== create nodes, before ============== //
// ====================================================== //
let nPara2 = document.createElement('p');
let nNode2 = document.createTextNode('This is a new textNode 2');
nPara2.appendChild(nNode2);

let nElement2 = fnGetEl('#nElement2');
let nChild2 = fnGetEl('#para1')

nElement2.insertBefore(nPara2, nChild2);

// ====================================================== //
// ================== delete node entry ================= //
// ================== remove( ) ========================= //
// ====================================================== //
let delBtn30 = fnGetEl('#delBtn30');

let fnDel = () => {
    let sElem = fnGetEl('#para31');
    sElem.remove();
}
delBtn30.addEventListener('click', fnDel);

// ====================================================== //
// ================== remove Child elem ================= //
// ================== removeChild( ) ==================== //
// ====================================================== //
let nElement4 = fnGetEl('#nElement4');
let para41 = fnGetEl('#para41')

let delBtn40 = fnGetEl('#delBtn40');

let fnRemChld = () => {
    nElement4.removeChild(para41);
}

delBtn40.addEventListener('click', fnRemChld);

// ====================================================== //
// ==================== repace child ==================== //
// ====================================================== //
let nElement5 = fnGetEl('#nElement5');
let para51 = fnGetEl('#para51')
let para52 = fnGetEl('#para52')
let newP = document.createElement('p');
let newPtxtNode = document.createTextNode('newPtxtNode...');

let delBtn50 = fnGetEl('#delBtn50');

let fnReplaceChld = () => {
    newP.appendChild(newPtxtNode);
    nElement5.replaceChild(newP, para51);
}

delBtn50.addEventListener('click', fnReplaceChld);