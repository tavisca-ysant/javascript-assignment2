var wait4 = item => {
  return new Promise((resolve,reject) => {
                      setTimeout(() => {
                            if(!item) reject(new Error("invalid name of functions"));
                            resolve(item);
                      }, 2000);
                    });
};
 

var someFn4 = async (item) => {
  await wait4(item).then(console.log);
  await wait4(item).catch(console.log);
}
async function finalFunc(){
// in series
for (const item of ['first', 'second', 'third']) {
  await someFn4(item)
} return 'success';}


//test code

// var wait4 = item => {
//     return new Promise((resolve,reject) => {
//                         setTimeout(() => {
//                               if(!item) reject(new Error("invalid wait time"));
//                               resolve(item);
//                         }, 2000);
//                       });
//   };
   
  
//   var someFn4 = async (item) => {
//     await wait4(item).then(console.log);
//     await wait4(item).catch(console.log);
//   }
//   async function finalFunc(){
//   // in series
//   for (const item of ['', '', '']) {
//     await someFn4(item)
//   } return 'success';}


//test code
// var wait = item => {
//     setTimeout(item);
// }

// async function f1() { 
//     await wait(2000);
//     return 1; }


// async function f2() {
//     await wait(3000);
//     return 2; }

// async function f3() {
//     await wait(4000);
//     return 3; }

// var functionArray = [f1, f2, f3]
 
// async function multiple(functionArray){
//     for (const item of functionArray){
//         await item().then(alert);} return 'success'}