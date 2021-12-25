/*
        1 - Set Data Type
    ## Methods
        - add()               #######
        - delete()            #######
        - clear()             #######
        - has ()              #######

    ## properies

        - size
*/

/*
   3 - Map Methods

    ## Methods
        - set      ##########
        - get      ##########
        - delete   ##########
        - has       
        - clear    ##########

    ## properties 
        -size      ##########

 */
 
/*
  6- Arrar From

    - Array from (iterable , mapFunction , this)
*/
/*
console.log(Array.from("maged",function(el){

    return el+el
}))// ["m" , "a" ,"g" , "e" , "d"]




console.log(Array.from("12345")) //["1","2","3","4","5"]


let numbers = [1,1,1,2,2,2,3,3,4,5]

let uniqueNumbers = new Set(numbers);

console.log(Array.from(uniqueNumbers));


function testArgu(){
    return Array.from(arguments);
}

console.log(Array.from(testArgu("maged","adel","sara")));


*/


/*

    - spread syntax and use case 

        spread operator :-   ...iterable

      ## Spread With string ==> expand String
      ## concatante Arrays 
      ## Copy Array 
      ## Push inside Array 
      ## use With Math object 
      ## Spread With Objects == > Merge Objects

*/ 


    // Spread With string ==> expand String //
/*
    console.log(..."MAGED");
    console.log([..."Maged"])
    console.log(Array.from("Maged"))

*/
    // concatante Arrays //
/*  
    let arr1 = [1,2,3,4]
    let arr2 = [5,6,7,8]

    console.log([...arr1,...arr2])
    
*/
/*
        // Copy Array 

    let copiedArray = [...arr1]

    console.log(copiedArray)
*/

        //Push inside Array
/*
    let allFreinds = ['A','b','c']
    let thisYeat   = ['c','d','e']


    allFreinds.push(...thisYeat)
    console.log(allFreinds)
*/

    //use With Math object
/*

let minValue = [2,3,4,5,6,7,-200,5,6]
console.log(Math.min(...minValue))

*/

        //Spread With Objects == > Merge Objects

/*
let objOne = {
    a:1,
    b:2,
}
let objTwo = {
    c : 3 ,
    d : 4,
}

console.log({...objOne , ...objTwo , e : 5})
*/



// let myName = "1234559"

// let arr = Array.from([...myName],function(ele){

//     return +ele
// }

// )

// console.log(arr.reverse())



function reverseNumber(anyNumber){
   let arr    = Array.from([...anyNumber]).reverse()
   return arr;
}
console.log(reverseNumber("123456")) //[6,5,4,3,2,1] return Number Not string

