// console.log("hello")


// how to iterate object

// const person ={
//         name : "Anurag",
//         age  : 21,
//          "me hobbies" : ["guitar","slleping","chess"]
//      }

//      person.gender= "Male"
//      person.location= "Bihar"
//      person.friends= "True"
//        person.girlfriend ="NO"
//        person.emial ="anusrivas07@gmail.com(Primary)"



    //   for in loop
    // object.keys

    //  for(let key in person){
    //     console.log(`${key} : ${person[key]}`)
    //  }



    //  for (let i=1;i<=person;i++){
    //     console.log(person[i])
    //  }

    // console.log(typeof(Object.keys(person)));
    // let tr= Array.isArray((Object.keys(person)))
    // console.log(tr)

//  ******************computed properties*************
// const key1 ="objkey1";
// const key2 ="objkey2";

// const value1="myvalue1";
// const value2="myvalue2";

// // const Obj={
// //     objkey1 ="myvalue1";
// //     objkey2=" myvalue2";

// // }

// const obj ={
//     [key1]: value1,
//     [key2] : value2,
// }
// console.log(obj);






// spread operator

// const array1=[1,2,3,4];
// const array2=[5,6,7,8];


// let newarray=[...array1,...array2,69,70,71]
// console.log(newarray)

// let add1=[..."45212578793"]
// console.log(add)

//   let sum=add

// let arr =[..."anuragMundra"]
// console.log(arr)
  

// for(let add of add1){
//     console.log(add)
// }

// *****************spread operator in Object***************************

const obj1 ={
    key1: "Anurag",
    key2 : "value2",
}


const obj2={
    key3 : 'value1',
    key4 : "value2",
}

let newObj ={...obj1,...obj2,key69: "value69"}
console.log(newObj)








