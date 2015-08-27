var App = React.createClass({displayName: "App",
	render:function(){
        return (
            React.createElement("table", null, 
                React.createElement("thead", null, 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "heading"), 
                        React.createElement("th", null, "heading"), 
                        React.createElement("th", null, "heading")
                    )
                ), 
                React.createElement("tbody", null, 
                    React.createElement("tr", {className: "tr"}, 
                        React.createElement("td", null, 
                            React.createElement("form", {action: ""}, 
                                React.createElement("input", {type: "text", className: "hello"})
                            )
                        )
                    )
                )
            )
        )
    }
});



//Precompile jsx to jsx
//npm install -g react-tools
//jsx "from" "to" --no-cache --watch