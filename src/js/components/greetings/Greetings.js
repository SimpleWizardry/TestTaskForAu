import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Popover,
    Overlay
} 
from 'react-bootstrap';
import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Greetings({userName,
                                    show,
                                    target,
                                    status,
                                    statusCopy,
                                    clickHandler,
                                    inputHandler,
                                    confirmHandler,
                                    closePopover
                                    }) 
{
  const changeStatusLine = useRef(null);
  const changeStatusField = useRef(null);
  return (
      <>
        <Row className='form-block__greetings-row' noGutters>
          <Col sm={9} md={8} lg={7} className='form-block__greetings-text'>
            <span className="gray-text"> 
              Здравствуйте, 
            </span> 
            {userName}            
          </Col>
          <Col 
            sm={2} 
            md={{ span: 3, offset: 1 }} 
            lg={{ span: 4, offset: 1 }} 
          >
            <div ref={changeStatusLine} onClick={clickHandler}>
              <p className='form-block__change-status-line'>
                Сменить статус
              </p>
            </div>
              <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={changeStatusLine.current}
                containerPadding={20}
                rootClose
                rootCloseEvent='click'
                onHide={closePopover}
                onEntered={() => changeStatusField.current.focus()}
              >
                <Popover id="popover-contained">               
                  <Popover.Content>
                    <Container className='form-block__change-status-popover'>
                        <Form.Control 
                          name='status-input'
                          onChange={inputHandler} 
                          onFocus={(e)=>{e.target.select()}}
                          ref={changeStatusField}
                          as='textarea' 
                          className="form-block__input-field" 
                          value={statusCopy}
                        />
                        <Button onClick={confirmHandler} bsPrefix='form-block__input-type_button change-status_button'>
                          Сохранить
                        </Button>
                    </Container>
                  </Popover.Content>
                </Popover>
              </Overlay>
          </Col>          
        </Row>
        <Row className='form-block__status-holder' noGutters>
          <Col
            sm={{ span: 5, offset: 3 }} 
            md={{ span: 6, offset: 3 }} 
            lg={{ span: 7, offset: 3 }}
          >
            <div className='form-block__status-tooltip'>
              {status}
            </div>
          </Col>
        </Row>  
      </> 
  )
}