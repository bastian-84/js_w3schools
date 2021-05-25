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
// ================== get HTML Elements ================= //
// ================== Für Ausgabe ======================= //
// ====================================================== //
//let output02 = document.getElementById('output02Id');
//let output02 = document.querySelector('#output02Id');
let output02 = document.querySelector('.output02Class');

output02.innerHTML = 'Works';

// ====================================================== //
// ================== get HTML Elements 2 =============== //
// ================== Für Abgreifen ===================== //
// ====================================================== //
let output03 = document.querySelector('#output03');
let i1 = document.getElementsByTagName('i');            // <i> hat den Inhalt "some italic text ..."              

output03.innerHTML = 'Works with ...' + i1[0].innerHTML; 

// ====================================================== //
// ================== get HTML Elements 2 =============== //
// ================== Für Abgreifen ===================== //
// ====================================================== //
let output04 = document.querySelector('#output04');
let i2 = document.getElementsByClassName('iClass');            // <i> hat den Inhalt "some italic text ..."              

output04.innerHTML = 'Works with ...' + i2[0].innerHTML; 







// ====================================================== //
// ================== Changing HTML Elements ============ //
// ================== document.write( ) ================= //
// ====================================================== //
//  Wird am Ende des Documents angefügt  //
document.write(Date());

// ====================================================== //
// ================== Changing HTML Elements ============ //
// ================== innerHTML ========================= //
// ====================================================== //
document.getElementById('output05').innerHTML = 'innerHTML txt...';

// ====================================================== //
// ================== Changing HTML Elements ============ //
// ================== changeText ======================== //
// ====================================================== //
let btnChangeTxt = fnGetEl('#btnChangeTxt');
let output06 = document.getElementById('output06');

let fnInnerHTML = () => {
    output06.innerHTML = 'Text created with innerHTML...';
}
fnInnerHTML();

let fnChangeTxt = () => {
    output06.innerHTML = 'Text edited via fnChangeTxt( )...';
}
btnChangeTxt.addEventListener('click', fnChangeTxt);



// ====================================================== //
// ================== Changing HTML Elements ============ //
// ================== attribute value change ============ //
// ====================================================== //
document.getElementById('myImage').src ='https://thisinterestsme.com/LOGO.png?x95127';


// ====================================================== //
// ================== Changing HTML Elements ============ //
// ================== css =============================== //
// ====================================================== //
//let p1 = document.getElementById('p1');
//let p1 = document.getElementsByTagName('p');
//let p1 = document.getElementsByClassName('p1Class');
//let p1 = document.querySelector('#p1');
let p1 = document.querySelector('.p1Class');
p1.style.color = 'cyan';


// ====================================================== //
// ================== Changing HTML Elements ============ //
// ================== addEventListener ================== //
// ====================================================== //
let eventOutput = fnGetEl('#eventOutput');
let eventButton = fnGetEl('#eventButtonId');


let fnDoSomeInnerHTML2 = () => {
    eventOutput.innerHTML = 'addEventListener output ...';
}

eventButton.addEventListener('click', fnDoSomeInnerHTML2);