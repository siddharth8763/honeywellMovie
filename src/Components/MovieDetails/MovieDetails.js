import React from "react";

import movieData from "../../Databases/MovieDB.json";

import Card from "react-bootstrap/Card";

const MovieDetails = () => {
  return (
    <>
      {movieData.map((data, index) => {
        return (
          <Card key={index}>
            <Card.Body>
              <Card.Img src={data.Poster} />
              <Card.Title>{data.Title}</Card.Title>
              <Card.Text>
                Directed By <b>{data.Director}</b>
                <br />
                Suitable for <b>{data.Genre}</b>
                <br />
                Released in <b>{data.Year}</b>
              </Card.Text>
              <Card.Footer>
                <b>{data.ticketCount}</b> ticket remaining
              </Card.Footer>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default MovieDetails;
