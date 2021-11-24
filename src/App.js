import React from "react";
import CardList from "./CardList";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  state = {
    profiles: [],
  };
  addProfile = (profileData) => {
    console.log("app", profileData);
    this.setState((prevSate) => ({
      profiles: [...prevSate.profiles, profileData],
    }));
  };
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
