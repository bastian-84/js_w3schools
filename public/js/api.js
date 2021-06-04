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
// ================== Geolocation ======================= //
// ================== USE CHROME, NOT FIREFOX =========== //
// ====================================================== //
let sOutput10 = fnGetEl('#output10');
let btn10 = fnGetEl('#btn10');


let fnShowPosition = (paramPosition) => {
    console.log('fnShowPosition called. ');
    console.log('Lat: ' + paramPosition.coords.latitude + ', Long:' + paramPosition.coords.longitude);
    sOutput10.innerHTML = 'Lat: ' + paramPosition.coords.latitude + ', Long:' + paramPosition.coords.longitude;
}

let fnGetGeoLocation = () => {
    console.log('fnGetGeoLocation called. ');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(fnShowPosition);
        
    }else{
        console.log('Turn on geo location');
        sOutput10.innerHTML = 'Turn on geo location';
    }
}


btn10.addEventListener('click', fnGetGeoLocation);

