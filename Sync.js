import React from "react";
import "./Sync.css";
import Footer from "../FooterComponents/Footer";
import Navbar from "../components/NavbarComponents/Navbar";
import monsoon from "../Assets/Monsoon Shootout.jpg";
import twilight from "../Assets/The Twilight Zone.png";
import gift from "../Assets/GIFT poster.png";
import prague from "../Assets/Prague.png";
import pune from "../Assets/Pune 52.png";
import ncis from "../Assets/NCIS 2.png";
import horn from "../Assets/Horn Please.png";
import sunday from "../Assets/That Sunday.png";
import baji from "../Assets/Baji Latest Poster.png";
import alternative from "../Assets/The Alternative poster.png";
import play from "../Assets/play-circle.png";
import Cannes from "../Assets/Cannes.png";
import Sydney from "../Assets/Sydney.png";
import Brussels from "../Assets/Brussels.png";
import LA from "../Assets/Los Angeles.png";

const songs = new Array(12).fill(0).map((_, i) => ({
  id: i + 1,
  name: "Jugni",
  duration: "4:42",
  genre: "genre of song",
}));

const halfSongs = Math.ceil(songs.length / 2);

function Sync() {
  return (
    <div className="sync">
      <div classname="sync__nav">
        <Navbar />
      </div>
      <div className="sync__banner">
        <h2>
          In the end, it’s all about the
          <span className="banner__yellowtext">love of music</span>
        </h2>
        <h4>some of the music we are really proud of</h4>
      </div>
      <div className="wrapper">
        <div className="left-section">
          <h3 className="project-showcase">Project Showcase</h3>
          <div className="leftside__image-section1">
            <img className="frame-images monsoon-img" src={monsoon} />
            <img className="frame-images twilight-img" src={twilight} />
            <img className="frame-images gift-img" src={gift} />
            <img className="frame-images prague-img" src={prague} />
            <img className="frame-images pune-img" src={pune} />
          </div>
          <div className="leftside__image-section2">
            <img className="frame-images ncis-img" src={ncis} />
            <img className="frame-images horn-img" src={horn} />
            <img className="frame-images sunday-img" src={sunday} />
            <img className="frame-images baji-img" src={baji} />
            {/* <img className="frame-images alternative-img" src={alternative} /> */}
          </div>
        </div>
        <div className="divider"></div>
        <div className="right-section">
          <div className="right-section__top-wrapper">
            <div className="col-1">
              <img className="display-image" src={monsoon} />
            </div>
            <div className="col-2">
              <div className="display-image__description">
                <div className="row-alignment">
                  <h3>Monsoon Shootout</h3>
                  <img src={play} />
                </div>
                <hr className="yellow-line"></hr>
                <h5>Some comment on the project</h5>
                <h4 className="description__details">Type: Feature Film</h4>
                <h4 className="description__details">Release Year: 2017</h4>
                <h4 className="description__details">Country: India</h4>
                <h4 className="title__song">Songs</h4>
                <div className="songs-list">
                  <div className="songs-list__left">
                    {songs.slice(0, halfSongs).map((song) => (
                      <div className="song-details">
                        <div className="row-1">
                          <p>{song.name}</p>
                          <p>{song.duration}</p>
                        </div>
                        <p>{song.genre}</p>
                      </div>
                    ))}
                  </div>
                  <div className="divider-2"></div>
                  <div className="songs-list__right">
                    {songs.slice(halfSongs, songs.length).map((song) => (
                      <div className="song-details">
                        <div className="row-1">
                          <p>{song.name}</p>
                          <p>{song.duration}</p>
                        </div>
                        <p>{song.genre}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="divider-3"></hr>
          <h3 className="film-festival-section">Film Festivals</h3>
          <div className="film-frames">
            <img classname="film-img" src={Cannes} />
            <img classname="film-img" src={Sydney} />
            <img classname="film-img" src={Brussels} />
            <img classname="film-img" src={LA} />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Sync;
