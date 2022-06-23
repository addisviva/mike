import React from "react";
import { Link } from "react-router-dom";

const Preview = () => {
  document.body.classList.remove("dark");
  return (
    <div className="tokyo_tm_all_wrap">
      <div className="tokyo_tm_intro">
        <div className="tokyo_tm_intro_fixed_price">
          <span className="anim"></span>
          <span className="anim"></span>
          <span className="anim"></span>
          <a
            href="https://www.linkedin.com/in/michael-wegayehu-5a8069219/"
            target="_blank"
            className="pricing-info anim"
          >
            -20% 
          </a>
        </div>
        {/* END TOKYO INTRO FIXED PRICE */}

        <div className="short_info">
         
          <h3>Michael Wegayehu's Portfolio </h3>
        </div>
        {/* END SHORT INFO */}

        <span className="intro_line"></span>
        <span className="intro_line_2"></span>
        <span className="intro_line_3"></span>
        {/* END VERTICAL LINE */}

        <div className="demos">
          <div className="left">
            <Link to="/home-light" target="_blank">
              <div className="desc">
              
                <h3 className="title">Light Demo</h3>
              </div>
            </Link>
          </div>
          {/* END LEFT DEMO */}
          <div className="right">
            <Link to="/home-dark" target="_blank">
              <div className="desc">
               
                <h3 className="title">Dark Demo</h3>
              </div>
            </Link>
          </div>
          {/* END RIGHT DEMO */}
        </div>
        {/* END DEMOS */}
      </div>
    </div>
  );
};

export default Preview;
