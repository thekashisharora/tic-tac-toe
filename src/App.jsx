import React, { useState } from 'react'
import './App.css'

// 1. Helper Function: App se BAHAR rahega (Yeh bilkul sahi hai)
const checkWinner = (board) => {
  const lines = [
    [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
    [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14],
    [0, 5, 10, 15], [3, 6, 9, 12],

  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i]
    if (board[a] && board[a] === board[b] && board[a] === board[c] && board[a] === board[d]) {
      return board[a]
    }
  }
  return null
}

// 2. Main App Component
const App = () => {
  // States
  const [board, setBoard] = useState(Array(16).fill(null))
  const [isXNext, setIsXNext] = useState(true)

  // Winner check karne wali line YAHAN aayegi (App ke andar)
  const winner = checkWinner(board)

  // Click handler function (Poora code ek hi function ke andar)
  const handleClick = (index) => {
    // Agar dabba bhara hai YA koi jeet gaya hai, toh kuch mat karo
    if (board[index] !== null || winner) {
      return
    }

    const newBoard = [...board]
    newBoard[index] = isXNext ? 'X' : 'O'
    setBoard(newBoard)
    setIsXNext(!isXNext)
  }

  // UI (HTML/JSX) - Yeh bhi App ke andar rahega
  return (
    <div className='containergame'>
      <h1>Tic Tac Toe</h1>
      <h2>{winner ? `Winner: ${winner} 🎉` : `Next Player: ${isXNext ? 'X' : 'O'}`}</h2>

      {/* 3x3 Board */}
      <div className="board">
        <button className="square" onClick={() => handleClick(0)}>{board[0]}</button>
        <button className="square" onClick={() => handleClick(1)}>{board[1]}</button>
        <button className="square" onClick={() => handleClick(2)}>{board[2]}</button>
        <button className="square" onClick={() => handleClick(3)}>{board[3]}</button>
        <button className="square" onClick={() => handleClick(4)}>{board[4]}</button>
        <button className="square" onClick={() => handleClick(5)}>{board[5]}</button>
        <button className="square" onClick={() => handleClick(6)}>{board[6]}</button>
        <button className="square" onClick={() => handleClick(7)}>{board[7]}</button>
        <button className="square" onClick={() => handleClick(8)}>{board[8]}</button>
        <button className="square" onClick={() => handleClick(9)}>{board[9]}</button>
        <button className="square" onClick={() => handleClick(10)}>{board[10]}</button>
        <button className="square" onClick={() => handleClick(11)}>{board[11]}</button>
        <button className="square" onClick={() => handleClick(12)}>{board[12]}</button>
        <button className="square" onClick={() => handleClick(13)}>{board[13]}</button>
        <button className="square" onClick={() => handleClick(14)}>{board[14]}</button>
        <button className="square" onClick={() => handleClick(15)}>{board[15]}</button>
      </div>
    </div>
  )
}

export default App