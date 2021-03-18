import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';

// components
import TodoItem from './TodoItem'
import AddItem from './AddItem'

const ItemList = () => {

  // declaring the state
  const todoItemList = {
    items: [{
      id: uuidv4(),
      item: "Write my code"
    },
    {
      id: uuidv4(),
      item: "Compile the code"
    },
    {
      id: uuidv4(),
      item: "debug it"
    },
    {
      id: uuidv4(),
      item: "deploy in the server"
    },
    {
      id: uuidv4(),
      item: "Put in Github"
    }],
    value: ''
  }

  // setting the initial list of TODO items
  const [todoItems, setTodoItems] = useState(todoItemList)
  const lastElement = useRef(null)

  useEffect(() => {
    scrollToBottom()
  })

  // always scroll to the bottom
  const scrollToBottom = () => {
    lastElement.current.focus()
    // lastItem.current.scrollIntoView({ behavior: "smooth" })
  }

  // find and delete the item whose X button is clicked
  const handleDelete = (id) => {
    setTodoItems({ ...todoItems, items: todoItems.items.filter(item => item.id != id) })
  }

  // insert an item into the list and reset the input field
  const handleInsert = () => {
    setTodoItems({ items: [...todoItems.items, { id: uuidv4(), item: todoItems.value }], value: '' })
  }

  // update the value of the state when input box changes
  const handleUpdateInput = (e) => {
    setTodoItems({ ...todoItems, value: e.target.value })
  }

  // capture the ENTER key 
  const handleEnterEvent = (e) => {
    if ((e.keyCode == 13 || e.which == 13) && todoItems.value != '') {
      handleInsert()
    }
  }

  return (
    <div className="show-add-items">
      <AddItem addItemValue={todoItems.value}
        handleUpdateInput={handleUpdateInput}
        handleEnterEvent={handleEnterEvent} />
      <div className="list-items">
        {
          todoItems.items.map((ele) => {
            return <TodoItem key={ele.id} {...ele} handleDelete={handleDelete} />
          })
        }
        <div ref={lastElement}></div>
      </div>
    </div>
  );
}

export default ItemList;
