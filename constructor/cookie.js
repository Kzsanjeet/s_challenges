
let key  = prompt("Enter the  key")
let value = prompt("Enter the value")
document.cookie = `${key} = ${value}`
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
console.log(document.cookie)