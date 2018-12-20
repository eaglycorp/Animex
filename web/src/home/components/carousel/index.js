import React from 'react';
import {Link} from 'react-router-dom';

export default class Index extends React.Component {
  render() {
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="first-slide" src="https://bit.ly/2BvgfxL" alt="First slide"/>
            <div className="container">
              <div className="carousel-caption text-left">
                <p><a className="btn btn-danger" href="#" role="button"><span className="glyphicon glyphicon-play"></span> Play</a>&nbsp;<a className="btn btn-danger" href="#"><span className="glyphicon glyphicon-plus"></span> My List</a></p>
                <h3>Watch Samurai X Now</h3>
                <p>He's an ordinary man living an unremarkable life.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="second-slide" src="https://bit.ly/2EEmHGE" alt="Second slide"/>
            <div className="container">
              <div className="carousel-caption text-left">
                <p><a className="btn btn-danger" href="#" role="button"><span className="glyphicon glyphicon-play"></span> Play</a>&nbsp;<a className="btn btn-danger" href="#"><span className="glyphicon glyphicon-plus"></span> My List</a></p>
                <h3>Watch Ao No Exorcist Now</h3>
                <p>He's an ordinary man living an unremarkable life.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="third-slide" src="https://bit.ly/2LrSBH1" alt="Third slide"/>
            <div className="container">
              <div className="carousel-caption text-left">
                <p><a className="btn btn-danger" href="#" role="button"><span className="glyphicon glyphicon-play"></span> Play</a>&nbsp;<a className="btn btn-danger" href="#"><span className="glyphicon glyphicon-plus"></span> My List</a></p>
                <h3>Watch Dennou Boukenki Webdiver Now</h3>
                <p>He's an ordinary man living an unremarkable life.</p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
