import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    const { method, name, location, contact } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-container">
        <h1>{method}</h1>
        <h2>
          count: {count} count2 : {count2}
        </h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Click
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
