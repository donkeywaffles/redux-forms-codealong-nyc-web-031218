import React, { Component } from 'react'

class CreateTodo extends Component {

  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state
    })
  }

  render() {
    console.log("STORE", this.props.store)
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(e) => this.handleChange(e)}/>
          </p>
          <input type="submit"/>
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
