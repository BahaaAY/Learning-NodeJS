var name = 'test'; // var takes any data type because JS is weakly typed language (no need to explicitly assign variable types)
console.log(name);
//let and const are used instead of var
let age = 30 ; //it can be changed later 
const weight = 50; // const is 'final' => cant be changed later => weight = 70; will give an error

const add = function(a, b){
    return a+b;
}

//arrow function
const add2 = (a,b)=>
{
    return a+b;
}
//or 

const add3 = (a,b) => a+b;


//if arrow function has one parameter only 
const oneParamFun = a=>a+1;
// if no parameters
const noParamFun = ()=>1;


console.log(add(1,2));
console.log(add2(1,2));
console.log(add3(1,2));
