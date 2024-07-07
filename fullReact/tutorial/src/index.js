// import React from "react"




// function Greeting(){
//   return (
//     <div>
//         <h4>thid is sanjeet thapa this is my first component</h4>
//         <div>
//         <ul>
//           <li>
//             <a href="index.html">Hello World</a>
//           </li>
//         </ul>
//         </div>  
//     </div>
// )
// } 



// ReactDom.render(<Greeting/>,document.getElementById("root"))


// component must always be capitalize
// you must return sth after initializing component



// import React from "react"
// import ReactDom from "react-dom"

// //nested components, react tools

// function Greeting(){
//   return (
//     <div>
//        <Person/>
//        <Person2/> 
//     </div>
// )
// } 

// const Person = () => <h2>Saanjeet Thapa</h2>
// const Person2 = () => <h2>Sanjeet Thapa</h2>

// ReactDom.render(<Greeting/>,document.getElementById("root"))


// creating a book list

// import React from 'react'
// import ReactDom from "react-dom"
// import "./index.css";

// const author = "Sanjeet Kazi Thapa"
//   const title = "Himalayas"  
//  const image = "data:image/jpeg;base64,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"

// function BoolList() {
//   return(
//     <section className="booklist">
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//     </section>
//   )
// }
// // learning jsx javascript by creating variable and using it to render

// function Book(){
//   return(
//     <article className='book'>
//         <img src={image} alt="" />
//         <h1>{title.toUpperCase()}</h1>
//         <h4>{author}</h4> 
//     </article>
//   )
// }


// ReactDom.render(<BoolList/>, document.getElementById("root"))


// moving towards props

import React, { Children } from 'react'
import ReactDom from "react-dom"
import "./index.css";

const books = [
  {
    id:1,
  author: "Sanjeet Kazi Thapa",
  title : "Himalayas",
  image : "data:image/jpeg;base64,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"

},
{
  id:2,
  author: "Balbir Singh Thapa",
  title : "Temple ",
  image : "https://cityfurnish.com/blog/wp-content/uploads/2024/01/9087-min.jpg"
},
{
  id:3,
  author: "Balbir Singh Thapa",
  title : "Temple ",
  image : "https://cityfurnish.com/blog/wp-content/uploads/2024/01/9087-min.jpg"
},
{
  id:4,
  author: "Balbir Singh Thapa",
  title : "Temple ",
  image : "https://cityfurnish.com/blog/wp-content/uploads/2024/01/9087-min.jpg"
}
]


// const names = ["san","bir","saur"]  // making array

// const newName = names.map((name)=>{  // using map fucntion to render the data from array
//   return <h1>{name}</h1>
// })

function BookList() { 
  return(
    <section className="booklist">
      {/* {newName}         calling that map function to render */}
      {/* to use childredn props we cannot use self closing and add a element
      <Book image= {firstBook.image} title={firstBook.title} author = {firstBook.author}>
        </Book>  
        {/* her, I added Children element as seen in the p tag   */}
      {/* <Book image= {firstBook.image} title={firstBook.title} author = {firstBook.author}/>    */}  
      {/* <Book image= {secondBook.image} title={secondBook.title} author = {secondBook.author}/> */} 
      {books.map((book)=>{
        console.log(book)
        // console.log(...book)
        return <Book key= {book.id} book={book}> </Book>
        // return <Book key={book.id} {...book}></Book>  //using spread operator
      })}
    </section>
  )
}
// learning jsx javascript by creating variable and using it to render

// function Book(props){ // it is not compulsory that we have to put the name props only
// function Book({image, title, author}){ 
//   // const{image, title, author} = props // destructure in javascript
//   // console.log(props) // it is used when we have to display specific value
//   return(
//     <article className='book'>
//         <img src={image} alt="" />
//         <h1>{title}</h1> 
//         <h4>{author}</h4>
//         {/* rendering childrem props */}
//     </article>
//   )
// }

function Book(props){
  // console.log(props)
//needed to remeber while working on event
//attribute, eventHandler
// onclick, onMouseOver

const clickHandler = (e)=>{
  console.log(e)
   console.log(e.target)  //prints the buttons in console
  alert("I love you")
}

const mouseOver = ()=>{
  console.log("mouse over")
}   

  return(
    <article className='book' onMouseOver={mouseOver}>
      <img src={props.book.image} alt="" />
      <h1>{props.book.title}</h1>
      <h4>{props.book.author}</h4>
      <button type='button' onClick={clickHandler}>Click to love</button>
    </article>
  )
}

ReactDom.render(<BookList/>, document.getElementById("root"))
