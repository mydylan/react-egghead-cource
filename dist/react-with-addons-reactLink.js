var APP = React.createClass({displayName: "APP",
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function() {
        return {
            name: '',
            email: '' ,
            phone: ''
        }
    },
    render:function(){
        return (
                React.createElement("form", null, 
                    React.createElement("div", null, 
                        React.createElement("input", {valueLink: this.linkState('name'), type: "text", placeholder: "Name"}), 
                        React.createElement("label", null, "*", this.state.name, "*")
                    ), 
                    React.createElement("div", null, 
                        React.createElement("input", {valueLink: this.linkState('email'), type: "text", placeholder: "Email"}), 
                        React.createElement("label", null, "*", this.state.email, "*")
                    ), 
                    React.createElement("div", null, 
                        React.createElement("input", {valueLink: this.linkState('phone'), type: "text", placeholder: "Phone"}), 
                        React.createElement("label", null, "*", this.state.email, "*")
                    )
                )
            )
        }
    });

React.render(React.createElement(APP, null), document.body);