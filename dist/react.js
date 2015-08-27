var App = React.createClass({displayName: "App",
    getInitialState: function() {
        return {data:[
                    {val: 9},
                    {val: 2},
                    {val: 3},
                    {val: 9},
                    {val: 1},
                    {val: 0},
                    {val: 5}
                ]
            }
    },
    render: function() {
        var items = this.state.data.map(function(item){
            return React.createElement("li", null, item.val)
        });
        return React.createElement("ul", null, items)
    }
});

React.render(React.createElement(App, null), document.body);