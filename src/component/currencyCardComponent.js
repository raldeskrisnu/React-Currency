import React from 'react';
import stringUtil from '../util/stringUtil';
import getUsdService from '../services/apiController';
import {Panel} from 'react-bootstrap';
import Data from '../data.json'
export default class currencyCardComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            currency: []
        }
        this.handledelTodoItem = this.handledelTodoItem.bind(this);
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
   
    handledelTodoItem(v){   
        
        for(var i = 0; i < Data.length; i++){
          if(Data[i].country == v){
            delete Data[i].country;
            console.log(Data[i])
          }
        }
      }

    render() {
        var json = this.state.currency;
        var arr = [];
        Object.keys(json).forEach(function(key) {
            arr.push(json[key]);
          });
        return (
            Data.map((obj,key) => (
                <div key={key}>
                    <Panel>
                        <Panel.Heading>
                            {obj.title}
                           
                            <div className="pull-right">
                            {
                                <button className="btn btn-sm" onClick = {this.handledelTodoItem.bind(this, obj.country)}><i className="glyphicon glyphicon-remove"></i></button>
                            }
                               
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
            ))
        );
    }
}