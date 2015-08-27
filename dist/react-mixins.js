var ReactMixin = {
	getInitialState: function() {
		return {count: 0}
	},
	componentWillMount: function() {
		console.log("will mount!");
	},
	incrementCount: function() {
		this.setState({
			count: this.state.count+1
		});
	}
};

var App = React.createClass({displayName: "App",
	render: function() {
		return (
			React.createElement("div", {className: "App"}, 
				React.createElement(Button, {txt: "this is the button"}), 
				React.createElement("br", null), 
				React.createElement(Label, {txt: "this is the label"})
			)
		);	
	}
});

var Button = React.createClass({displayName: "Button",
	mixins: [ReactMixin],
	render: function() {
		return (
			React.createElement("button", {onClick: this.incrementCount}, this.props.txt, " - ", this.state.count)
		);
	}
});

var Label = React.createClass({displayName: "Label",
	mixins: [ReactMixin],
	componentWillMount: function() {
		setInterval(this.incrementCount, 1000);
	},
	render: function() {
		return (
			React.createElement("label", null, this.props.txt, " - ", this.state.count)
		);
	}
});


React.render(React.createElement(App, null), document.body);