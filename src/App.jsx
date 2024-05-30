/***************************************
 * Created by: Misty Dela Cruz
 * Created on: 2/7/2024
 * Last Modified: 4/29/2024
 * Updates:
 * Added the Button component and coding out the layout of the page
 ***************************************/

import "./App.css";
import "@atlaskit/css-reset";
import Button from "@atlaskit/button";
import Logo from "./assets/ImagineLogo.png";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      {/***************************************
       *               LEFT SIDE              *
       ***************************************/}
      <div className="split left">
        {/*Divider for the logo*/}
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        {/*Divider for the contents of the left side*/}
        <div className="left-content">
          <h1>
            <strong>Welcome!</strong>
          </h1>
          <p className="sub">
            <strong>
              Please <strong>login</strong> to your account
            </strong>
          </p>

          {/*Divider for register*/}
          <div className="register">
            <p>
              Don't have an account? <em>Register</em>
            </p>
          </div>

          {/*Divider for the first button login*/}
          <div className="first-button">
            <Button appearance="primary" shouldFitContainer>
              Login with CAC
            </Button>
          </div>

          {/*Divider for the second button login*/}
          <div className="sec-button">
            <Button appearance="primary" shouldFitContainer>
              Login with YubiKey
            </Button>
          </div>
        </div>
      </div>

      {/***************************************
       *               RIGHT SIDE             *
       ***************************************/}
      <div className="split right">
        {/*Divider for the right side: Image Carousel*/}
        <Carousel />
      </div>
    </>
  );
}

export default App;
