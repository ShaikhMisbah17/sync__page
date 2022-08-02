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

function Sync() {
  return (
    <div className="sync">
      <div className="sync__nav">
        <Navbar />
      </div>
      <div className="sync__banner sync__banner-style">
        <h2 className="banner__text1">
          In the end, it’s all about the
          <span className="banner__yellowtext">love of music</span>
        </h2>
        <h4 className="banner__text2">
          some of the music we are really proud of
        </h4>
      </div>
      {/* Leftside */}
      <div className="leftside">
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
          <img className="frame-images alternative-img" src={alternative} />
        </div>
      </div>
      <hr className="sync__line horizontal-line"></hr>
      <div className="rightside">
        <div className="display__monsoon-image">
          <img className="display-image" src={monsoon} />
        </div>
        <div className="display-image__description">
          <h3>Monsoon Shootout</h3>
          <img className="play-btn" src={play} />
          <hr className="yellow-line"></hr>
          <h5>Some comment on the project</h5>
          <h4 className="description__details">Type: Feature Film</h4>
          <h4 className="description__details">Release Year: 2017</h4>
          <h4 className="description__details">Country: India</h4>
          <h4 className="title__song">Songs</h4>
          <div className="songs-list1">
            <h3 className="song-name">
              Jugni&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.42
            </h3>
            <h5>genre of song</h5>
            <h3 className="song-name">
              Jugni&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.42
            </h3>
            <h5>genre of song</h5>
            <h3 className="song-name">
              Jugni&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.42
            </h3>
            <h5>genre of song</h5>
          </div>
          <hr className="list-line"></hr>
          <div className="songs-list1 song-list-right">
            <h3 className="song-name">
              Jugni&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.42
            </h3>
            <h5>genre of song</h5>
            <h3 className="song-name">
              Jugni&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.42
            </h3>
            <h5>genre of song</h5>
            <h3 className="song-name">
              Jugni&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.42
            </h3>
            <h5>genre of song</h5>
          </div>
        </div>
        <hr className="scroll-bar scroll"></hr>
      </div>
      <hr className="sync__line-below"></hr>
      <div className="sync__film-festival-section">
        <h2>Film Festivals</h2>
        <div className="film-frames">
          <img src={Cannes} />
          <img src={Sydney} />
          <img src={Brussels} />
          <img src={LA} />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Sync;
