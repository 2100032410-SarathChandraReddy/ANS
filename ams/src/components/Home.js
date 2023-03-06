import React from "react";
import "../styles/home.css";
import "../styles/contact.css";
import "../styles/whychoose.css";
// import "./product.css";
import { useTheme } from "./themeContext";
import b1 from "../media/banner2.jpg";
import b2 from "../media/banner3.jpg";
import b3 from "../media/banner4.jpg";
import b4 from "../media/banner5.jpg";
import { Link } from "react-router-dom";

import bounce1 from "../media/bike1.png";
import bounce2 from "../media/bike2.png";
import bounce3 from "../media/bike3.png";

import bounce4 from "../media/p1.png";
import bounce5 from "../media/p2.png";
import bounce6 from "../media/p3.png";



export default function Home(children) {
  const theme = useTheme();
  let counter = 1;
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
      if(counter > 4){
        counter = 1;
      }
  }, 5000);
  return (
    <div class={theme.theme === true ? "home_dark" : "home_white"} >
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div className="slide first">
            <img
              src={b1}
              alt=""
            />
          </div>
          <div className="slide">
            <img src={b2} alt="" />
          </div>
          <div className="slide">
            <img
              src={b3}
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src={b4}
              alt=""
            />
          </div>
        
        </div>

       
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
        </div>

























        
<div className="k">
<h2 class="home_dis text-center display-4 text-decoration-underline">Our Products</h2>
<div className="container-fluid "> 
<h1 class="home_dis ">Bikes</h1>
<br></br><br></br>
<div class="home_grid home_main-content ">
      <div class="home_card">
              <div class="home_image">
                <img src={bounce1} alt="tree" />
              </div>

              <div class="home_description">
                Hero Glamour XTEC Drum Booking for Ex-showroom Price (Candy
                Blazing Red/Blue)
                <div class="home_description_buttons">
                  <h3>₹83,388</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>View...</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="home_card">
              <div class="home_image">
                <img src={bounce2} alt="tree" />
              </div>

              <div class="home_description">
                Hero Xpulse 200 4V Booking for Ex-showroom Price (Sports
                Red,Blue,Black)
                <br />
                <div class="home_description_buttons">
                  <h3>₹1,37,496</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>View...</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="home_card">
              <div class="home_image">
                <img src={bounce3} alt="tree" />
              </div>

              <div class="home_description">
                Hero Xtreme 160R Booking for Ex-showroom Price (Matt Axis
                Grey)/(Matt Axis Red)
                <div class="home_description_buttons">
                  <h3>₹1,23,496</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>View...</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="home_card">
              <div class="home_image">
             
              </div>

              <div class="home_description  justify-content-center">
               
                <div class="home_description_buttons">
                  
                   <br></br><br></br><br></br><br></br><br></br>
                  <Link to="/bikes"><p  class="btn btn-primary text-wrap">
                    <small>View more..</small>
                  </p></Link>
                </div>
              </div>
            </div>
            </div>
</div>

</div>































<div className="k2">
<div className="container-fluid "> 
<h1 class="home_dis ">SpareParts</h1>
<br></br><br></br>
<div class="home_grid home_main-content ">
      <div class="home_card">
              <div class="home_image">
                <img src={bounce4} alt="tree" />
              </div>

              <div class="home_description">
               <br></br>
                <div class="home_description_buttons">
                  <h3>₹1,338</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>View...</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="home_card">
              <div class="home_image">
                <img src={bounce5} alt="tree" />
              </div>

              <div class="home_description">
                
                
                <div class="home_description_buttons">
                  <h3>₹1,374</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>View...</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="home_card">
              <div class="home_image">
                <img src={bounce6} alt="tree" />
              </div>

              <div class="home_description">
              <br></br><br></br>
                <div class="home_description_buttons">
                  <h3>₹1,234</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>View...</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="home_card">
              <div class="home_image">
             
              </div>

              <div class="home_description  justify-content-center">
               
                <div class="home_description_buttons">
                  
                   <br></br><br></br><br></br><br></br><br></br>
                  <Link to="/spareparts"><p  class="btn btn-primary text-wrap">
                    <small>View more..</small>
                  </p></Link>
                </div>
              </div>
            </div>
            </div>
</div>

</div>














<br>
</br>
<br>
</br>
      
      <div className="home_choose">
        <div className="choose ">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <h2 class="text-center display-4 text-decoration-underline">Why Choose Us</h2>
                  <div class="text-center h4">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when
                    <br /> looking at its layout. The point of using{" "}
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="choose_box">
                  <span>01</span>
                  <p class="text-center h4">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="choose_box">
                  <span>02</span>
                  <p class="h4">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="choose_box">
                  <span>03</span>
                  <p class="h4">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
      <section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<h2 class="text-center h1 text-decoration-underline">Contact Us</h2>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-10">
					<div class="wrapper">
						<div class="row no-gutters">
							<div class="col-md-6">
								<div class="contact-wrap w-100 p-lg-5 p-4">
									<h3 class="mb-4">Send us a message</h3>
									<div id="form-message-warning" class="mb-4"></div> 
				      		<div id="form-message-success" class="mb-4">
				            Your message was sent, thank you!
				      		</div>
									<form method="POST" id="contactForm" name="contactForm" class="contactForm">
										<div class="row">
											<div class="col-md-12">
												<div class="form-group">
													<input type="text" class="form-control" name="name" id="name" placeholder="Name"/>
												</div>
											</div>
											<div class="col-md-12"> 
												<div class="form-group">
													<input type="email" class="form-control" name="email" id="email" placeholder="Email"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<textarea name="message" class="form-control" id="message" cols="30" rows="6" placeholder="Message"></textarea>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="submit" value="Send Message" class="btn btn-primary"/>
													<div class="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-md-6 d-flex align-items-stretch">
								<div class="info-wrap w-100 p-lg-5 p-4 img">
									<p class="mb-4">We're open for any suggestion or just to have a chat</p>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-phone"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-paper-plane"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-globe"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Website</span> <a href="#">yoursite.com</a></p>
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
<div>
  <br></br>
</div>
      </div>
      </div>
  );
}
