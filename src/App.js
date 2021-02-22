//import logo from './logo.svg';
//import React, { useState, useEffect } from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    Button
} 
from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {

  return (
    <Container className='main-block' fluid>
      <Container className='form-block'>
        <Row className='form-block__greetings-row' noGutters>
          <Col sm={9} md={8} lg={7} className='form-block__greetings-text'>
            <span className="gray-text"> Здравствуйте, </span> Человек №3596941            
          </Col>
          <Col 
            sm={2} 
            md={{ span: 3, offset: 1 }} 
            lg={{ span: 4, offset: 1 }} 
          >
            <p className='form-block__change-status-line'>
              Сменить статус
            </p>          
          </Col>          
        </Row>
        <Row className='form-block__status-holder' noGutters>
          <Col
            sm={{ span: 5, offset: 3 }} 
            md={{ span: 6, offset: 3 }} 
            lg={{ span: 7, offset: 3 }}
          >
            <div className='form-block__status-tooltip'>
              Прежде чем действовать, надо понять
            </div>
          </Col>
        </Row>
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
            <Form.Control as="select" className="form-block__input-field" size="sm">
              <option>Красноярск</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Col>
        </Row>

        <hr className='no-margin' />

        <Row style={{ height: '90px'}} className='form-block__input-line' noGutters>
          <Col
            className='d-flex align-items-center'
            style={{ paddingLeft: '10px' }}
            sm={3} 
            md={3} 
            lg={3}
          >
            <Form.Label className='form-block__input-title no-margin'>
              Пароль
            </Form.Label>
          </Col>
          <Col
            className='d-flex align-items-center'
            sm={5} 
            md={5} 
            lg={4}
          >
            <Form.Control type="password" className="form-block__input-field" size="sm"/>
          </Col>
          <Col
            className='d-flex align-items-center'
            sm={4} 
            md={4} 
            lg={5}
          >
            <div className="form-block__input-description">
              Ваш новый пароль должен содержать не менее 5 символов.
            </div>
          </Col>
        </Row>

        <Row style={{ height: '90px', paddingTop: '10px'}} className='form-block__input-line' noGutters>
          <Col
            
            style={{ paddingLeft: '10px' }}
            sm={3} 
            md={3} 
            lg={3}
          >
            <Form.Label className='form-block__input-title no-margin'>
              Пароль еще раз
            </Form.Label>
          </Col>
          <Col
            
            sm={5} 
            md={5} 
            lg={4}
          >
            <Form.Control type='password' className='form-block__input-field' size='sm'/>
          </Col>
          <Col
            
            sm={4} 
            md={4} 
            lg={5}
          >
            <div className='form-block__input-description'>
              Повторите пароль, пожалуйста, это обезопасит нас с вами на случай ошибки.
            </div>
          </Col>
        </Row>

        <hr className='no-margin' />

        <Row className='form-block__input-line' noGutters>
          <Col
            className='d-flex align-items-center'
            style={{ paddingLeft: '10px' }}
            sm={3} 
            md={3} 
            lg={3}
          >
            <Form.Label className='form-block__input-title no-margin'>
              Электронная почта
            </Form.Label>
          </Col>
          <Col
            className='d-flex align-items-center'
            sm={5} 
            md={5} 
            lg={4}
          >
            <Form.Control className="form-block__input-field" size="sm"/>
          </Col>
          <Col
            className='d-flex align-items-center'
            sm={4} 
            md={4} 
            lg={5}
          >
            <div className="form-block__input-description">
              Можно изменить адрес, указанный при регстрации.
            </div>
          </Col>
        </Row>

        <Row style={{ height: '40px'}} className='form-block__input-line' noGutters>
          <Col
            className='d-flex align-items-center'
            style={{ paddingLeft: '10px' }}
            sm={3} 
            md={3} 
            lg={3}
          >
            <Form.Label className='form-block__input-title no-margin'>
              Я согласен
            </Form.Label>
          </Col>
          <Col
            className='d-flex align-items-center'
            sm={7} 
            md={6} 
            lg={5}
            xl={4}
          >
            <Form.Check type="checkbox" className='form-block__input-type_checkbox' label="" />
            <div className='form-block__input-type_checkbox-description'>
              принимать актуальную информацию на емейл
            </div>
          </Col>
        </Row>

        <Row style={{ height: '80px'}} className='form-block__input-line' noGutters>
          <Col
            className='d-flex align-items-center'
            sm={{ span: 7, offset: 3 }} 
            md={{ span: 5, offset: 3 }} 
            lg={{ span: 5, offset: 3 }}
          >
            <Button className='form-block__input-type_button_change-button' disabled>
              Изменить
            </Button>
            <div className='form-block__input-description'>
              последние изменения 15 мая 2012 в 14:55:17
            </div>
          </Col>
        </Row>

      </Container>
    </Container>
  );

}

export default App;
