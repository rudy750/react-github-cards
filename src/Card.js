import React from "react";

export default function Card(props) {
  return (
    <div className="github-profile" style={{ margin: "1rem" }}>
      <img src={props.avatar_url} />
      <div
        className="info"
        style={{
          display: "inline-block",
          marginLeft: 10,
          verticalAlign: "top",
        }}
      >
        <div className="name" style={{ fontSize: "125%" }}>
          {props.name}
        </div>
        <div className="company">{props.company}</div>
      </div>
    </div>
  );
}
