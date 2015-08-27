var PersonTable = React.createClass({displayName: "PersonTable",
	getInitialState: function() {
		return {
			data: [
                {id: 1,  fname: "Simon",  lname: "Bailey"},
                {id: 2,  fname: "Thomas", lname: "Burleson"},
                {id: 3,  fname: "Will",   lname: "Button"},
                {id: 4,  fname: "Ben",    lname: "Clinkinbeard"},
                {id: 5,  fname: "Kent",   lname: "Dodds"},
                {id: 6,  fname: "Trevor", lname: "Ewen"},
                {id: 7,  fname: "Aaron",  lname: "Frost"},
                {id: 8,  fname: "Joel",   lname: "Hooks"},
                {id: 9,  fname: "Jafar",  lname: "Husain"},
                {id: 10, fname: "Tim",    lname: "Kindberg"},
                {id: 11, fname: "John",   lname: "Lindquist"},
                {id: 12, fname: "Joe",    lname: "Maddalone"},
                {id: 13, fname: "Tyler",  lname: "McGinnis"},
                {id: 14, fname: "Scott",  lname: "Moss"},
                {id: 15, fname: "Robert", lname: "Penner"},
                {id: 16, fname: "Keith",  lname: "Peters"},
                {id: 17, fname: "Lukas",  lname: "Ruebbelke"},
                {id: 18, fname: "Brett",  lname: "Shollenberger"}
            ]
		}
	},

	render: function() {
		var rows = this.state.data.map(function(person, i){
			return React.createElement(PersonRow, {data: person, key: i})
		})
		return React.createElement("table", null, " ", rows, " ")
	}
});

var PersonRow = React.createClass({displayName: "PersonRow",
	render: function() {
		return (
			React.createElement("tr", null, 
				React.createElement("td", null, this.props.data.id), 
				React.createElement("td", null, this.props.data.fname), 
				React.createElement("td", null, this.props.data.lname)
			)
		);
	}
});

React.render(React.createElement(PersonTable, null), document.body);