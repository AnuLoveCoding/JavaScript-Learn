// /  while loop in array
// const fruits =["apple"," mango","banana"]

// let i=0;
// while(i<fruits.length){
//     console.log(fruits[i])
//     i++
// }

//  for of loop in array

// const fruits =["apple","mango","banana"]
//  for( let fruit of fruits){
//     console.log(fruit.toUpperCase())
//  }


//index give me array index number

//  for (let index in fruits){  
//     console.log( fruits[index])
//  }

// const array1 =[1,5,6,8,9,]
// for(let array of array1){
//    console.log(array)
//  }

// for(let array in array1){
//    console.log(array)
// }


//************************array destructuring**************************
// const myarray=["value1","value2"]
//  const myvar1= myarray[0]
//  const myvar2= myarray[1]

//  console.log(`my value is in myvar1 ${myvar1}`)
//  console.log(`my value is in myvar2 ${myvar2}`)


// let [myvar1, myvar2]= myarray
//   console.log(`my value is in myvar1 ${myvar1}`)
//   console.log(`my value is in myvar2 ${myvar2}`)


//   let [item1,item2, item3,] = ew1
   
   
// *********************************objects : is a refrence type****
// array is good but not sufficient
//  for real world data
// objects store key value pairs
// objects don't have index



// how to create objects


const person1 ={
   name : "Anurag",
   hobbies : ["chess","swim","music"],
   age: 21
}


// const person ={
//    name :" Anurag",
//    age : 21,
//    location: "saran",
//    pincode: 841311,
//    vill:'Aloni',
//    school: "scaler",
//     hobbies : ["chess","swim","music"],
// }
// console.log(person["name"])
// console.log(person.hobbies)
// console.log(person["hobbies"][0])
// console.log(person.hobbies[1])
// console.log(typeof person)
// how to access data from objects
// console.log(person.name)
// console.log(person.age)
// console.log(person.school)



// how to add key value pair to objects
//  person.gender="male"
//  console.log(person)

//  difference between dot and bracket notation
//  JavaScript in Objects key's are always in Objects
   let key = "email"
   const person = {
    name : "Anurag",
     age  : 21,
     "me hobbies" : ["guitar","slleping","chess"]
 }

  console.log(person["me hobbies"])

   person[key]= "anusrivas07@gmail.com"
    console.log(person)


//   person.email="anusrivas07@gmail.com"
//   console.log(person["email"])
