import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import $ from 'jquery';
import RadioButton from '../UI/CheckBox';

const options = [
    { 
        key: 1, 
        value: "Personal", 
    },
    { 
        key: 2, 
        value: "Bussiness", 
    }
]

const Hero = () => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState('Personal');
  const [isMobile, setIsMobile] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    $('.animated-hero').fadeOut(300, function() {
        $(this).fadeIn(200);
    });
  };
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <section className={classes.container1}>
        <Container fluid>
            <Container>
                <Row className='flex justify-center'>
                <Col md={5} className='flex items-center'>
                    <div>
                        <RadioButton
                            options={options}
                            selectedOption={selectedOption}
                            onChange={handleOptionChange}
                        />
                        { selectedOption == 'Personal' ? (
                            <div>
                                <p className={`text-white font-bold text-6xl animated-hero`}>There’s a <span className='textActive'>plus side</span> to every purchase you make with PayPal.</p>
                                <p className={`text-white font-bold text-3xl py-4 animated-hero`}>And it really adds up</p>                                  
                            </div>
                        ):(
                            <div>
                                <p className={`text-white font-bold text-5xl animated-hero`}>Smart, trusted payment solutions <span className='textActive'>built for growth.</span></p>
                                <p className={`text-white font-bold text-2xl py-4 animated-hero`}>Drive conversion with an all-in-one payments solution fueled by 430+ million active accounts and the power of AI.</p>                                  
                            </div> 
                        )
                        }
            
                    </div>
                </Col>
                <Col md={7} className='position-relative'>
                    { !isMobile && (
                        <div>
                            <video style={{ transform: 'scale(1.6)', width: '100%', height: '100%', position: 'absolute', top: 0, left: 160 }} autoPlay loop>
                                <source src="https://www.paypalobjects.com/marketing/web23/US/en/rebrand/Home/Redesigned-Home/Consumer/Hero/Animations/Consumer-hero-glow-desktop-vp9-chrome.webm" type="video/webm" />
                            </video>                  
                        </div>                        
                    )
                    }

                </Col>
                </Row>
            </Container>
        </Container>
    </section>
  );
};

export default Hero;

const useStyles = makeStyles({
    container1: {
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        background: 'linear-gradient(90deg, rgb(0, 0, 86), rgb(0, 0, 52), rgb(0, 0, 52),rgb(0, 0, 86))',
        paddingTop: '6rem !important',
        paddingBottom: '6rem !important',
    },
});