import React from "react";

export default class Header extends React.Component {

  changeMessage(e){
    const name = e.target.value
    this.props.changeName(name)
  }

  render() {
    return (
      <div>
        <h1>{this.props.messageInHeader} {this.props.nameInHeader}</h1>
        <input
          defaultValue={this.props.nameInHeader}
          onChange={this.changeMessage.bind(this)}
        />
      </div>
    );
  }
}
Header.propTypes = {
  nameInHeader: React.PropTypes.string.isRequired,
  messageInHeader: React.PropTypes.string.isRequired,
  changeName: React.PropTypes.func.isRequired
}
