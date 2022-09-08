//  sort method
// ASCII Table
// char : ascii value



//  sort

// 5,9,1200,400,3000
//  5,9,400,1200,3000

// const numbers = [5,9,1200,400,3000];
// numbers.sort((a,b)=>{
//     return a-b;
// });
// console.log(numbers);


// userNames =['harshit','abcd','mohit','nitish','ANURAG'];
// userNames.sort();
// console.log(userNames);


// const numbers =[5,9,1200,410,3000]


//  find method

// const myArray=['Hello','caat','dog','lion'];

// function isLength3(string){
//   return string.isLength===3;
// }

//  const ans=myArray.find((string)=>string.length===3);
// console.log(ans)

// const  ans = isLength3('doggy');
// console.log(ans);


// every method

// const number = [2,4,6,8,10];
//  const ans = number.every((number)=> number%2==0);
//  console.log(ans);

 const userCart =[
    {productId:1, productName:"mobile", price:1200},
    {productId:2, productName:"laptop", price:2200},
    {productId:3, productName:"tv",     price:15000},
    {productId:4, productName:"shirt",  price:450},
 ]

//  check every product<3000
  const ans= userCart.every((cartItem)=>cartItem.price<30000);
  console.log(ans);