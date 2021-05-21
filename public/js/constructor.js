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
// ================== basics constructor ================ //
// ====================================================== //

/* let Person = (first, last, age, eye) => {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
} */
function cPerson (first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

let oFather = new cPerson("John", "Doe", 50, "blue");
let oMother = new cPerson("Mary", "Doe", 45, "green");

console.log(oFather.age);
console.log(oMother.age);

// ====================================================== //
// ==================== adding method to obj ============ //
// ====================================================== //

oFather.nationality = 'english';

console.log(oFather.nationality);

// ====================================================== //
// ========== adding property to a Constructor ========== //
// ========== not possible ============================== //
// ====================================================== //

cPerson.nationality = 'German';

console.log(oFather.nationality);
console.log(oMother.nationality);

// ====================================================== //
// ========== adding property to a Constructor ========== //
// ========== possible ================================== //
// ====================================================== //

function cPerson2 (first, last, age, eye, nationality){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = nationality;
}

let oFather2 = new cPerson2("John", "Doe", 50, "blue", 'finnish');
let oMother2 = new cPerson2("Mary", "Doe", 45, "green", 'finnish' );

oFather2.nationality = 'German';

console.log(oFather2.nationality);
console.log(oMother2.nationality);

// ====================================================== //
// ============== adding fn to Constructor ============== //
// ====================================================== //

function cPerson3 (first, last, age, eye, nationality){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = nationality;
    this.fnName = function(){
        return this.firstName + ' ' + this.lastName;
    }
    this.fnChangeLastName = function(param){
        this.lastName = param;
    }
}

let oFather3 = new cPerson3("John", "Doe", 50, "blue", 'finnish');
oFather3.fnChangeLastName('Dovid');

console.log(oFather3.fnName());
//console.log(oFather3.fnChangeLastName('Dovid'));
console.log(oFather3.lastName);


// ====================================================== //
// ================== obj constructors ================== //
// ====================================================== //

let x1 = new Object();
let x2 = new String();
let x3 = new Number();

console.log(typeof(x3));

let x4 = new String();
x4 = 'String...';

console.log(x4);

let x5 = '';
x5 = 'String...';

console.log(x5);