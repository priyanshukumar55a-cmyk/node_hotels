// function add(a,b){
//     return a+b;
// }

// var add=function(a,b){
//     return a+b;
// }

var add=(a,b)=>{
    return a+b;
}

var add=(a,b)=> a+b;  //if only one line of code is there then we can remove return and curly braces 
var result=add(2,3);
console.log("The result is: " + result);

(function(){
    console.log("I am an IIFE function");
})();