import React from 'react'

export const Task = ({task}) => {
  return (
	<div className="taskBox">
		<p className="taskText">{task.text}</p>
	</div>
  )
}