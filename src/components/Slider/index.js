import React from 'react';
import './index.css';

class Slider extends React.Component {
  
  saySomething(something){
    console.log(something);
  }
  
  handleClick(e) {
    this.saySomething(this);
  }

  render() {
    return <div className="body">
      <div className="slider">
          <button onClick={this.handleClick.bind(this)} type="button" className="btn left">
          </button>
          <button onClick={this.handleClick.bind(this)} type="button" className="btn right">
          </button>
      </div>
     </div>;
  }
}

export default Slider;