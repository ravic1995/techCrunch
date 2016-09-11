import React from 'react';

class MapContainer extends React.Component {

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
      <MapRoute />
      <OverlayPhotoModal name="this is a way to pass data around" />
      </div>
    );
  }

}

export default MapContainer;