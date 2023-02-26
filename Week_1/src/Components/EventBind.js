import React, { Component } from 'react'

class EventBind extends Component {
    constructor(){
        super()
        this.state={
            message: 'hello'
        }
    }
    click(){
        this.setState({
            message: 'Goodbye!'
        })
    }
    render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.click.bind(this)}>Click</button>
      </div>
    )
  }
}

export default EventBind