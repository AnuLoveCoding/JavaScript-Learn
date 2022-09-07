//  important array methhods

// for each
// map
// filter
// reduce


//  important array methods

const numbers =[4,5,2,8];

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
 

numbers.forEach(function(number,index){
    console.log(`index is ${index}: number is ${number*15}`);
    // console.log(index);
});
