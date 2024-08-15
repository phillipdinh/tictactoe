import React, { useState } from "react"
import Cell from "./Cell"

import "./styles.css"
export default function Board() {
	const [board, setBoard] = useState(boardInit())

	const handleBoardClick = (row, col) => {
		const clickedCell = board[row][col]
	}
	return (
		<div className="board-container">
			<div className="board">
				{board.map((cell, index) => (
					<Cell key={index} index={cell.index} player={cell.player} />
				))}
			</div>
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
