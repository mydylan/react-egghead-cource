var APP = React.createClass({
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
                <form>
                    <div>
                        <input valueLink={this.linkState('name')} type="text" placeholder="Name" />
                        <label>*{this.state.name}*</label>
                    </div>
                    <div>
                        <input valueLink={this.linkState('email')} type="text" placeholder="Email" />
                        <label>*{this.state.email}*</label>
                    </div>
                    <div>
                        <input valueLink={this.linkState('phone')} type="text" placeholder="Phone" />
                        <label>*{this.state.email}*</label>
                    </div>                                          
                </form>
            )
        }
    });

React.render(<APP />, document.body);