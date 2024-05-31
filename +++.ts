// typecasting in typescript
//syntax
// as ,<>

// unknown convert string into string
let x:unknown="Hello";

console.log((x as string).length);
console.log((<string>x).length);

//unknown convert number into string
let y:unknown=10;
console.log((y as string).length);

/////////////
//Dom
// let z1=document.querySelector("input") as HTMLInputElement;
// let z2=z1.value()

//we are not use dom in reactjs.there used in virtual dom

/////////////////////////////////////////////////////////////////