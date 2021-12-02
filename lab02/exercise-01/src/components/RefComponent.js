import  React  from 'react';

export default class RefComponent extends React.Component {
    constructor(props) {
        super(props);
        this.txtName = React.createRef();
    }

    clickMe() {
        alert(this.txtName.current.value);
    }
   
    render() {
       return (
            <>
               <input type="text" ref={this.txtName}></input> &nbsp; <button type="button" onClick={() => this.clickMe()}>Click me</button>
            </>
       )
    }
}