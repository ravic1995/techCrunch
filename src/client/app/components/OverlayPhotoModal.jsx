import React from 'react';

class OverlayPhotoModal extends React.Component {

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
      {this.props.name}
      </div>
    );
  }

}

export default OverlayPhotoModal;