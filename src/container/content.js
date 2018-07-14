import React from 'react';
import { Button } from 'react-bootstrap';
import CurrencyCardComponent from '../component/currencyCardComponent';

export default class content extends React.Component {
    
  render() {
    return (
      <div className="container">
          <CurrencyCardComponent/>
      </div>
      );
  }

}