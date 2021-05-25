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
let nElement2 = fnGetEl('#nElement2');
let nPara2 = document.createElement('p');
let nNode2 = document.createTextNode('This is a new textNode 2');

nPara2.appendChild(nNode2);
nElement2.appendChild(nPara2);

