// iterables
// jispe hum  of loop laga sakein
// string, array are iterable



// array like object
// jinke pas length property hoti hai
// aur jisko hum index se acess kar sakte hai
// exmaple :- string

// const firstName="Anurag";

// const item =['item1','itme2','itme3'];
// for(let char of item){
//     console.log(char);
// }

//  object iterable  nahi hota hai , sirf string aur array iterable hote hai;
// const users ={
//     'key1': 'value1',
//     'key2': 'value2',

// }

// for(let char of item){
//     console.log(char);
// }

// const firstName = "anurag";
// console.log(firstName.length);
// console.log(firstName[0])


//  sets (it is iterable)
//  store data
// sets also have its own methods
// no index-based access
// order  is not guranteed
// unique items only(no duplicates allowed)

 const numbers = new Set([1,2,3,]);
 numbers.add(4);
 if(numbers.has(2)){
    console.log("1 is present");
 }else{
    console.log('1 is not present');
 }
 console.log(numbers);







