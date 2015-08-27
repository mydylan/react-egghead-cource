var Button = React.createClass({displayName: "Button",
	getInitialState: function() {
		return {
			increasing: false 
		};
	},
	update: function() {
		this.setProps({val: this.props.val + 1});
	},
	componentWillReceiveProps: function(nextProps) {
		this.setState({
			increasing: nextProps.val > this.props.val
		})
	},
	shouldComponentUpdate: function(nextProps, nextState) {
		return nextProps.val % 5 === 0;
	},
	render: function() {
		console.log(this.state.increasing)
		return React.createElement("button", {className: "bth btn-lg btn-success", onClick: this.update}, this.props.val)
	},
	componentDidUpdate: function(prevProps, prevState) {
		console.log("prevProps", prevProps);
	},
});
		
React.render(React.createElement(Button, {val: 0}), document.body);
