import React from 'react';

export default class Gach extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {color: "green"};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({color: "yellow"})
        }, 2000)
    }
    shouldComponentUpdate() {
        return true;
    }
    changeColor = () => {
        this.setState({color:"blue"})
    }

    render() {
        return (
             <>
                <div style = {{width:'100px', height:'100px', background:this.state.color}}>Props: {this.state.color}</div>
                <button onClick={this.changeColor}>Change color</button>
             </>
        );
    }
}