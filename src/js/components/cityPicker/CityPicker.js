import React from 'react';
import {
    Row,
    Col,
    Form
} 
from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CityPicker({city,citiesArray,selectHandler}) {
  return (

        <Row className='form-block__input-line form-block__city-picker' noGutters>
          <Col
            className='d-flex align-items-center'
            style={{ paddingLeft: '10px' }}
            sm={3} 
            md={3} 
            lg={3}
          >
            <Form.Label className='form-block__input-title no-margin'>
              Ваш город
            </Form.Label>
          </Col>
          <Col
            className='d-flex align-items-center'
            sm={5} 
            md={5} 
            lg={4}
          >
            <Form.Control 
              value={city} 
              onChange={selectHandler} 
              as="select" 
              className="form-block__input-field" 
              size="sm"
            >
              {
                citiesArray.map((city,i) =>
                  <option key={i} value={city.city}>{city.city}</option>
                )
              }
            </Form.Control>
          </Col>
        </Row>    
  )
}