import React from 'react';
import './index.css';

class Slider extends React.Component {
    
  saySomething(something){
    console.log(something);
  }
  
  handleClick(e) {
    this.saySomething(e);
  }
    /*if(this.element.classList.contains("right"){
      return this.saySomething("right clicked");      
    } else{
      this.saySomething("left clicked");
    }*/

  
  render() {
    return <div className="slider">
        <button onClick={this.handleClick("left button")} type="button" className="btn left">
        </button>
        <button onClick={this.handleClick("right button")} type="button" className="btn right">
        </button>
    </div>;
  }
}

export default Slider;