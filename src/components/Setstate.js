import {Component} from 'react';
import PropTypes from 'prop-types';

class Setstate extends Component {
    constructor() {
        super();
        this.state = {
            omg: "What just happend"
        }

        this.setStateHandler = this.setStateHandler.bind(this);
    }

    setStateHandler() {
        let item = "I just clicked the button";
        this.setState(
            {omg: item}
        );
    }

    render(){
        return (
        <div>
            <button onClick={this.setStateHandler}>
                Set State
            </button>
            <h4>
                State: {this.state.omg}
            </h4>
        </div>
        );
    }
}

App.propTypes = {
    name: PropTypes.element.isRequired
}

export default App;