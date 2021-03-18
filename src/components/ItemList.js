import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

// components
import TodoItem from './TodoItem'
import AddItem from './AddItem'

class ItemList extends Component {

  constructor(props) {
    super(props);
    // declaring the state
    this.state = {
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
      },
      ],

      value: ''
    }
  }

  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  // always scroll to the bottom
  scrollToBottom() {
    // console.log('refs', this.refs.lastItem)
    this.lastItem.scrollIntoView({ behavior: "smooth" })
  }

  // delete the item from the list of items
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

  // insert an item into the list
  handleInsert() {
    let newState = [...this.state.items]
    newState.push({ id: uuidv4(), item: this.state.value })

    this.setState((prevState, props) => ({
      items: newState,
      value: ''
    }))
  }

  // update the value of the state when input box changes
  handleUpdateInput(event) {
    event.persist()

    this.setState((prevState, props) => ({
      value: event.target.value
    }))

  }

  // capture the ENTER key event
  handleEnterEvent(event) {
    event.persist()
    // if ENTER key is pressed push it to the Array
    if ((event.keyCode == 13 || event.which == 13) && this.state.value != '') {
      this.handleInsert()
    }
  }

  render() {

    return (
      <div className="show-add-items">
        <AddItem addItemValue={this.state.value}
          handleUpdateInput={this.handleUpdateInput.bind(this)}
          handleEnterEvent={this.handleEnterEvent.bind(this)} />

        <div className="list-items">
          {
            this.state.items.map((ele) => {
              return <TodoItem key={ele.id} {...ele} handler={this.handleDelete.bind(this, ele.id)} />
            })
          }
          <div ref={(ele) => { this.lastItem = ele; }}></div>
        </div>
      </div>
    );
  }
}

export default ItemList;