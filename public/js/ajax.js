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

let btn09 = fnGetEl('#btn09');
let sOutput09 = fnGetEl('#output09');

let fnAJAX1 = () => {
    console.log('ajax fn called');
    let sXhttp = new XMLHttpRequest();      // XMLHttpRequest() = core fn
    sXhttp.onreadystatechange = function(){ // onreadystatechange = core element
        console.log(this.readyState);
        console.log(this.status);
        if(this.readyState == 4 && this.status == 404){  // readyState, status = core elements
            sOutput09.innerHTML = this.responseText;    // responseText = core element
        }
    }
    sXhttp.open('GET', '../assets/text/ajax_info.txt', true);      // open() = core fn
    sXhttp.send();                                  // send() = core fn
}


btn09.addEventListener('click', fnAJAX1);


