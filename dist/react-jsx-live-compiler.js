var Transformer = React.createClass({displayName: "Transformer",
	getInitialState: function() {
		return {
			input: '',
			output: '',
			err: '' 
		};
	},
	update: function(e) {
		var code = e.target.value;
		try {
			this.setState({
				output: JSXTransformer.transform(code).code,
				err: '' 
			});
		}
		catch(err) {
			this.setState({
				err: err.message 
			});
		}
	},
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("div", {className: "row"}, 
					React.createElement("p", {className: "alert alert-danger"}, " ", this.state.err)
				), 	
				React.createElement("div", {className: "row"}, 
					React.createElement("textarea", {defaultValue: this.state.input, className: "col-sm-6 input-lg", onChange: this.update}), 
					React.createElement("pre", {className: "col-sm-6 input-lg"}, " ", this.state.output)
				)
			)
		);
	}
});

React.render(React.createElement(Transformer, null), document.body);