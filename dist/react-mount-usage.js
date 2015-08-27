var Button = React.createClass({displayName: "Button",
	getInitialState: function () {
	    return {
	        val: 0  
	    };
	},
	update: function() {
		this.setState({val: this.state.val + 1});
	},
	componentWillMount: function () {
	    this.setState({m: 2});  
	},
	render: function() {
		console.log("rendering");
		return React.createElement("button", {className: "bth btn-lg btn-success", onClick: this.update}, this.state.val * this.state.m)
	},
	componentDidMount: function () {
		this.inc = setInterval(this.update, 500);
	},
	componentWillUnmount: function() {
		clearInterval(this.inc);
	},
});


var App = React.createClass({displayName: "App",
	mount: function(){
		React.render(React.createElement(Button, null), document.getElementById("app"));
	},
	unmount: function() {
		React.unmountComponentAtNode(document.getElementById("app"));
	},
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("button", {onClick: this.mount}, "Mount"), 
				React.createElement("button", {onClick: this.unmount}, "Unmount"), 
				React.createElement("div", {id: "app"})
			)
		);
	}
});
		
React.render(React.createElement(App, null), document.body);
