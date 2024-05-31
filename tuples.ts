//Array

// let userArray=["hello",100,true];
// userArray[0]=50;
// console.log(userArray)
///////////////////////////////////////////////////////////
//Tuple
//typed array
// let user:[string,Number,boolean]=["hello",100,true];
// //user[0]=50;
// console.log(user)

// /////////////////////////////////////////////////////////////////
// let userTuple:[string,Number,boolean]=["hello",100,true];

// userTuple.push(4)
// console.log(userTuple)

//////////////////////////////////////////////////////////////////

// let userTuple:readonly [string,Number,boolean]=["hello",100,true];
// //userTuple.push(4)
// console.log(userTuple)

///////////////////////////////////////////////////////////////////////
//Named Tuple
let userTuple:readonly [name1:string,age1:Number,ispermanent1:boolean]=["hello",100,true];

console.log(userTuple);

// //Access named Tuple

let [name1,age1,ispermanent1]=userTuple;

console.log(name1)
