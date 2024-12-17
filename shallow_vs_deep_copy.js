
//Spreadoperatorn ger endast en shallow copy, det kommer alltså bli problem med nästlade strukturer
const obj = {
    name: "Sandra",
    adress: {
        street: "Dalvägen 104",
        city: "Stockholm"
    }
}

// Kopia med spreadoperatorn
const newObj = {...obj}

newObj.name = "Gabriella";

console.log("orgObject", obj);
console.log("newObject", newObj);

// Denna ändring kommer påverka orginalet efter spread-opetorn endast gör shallow copy
newObj.adress.street = "Strandvägen";

console.log("orgObject", obj);
console.log("newObject", newObj);

// Så om man kommer till en situation där man vill att orignalet inte påverkas oavsätt nästlad nivå ska man använda deep clone
