// //  lexical Scope
// const myvar="value1";

// function myapp(){
    

//     function myfunc1(){
//         // const myvar="value59";
//         const myfunc3 = ()=> {
//             console.log("inside myFunc",myvar);
//         } 
//           myfunc3();
    
//      }


//     const myfunc2 = function() {}
    
      
//     // console.log(myvar);
//     myfunc1();
// }

// myapp();


// ***************block Scope vs Function scope*************

//  let and const are block scope  // important
//  var is function scope // important

// {
//    let  firstName = "Anurag";
//    console.log (firstName);
// }
// // console.log(firstName);

// {
//  const firstName =" anurag"
//  console.log(firstName)
// }


// {
//     var firstName="Anu-rag"
// }

// console.log(firstName);


//  default parameters


function addTwo(a,b=8){
    // if(typeof b ==="undefined"){
    //     b=1;
    // }
    return a+b;
}

console.log(addTwo(5));