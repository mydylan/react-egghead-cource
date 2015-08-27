var App = React.createClass({displayName: "App",
	getInitialState: function () {
	    return {
	        txt: 'our new initial state'  
	    };
	},
	update: function(e) {
		this.setState({txt: e.target.value});
	},
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement(Widget, {txt: this.state.txt, update: this.update}), 
				React.createElement(Widget, {txt: this.state.txt, update: this.update}), 
				React.createElement(Widget, {txt: this.state.txt, update: this.update}), 
				React.createElement(Widget, {txt: this.state.txt, update: this.update})
			)
		);
	}
});

var Widget = React.createClass({displayName: "Widget",
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("input", {type: "text", onChange: this.props.update}), 
				React.createElement("b", null, " BOLD"), 
				React.createElement("p", null, this.props.txt)
			)
		);
	}
});

React.render(React.createElement(App, null), document.body);