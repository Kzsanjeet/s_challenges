import { useState } from "react"


//making sqaure component to show X when the button is clicked
function Square({value}){
    // return <button className="square">{value}</button>
    // const [value, setValue] = useState(null)
    // function handleClick(){
    //     setValue("X")
    // }
    // return(
    //     <button className="square" onClick={handleClick}>{value}</button>
    // )

    return(
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
        )
}


export default function Board(){
    const [squares, setSquares] = useState(Array(9).fill(null))   //Array(9).fill(null) creates an array with nine elements and sets each of them to null.


    function handleClick(i){
        const nextSquares = squares.slice();
        nextSquares[i] = "X";
        setSquares(nextSquares);

    }
    return (
    <>
    <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
    </div>
    <div className="board-row">
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
    </div>
    <div className="board-row">
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
    </div>
    </>    
    
    )
}