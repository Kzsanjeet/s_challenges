// map filter and reduce also belongs to higher order array methods
//map creates new array.
//on the other hand foreach update in the exixting array.

let arr = [45,23,30,40]

let a = arr.map((value, index,array)=>{
    console.log(value,index,array)
    return value + 1 // adding in the element of array
})
console.log(a) // created new array.

