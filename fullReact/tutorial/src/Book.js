import { books } from "./books"



function Book({img,title,author}){
    // console.log(props)
  //needed to remeber while working on event
  //attribute, eventHandler
  // onclick, onMouseOver
  
  const clickHandler = (e)=>{
    console.log(e)
     console.log(e.target)  //prints the buttons in console
    alert("I love you")
    console.log(title)
  }
  
  const mouseOver = ()=>{
    console.log("mouse over")
  }   
  
    return(
      <article className='book' onMouseOver={mouseOver}>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick={clickHandler}>Click to love</button>
      </article>
    )
  }
  ReactDom.render(<Book/>, document.getElementById("root"))

  export default Book


