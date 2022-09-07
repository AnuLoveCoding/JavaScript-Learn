// callback function;

// function myfunc(a){
//     console.log(a);
//     console.log(`hello World`);
// }

// myfunc({name:"Anurag"});

// ********function returning function**********

// function myfunc(){
//      return "anurag";
// }

// const ans= myfunc();
// console.log(ans);

function myfunc(){
    function hello(){
        console.log("hello World")
    }
    return hello;
}
const ans=myfunc();
ans();

