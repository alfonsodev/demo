import "whatwg-fetch"

import React from 'react'

class HelloWorld extends React.Component {
	render() {
		return <p>hello world</p>;
	}
}

React.render(<HelloWorld/>, document.body)
