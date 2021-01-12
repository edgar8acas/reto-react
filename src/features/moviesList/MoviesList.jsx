import { List, Row, Col } from "antd";
import * as React from "react";
import "./MoviesList.css";

const MovieListItem = ({ item }) => {
  const {
    original_title,
    vote_average,
    poster_path,
    overview,
    release_date,
  } = item;
  return (
    <div className="MovieListItem">
      <Row>
        <Col span={20}>
          <h2>{original_title}</h2>
        </Col>
        <Col span={4}>{vote_average}</Col>
      </Row>
      <Row>
        <Col span={4} className="MovieListItem-image-wrapper">
          <img
            src={`https://image.tmdb.org/t/p/w154${poster_path}`}
            alt={original_title}
          ></img>
        </Col>
        <Col span={20}>
          <p>{overview}</p>
          <p>Release date: {release_date}</p>
        </Col>
      </Row>
    </div>
  );
};
export const MoviesList = ({ movies }) => {
  return (
    <div className="MoviesList">
      <List
        header={<h1>Movies</h1>}
        dataSource={movies}
        renderItem={(item) => <MovieListItem item={item} key={item.id} />}
      />
    </div>
  );
};
