let arr = [1,4,3,5,6,6,7]

let arr1 = {...arr}
console.log(arr1)

function sum(v1,v2,v3){
    return v1+v2+v3
}
    
console.log(sum(...arr))