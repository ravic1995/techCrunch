import React from 'react';
import InputBox from '.InputBox.jsx';
import MapContainer from '.MapContainer.jsx';

class Main extends React.Component {

  constructor(props) {
    super(props);
    //state is only the data element for that component
    // props can be passed around
    // state can be passed to other components as props
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
      <InputBox/>
      <MapContainer/>
    );
  }

}

export default Main;