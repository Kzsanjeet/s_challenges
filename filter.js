// filter method 
let array1 = [45, 23, 21,0,3,5]
console.log(array1)
let f = array1.filter((a)=>{
    return a > 10
})
console.log(f)

let array2 = [3,4,5,6,7,8]
let d = array2.filter((x)=>{
    return x%2 === 0
})
console.log(d)