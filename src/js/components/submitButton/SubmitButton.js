import {
    Row,
    Col,
    Button
} 
from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SubmitButton({isDisabled,handleSubmit,lastChanges}) {

  return (
        <Row className='form-block__input-line' noGutters>
          <Col
            className='d-flex align-items-center'
            sm={{ span: 7, offset: 3 }} 
            md={{ span: 5, offset: 3 }} 
            lg={{ span: 5, offset: 3 }}
          >
            <Button 
              bsPrefix={'form-block__input-type_button change-button ' + (!isDisabled && 'disabled-button')}  
              disabled={!isDisabled}
              onClick={handleSubmit}
            >
              Изменить
            </Button>
            <div className='form-block__input-description'>
              последние изменения {lastChanges}
            </div>
          </Col>
        </Row>
  )
}