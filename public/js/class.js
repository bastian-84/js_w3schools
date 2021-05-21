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