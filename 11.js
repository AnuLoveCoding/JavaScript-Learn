

function Birthday(){
    console.log("happy birthday to you .....***.....");
}

Birthday();
Birthday();
Birthday();
Birthday();

//  Nan(Not a Number)
// Dry(do  not repeat yourself)

function sumThreeValue (number1,number2,number3){
      return(number1+number2+number3);
} 

const returnvalue= sumThreeValue(6,10,1);
console.log(returnvalue);

//  id Even
// input : 1number;
// Output : true ,false

// function isEven(number) {
//     return number%2==0;
// }

// console.log(isEven(4));




// function 
// input : string
// output : firstcharacter;

// function firstcharacter(anything){
//     return anything[6]
// }
// console.log(firstcharacter("anuthing"))

// function
// input : array,target (number)
// output : index of target if tarh=get present in array;

 const myarray= [4,5,6,9,11];
//   const mytarget = 4;
function  findTarget(array,target){
    for (let i=0;i<array.length;i++){
        if(array[i]===target){
            return[i];
        }
    }
    return -1;
}
 const ans= findTarget(myarray,9n )
console.log(ans);



