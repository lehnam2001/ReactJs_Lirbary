import {React, Component} from 'react';

export default class Couter extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0}
    }
    ascendingCouter() {
       this.setState({counter:this.state.counter+1});
    }

    decreaseCouter() {
       this.setState({counter:this.state.counter-1});
    }
    render() {
       return (
            <>
                số lần click: {this.state.counter} <br/>
                <button onClick={() => this.ascendingCouter()}>+</button>
                <button onClick={() => this.decreaseCouter()}>-</button>
            </>
       )
    }
}