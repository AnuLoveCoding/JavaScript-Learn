"use strict";

console.log("ANURAG KUMAR");

//  let keyword
// declare variable with let keyword

// let firstName ="Anurag"
// console.log(firstName);

// block scope vs function scope (covered latter in this videos.)

//  declare constant
//   const pi = 3.14;
//   pi =3.15;
//   console.log(pi)

// string indexing;
//  let firstName = "Anurag"
//  console.log(firstName[3]);
//  console.log(firstName.length);
//  console.log(firstName.length-1);
//  console.log(firstName[firstName.length-4])


//  trim()
//  toUppercase()
// toLowercase()
//  slice

// let firstName="anurag";
// console.log(firstName.length)
//  var string = firstName.trim()
//  console.log(string)
//  console.log(string.length)


//  let school ="zila School    "
//   console.log(school.length)
//   var school2= school.trim()
//   console.log(school2.length)
//  console.log(school.toLowerCase())
//  console.log(school.toUpperCase())

//  ********************slice*********************//
// start index
// end index

// let string= firstName.slice(0,4);
// console.log(string)



// ***************************type of operator*********************//
// data type (primative data types)
// string " anurag"
// number 2,4,5.6
// booleans
// undefined
// null
// BigInt
// symbol



// let age= 21;
// console.log(typeof(age))

// let firstName ="anurag";
// console.log(typeof(firstName))



// covert number to string
// age= age+""  //add "" after number
// console.log(typeof(age +" "))

// convert string to number
//   let add= +"51"  // add +before string
//  console.log(typeof(add))

//  string concatenation
//  let name1= "Anurag";
//    let name2 = "Mundra"


//    console.log(typeof(name1))
//    console.log(typeof(name2))
       
//    console.log(name1+" "+name2)
//    console.log(name1.toUpperCase()+" "+name2.toUpperCase())
//    console.log(name1.length+name2.length)



// ************************template string;***************************//
// let firstname = "Anurag";
// let age =21;
// //  let aboutMe= "My name is " + firstname + " " +"and my age is"+ " "+age
// //    My name is Anurag and my age is 21
//   let aboutMe = `My name is ${firstname} and my age is ${age}`
//   console.log(aboutMe)

//  **************************Big Int************************//
//   let mynumber = BigInt("12122222222222222222222222222222222222222");
//   let samemynumber= 123n
//   console.log(mynumber);
//   console.log(Number.MAX_SAFE_INTEGER)


// ***************boolean & comparison operator****************//
          //       == vs ===   //



        //   ****************if else condition***** //
//  truthy and false values

// falsy values

// let firstName ="Anurag";


//  let firstName="ANURAG"

// if(firstName){
//     console.log(firstName)
// }else{
//     console.log("firstName is Kinda empty")
// }


// ternary operator or conditional operator

// let age=  4;
// let drink = age>=5 ? "coffee" : "milk"
// console.log(drink)



// if (age>=5){
//     drink =" coffee"
// }else { 
//     drink="milk"
// }

// console.log(drink)


//  Date according to INDIAN Standard time.
// let date =new Date();
// console.log(date[Symbol.toPrimitive]('string'))


// let aaj =new Date();
// console.log(aaj[Symbol.toPrimitive]('string'))



