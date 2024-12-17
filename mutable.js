  


const arrayOrg = [1, 2, 3];
const objOrg = {a: 1, b: 1};


// En kopia av varje - är egentligen en kopia av referensen till värdena för objektet eller arrayen i memory heap
const arrayNew = arrayOrg;
const objectNew = objOrg;

console.log(arrayNew, objectNew);

arrayNew[1] = "hej";
objectNew.b = true;

console.log("Orginal array", arrayOrg);
console.log("Orginal objekt", objOrg);

console.log("New array", arrayNew);
console.log("New object",objectNew );