import React from 'react';
// import '../../styles/components/Pring.css';
// import '../../styles/components/Responsive.css';
const Pricing = () => {
  return (
    <>
      <div className="pricing">
        <div className="pricing-text">
          <h1>Our Pricing</h1>
        </div>

        <div className="pricing-part">
          <div className="temp">
            <p>FREE</p>
            <p>$0</p>
            <p className="very-small small">
              Number of Linked Platforms <b>- 3</b> <br />
              Product Management Limit  <b>- 50</b> <br />
              Dashboard Access  <b>- basic</b> <br />
              Real-time Analytics  <b>- No </b>
              <br />
              Inventory Management  <b>- No</b> <br />
              Customer Support Level  <b> basic</b> <br />
            </p>
            <div className="btn nav-buttons">
              <a href="#" className="main-bg-button">
                Get started
              </a>
            </div>
          </div>
          <div className="temp">
            <p>PRO</p>
            <p>$10</p>
            <p className="very-small small">
              Number of Linked Platforms <b>- 5</b> <br />
              Product Management Limit <b>- 500</b>  <br />
              Dashboard Access  <b>- Advance</b> <br />
              Real-time Analytics <b>- Yes</b> <br />
              Inventory Management <b>- Yes</b>  <br />
              Customer Support Level-  <b>Priority</b>
              <br />
            </p>
            <div className="btn nav-buttons">
              <a href="#" className="main-bg-button">
                Subscription
              </a>
            </div>
          </div>
          <div className="temp">
            <p>ENTERPRISE</p>
            <p>Custom Pricing</p>
            <p className="very-small small">
              Number of Linked Platforms <b>- Unlimited</b>  <br />
              Product Management Limit <b>- Unlimited</b> <br />
              Dashboard Access  <b>- Full</b> <br />
              Real-time Analytics <b>- Yes</b> <br />
              Inventory Management  <b>- Yes</b> <br />
              Customer Support Level <b>- Premium </b> <br />
            </p>
            <div className="btn nav-buttons">
              <a href="#" className="main-bg-button">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
