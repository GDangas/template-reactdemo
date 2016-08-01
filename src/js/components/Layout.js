import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Counter from "./Counter";

export default class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      name:"David",
      message: "Welcome"
    };
  }
  changeName(name){
    this.setState({name})
  }
  render() {
    return (
      <div>
        <Header
          changeName={this.changeName.bind(this)}
          nameInHeader={this.state.name}
          messageInHeader= {this.state.message}
        />
        <Counter startNumber={5} />
        <Footer />
      </div>
    );}
}
