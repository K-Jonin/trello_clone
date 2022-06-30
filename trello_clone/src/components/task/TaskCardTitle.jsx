import React, { useState } from 'react'

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
    console.log(isClick);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
	<div className="taskCardTitleInputArea" onClick={handleClick}>
    {isClick
      ? (<form onSubmit={handleSubmit}>
        <input
          autoFocus
          className="taskCardTitleInput"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={inputCardTitle}
          maxLength={15}
        />
      </form>)
      : <h3>{inputCardTitle}</h3>
    }
  </div>
  )
}
