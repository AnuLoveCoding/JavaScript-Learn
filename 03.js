
   "use strict"

// nested if else
console.log("ANURAG:MUNDRA")





let date = new Date();
console.log(date[Symbol.toPrimitive]('string'))

let nameis = " Anurag"
console.log(nameis)


let aaj= new Date()
console.log(aaj[Symbol.toPrimitive]('string'))





    

// logical  operator   (&& or || or !)

// 1. &&
// 2. ||
// 3. !

// trenary operator 
 let marks = 80
  let marks1= 90 < marks

  let result= marks && marks1 ? "give"  : "not give"
 console.log( result)


  // nested if condition

   var  a=10;
     var b=20;
    var  c=15 
   let find =  a<c || b<c ? "Hello there" : "some thing wrong"
   console.log(find)
  // if(a<c){

  //   if(b<c){

  //     console.log("Hello there!")
  //   }else{
  //     console.log("some thing wrong!")
  //   }

  // }

    // chunnu scored, 75 marks in English (check the subject as well), the passing marks are 70. Print "Passed in English", if he scored more than  passing marks otherwise print "failed"
    
    //  let subject ="English"
    // let pass = 75;
    //  let pass1 =70

    //   if(subject=="English"){
    //     if(pass>=pass1){
    //       console.log("Passed in English")
    //     }
    //   }else {
    //     console.log("Failed")
    //   }
    //   // ternary operator
    //   let get = subject=="English" && pass>=pass1? "Passed in English" : "Failed"
    //   console.log(get)




      // let std = 12
      //  let percentage =85
      // //  let sub= "English"
      //  let pass2 = 95>90

      //  if(std==percentage||sub=="English"pass2){
      //   console.log("Give Bike")
      //  }else{
      //    console.log("Not give Bike")
      //  }
      //       // ternary operator
      //  let bike = std==percentage||sub==pass2 ? "Give Bike":"Not give Bike"
      //  console.log(bike)

      
let user="Anurag"
let pass ="PApa*9430"

let userName="Anurag"
let passWord="PApa*9430"

let login = user==userName && pass==passWord  ? "Login" : "Wrong Username and passWord"

console.log(login)


if(user==userName){

  if(pass==passWord){

    console.log("login")

  } else{
    
    console.log("Wrong Input")
  }
}

 