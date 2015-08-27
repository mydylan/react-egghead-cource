var App = React.createClass({
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
			<div>
				<Widget txt={this.state.txt} update={this.update}/>
				<Widget txt={this.state.txt} update={this.update}/>
				<Widget txt={this.state.txt} update={this.update}/>
				<Widget txt={this.state.txt} update={this.update}/>
			</div>
		);
	}
});

var Widget = React.createClass({
	render: function() {
		return (
			<div>
				<input type="text" onChange={this.props.update}/>
				<b> BOLD</b>
				<p>{this.props.txt}</p>
			</div>
		);
	}
});

React.render(<App/>, document.body);