import React from 'react';
import stringUtil from '../util/stringUtil';
import getUsdService from '../services/apiController';
import { Panel, FormControl, Button } from 'react-bootstrap';
import Data from '../data.json'
export default class currencyCardComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            currency: [],
            search: '',
            filterCurrency:[]
        }
        this.handleButtonRemoveItem = this.handleButtonRemoveItem.bind(this);
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
     
    updateSearch(event){
        this.setState({search:event.target.value.toUpperCase()})
    }
   
    handleButtonRemoveItem(v){
        for(let i = 0; i < Data.length; i++){
          if(Data[i].country === v){
            delete Data[i].country;
          }
        }
    }

    render() {
        let json = this.state.currency;
        let arr = [];
        Object.keys(json).forEach(function(key) {
            arr.push(json[key]);
          });
        
        this.state.filterCurrency === Data.filter(
            (obj) => {
                if (this.state.search.length === 3) {
                    return obj.country === this.state.search;
                } else {
                    return obj.country;
                }

            }
        );
          
        return (
            <div> {
                this.state.filterCurrency.map((obj,key) => (
                <div key={key}>
                    <Panel>
                        <Panel.Heading>
                            {obj.title}

                            <div className="pull-right">
                            {
                                <Button className="btn btn-sm" onClick = {this.handleButtonRemoveItem.bind(this, obj.country)}><i className="glyphicon glyphicon-remove"></i></Button>
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
        }
        <FormControl type="text" name="searchTxt" value={this.state.search} placeholder="Search" onChange={this.updateSearch.bind(this)} maxLength="3"/>
            </div>
        );
    }
}