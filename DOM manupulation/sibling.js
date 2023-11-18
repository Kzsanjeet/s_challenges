console.log(document.body.firstChild)

let a = document.body.firstChild

//the differences between ParentNode and ParentElement is that the parentNode returns anything weather it is an text or element. 
// On the other hand ParentElement returns only the element such div,head,body.

console.log(a.parentNode)
console.log(a.parentElement)

console.log(a.firstChild.nextSibling)