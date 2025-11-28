const notes=require('./notes.js'); // importing file that is already created
var _=require('lodash'); // contains set of functions for working with arrays,strings,objects,numbers
console.log('servere file is running')

var age=notes.age //filename.attribute
var result=notes.addnumber(age,18)
console.log(age)
console.log('Age plus 18 is: ' + result)

var data=[1,2,1,2,'person','person','cat','dog','cat',3];
var filter=_.uniq(data);
console.log(filter);

console.log(_.isString(true));
console.log(_.isString('priyanshu'));