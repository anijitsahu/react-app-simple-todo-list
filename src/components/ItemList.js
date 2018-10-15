import React, { Component } from 'react';

// todo item component
import TodoItem from './TodoItem'

class ItemList extends Component {

  constructor(props) {
    super(props);
    // declaring the state
    this.state = {
      items: [{
          id: "abc24",
          item: "Write my code"
        },
        {
          id: "abc23",
          item: "Compile the code"
        },
        {
          id: "abcd4",
          item: "debug it"
        },
        {
          id: "rabc4",
          item: "deploy in the server"
        },
        {
          id: "xbc34",
          item: "Put in Github"
        },
      ]
    }
  }

  handleDelete(id) {

    let newState = [...this.state.items]

    // find and delete the item whose X button is clicked
    for (let i = 0; i < newState.length; i++) {
      if (newState[i].id == id) {
        newState.splice(i, 1)
        break;
      }
    }


    this.setState((prevState, props) => ({
    	items: newState
    }))
  }

  render() {

    return (
      this.state.items.map((ele) => {
        return <TodoItem {...ele} handler={this.handleDelete.bind(this, ele.id)}/>
      })
    );
  }
}

export default ItemList;