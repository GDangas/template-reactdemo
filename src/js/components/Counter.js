import React from "react"

export default class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: this.props.startNumber
    }
  }

  tick(){
    this.setState({count: this.state.count + 1})
  }

  render() {
    return(
      <div onClick= {()=> this.tick()} style={{border: '2px solid black'}} >
        <h3>Counter</h3>
        Count: {this.state.count}
      </div>
    )
  }
}
