import React from 'react'

export const TaskAddInput = ({inputText, setInputText, taskList, setTaskList}) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputText === ""){
      return
    }
    
    // カードを追加
    setTaskList([...taskList, 
    {
      id: taskList.length,
      text: inputText,
    }])

    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
	<div>
    <form onSubmit={handleSubmit}>
      <input
        className="taskAddInput"
        type="text"
        placeholder="add a task"
        onChange={handleChange}
        value={inputText}
      />
    </form>
  </div>
  )
}
