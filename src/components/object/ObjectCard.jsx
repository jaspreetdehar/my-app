import React from "react";
import "./Objectstyle.css";
import image from "../../images/clapperboard.af8208f69a1a6b200f2a.png";
import image1 from "../../images/star.7f931ce5854754318386.png";
import image2 from "../../images/clock.a583f4433036c727fbab.png";
export default function ObjectCard(a) {
  return (
    <>
      <div className="col-md-4">
        <div className="card">
          <div className="card-image">
            <img src={a.image} className="card-img-top img-fluid" alt="..." />
          </div>
          <div className="card-body">
            <div className="movies-title d-flex justify-content-between">
              <h3>{a.title}</h3>
              <div className="year">
                <p>{a.year}</p>
              </div>
            </div>
            <div className="movie-desc">
              <p>{a.description}</p>
            </div>
            <div className="geners">
              {a.genre.map((p, i) => (
                <span key={i}>{p}</span>
              ))}
            </div>
            <div className="author py-3">
              <h3>creator</h3>
              {a.creator.map((p, index) => (
                <span key={index}>
                  {p} {index === a.creator.length - 1 ? null : ","}{" "}
                </span>
              ))}
            </div>
            <div className="movies-info">
              <p>
                <h3>Duration</h3>
                <span>
                  <img src={image} alt="" />
                  {a.runtime_in_minutes}
                </span>
              </p>
              <p>
                <h3>Episode</h3>
                <span>
                  <img src={image2} alt="" />
                  {a.episodes}
                </span>
              </p>
              <p>
                <h3>Rating</h3>
                <span>
                  <img src={image1} alt="" />
                  {a.rating}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
