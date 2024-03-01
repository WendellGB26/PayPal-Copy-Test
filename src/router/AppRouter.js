import { Route, Link, Router } from 'wouter';
import React, { useState, useEffect } from 'react';
import './AppRouter.css';

import Home from '../pages/home/home';

function AppRouter() {
  const [isMobile, setIsMobile] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false); 

  const togglePanel = () => {
    setPanelOpen(!panelOpen);
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
    <div className="background">
      <Router>
        {!isMobile ? (
          <nav className="navbar flex flex-row justify-between background ">
            <div className='flex flex-row items-center'>
              <img src='https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg' className="App-logo mr-2" alt="logo1" /> 
              <Link className='no-underline text-lg font-medium text-center mx-2 px-4' to="/" onClick={togglePanel}>Personal</Link>
              <Link className='no-underline text-lg font-medium text-center mx-2 px-4' to="/">Small Bussines</Link>
              <Link className='no-underline text-lg font-medium text-center mx-2 px-4' to="/">Enterprise</Link>
              <Link className='no-underline navlink2 text-lg font-medium text-center mx-2 px-4' to="/">Developer</Link>  
            </div>
            <div className='flex flex-row items-center'>
              <Link className='no-underline navlink2 text-lg font-medium text-center mx-2 px-4' to="/">What's new</Link> 
              <Link className='no-underline navlink2 text-lg font-medium text-center mx-2 px-4' to="/">Help</Link> 
              <Link className='no-underline LogIn h-14 text-lg font-medium text-center px-8' to="/">Log In</Link>    
              <Link className='no-underline SignUp h-14 text-lg font-medium text-center px-8 ml-3' to="/">Sign Up</Link>        
            </div>
          </nav>          
          ) : (
            <nav className="navbar flex flex-row justify-between background ">
              <div className='flex flex-row items-center'>
                <img src='https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg' className="App-logo mr-2" alt="logo1" /> 
                <Link className='no-underline text-lg font-medium text-center mx-2 px-4' to="/" onClick={togglePanel}>Personal</Link>       
              </div>
            </nav> 
          )    
        }
        {
          panelOpen && (
            <div className="flex w-full h-15 bg-white px-60 absolute">
              <hr/>
              <div className="panel-content">
                <p>Data of personal</p>
              </div>
            </div>
          )
        }

        <header className="App-header">
          <Route path="/" component={Home} />
        </header>

        <footer className='footer'>
          <div className='footer-container flex flex-col justify-center align-center py-4'>
            <p className='text-white text-sm text-start py-2'>1 Check offers for details. Terms and exclusions apply.</p>
            <p className='text-white text-sm text-start py-2'>2 Purchases are subject to credit approval, and the PayPal Cashback Mastercard must be used for payment. See Rewards Program Terms for details and restrictions..</p>
            <p className='text-white text-sm text-start py-2'>3 See Terms and Rates for New Accounts.</p>
            <p className='text-white text-sm text-start py-2'>4 Applications are subject to credit approval. You must be at least 18 years old and reside in the US or its territories to apply. An approved PayPal Cashback Mastercard application will result in a hard credit inquiry, which may impact your credit score.</p>
            <p className='text-white text-sm text-start py-2'>
              5 As of June 07, 2023, the annual percentage yield (APY) for PayPal Savings is 4.30%. This is a variable rate and can change at any time, including after the account is opened.
              The PayPal Cashback Mastercard is issued by Synchrony Bank pursuant to a license by Mastercard International Incorporated. Mastercard and the circles design are registered trademarks of Mastercard International Incorporated.
              The Contactless Indicator mark, consisting of four graduating arcs, is a trademark owned by and used with permission of EMVCo, LLC.
              All screen images are for illustrative purposes only.
            </p>
          </div>
          <div className='px-60'>
            <img src='https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-color.svg' className="App-logo-2 mr-2" alt="logo2" /> 
            <div className='footer-bottom flex flex-row w-2/4 justify-between'>
                <p className='text-white text-sm font-semibold text-start py-2'>Help</p>
                <p className='text-white text-sm font-semibold text-start py-2'>Contact</p>
                <p className='text-white text-sm font-semibold text-start py-2'>Fees</p>
                <p className='text-white text-sm font-semibold text-start py-2'>Security</p>
                <p className='text-white text-sm font-semibold text-start py-2'>Apps</p>
                <p className='text-white text-sm font-semibold text-start py-2'>Shop</p>
                <p className='text-white text-sm font-semibold text-start py-2'>Enterprise</p>
                <p className='text-white text-sm font-semibold text-start py-2'>Partner</p>
            </div>
            <hr/>
            <div className='flex flex-row justify-between'>
              <div className='footer-bottom flex flex-row w-2/4 justify-between'>
                  <p className='text-white text-sm font-semibold text-start py-2'>About</p>
                  <p className='text-white text-sm font-semibold text-start py-2'>Newsroom</p>
                  <p className='text-white text-sm font-semibold text-start py-2'>Jobs</p>
                  <p className='text-white text-sm font-semibold text-start py-2'>Investor Relations</p>
                  <p className='text-white text-sm font-semibold text-start py-2'>Values in action</p>
                  <p className='text-white text-sm font-semibold text-start py-2'>Public policy</p>
              </div>
              <div className='footer-bottom flex flex-row w-2/4 justify-end'>
                  <p className='text-white text-sm font-semibold text-start p-2'>Accessibility</p>
                  <p className='text-white text-sm font-semibold text-start p-2'>Privacy</p>
                  <p className='text-white text-sm font-semibold text-start p-2'>Cookies</p>
                  <p className='text-white text-sm font-semibold text-start p-2'>Legal</p>
              </div>              
            </div>
          </div>
        </footer>

      </Router>
    </div>
  );
}

export default AppRouter;
