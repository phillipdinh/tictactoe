import React, { useState, useRef } from "react"
import Cell from "./Cell"

import "./styles.css"
export default function Board() {
	const [board, setBoard] = useState(boardInit())
	const [isGameOver, setIsGameOver] = useState(false)

	const isPlayerXTurn = useRef(true)

	const handleBoardClick = (index) => {
		const clickedCell = board[index]

		if (clickedCell.player) {
			console.log("Already Picked")
			return
		}

		const newBoard = board.map((cell) => ({ ...cell }))

		if (isPlayerXTurn.current) {
			newBoard[index].player = "X"
		} else {
			newBoard[index].player = "O"
		}

		setBoard(newBoard)

		isPlayerXTurn.current = !isPlayerXTurn.current

		//TODO add gameOver component
		hasAPlayerWon(newBoard, newBoard[index].player)
	}

	const winIndexes = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	]
	function hasAPlayerWon(board, player) {
		for (let winRow of winIndexes) {
			for (let i = 0; i < 3; i++) {
				if (board[winRow[i]].player !== player) break

				if (i === 2) {
					console.log("Game Over", player, "Won")
					setIsGameOver((prev) => !prev)
				}
			}
		}
	}
	return (
		<div className="board-container">
			<div className="board">
				{board.map((cell, index) => (
					<Cell
						key={index}
						index={cell.index}
						player={cell.player}
						handleClick={() => handleBoardClick(cell.index)}
					/>
				))}
			</div>

			{isGameOver ? <div>Game Over</div> : <></>}
		</div>
	)
}

const boardInit = () => {
	const board = []
	for (let i = 0; i < 9; i++) {
		board.push({
			index: i,
			player: null
		})
	}
	return board
}
