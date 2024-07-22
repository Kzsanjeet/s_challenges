import { useState } from "react"


//making sqaure component to show X when the button is clicked
function Square({value, onSquareClick}){
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


export default function Board() {
    const [xIsNext,setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null));
  
    function handleClick(i) {
        if(squares[i] || calculateWinner(squares)){
            return  // prevents overwrite   this directly returns the value of original array
        }

      const nextSquares = squares.slice();
      if(xIsNext){
        nextSquares[i] = "X"
      }else{
        nextSquares[i] = "O"
      }
      setSquares(nextSquares)
      setXIsNext(!xIsNext)  //This function call updates the state with the inverted value of xIsNext, effectively toggling the turn from "X" to "O" or from "O" to "X".
    }

    const winner = calculateWinner(squares)
    let status;
    if(winner){
        status = "Winner: " + winner
        }else{
        status = "Next player: " + (xIsNext ? "X" : "O")
         }

    const reload = () =>{
        window.location.reload()
    }
    return (
      <>
      <div><button onClick={reload}>Refresh</button></div>
      <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
          <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
      </>
    );
  }

  // export default function Game() {
  //   const [xIsNext,setXIsNext] = useState(true)
  //   const [history, setHistory] = useState(Array(9).fill(null))
  //   const currentSquares = history[history.length-1]

  //   function handlePlay(nextSquares){
  //     setHistory([...history,nextSquares])
  //     setXIsNext(!xIsNext)
  //   }

  //   return(
  //     <>
  //     <div className="game">
  //       <div className="game-board">
  //         <Board xIsNext={xIsNext} squares={currentSquares} onClick={handlePlay} />
  //       </div>
  //       <div className="game-info">
  //         <ol>{}</ol>
  //       </div>
  //     </div>
  //     </>
  //   )
  // }

  function calculateWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ]

        for (let i = 0; i<lines.length; i++){
            const [a, b, c] = lines[i]
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){  // Ensures that the square at index a is not null or undefined (i.e., it has been filled with either "X" or "O").
                return squares[a]
            }
        }
        return null
  }

