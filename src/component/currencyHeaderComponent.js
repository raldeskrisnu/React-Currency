import React from 'react';
import StringUtil from '../util/stringUtil';
import getUsdService from '../services/apiController';

export default class currencyHeaderComponent extends React.Component {

    constructor(){
        super()
        this.state = {
            currency: []
        }
    }

    componentDidMount(){
        getUsdService.getData().then((res)=>{
            this.setState(() => {
                return {
                  currency: res.data
                }
              })
        }
      ).catch(err=>{
          console.log(err);
      })

    }

    render() {
        let getCurrencyRates = this.state.currency;
        if (getCurrencyRates.rates) {
            return (
                <div>
                    <h1>IDR {StringUtil(getCurrencyRates.rates.IDR)}</h1>
                </div>
            );
        }
        return null;
    }


}