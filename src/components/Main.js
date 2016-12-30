require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let images = [
  require('../images/1cFEZZ8-one-piece-wallpaper-1920x1080.jpg'),
  require('../images/606300.jpg'),
  require('../images/650008.jpg'),
  require('../images/cropped-1920-1080-616945.jpg'),
  require('../images/funny-one-piece_011524997_277.jpg')
]

class ImgFigure extends React.Component{
  render(){
    return(
      <figure>
        <img src={this.props.src} style={{height:100}}/>
        <figcaption>
          <h2></h2>
        </figcaption>
      </figure>
    )
  }
}

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
          {images.map((v,i)=><ImgFigure key={i} src={v} />)}
        </section>
        <nav className="controller-nav">

        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
