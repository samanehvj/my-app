import {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
    static defaultProps = {
        name: "Samaneh"
    }
    render(){
        return (
        <div className="app">
            My name is {this.props.name}, 
            I am   {this.props.weight} kg
        </div>
        );
    }
}

App.propTypes = {
    name: PropTypes.element.isRequired
}

export default App;