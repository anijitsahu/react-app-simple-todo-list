import { useState, useEffect } from 'react'
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
  // useEffect(() => {
  //   // scrollToBottom()
  // })

  // always scroll to the bottom
  const scrollToBottom = () => {
    // lastItem.scrollIntoView({ behavior: "smooth" })
    console.log('reached')
  }

  // delete the item from the list of items
  const handleDelete = (id) => {
    let newTodoItems = [...todoItems.items]

    // find and delete the item whose X button is clicked
    for (let i = 0; i < newTodoItems.length; i++) {
      if (newTodoItems[i].id == id) {
        newTodoItems.splice(i, 1)
        break;
      }
    }

    setTodoItems((prevState, props) => ({
      items: newTodoItems
    }))
  }

  // insert an item into the list
  const handleInsert = () => {
    let newTodoItems = [...todoItems.items]
    newTodoItems.push({ id: uuidv4(), item: todoItems.value })

    setTodoItems((prevState, props) => ({
      items: newTodoItems,
      value: ''
    }))
  }

  // update the value of the state when input box changes
  const handleUpdateInput = () => {
    setTodoItems((prevState, props) => ({
      value: target.value
    }))
  }

  // capture the ENTER key 
  const handleEnterEvent = () => {
    // if ENTER key is pressed push it to the Array
    if ((keyCode == 13 || which == 13) && todoItems.value != '') {
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
            return <TodoItem key={ele.id} {...ele} />
          })
        }
        {/* <div ref={(ele) => { lastItem = ele; }}></div> */}
      </div>
    </div>
  );
}

export default ItemList;
