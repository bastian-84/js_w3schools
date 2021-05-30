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
console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);
console.log(screen.colorDepth);
console.log(screen.pixelDepth);
console.log(window.location.href);
console.log(window.location.hostname);
console.log(navigator.cookieEnabled);
console.log(navigator.appName);
console.log(navigator.appCodeName);
console.log(navigator.product);
console.log(navigator.appVersion);
console.log(navigator.userAgent);
console.log(navigator.platform);
console.log(navigator.onLine);

let backBtn = fnGetEl('#gobackBtn');

backBtn.addEventListener('click',  fnGoBack = () => {
    window.history.back();
    console.log('go back fn called...');
});

