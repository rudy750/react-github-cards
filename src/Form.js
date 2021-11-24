import React, { useState } from "react";

export default function Form(props) {
  const [userName, setUserName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await fetch(`https://api.github.com/users/${userName}`);
    const user = await resp.json();
    props.onSubmit(user);
    setUserName("");
    console.log(user);
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
