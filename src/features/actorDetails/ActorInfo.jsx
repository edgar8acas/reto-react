import * as React from "react";
import "./ActorInfo.css";
export const ActorInfo = ({ actor }) => {
  const { name, gender, popularity, profile_path } = actor;

  return (
    <div className="ActorInfo">
      <img
        src={`https://image.tmdb.org/t/p/w154${profile_path}`}
        width="100%"
        alt={name}
      ></img>
      <h1>{name}</h1>
      <span>{gender === 1 ? "Female" : "Male"}</span>
      <span>{popularity}</span>
    </div>
  );
};
