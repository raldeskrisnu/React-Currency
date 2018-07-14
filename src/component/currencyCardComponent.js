import React from 'react';
import stringUtil from '../util/stringUtil';
import getUsdService from '../services/apiController';
import {Panel} from 'react-bootstrap';
import Data from '../data.json'
export default class currencyCardComponent extends React.Component {

    constructor(){
        super()
        this.state = {
            currency: []
        }
    }

    componentDidMount(){
        getUsdService.getData().then((res)=>{
            // console.log(res);
            this.setState(() => {
                return {
                  currency: res.data.rates
                }
              })
        }
      ).catch(err=>{
          console.log(err);
      })

    }

    render() {
        var json = this.state.currency;
        var arr = [];
        Object.keys(json).forEach(function(key) {
            arr.push(json[key]);
          });
        return (
            Data.map(function(obj, key){
                return <div key={key}>
                    <Panel>
                        <Panel.Heading>
                            {obj.title}
                           
                            <div className="pull-right">
                                <button className="btn btn-sm"><i className="glyphicon glyphicon-remove"></i></button>
                            </div>
                        </Panel.Heading>
                        <Panel.Body>
                            1 USD = {stringUtil(arr[key])} {obj.country}
                            <div className="pull-right">
                                {stringUtil(arr[key])}
                            </div>
                        </Panel.Body>
                        
                    </Panel>
                </div>
                
            })
        );
    }
}