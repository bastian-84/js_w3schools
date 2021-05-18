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
// ================== sort( ) =========================== //
// ====================================================== //
let arr1 = ['M9', 'USP', 'Socom', '226', '57', 'P8'];
console.log(`FYI: arr1 = ['M9', 'USP', 'Socom', '226', '57', 'P8']`);
console.log(arr1);
console.log('sort( )');
console.log(arr1.sort());


// ====================================================== //
// ================== reverse( ) ======================== //
// ====================================================== //
console.log(`reverse( )`);
let arr2 = ['M9', 'USP', 'Socom', '226', '57', 'P8'];
console.log(arr2);
console.log(arr2.reverse());

// ====================================================== //
// ====================== int sort Variante 1 =========== //
// ================= Sort Alphabetically ================ //
// ====================================================== //
console.log('int sort');
let aPoints = [40, 100, 1, 5, 25, 10];
console.log(aPoints);

aPoints.sort()

console.log(aPoints);
// ====================================================== //
// ====================== int sort Variante 2 =========== //
// ================= Sort Numerically =================== //
// ====================================================== //
console.log('int sort with fn');
let aPoints2 = [40, 100, 1, 5, 25, 10];
console.log(aPoints2);

let fnSortInt2 = () => {
    aPoints2.sort(function(paramA, paramB){
        return paramA - paramB;
    })
}
fnSortInt2();
console.log(aPoints2);

// ====================================================== //
// =================== sort arr random ================== //
// ====================================================== //
console.log('int sort with fn random');
let aPoints3 = [40, 100, 1, 5, 25, 10];
console.log(aPoints3);

let fnSortInt3 = () => {
    aPoints3.sort(function(paramA, paramB){
        return 0.5 - Math.random();
    })
}
fnSortInt3();
console.log(aPoints3);

// ====================================================== //
// =================== sort arr random ================== //
// =================== sort arr random Variante 2 ======= //
// =================== "Fisher Yates shuffle" =========== //
// ====================================================== //
console.log('int sort with fn random Variante 2');
let aPoints4 = [40, 100, 1, 5, 25, 10];
console.log(aPoints4);

let i = 0;
for(i = aPoints4.length -1; i > 0; i--){
    let iRandomNr = Math.floor(Math.random() * i);
    let iArrIndex = aPoints4[i];
    aPoints4[i] = aPoints4[iRandomNr];
    aPoints4[iRandomNr] = iArrIndex;
}
console.log(aPoints4);

// ====================================================== //
// ============= Highest lowes value in arr? ============ //
// ====================================================== //
console.log('highest lowest?');
let aPoints5 = [40, 100, 1, 5, 25, 10];
console.log(aPoints5);

let fnSortAsc = () => {
    aPoints5.sort(function(paramA, paramB){
        return paramA - paramB;
    })
}
fnSortAsc();
console.log(aPoints5);

let fnSortDesc = () => {
    aPoints5.sort(function(paramA, paramB){
        return paramB - paramA;
    })
}
fnSortDesc();
console.log(aPoints5);


// ====================================================== //
// ====================== Min / Max ===================== //
// ====================================================== //
console.log('min max value of arr?');
let aPoints6 = [40, 100, 1, 5, 25, 10];
console.log(aPoints6);

let fnMaxArrVal = (paramArr) => {
    return Math.max.apply(null, paramArr);
}
console.log('Max value = ' + fnMaxArrVal(aPoints6));

let fnMinArrVal = (paramArr) => {
    return Math.min.apply(null, paramArr);
}
console.log('Min value = ' + fnMinArrVal(aPoints6));

// ====================================================== //
// ====================== Min / Max ===================== //
// ====================== Variante 2 ==================== //
// ====================================================== //
console.log('min max value of arr?');
let aPoints7 = [40, 100, 1, 5, 25, 10];
console.log(aPoints7);

let fnMaxArrVal2 = (paramArr) => {
    let len = paramArr.length;
    let max = -Infinity;
    while(len--){
        if(paramArr[len] > max){
            max = paramArr[len];
        }
    }
    return max;
}
console.log('Max value = ' + fnMaxArrVal2(aPoints7));

let fnMinArrVal2 = (paramArr) => {
    let len = paramArr.length;
    let min = Infinity;
    while(len--){
        if(paramArr[len] < min){
            min = paramArr[len];
        }
    }
    return min;
    
}
console.log('Min value = ' + fnMinArrVal2(aPoints7));

// ====================================================== //
// =============== Sort Objects in Arrays =============== //
// ====================================================== //
console.log('sort obj in arr');
let aPoints8 = [
    {
        type: 'SA',
        cal: 9
    },
    {
        type: 'SA',
        cal: 11
    },
    {
        type: 'DA',
        cal: 8
    }
];
console.log(aPoints8);

let fnSortByCal = () => {
    aPoints8.sort(function(paramA, paramB){
        return paramA.cal - paramB.cal;
    })
}
fnSortByCal();
console.log(aPoints8);

// FYI: bei fn = true, wird der console.log line 187 von der fn überschrieben


// ====================================================== //
// =============== Sort Objects in Arrays Variante 2 ==== //
// ====================================================== //
console.log('sort obj in arr Variante 2');
let aPoints9 = [
    {
        type: 'SA',
        cal: 9
    },
    {
        type: 'SA',
        cal: 11
    },
    {
        type: 'DA',
        cal: 8
    }
];
console.log(aPoints9);

let fnSortByCal2 = () => {
    aPoints9.sort(function(paramA, paramB){
        let x = paramA.type.toLowerCase();
        let y = paramB.type.toLowerCase();
        if(x < y){
            return -1;
        }
        if(x > y){
            return 1;
        }
        return 0;
    })
}
fnSortByCal2();
console.log(aPoints9);

// FYI: bei fn = true, wird der console.log line 218 von der fn überschrieben

