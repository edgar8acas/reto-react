import * as React from "react";
import "./ActorInfo.css";
import { Typography } from "antd";
const { Title } = Typography;
export const ActorInfo = ({ actor }) => {
  const { name, gender, popularity, profile_path } = actor;

  return (
    <div className="ActorInfo">
      <img
        src={`https://image.tmdb.org/t/p/w154${profile_path}`}
        width="100%"
        alt={name}
      ></img>
      <Title level={3} className="ActorInfo-name">
        {name}
      </Title>
      <div className="ActorInfo-gender">{gender === 1 ? "Female" : "Male"}</div>
      <p className="ActorInfo-popularity">Popularity: {popularity}</p>
    </div>
  );
};
