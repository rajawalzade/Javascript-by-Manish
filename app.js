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
/*
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
console.log(`My Name is ${storeObjInArray[1].name}`);
*/

// Functions

// function greet(){
//     console.log("Hello World");
// }
// const greet = function(){
//     console.log("Hello World");
// }

// arrow function
// const greet = () =>{
//     console.log("Hello World");
// };

// const students=[];
// //defining the function
// function addStudent (stuname, stuage , studatesOfAbs, stuaddress){
//     const student = {
//         name :stuname,
//         age :stuage,
//         datesOfAbs :studatesOfAbs,
//         address :stuaddress

//     };
    // student, {
    //     name : "Harry",
    //     age : 25,
    //     isPresent : true,
    //     fees : undefined,
    //     datesOfAbs : [2,3,5,9],
    //     address : {
    //         street : "chanegaon road",
    //         pincode : '32456',
    //     }
    //}};
   // students.push(student);


// addStudent("John",25,[5,9],{street : "Chanegaon", pincode :413711});
// addStudent("Raj",23,[5,3],{street : "Chanegaon", pincode :413712});
// addStudent("Rani",35,[5,1],{street : "Chanegaon", pincode :413991});
// addStudent("Rahul",21,[5,2],{street : "Chanegaon", pincode :999999});
// addStudent("Kumar",24,[5,5],{street : "Chanegaon", pincode :222222});
// addStudent("Hans",27,[5,1],{street : "Chanegaon", pincode :7777777});
// console.log(`Total students: ${students.length}`);

// console.log(JSON.stringify(students));
// //greet();

// const sum = (a,b) =>{
//     return a+b;
// };
// console.log(sum(5,6));

//compound operator



// Operators //
// assignment op
/*  let x = 9;
x = 19;
console.log(x); */ 

// addition op
/*  const x = 9;
const y = 19;
let z = x + y;
console.log(z); */ 

// subtraction op
/* const x = 9;
const y = 19;
let z = x - y;
console.log(z); */

// multiplication op
/* const x = 9;
const y = 19;
let z = x * y;
console.log(z); */

// division op
/* const x = 9;
const y = 19;
let z = x / y;
console.log(z); */

// compound op //

/* let x = 9;
x /= 8; // this is same as x=x/8;
console.log(x); */

// operator with different datatype
/* const x = 9;
const y = "John";
let z = x / y;
console.log(z); */

// comparision op //
/* const x = 9;
const y = 10;
// equals op
console.log(x == y);
// strict equals op
console.log(x === y);
// not equals
console.log(x != y);
// strict not equals
console.log(x !== y);

// greater than
console.log(x > y);

// less than
console.log(x < y);

// greater than and equals to
console.log(x >= y);

// less than and equals to
console.log(x <= y); */

// Artihmetic op //
/* let x = 9;
let y = 10; */

// remainder op %
//console.log(x % y);

// increment op ++
/* console.log(x++);
console.log(++y); */

// decrement op --
/* console.log(x--);
console.log(--y); */

// if-else statements

// conditional statement//

// if-else statement
/* const x = 9;
const y = 9;

if (x > y) {
  console.log(" x is bigger");
} else if (x < y) {
  console.log(" y is bigger");
} else {
  console.log(" y is equals to x");
} */

/* const doIHaveBreathingProblem = false;
const haveILostSmell = true;
const haveILostTaste = true; */

// if all 3 are true > positive, else negative

/* if (doIHaveBreathingProblem && haveILostSmell && haveILostTaste) {
  console.log("positive");
} else {
  console.log("negative");
} */

// i am positive if
// I have breathing problem
// OR if i have lost smell and taste

/* if (doIHaveBreathingProblem || (haveILostSmell && haveILostTaste)) {
  console.log("positive");
} else {
  console.log("negative");
}
 */
/* const x=10;
const y=9;
x>y ? console.log("x is greater than y") : x<y ? console.log("X is less than Y" ): console.log("X is equals to Y");
 */
/* const dayOfWeek = 3;
switch (dayOfWeek) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid");
      break;
  }  */
  /* switch (dayOfWeek) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Workday");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Invalid");
    break;
}
 */
// loops in JS //

// for loop
/* for (let x = 0; x < 10; x++) {
  console.log(x);
}*/
// while loop
/* let x = 0;
while (x < 0) {
  console.log(x);
  x++;
} */
// do-while loop
/* let x = 0;
do {
  console.log(x);
  x++;
} while (x < 0); */
