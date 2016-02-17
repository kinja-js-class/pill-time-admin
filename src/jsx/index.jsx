import React from 'react';
import ReactDOM from 'react-dom';

'use strict';

class Index extends React.Component {

	constructor() {
		super();
		this.state = {
			kecske: 'almafa'
		};
	}

	handleClick() {
		this.setState({kecske: 'malac'});
	}

	render() {
		return <div>
					<h1>{this.state.kecske}</h1>
					<button onClick={this.handleClick.bind(this)}>zsiraf me</button>
				</div>
	}

}

ReactDOM.render(<Index></Index>, document.querySelector('.react-main'));
