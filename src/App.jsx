import { useState } from 'react'
import './App.css'
import Square from './sections/square';
import {newBoard} from '/src/sections/new_board';
function App() {
  const [board,setBoard]= useState(newBoard()); 
  const handleMovePiece=(c1,c2)=>{
    const updatedBoard={...board}
    const updatedC1Cell = { ...updatedBoard[c1] };
    const updatedC2Cell = { ...updatedBoard[c2] };
    updatedC1Cell.piece = null;
    updatedC2Cell.piece = 'hola';
    updatedBoard[c1] = updatedC1Cell;
    updatedBoard[c2] = updatedC2Cell;
    setBoard(updatedBoard);
  } 
  return (
      <div className='container'>
        <div id="board">
          {
            Object.keys(board).reverse().map(key => (
             <Square key={key} movePiece={handleMovePiece} coordinate={key} data={board[key]}/> 
              ))
          } 
        </div>
    </div>
  )
}

export default App
