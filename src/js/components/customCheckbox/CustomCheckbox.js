import {
    Row,
    Col,
    Form
} 
from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CustomCheckbox({title,description,value,changeHandler}) {

  return (
        <Row className='form-block__input-line' noGutters>
          <Col
            className='d-flex align-items-center'
            style={{ paddingLeft: '10px' }}
            sm={3} 
            md={3} 
            lg={3}
          >
            <Form.Label className='form-block__input-title no-margin'>
              {title}
            </Form.Label>
          </Col>
          <Col
            className='d-flex align-items-center'
            sm={7} 
            md={6} 
            lg={5}
            xl={4}
          >
            <Form.Check 
              type="checkbox" 
              checked={value} 
              onChange={changeHandler} 
              className='form-block__input-type_checkbox' 
            />
            <div className='form-block__input-type_checkbox-description'>
              {description}
            </div>
          </Col>
        </Row>
  )
}