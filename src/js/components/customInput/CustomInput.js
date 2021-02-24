import {
    Row,
    Col,
    Form
} 
from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CustomInput({title,description,type,name,value,valueError,valueHasError,focusHandler,inputHandler}) {

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
            sm={5} 
            md={5} 
            lg={4}
          >
            <Form.Control 
              name={name}
              type={type} 
              value={value} 
              className={'form-block__input-field ' + (valueHasError && 'input-with_error')}
              size='sm'
              onBlur={focusHandler}
              onChange={inputHandler}
            />
            {(valueHasError && valueError) && <div className='form-block__input-error_placeholder'>{valueError}</div>}
          </Col>
          <Col
            className='d-flex align-items-center'
            sm={4} 
            md={4} 
            lg={5}
          >
            <div className="form-block__input-description">
              {description}
            </div>
          </Col>
        </Row>
  )
}