//typescript typeAllias

type name=string;
type age=number;
type ispermanent=boolean;

let a1:name="sachin";
let a2:age=34;
let a3:ispermanent=true;
let aa1:age=21;

////////////////////////////////////////////////////////////
//array
type namesarray=string[];

let a4:namesarray=["hello","hi","chennai","mumbai"]

///////////////////////////////////////////////////////////////
//object

type User={
    Designationee:name,
    salary:age,
    ischennai:ispermanent
};

let a5:User={Designation:"engineer",salary:45000,ischennai:true};

///////////////////////////////////////////////////////////////////
//union type

type abcd=string | number;

let a6:abcd=900;
a6="yyyy";

//////////////////////////////////////////////////////////////////

let userTuple1: [name1:string,age1:Number,ispermanent1:boolean]=["hello",100,true];

console.log(userTuple1);
///////
type namedTuple=[name:string,age:number,ispermanent1:Number];

let a7:namedTuple=["john",21,67];

//////////////////////////////////////////////////////