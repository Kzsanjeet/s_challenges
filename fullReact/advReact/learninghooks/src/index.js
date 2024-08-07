import React from 'react'
import ReactDom from "react-dom"
//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client' //react library to talk to web browers
import "./App.css"
import "./Renderlist"
import Renderlist from './Renderlist'
//import Event from './Event'
//import Hooks from './Hooks'
// import Board from './tictac'
import Thinking from './Think'

function MyButton(){
  return(
    <>
    <button className="btn">My Button</button>
    </>
    )
}

export default function App() {  // export default funciton refers to the main component if the file
  return (
    <div className='main'>
      {/* <h1>Hello I am Sanjeet</h1>
      <p>Please, click below to play</p>
      <div className='avatar'>
              <img src="data:image/jpeg;base64,/9j/" alt="" />
      </div>
      <MyButton/> */}
      <Renderlist/>
    </div>
  )
}


const user =  {
  name:"Diya Thapa",
  age:20,
  imageUrl:"https://i.imgur.com/yXOvdOSs.jpg",
  imageSize:90
}

function Show(){
  return(
    <>
    <div className='info'>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <img src={user.imageUrl} alt={"Image of" + user.name} style={{width:user.imageSize,height:user.imageSize,borderRadius:50}}/>
    </div>
    </>
  )
}

function AdminPanel(){
  return(
    <>
    <div>
      <div>
        <h2>Enter Name:</h2>
        <input type="text" placeholder='Enter the name:'/>
        <h2>Enter Age:</h2>
        <input type="number" placeholder='Enter the age:'/>
        <h2>Enter Password:</h2>
        <input type="password" placeholder='Enter the password:'/>
      </div>
      <div>
        <button>SignUp</button>
      </div>
    </div>
    </>
  )
}

//conditional rendering
// let content;
let isLoggedIn = true;

// if(isLoggedIn){
//   content = <AdminPanel/>
// }else{
//   content = <Show/>
// }

//alternative way for consitional rendering

function Display(){
  return(
    <div>
      {
        isLoggedIn ?(
          <AdminPanel/>
        ):(
          <Show/>
        )
      }

      {/* {
        isLoggedIn && <AdminPanel/>
      } */}
    </div>
  )
}



// ReactDom.render(<Show/>,document.getElementById("root"))
// ReactDom.render(<Display/>,document.getElementById("root"))
// ReactDom.render(<Event/>,document.getElementById("root"))
// ReactDom.render(<Hooks/>,document.getElementById("root"))
// ReactDom.render(<Board/>,document.getElementById("root"))
ReactDom.render(<Thinking/>,document.getElementById("root"))

// ReactDom.render(<App/>, document.getElementById("root"))

