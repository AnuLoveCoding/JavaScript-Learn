//  rest parameters

// function myfunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//     console.log(`c is `, c);
// };

// myfunc(20,55,61,22,55,20,28);
//   const number = 1544654685643148




// function addAll(...numbers){
//     let total=0;
//    for(let number of numbers){
//     total+=number
//    }
//    return total;
   
//     // console.log(numbers);
//     // console.log(Array.isArray(numbers));
// }


// console.log(addAll(6,5,8,2,4,20,80,21,22));
// // console.log(ans)






// param destructuring


// object
// react

const person = {
    firstname: "Anurag",
    gender : "Male",
    age:21,
}

function printDeatils({firstname,gender,age}){
    console.log(firstname);
    console.log(gender);
    console.log(age);
}

printDeatils(person)