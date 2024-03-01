import React, {useState} from 'react';
import Hero from '../../components/Hero/Hero'
import InfoContainer from '../../components/InfoContainer/InfoContainer'
import DragandDrop from '../../components/UI/DragandDrop';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Button } from 'react-bootstrap';
import $ from 'jquery';
import './home.css';

function Home() {
  const [name, setName] = useState('');
  const [isVisible, setisVisible] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);    
  };

  const handleButtonClick = () => {
    setisVisible(true)
    $(`.animated-text-name`).toggleClass('slide-in-right');
  };

  return (
    <React.Fragment>
      <Hero/>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" onChange={handleNameChange} />
        </Form.Group>
      </Form>
      <Button onClick={handleButtonClick}>Show Text</Button> 
      { name && (
        <p className={`text-black text-5xl py-4 animated-text-name ${isVisible ? 'slide-in-right' : 'hidden'}`}>{name}</p>
      )
      }
      <InfoContainer
        image='https://www.paypalobjects.com/marketing/web/US/en/rebrand/Home/Uncookied/mkt--US_page--Homepage_%20size--all_Component--Split-section-01.png?quality=75&width=1500&format=webp'
        subtitle='Save as many cash back1 offers as you want. Earn 2, 3, 4, 5% and more after you check out with PayPal. Check offers for details. Terms and exclusions apply'
        id="1"
      >
        Get  <span className='textActive'>unlimited cash back</span> on your favorite brands
      </InfoContainer>

      <InfoContainer
        image='https://www.paypalobjects.com/marketing/web/US/en/rebrand/Home/Cookied/mkt-US-page-Homepage-size-Table-up-Component-creditcard.png?quality=75&width=1800&format=webp'
        subtitle={`Put it on your PayPal Cashback Mastercard®. You’ll earn unlimited 3% cash back2 on your PayPal purchases.  And you’ll earn unlimited 2% cash back on all of your other purchases. No rotating categories. No annual fee.3 Just unlimited cash back. Plus, no impact to your credit score if you're declined4.`}
        id="2"
        isLeft
      >
        Add another  <span className='textActive'>3% on top</span>
      </InfoContainer>

      <InfoContainer
        image='https://www.paypalobjects.com/marketing/web/US/en/rebrand/Home/Uncookied/mkt--US_page--Homepage_%20size--all_Component--Split-section-03.jpg?quality=75&width=1800&format=webp'
        subtitle='Roll all that cash back into a high-yield PayPal Savings account. You could earn 4.30% APY.5 That’s earning cash on cash back.'
        id="3"
      >
        Watch it  <span className='textActive'>grow</span>
      </InfoContainer>
      <div style={{background:'#f3f3f6'}}>
        <InfoContainer
          image='https://www.paypalobjects.com/marketing/web/US/en/rebrand/Home/Uncookied/mkt-US-page-Homepage-size-Table-up-Component-security.png?quality=75&width=1800&format=webp'
          subtitle='Your transactions are encrypted, helping to keep your identity and financial info safe.'
          id="4"
        >
          Pay it  <span className='textActive'>safe</span>
        </InfoContainer>        
      </div>
      <DragandDrop/>
    </React.Fragment>
  );
}

export default Home;

const useStyles = makeStyles({
  textTitle: {
    color: '#052986'
  },
  textSubTitle: {
    color: '#052986'
  },
  textActive: {
    color: '#2ea0ec93 !important'
  }
});


