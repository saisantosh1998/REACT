import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message:'hello there'
      }
      this.handler=this.handler.bind(this);//binding in constructor and this is best option
    }
    handler=()=>{
        this.setState({
            message:'over'
        })
    }// using this syntax also preferable rather than using normal function syntax
  render() {
    return (
      <div>
          {/* <button onClick={()=>this.handler()}>first</button> this method using arrow function*/}
          {/* <button onClick={this.handler.bind(this)}>first</button> binding function here itself */}
           <button onClick={this.handler}>first</button> {/*when binding in constructor */}
      </div>
    )
  }
}

export default EventBinding