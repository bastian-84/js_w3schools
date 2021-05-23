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
// ================== Promise =========================== //
// ====================================================== //

let fnDisplayer = (param) => {
    console.log(param);
}
//fnDisplayer('Test');

// Promise ist eine core class von JS
let sPromise = new Promise(function(paramResolve, paramReject){
    let iX = 0;

    if(iX == 0){
        paramResolve('OK');
    }else{
        paramReject('Error');
    }
});

sPromise.then(
    function(value){fnDisplayer(value);},
    function(error){fnDisplayer(error);}
);


// ====================================================== //
// ================== Promise 2 ========================= //
// ================== async ============================= //
// ====================================================== //
// ~~~~~~ if has value, return value ~~~~~ //
async function fnHello  () {
    return 'Hello';
};

fnHello().then(
    function(value){fnDisplayer(value);},
    function(error){fnDisplayer(error);}
)

// ====================================================== //
// ================== Promise 2 ========================= //
// ======================== await ======================= //
// ====================================================== //

async function fnDisplay2(){
    let sPromise2 = new Promise(function(paramResolve, paramReject){
        paramResolve('Text...');
    });
    console.log(await sPromise2);
}
fnDisplay2();












