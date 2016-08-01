import React from "react";


export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <h2>This is a Footer</h2>
    </div>
    );
  }
}
/*class Boss extends React.Component {
  render(){
    return (
    <div>
      <Employee role="Cleaner" />
      <Employee role="Project Leader">Software Developer</Employee>
      <Employee />
    </div>
    );
  }
}
class Employee extends React.Component {
  render(){
    return (
      <div>
        <h3>I am a {this.props.role}</h3>
        <h4>My child is {this.props.children}</h4>
      </div>
    );
  }
}

Employee.propTypes = {
  role: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired
};

Employee.defaultProps = { children: "nobody" };*/
