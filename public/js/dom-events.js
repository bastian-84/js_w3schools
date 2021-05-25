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
// ================== onload event ====================== //
// ====================================================== //
let fnCheckCookies = () => {
    let sTxt = '';
    if(navigator.cookieEnabled == true){
        console.log('Cookies = TRUE');
    }else{
        console.log('Cookies = FALSE');
    }
}

window.onload = fnCheckCookies();

// ====================================================== //
// ================== onchange event ==================== //
// ====================================================== //
let input1 = fnGetEl('#fname');

let fnDoUppperCase = () => {
    input1.value = input1.value.toUpperCase();
}
input1.addEventListener('change', fnDoUppperCase);


// ====================================================== //
// ===================== onmouseover ==================== //
// ====================================================== //
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp
let mouseOverBox = fnGetEl('.onmouseOverBox');

let fnHover1 = () => {
    mouseOverBox.innerHTML = 'Hovering...';
}
let fnHover2 = () => {
    mouseOverBox.innerHTML = 'Not hovering...';
}

mouseOverBox.addEventListener('mouseover', fnHover1);
mouseOverBox.addEventListener('mouseout', fnHover2);


// ====================================================== //
// ===================== click hold ===================== //
// ====================================================== //
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp
let onClickBox = fnGetEl('.onClickBox');

let fnClick1 = () => {
    onClickBox.innerHTML = 'Clicked, holding button...';
}
let fnClick2 = () => {
    onClickBox.innerHTML = 'Not Clicking...';
}

onClickBox.addEventListener('mousedown', fnClick1);
onClickBox.addEventListener('mouseup', fnClick2);

// ====================================================== //
// ====================== resize( ) ===================== //
// ====================================================== //
let output07 = fnGetEl('#output07');

let fnResizeWindow = () => {
    output07.innerHTML = Math.round(Math.random() * 1000);
}
window.addEventListener('resize', fnResizeWindow);

// ====================================================== //
// ==================== mousemove( ) ==================== //
// ====================================================== //
let mouseMoveBox = fnGetEl('.mouseMoveBox');

mouseMoveBox.innerHTML = 'mouseMoveBox';

let fnMouseMove = () => {
    mouseMoveBox.innerHTML = Math.round(Math.random() * 100)
}

mouseMoveBox.addEventListener('mousemove', fnMouseMove);