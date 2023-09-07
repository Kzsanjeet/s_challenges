//Array reduce method
let array4 = [1,2,3,4,5]
let k = array4.reduce((z,z1)=>{
    return z+z1
})
console.log(k)

let array5 = [4,5,6,7,8,9]
const myfun = (h1,h2)=>{
    return h1+h2
}
let i = array5.reduce(myfun)

console.log(i)  