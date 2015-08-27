var App = React.createClass({displayName: "App",
	getInitialState: function () {
	    return {
	        red: 0, 
	        green: 0,
	        blue: 0
	    };
	},
	update: function(e) {
		this.setState({
	        red: this.refs.red.refs.inp.getDOMNode().value, 
	        green: this.refs.green.refs.inp.getDOMNode().value,
	        blue: this.refs.blue.refs.inp.getDOMNode().value
		});
	},
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement(Slider, {ref: "red", update: this.update}), 
				React.createElement("label", null, this.state.red), 
				React.createElement(Slider, {ref: "green", update: this.update}), 
				React.createElement("label", null, this.state.green), 
				React.createElement(Slider, {ref: "blue", update: this.update}), 
				React.createElement("label", null, this.state.blue)
			)
		);
	}
});

var Slider = React.createClass({displayName: "Slider",
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("input", {ref: "inp", type: "range", min: "0", max: "255", onChange: this.props.update})
			)
		);
	}
});

React.render(React.createElement(App, null), document.body);