// filter method

// const numbers =[1,3,2,6,4,8];


// const isEven = function(number){
//     return number%2==0
// }

//  const evenNumbers=numbers.filter(isEven);
//  console.log(evenNumbers);



//  reduce
const numbers = [1,2,3,4,5,25] ;

//  aim : sum of all the numbers in array


 const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;

},1000);


console.log(sum);

//  accumulator, currentValue, return
//  1               2           3
//  3               3           6
//  6               4           10
//  10              5           15
//  15              25          40


 const userCart =[
    {product: 1, productName: "mobile", price :12000},
    {product: 2, productName: "laptop", price :22000},
    {product: 3, productName: "tv", price :15000}
 ]

 const totalAmount= userCart.reduce((totalPrice,currentproduct)=>{
    return totalPrice +currentproduct.price;
 },0)

console.log(totalAmount);


