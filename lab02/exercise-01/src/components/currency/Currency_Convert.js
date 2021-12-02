import React from 'react';
import './Currency_Convert.css';

export default  class CurrencyConvert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: 0 }
        this.amount = React.createRef();
        this.currencyFrom = React.createRef();
        this.currencyTo = React.createRef();
    }

    handleSwitch() {
        let temp;
        temp = this.currencyFrom.current.value;
        this.currencyFrom.current.value = this.currencyTo.current.value
        this.currencyTo.current.value = temp;
        this.handleConvert();
    }

    handleConvert() {
        if (this.currencyFrom.current.value === 'VNĐ' && this.currencyTo.current.value === 'USD') 
        { 
            this.setState({result: this.amount.current.value / 22715 + '$'});
        }
         else if (this.currencyFrom.current.value === 'USD' && this.currencyTo.current.value === 'VNĐ') 
         { 
            this.setState({result: this.amount.current.value * 22715 + ' VNĐ'});
        } 
        else if (this.currencyFrom.current.value === 'VNĐ' && this.currencyTo.current.value === 'EUR') 
        { 
            this.setState({result: this.amount.current.value / 25718 + ' EUR'});
        } 
        else if (this.currencyFrom.current.value === 'EUR' && this.currencyTo.current.value === 'VNĐ')
        { 
            this.setState({result: this.amount.current.value * 25718 + ' VNĐ'});
        } 
        else if (this.currencyFrom.current.value === 'USD' && this.currencyTo.current.value === 'EUR') 
        { 
            this.setState({result: this.amount.current.value / 1.13 + ' EUR'});
        } 
        else if (this.currencyFrom.current.value === 'EUR' && this.currencyTo.current.value === 'USD') 
        {
            this.setState({result: this.amount.current.value * 1.13 + ' Dollar'});
        } else 
        {
            this.setState({result: this.amount.current.value + ' ' + this.currencyTo.current.value});
        }
    }

    render() { 
        return (
            <div className="container-currency">.
                 <div className="body-currency">
                    <div class="amount-input">
                        <label>Amount</label>
                        <input ref={this.amount} type="text"/>
                    </div>

                    <div class="amount-conver-left">
                        <label>From</label>
                        <select ref={this.currencyFrom} className="select-wrap">
                            <option value="VNĐ">VNĐ - Vietnamese Dong</option>
                            <option value="USD">USD - US Dollar</option>
                            <option value="EUR">EUR - Euro</option>
                        </select>
                    </div>

                    <div class="switch-two-select" onClick={()=>this.handleSwitch()}></div>

                    <div class="amount-conver-right">
                        <label>To</label>
                        <select ref={this.currencyTo} className="select-wrap">
                            <option value="USD">USD - US Dollar</option>
                            <option value="VNĐ">VNĐ - Vietnamese Dong</option>
                            <option value="EUR">EUR - Euro</option>
                        </select>
                    </div>
                 </div>

                  <div className="footer-currency">
                    <div className="button-left">
                        <button type="button" className="button-convert" 
                            onClick={() => this.handleConvert()}
                        >
                            Convert
                        </button>
                    </div>
                    <div class="result-convert">
                      <h1>Result: </h1> &nbsp;
                      <h1>{this.state.result}</h1>
                    </div>
                  </div>
            </div>
        );
    }
}
