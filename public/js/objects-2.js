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
// ================== obj fn ============================ //
// ====================================================== //

let oPerson = {
    firstName: 'Claire',
    lastName: 'Redfield',
    fullName: function () {
        return oPerson.firstName + " " + this.lastName;
    }
}
// Aufruf via obj.fn()
console.log(oPerson.fullName());

// ====================================================== //
// ================== obj fn 2 ========================== //
// ====================================================== //

let oPerson2 = {
    firstName: 'Chris',
    lastName: 'Redfield',

}
oPerson2.fullName2 = function () {
    return oPerson2.firstName + " " + this.lastName;
}
console.log(oPerson2.fullName2());

// ====================================================== //
// ================== Object.values( ) ================== //
// ================== Converting obj to arr ============= //
// ====================================================== //
let oPerson3 = {
    name: "John",
    age: 50,
    city: "New York"
}
let aArr3 = Object.values(oPerson3);
console.log(`aArr3[0] = `);
console.log(aArr3[0]);

// ====================================================== //
// ================== JSON.stringify( ) ================= //
// ================== Converting obj to String ========== //
// ====================================================== //
let oPerson4 = {
    name: "John",
    age: 50,
    city: "New York"
}
let sStr4 = JSON.stringify(oPerson4);
console.log(sStr4);
console.log(typeof (sStr4));

// ====================================================== //
// ================== JSON.stringify( ) ================= //
// ================== Converting obj date to String ===== //
// ====================================================== //
let oPerson5 = {
    name: "John",
    age: 50,
    city: "New York",
    today: new Date()
}
let sStr5 = JSON.stringify(oPerson5);
console.log(sStr5);
console.log(typeof (sStr5));


// ====================================================== //
// ================== JSON.stringify( ) ================= //
// ================== (stringify) arr to String ========= //
// ====================================================== //
let arr6 = ["John", "Peter", "Sally", "Jane"];
let sStr6 = JSON.stringify(arr6);
console.log(sStr6);
console.log(typeof (sStr6));


// ====================================================== //
// ============= declaring var as String( ) ============= //
// ====================================================== //
var sX = new String();
console.log(sX);
var sX = new String('Claire');
/* outputs String
​
0: "C"
​
1: "l"
​
2: "a"
​
3: "i"
​
4: "r"
​
5: "e"
*/
console.log(sX);

var nX = new Number();
console.log(nX);
var nX = new String(4, 6);
console.log(nX);

// ====================================================== //
// ===================== Core method ==================== //
// ====================================================== //
console.log(Date());

// ====================================================== //
// ========================= get ======================== //
// ====================================================== //
let oPerson6 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get fnGetLanguage(){
        return this.language;
    }
}
console.log(oPerson6.fnGetLanguage);

// ====================================================== //
// ======================= set( ) ======================= //
// ====================================================== //
let oPerson7 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set fnSetLanguage(fnSetLanguage){
        this.language = fnSetLanguage;
    }
}
// set
oPerson7.fnSetLanguage = 'de';
console.log(oPerson7.language);

// ====================================================== //
// ======================= get set ====================== //
// ====================================================== //
// Define an object
let oObj8 = {
    iCounter : 0
};
// Define Setters and Getters
Object.defineProperty(oObj8, 'reset', {
    get : function () {
        this.iCounter = 0;
    }
});

Object.defineProperty(oObj8, 'increment', {
    get : function () {
        this.iCounter++;
    }
});

Object.defineProperty(oObj8, 'decrement', {
    get : function () {
        this.iCounter--;
    }
});

Object.defineProperty(oObj8, 'add', {
    set : function (paramValue) {
        this.iCounter += paramValue;
    }
});

Object.defineProperty(oObj8, 'substract', {
    set : function (paramValue) {
        this.iCounter -= paramValue;
    }
});

// Play with counter:
console.log(oObj8);
oObj8.add = 5;
console.log(oObj8);
//oObj8.reset;
//console.log(oObj8);

oObj8.substract = 1;
console.log(oObj8);

oObj8.increment;
console.log(oObj8);

oObj8.decrement;
console.log(oObj8);

oObj8.reset;
console.log(oObj8);


// ====================================================== //
// =============== change a property value ============== //
// ====================================================== //
oPerson9 = {
    firstName: "John",
    lastName : "Doe",
    language : "EN" 
}
Object.defineProperty(oPerson9, 'language', {
    value: 'DE'
});
console.log(oPerson9.language);
console.log(oPerson9);

