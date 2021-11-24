import React from "react";
import Card from "./Card";

export default function CardList(props) {
  return (
    <div>
      {props.profiles.map((profile) => (
        <Card key={profile.name} {...profile} />
      ))}
    </div>
  );
}
