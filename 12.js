// arrow function;


//  const mybirthday=()=>{
//     console.log("Anurag");
//     console.log("anurag");
//  }
//  mybirthday();


// const sumThreeValue=(number1,number2,number3)=>{
//     return number1+number2+number3;
// }

//  console.log(sumThreeValue(55,200,2));
// //  console.log(a);


// const isEven= number =>{
//     return number % 10 ==0;} 
//     console.log(isEven(10));


// const isOdd = number => number%3==0;
// console.log(isOdd(6));

//  ********************hoisting*************** 


// hello()
// function hello(){
//     console.log("Anurag");

// }


// ********************function in function;************

// const app=()=>{

//     console.log("inside app");
// }
// app()


function app(){
    const myfunc =()=>{
        console.log("hello from myFunc")
    }

    const add=(num1,num2) => {
        return num1+num2;
    }

    const mul=(num3,num4)=> num3*num4;
    console.log("inside the app")
     console.log(add(3,4));
     console.log(mul(4,3));
}


app();




























