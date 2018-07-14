import React from 'react';
import logo from '../logo.svg';
import CurrencyHeaderComponenet from '../component/currencyHeaderComponent';
import { Col, Row } from 'react-bootstrap';

export default class header extends React.Component {
    
  render() {
      const element = 1;
    return (
      <header className="App-header">
        <div className="container">
          <Row className="show-grid">
            <Col md={4}>
              <h5>USD - United States Dollars</h5>
              <h1>USD {element}</h1>
            </Col>

            <Col md={4}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>

            <Col md={4}>
              <h5>IDR - Indonesian Rupiah</h5>
              <CurrencyHeaderComponenet />
            </Col>
          </Row>
        </div>
      </header>
      );
  }

}