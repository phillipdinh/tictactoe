import React, { useState } from "react"

export default function Cell(props) {
	return (
		<div className="cell" id={`cell-${props.index}`} onClick={props.handleClick}>
			{props.player}
		</div>
	)
}
