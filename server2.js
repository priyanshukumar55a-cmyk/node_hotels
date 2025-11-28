var fs=require('fs'); //fs -> file system
var os=require('os'); //os -> operating module

var user=os.userInfo();
console.log(user)
console.log(user.username)

fs.appendFile('greeting.txt','Hi '+ user.username + '!\n',()=>{
    console.log('File Created Successfully');
});







/*function callback(){
    console.log("priyanshu is calling a callback function")
}

const add=function(a,b,callback){
    var result=a+b;
    console.log("Result is "+result);
    callback();
}
add(36346,46765,callback)  */

// const add=function(a,b,priyanshu){
//     var res=a+b;
//     console.log('Result: '+res);
//     priyanshu();
// }
// // add(2,3,function(){
// //     console.log("Addition is completed.")
// // });
// add(2,3,()=>{
//     console.log("Addition is completed.")
// });