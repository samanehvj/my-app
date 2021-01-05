import {Component} from 'react';
import ReactDOM from 'react-dom';

class Finddomnode extends Component{
    constructor() {
        super();
        this.iSeeYou = this.iSeeYou.bind(this);

    }

    iSeeYou() {
        var myGirl = document.getElementById('idontwantnoscrub');
        ReactDOM.findDOMNode(myGirl).style.color = 'red';
    }

    render() {
       return( <div>
            <button onClick={this.iSeeYou}> Where you at baby girl? </button>
            <div id="idontwantnoscrub">BabyGirl</div>
        </div>
       );
    }
}

export default Finddomnode;