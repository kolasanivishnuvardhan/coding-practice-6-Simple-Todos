import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  render() {
    const {eachTodo, deleteTodo} = this.props
    const {id, title} = eachTodo

    const deleteTodoItem = () => {
      deleteTodo(id)
    }
    return (
      <li className="li">
        <p className="title">{title}</p>
        <button className="btn" type="button" onClick={deleteTodoItem}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
