
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

newObj.adress.street = "Strandvägen";

console.log("orgObject", obj);
console.log("newObject", newObj);