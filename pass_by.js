function modifyValue(x) {
    x = 10; // Changes the local copy
    console.log("Inside function:", x);
  }
  
  let num = 5;
  modifyValue(num);
  console.log("Outside function:", num); // Original remains 5

  function modifyObject(obj) {
    obj.value = 10; // Modifies the original object
  }
  
  let data = { value: 5 };
  modifyObject(data);
  console.log(data.value); // Original is now 10