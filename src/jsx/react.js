var App = React.createClass({
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
            return <li>{item.val}</li>
        });
        return <ul>{items}</ul>
    }
});

React.render(<App />, document.body);