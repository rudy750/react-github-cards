import React, { useState } from "react";

export default function Form(props) {
  const [userName, setUserName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await fetch(`https://api.github.com/users/${userName}`).then(
      (resp) => resp.json()
    );

    // const user = await resp.json();
    props.onSubmit(resp);
    setUserName("");
    console.log(resp);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="GitHub username"
          required
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button>Add card</button>
      </form>
    </div>
  );
}

/**
 * 
 * see the difference between class/functional compone
 * 
 * 
 * export default class Form extends Component {
  state = { userName: "" };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await fetch(
      `https://api.github.com/users/${this.state.userName}`
    );
    const user = await resp.json();
    this.props.onSubmit(user);
    this.setState({ userName: "" });
    console.log(user);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="GitHub username"
            required
            value={this.state.userName}
            onChange={(event) =>
              this.setState({ userName: event.target.value })
            }
          />
          <button>Add card</button>
        </form>
      </div>
    );
  }
}
 */
