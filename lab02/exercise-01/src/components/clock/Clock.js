import React from 'react';
import './Clock.css';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time:this.handleCalcTime(this.props.offset)};
    }

    handleCalcTime(offset) {
        let d = new Date();
        let utc = d.getTime() + (d.getTimezoneOffset()*60000);
        let nd = new Date(utc + (3600000*offset));
        return nd.toLocaleTimeString();
    }

    componentDidMount() {
        setInterval(() => 
            this.setState({time:this.handleCalcTime(this.props.offset)}
        ), 1000);
    }
    render() { 
        return (
            <div className="container">
                <h2 className="city">{this.props.city}</h2>
                <span className="time">{this.state.time}</span>
            </div>
        );
    }
}
