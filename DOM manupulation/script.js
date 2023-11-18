window.console.log(window)
console.log("Hello World")
console.log(document.body)
document.body.style.background = "Red"

//return title string
console.log(document.title)
// return head element
console.log(document.head)

//return body tag
console.log(document.body)

// returns html tag
console.log(document.documentElement)

// child are the element inside the main tag 
// for example if there is the meta tag inside the head tag than the meta tag is the child of head tag and head tag is regarded as
//parent tag


//when there is gap between the div and body tag it console it out text node.
// but if we put the both body and div in the same line without the space it prints out the div

// document.body.childNodes and document.body.firstChild is the same thing
console.log(document.body.childNodes[0])
console.log(document.body.firstChild)

//document.body.childNodes[document.body.childNodes.length-1] === document.body.lastChild
console.log(document.body.lastChild)
console.log(document.body.childNodes[document.body.childNodes.length-1])

// it prints out the all the child element list
console.log(document.body.childNodes)

console.log(document.hasChildNodes())

//use array.from function to make node list array.. keep on mind that node list doesnot use the function that array use by itself
// array.from is the function that makes array

let arr = Array.from(document.body.childNodes)

console.log(arr)


// parents and sibling of an element
// next sibling and previous sibling 