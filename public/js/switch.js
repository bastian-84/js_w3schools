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
// ================== switch case WDH =================== //
// ====================================================== //

let status = 2;

switch(status){
    case 1:
        console.log('Status is set to: ' + 'I');
        break;
    case 2:
        console.log('Status is set to: ' + 'II');
        break;
    default:
        console.log('...');
        break;
}
    


