import React from 'react';

const TodoItem = ({ id, item, handler }) => {
	
	// return a card like div with the item and a X button to delete it
  return (
    <div className="card" id={id}>
    	<div className="heading">{item}
    		<a href="#" className="close-icon" onClick={handler}>X</a>
    	</div>
    </div>
  );
};

export default TodoItem;