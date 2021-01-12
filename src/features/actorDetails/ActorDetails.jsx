import { Button, Col, Row } from "antd";
import * as React from "react";
import { MoviesList } from "../moviesList/MoviesList";
import "./ActorDetails.css";
import { ActorInfo } from "./ActorInfo";
export const ActorDetails = ({ actorName, setCurrentDisplay }) => {
  const [actorInfo, setActorInfo] = React.useState({});

  React.useEffect(() => {
    const getActorInfo = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&language=en-US&query=${encodeURI(
            actorName
          )}&page=1&include_adult=false`
        );
        const {
          results: { 0: actorInfo },
        } = await response.json();
        setActorInfo(actorInfo);
      } catch (e) {
        console.log(e);
      }
    };

    getActorInfo();
  }, [actorName]);

  return (
    <div className="ActorDetails">
      <Row>
        <Button
          type="primary"
          onClick={() => setCurrentDisplay({ type: "drop" })}
        >
          Go back
        </Button>
      </Row>
      <Row>
        <Col span={8}>
          <ActorInfo actor={actorInfo}></ActorInfo>
        </Col>
        <Col span={16}>
          <MoviesList movies={actorInfo.known_for}></MoviesList>
        </Col>
      </Row>
    </div>
  );
};
