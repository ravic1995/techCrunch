import React from 'react';

class InputBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	start: "LA",
    	end: "SF",
    };
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    console.log("this is cool right ??");
  }

  render() {
    return (
      <div>
        CLick Me : <span>{this.state.likesCount}</span>

        <div><button onClick={this.onLike}> Come on CLick</button></div>
      </div>
    );
  }

}

export default InputBox;