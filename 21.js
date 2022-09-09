//  const  person1 ={
//     id :1,
//     firstName :"anurag"
// }
// const extraInfo =new Map();


// extraInfo.set(person1,{age : 21,gender :"male"});
// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);




// clone using Object.assign
// heap memory

//  const  obj ={
//     key1: "value1",
//     key2: "value2",
// }

// const obj2 =obj;
// obj.key3 ="value3";
// console.log(obj);
// console.log(obj2);


// optional chaning

// const user ={
//     firstName : "anurag",
//     // address :  {housenumber : "1234"},
// }
//  console.log(user.firstName);
//  console.log(user?.address?.housenumber);


// method
// function inside method



 const person ={
     firstName :" anurag",
     age : 21,
      about : function () {
        console.log(`person name is : anurag and person  is ${this.function}and is  ${this.age}`)
      }
}

console.log(person.about);






