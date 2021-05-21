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

// ====================================================== //
// ================== try catch ================== //
// ====================================================== //
let output = fnGetEl('output01');
let x1 = '...';


try {
    console.log(x1);
}
catch(err){
    console.log(err.message);
    output.innerHTML = err.message;
}

console.log(x1);


// ====================================================== //
// ================== try catch 2 ================== //
// ====================================================== //
let x;
let y = 3;


try{
    x = y + 1;
}catch(err){
    console.log('Catch message: ' + err);
}

x = y + 1;
console.log(x);

// ====================================================== //
// ==================== syntax error ==================== //
// ==================== try catch 3 eval ================ //
// ====================================================== //
// fn eval( ) https://www.w3schools.com/jsref/jsref_eval.asp

try {
    eval("alert('Hello)");
}catch(err){
    //console.log(err);
}

//eval("alert('Hello)");

// ====================================================== //
// ==================== type error ====================== //
// ==================== try catch 4 ===================== //
// ====================================================== //
/* 
let iNum = 1;
try{
    iNum.toUpperCase();
}catch(err){
    console.log(err);
}
 */
// Es sollte jetzt ein Type Error erscheinen. Es kommt aber ein ... is not a function?

// ====================================================== //
// ======= URI (Uniform Resource Identifier) Error ====== //
// ==================== try catch 5 ===================== //
// ====================================================== //

try {
    decodeURI("%%%");   // You cannot URI decode percent signs
  }
  catch(err) {
    console.log(err);
  }