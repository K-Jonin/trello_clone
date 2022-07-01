import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { AddTaskCardButton } from "./button/AddTaskCardButton"
import { TaskCard } from "./TaskCard"

/**
 * タスクの並び替え
 * @param {array} taskCardsList 
 * @param {int} startIndex 
 * @param {int} endIndex 
 */
const reorder = (taskCardsList, startIndex, endIndex) => {
const remove = taskCardsList.splice(startIndex, 1);
taskCardsList.splice(endIndex, 0, remove[0]);  
};

export const TaskCards = () => {

	const [taskCardsList, setTaskCardsList] = useState([{
		id: "0",
		draggableId: "item0",
	}]);

	const handleDragEnd = (result) => {
		reorder(taskCardsList, result.source.index, result.destination.index);
	};

  return (
	<DragDropContext onDragEnd={handleDragEnd}>
		<Droppable droppableId="droppable" direaction="horaizotal">
			{(provided) => (
				<div className="taskCardsArea"
					{...provided.droppableProps}
					ref={provided.innerRef}
				>
					{taskCardsList.map((taskCard, index) => (
						<TaskCard
							key={taskCard.id}
							taskCardsList={taskCardsList}
							setTaskCardsList={setTaskCardsList}
							taskCard={taskCard}
							index={index}
						/>
					))}
					{provided.placeholder}
					<AddTaskCardButton
						taskCardsList={taskCardsList}
						setTaskCardsList={setTaskCardsList}
					/>
				</div>
			)}
		</Droppable>
	</DragDropContext>
  )
}
