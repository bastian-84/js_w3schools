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
// ================== class erstellen =================== //
// ================== mit constructor =================== //
// ====================================================== //

class DXtitle {
    constructor(name, year, ingameYear){
        this.name = name;
        this.year = year;
        this.ingameYear = ingameYear;
    }
}

sDX1 = new DXtitle('Deus Ex', 2000, 2052);
sDX2 = new DXtitle('Deus Ex Invisible War', 2003, 2072);
sDX3 = new DXtitle('Deus Ex Human Revolution', 2011, 2027);
sDX4 = new DXtitle('Deus Ex The Fall', 2013, 2027);
sDX5 = new DXtitle('Deus Ex Mankind Devided', 2016, 2029);

console.log(sDX1.ingameYear);

// ====================================================== //
// ==================== adding method to obj ============ //
// ====================================================== //

sDX1.platform = 'PC, PS2';
console.log(sDX1.platform);

// ====================================================== //
// ========== adding property to a Constructor ========== //
// ========== possible ================================== //
// ====================================================== //

class DXtitle2 {
    constructor(name, year, ingameYear){
        this.name = name;
        this.year = year;
        this.ingameYear = ingameYear;
    }
    // Außerhalb vom constructor
    fnYearsDifference(){
        return this.year - this.ingameYear;
    }
    fnYearsDifferenceCurrentYear(paramCurrentYear){
        return this.ingameYear - paramCurrentYear;
    }
}
sDX1 = new DXtitle2('Deus Ex', 2000, 2052);
console.log(`Jahre zwischen Erscheinungs Jahr und aktuellem Jahr: ` + sDX1.fnYearsDifference() + ` Jahre.`);

let sDate = new Date();
let sCurrentYear = sDate.getFullYear();
console.log(`Jahre zwischen Ingame Year und aktuellem Jahr: ` + sDX1.fnYearsDifferenceCurrentYear(sCurrentYear) + ` Jahre.`);

// ====================================================== //
// ==================== class extends =================== //
// ====================================================== //
class Carbine {
    constructor(sBrand){
        this.sCarbName = sBrand;
    }
    fnPresent(){
        return 'The shop has: ' + this.sCarbName;
    }
}

class Model extends Carbine {
    constructor(sBrand, sMod){      // sBrand aus Carbine, sMod aus Model
        super(sBrand);
        this.model = sMod;
    }
    show(){
        return this.fnPresent() + ', it is a ' + this.model;
    }
}
let sCarbine1 = new Model('HK 91', 'G3K');
console.log(sCarbine1.show());


// ====================================================== //
// ==================== class get set =================== //
// ====================================================== //
class MP {
    constructor(sBrand){
        this.sMpName = sBrand;
    }
    get cnam(){
        return this.sMpName;
    }
    set cnam(paramX){
        this.sMpName = paramX;
    }

}
let sMP1 = new MP('MP5');

console.log(sMP1.cnam);

// ====================================================== //
// ====================== class fn ====================== //
// ====================================================== //
class Combatpstl {
    constructor(sName){
        this.name = sName;
    }
    static fnSound(){
        return 'Click';
    }
}
let sPstl1 = new Combatpstl('P228');

console.log(Combatpstl.fnSound());

// ====================================================== //
// ====================== class fn param ================ //
// ====================================================== //
class ConcealedPstl {
    constructor(sName){
        this.name = sName;
    }
    static fnSound(sFile1){
        return 'Click ' + sFile1.name;
    }
}
let sPstl2 = new ConcealedPstl('Rush');

console.log(ConcealedPstl.fnSound(sPstl2));
