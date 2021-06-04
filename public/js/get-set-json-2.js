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

let oObj1 = {
    name: 'Claire',
    age: 24,
    city: 'Raccoon City'
};
let sMyJson = JSON.stringify(oObj1);
console.log(sMyJson);


// ====================================================== //
// ==================== local storing =================== //
// ==================== ./assets/img/local-storage.png  = //
// ====================================================== //
let oObj2, jJSON2, sTxt2, oObj3;

// Storing data:
oObj2 = {
    name: 'Chris',
    age: 28,
    city: 'Raccoon City'
};
jJSON2 = JSON.stringify(oObj2);
localStorage.setItem('item1', jJSON2);

// Retreiving data:
sTxt2 = localStorage.getItem('item1');
oObj3 = JSON.parse(sTxt2);

console.log(oObj3.name);


// ====================================================== //
// =================== edit JSON File =================== //
// ====================================================== //
let oObj4, sX4;

oObj4 = {
    name: 'Jill',
    age: 25,
    city: 'Raccoon City'
};
oObj4.name = 'Leon';
console.log(oObj4.name);


// ====================================================== //
// =================== array exercise =================== //
// ====================================================== //
let oObj5, i, j, sX5;
oObj5 = {
    "sName": "John",
    "age": 30,
    "aCars": [{
            "sName": "Ford",
            "aModels": ["Fiesta", "Focus", "Mustang"]
        },
        {
            "sName": "BMW",
            "aModels": ["320", "X3", "X5"]
        },
        {
            "sName": "Fiat",
            "aModels": ["500", "Panda"]
        }
    ]
}
for(i in oObj5.aCars){
    sX5 += '<h4>' + oObj5.aCars[i].sName + '</h2>';
    for(j in oObj5.aCars[i].aModels){
        sX5 += oObj5.aCars[i].aModels[j] + '<br />';
    }
}
sOutput01.innerHTML = sX5;