//  important array methhods

// for each
// map
// filter
// reduce


//  important array methods

// const numbers =[4,5,2,8];

//   function myfunc(number,index,am){
//    console.log("index is",index);
//    console.log(number*2);
// //    console.log(number+20);
//   }


//  for (let i=0;i<numbers.length;i++){
//     //  console.log(i);
//      multiplyBy2(numbers[i],i)
//  }

// numbers.forEach(myfunc)
// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`)
// })
 

// numbers.forEach(function(number,index){
//     console.log(`index is ${index}: number is ${number*15}`);
//     // console.log(index);
// });

// const users = [
//     {firstName: "Anurag", age:21},
//     {firstName:"kumud", age:15},
//     {firstName:"Khushi",age:17},
//     {firstName:"Raj",age:16},
// ]

// for(let user of users){
//     console.log(user.firstName,user.age);
// }


// map method

// const numbers =[3,4,6,1,8];

// const sqaure =function (number){
//     return number*5;
// }

// const sqaureNumber= numbers.map(sqaure);
// console.log(sqaureNumber);


const users=[
    {firstName: "Anurag", age:23},
    {firstName: "Kumud", age:23},
    {firstName: "khushi", age:23},
    {firstName: "raj", age:23},
]


const userNames = users.map((user)=>{
    return user.firstName;
})
console.log(userNames);

// const user_Name = users.map((users.firstName));
// console.log(user_Name);


// const userName=function(users){
//     return users.firstName;
// }
// const user_Name = users.map((users.firstName));
// console.log(user_Name);



