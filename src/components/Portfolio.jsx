import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Portfolio = () => {
  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>some works </h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}
          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                {/* <Tab>Ui/Ux</Tab>
                <Tab>Website</Tab>
                <Tab>Graphic</Tab>
                <Tab>Creative</Tab> */}
              </TabList>
              {/* END TABLIST */}
              <div className="list_wrapper">
                <SRLWrapper>
                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <video width="100%" height="400" controls >
                           <source src="assets/Videos/video1.mp4" type="video/mp4"/>
                            </video>
                          </div>
                        </div>
                      </li>
                      {/* END VIMEO */}
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <video width="100%" height="400" controls >
                           <source src="assets/Videos/video2.mp4" type="video/mp4"/>
                     </video>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <video width="100%" height="400" controls >
                           <source src="assets/Videos/video3.mp4" type="video/mp4"/>
                     </video>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <video width="100%" height="400" controls >
                           <source src="assets/Videos/video4.mp4" type="video/mp4"/>
                     </video>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <video width="100%" height="400" controls >
                           <source src="assets/Videos/video5.mp4" type="video/mp4"/>
                     </video>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <video width="100%" height="400" controls >
                           <source src="assets/Videos/video6.mp4" type="video/mp4"/>
                     </video>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <video width="100%" height="400" controls >
                           <source src="assets/Videos/video7.mp4" type="video/mp4"/>
                     </video>
                          </div>
                        </div>
                      </li>
                      {/* END YOUTUBE */}
                      {/* <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <video width="750" height="300" controls >
                           <source src="assets/Videos/video1.mp4" type="video/mp4"/>
                     </video>
                          </div>
                        </div>
                      </li> */}
                      {/* END SOUNDCLOUD */}
                      {/* <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                       
                        
                             <video width="750" height="300" controls >
                           <source src="assets/Videos/video1.mp4" type="video/mp4"/>
                     </video>
                          </div>
                        </div>
                      </li> */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END ALL PORTFOLIO GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      {/* <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <video width="750" height="300" controls >
                           <source src="assets/Videos/video1.mp4" type="video/mp4"/>
                     </video>
                          </div>
                        </div>
                      </li> */}
                      {/* END VIMEO */}
                      {/* <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <video width="750" height="300" controls >
                           <source src="assets/Videos/video1.mp4" type="video/mp4"/>
                     </video>
                          </div>
                        </div>
                      </li> */}
                      {/* END VIMEO */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END UI/UX GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      {/* <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <video width="750" height="300" controls >
                           <source src="assets/Videos/video1.mp4" type="video/mp4"/>
                     </video>
                          </div>
                        </div>
                      </li> */}
                      {/* END YOUTUBE */}
                      {/* <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/4.jpg">
                              <img
                                src="assets/img/portfolio/4.jpg"
                                alt="Website"
                              />
                            </a>
                          </div>
                        </div>
                      </li> */}
                      {/* END YOUTUBE */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END WEBSITE GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      {/* <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/3.jpg">
                              <img
                                src="assets/img/portfolio/3.jpg"
                                alt="Graphic"
                              />
                            </a>
                          </div>
                        </div>
                      </li> */}
                      {/* END SOUNDCLOUD */}
                      {/* <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/5.jpg">
                              <img
                                src="assets/img/portfolio/5.jpg"
                                alt="Graphic"
                              />
                            </a>
                          </div>
                        </div>
                      </li> */}
                      {/* END SOUNDCLOUD */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END GRAPHIC GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      {/* <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/2.jpg">
                              <img
                                src="assets/img/portfolio/2.jpg"
                                alt="Creative"
                              />
                            </a>
                          </div>
                        </div>
                      </li> */}
                      {/* END IMAGE */}
                      {/* <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/3.jpg">
                              <img
                                src="assets/img/portfolio/3.jpg"
                                alt="Creative"
                              />
                            </a>
                          </div>
                        </div>
                      </li> */}
                      {/* END IMAGE */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END CREATIVE PORTFOLIO GALLERY */}
                </SRLWrapper>
                {/* END TABPANEL */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>
    </>
  );
};

export default Portfolio;
