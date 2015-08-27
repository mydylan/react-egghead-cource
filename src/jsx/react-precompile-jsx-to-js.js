var App = React.createClass({
	render:function(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>heading</th>
                        <th>heading</th>
                        <th>heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tr">
                        <td>
                            <form action="">
                                <input type="text" className="hello"/>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
});



//Precompile jsx to jsx
//npm install -g react-tools
//jsx "from" "to" --no-cache --watch