import React from 'react';
import {render} from 'react-dom';
import InputBox from './components/InputBox.jsx';

class App extends React.Component {
  render () {
    return (
    	<div>
    	<InputBox/>
    	<p> Travel Album</p>
    	</div>
    );
  }
}

render(<App/>, document.getElementById('app'));