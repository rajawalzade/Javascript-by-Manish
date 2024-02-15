/*
for(let i =0 ; i < 10 ; i++)
{
    console.log(i);
}
*/


//Array

/*
const rollNumber = [11,12,13];
console.log(rollNumber);
rollNumber.push(14);
console.log(rollNumber);
rollNumber.pop();
*/

//Objects
const student = {
    name : "rajat",
    age : 25,
    isPresent : true,
    fees : undefined,
    datesOfAbs : [2,3,5,9],
    address : {
        street : "chanegaon road",
        pincode : '32456',
    }
};

const storeObjInArray = [student, {
    name : "Harry",
    age : 25,
    isPresent : true,
    fees : undefined,
    datesOfAbs : [2,3,5,9],
    address : {
        street : "chanegaon road",
        pincode : '32456',
    }
}

];
console.log(Object.values(student));
delete student.fees;
console.log(student.name);
console.log(Object.values(student));
console.log(student["datesOfAbs"]);
console.log(storeObjInArray.student.name);