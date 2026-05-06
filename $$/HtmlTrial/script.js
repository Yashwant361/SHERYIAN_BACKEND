var arr = [1, 2, 3, 4, 5];

// forEach Method
// var res = arr.forEach((val)=>{
// return('Hello' , val);
// })
// console.log(res);


// map Method
// let res= arr.map((ele)=>{
//     return(ele + 12)
// })
// console.log(res);

//filter
// let res = arr.filter((ele) => {
//     // if (ele >3) {
//     //     return true
//     // }
//     // else {
//     //     return false
//     // };

//     return ele >= 3 ? true : false
// })
// console.log(res);

//find
// let res = arr.find((ele) => {
//     return ele == 2 ? true : false;
// })
// console.log(res);


//indexOf
// let res = arr.indexOf(2) ? true : false
// console.log(res);

//Object
// let obj = {
//     name: "yashwant",
//     age: "25",
//     email: "yashwant57@gmail.com",
//     job: "Backend Developer"
// }
// // Object.freeze(obj)
// obj.age = "26" // update age here

// const { name, age, email, job } = obj
// console.log(name,age);


//**find length of function : add arguments in function 
// const res  = function abcd(a,b,c){
// console.log("Hello");
// }
// console.log(res.length);

// function abcd(){
//     return 12
// }


// var res = abcd();
// console.log(res);


//* async js */

async function getUser() {
    console.log("Start");

    try {
        const blob = await fetch("https://api.github.com/users/octocat")
        const data = await blob.json()

        console.log("Full Data:", data);
        const {name,login,followers}=data
        console.log("First User:\n", `${name}\n ${login}\n ${followers}`);
    } catch (err) {
        console.log('Error! Code fatt hogya ');
    }
}
getUser();

//  const blob = await fetch('https://randomuser.me/api/?format=json')
//  const res = await blob.json()
//  console.log(res);
