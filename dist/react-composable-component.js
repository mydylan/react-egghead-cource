var App = React.createClass({displayName: "App",
	getInitialState: function () {
	    return {
	        red: 0 
	    };
	},
	update: function(e) {
		this.setState({
	        red: this.refs.red.refs.inp.getDOMNode().value
	    });
	},
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement(NumInput, {
					ref: "red", 
					min: 0, 
					max: 255, 
					step: 0.01, 
					val: +this.state.red, 
					type: "number", 
					label: "Red", 
					update: this.update})
			)
		);
	}
});

var NumInput = React.createClass({displayName: "NumInput",
	propTypes: {
		min: React.PropTypes.number,
		max: React.PropTypes.number,
		step: React.PropTypes.number,
		val: React.PropTypes.number,
		label: React.PropTypes.string,
		update: React.PropTypes.func.isRequired,
		type: React.PropTypes.oneOf(['number', 'range'])
	},
	getDefaultProps: function() {
		return {
			min: 0,
			max: 0,
			step: 1,
			val: 0,
			label: "",
			type: 'range'
		};
	},
	render: function() {
		var label = this.props.label !== "" ? React.createElement("label", null, this.props.label, "  ", this.props.val) : "";
		return (
			React.createElement("div", null, 
				React.createElement("input", {
					ref: "inp", 
					type: this.props.type, 
					min: this.props.min, 
					max: this.props.max, 
					step: this.props.step, 
					defaultValue: this.props.val, 
					onChange: this.props.update}), 
					label
			)
		);
	}
});

React.render(React.createElement(App, null), document.body);