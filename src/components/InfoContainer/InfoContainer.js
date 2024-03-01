import React, { useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import $ from 'jquery';
import './InfoContainer.css'

const InfoContainer = ({ image, children, subtitle, id, isLeft }) => {
  const classes = useStyles();
  const [isVisible, setisVisible] = useState(false);

  const handleButtonClick = () => {
    $(`.animated-text-${id}`).toggleClass('slide-in-right');
    $(`.animated-text-${id}`).toggleClass('slide-in-left');
    setisVisible(true)
  };

  return (
    <section>
      <Container fluid>
        <Container>
          <Row className='flex justify-center'>
            <Col md={5} className='flex items-center'>
              {isLeft ? (
                  <img 
                    src={image} 
                  />
                ):(
                  <div>
                    <p className={`${classes.textTitle} font-bold text-5xl animated-text-${id} ${isVisible ? 'slide-in-right' : 'hidden'}`}>{children}</p>
                    <p className={`${classes.textSubTitle} text-lg py-4 animated-text-${id} ${isVisible ? 'slide-in-right' : 'hidden'}`}>{subtitle}</p>
                    { !isVisible && (
                        <Button onClick={handleButtonClick}>Show Text</Button>   
                      )
                    }
                              
                  </div>
                )
              }
            </Col>
            <Col md={5} className='flex items-center'>
              {isLeft ? (
                  <div>
                    <p className={`${classes.textTitle} font-bold text-5xl animated-text-${id} ${isVisible ? 'slide-in-left' : 'hidden'}`}>{children}</p>
                    <p className={`${classes.textSubTitle} text-lg py-4 animated-text-${id} ${isVisible ? 'slide-in-left' : 'hidden'}`}>{subtitle}</p>
                    { !isVisible && (
                        <Button onClick={handleButtonClick}>Show Text</Button>   
                      )
                    }          
                  </div> 
                ):(
                  <img 
                    src={image} 
                  />
                )
              }
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default InfoContainer;

const useStyles = makeStyles({
  textTitle: {
    color: '#052986'
  },
  textSubTitle: {
    color: '#052986'
  },
  textActive: {
    color: '#2ea0ec93 !important'
  },
});
