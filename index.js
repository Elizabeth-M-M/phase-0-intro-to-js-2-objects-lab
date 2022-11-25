// Write your solution in this file!

  const employee = { name: "Ella", streetAddress: "Washington" };

// function updateEmployeeWithKeyAndValue()
function updateEmployeeWithKeyAndValue(obj, key, val) {

    const updateEmployee = { ...obj };
    updateEmployee[key] = val;
    return updateEmployee;
}

// function destructivelyUpdateEmployeeWithKeyAndValue()
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val) {
    obj[key] = val;
    return obj;
}


//function deleteFromEmployeeByKey()
function deleteFromEmployeeByKey(obj, key) {
     const updateEmployee = { ...obj };
    delete updateEmployee[key];
    return updateEmployee;
}

//function destructivelyDeleteFromEmployeeByKey()
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}



console.log(updateEmployeeWithKeyAndValue(employee, "name", "Sheila"));
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Muella"));
console.log(deleteFromEmployeeByKey(employee, "streetAddress"));
console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"));
console.log(employee);