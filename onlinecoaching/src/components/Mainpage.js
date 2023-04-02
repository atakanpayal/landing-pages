import { Container } from "react-bootstrap";
import "./Mainpage.css";
import aboutus from "../img/about.jpg";
import Article from "./Article";
import Contact from "./Contact";
function Mainpage() {
  const styleObj = {
    fontWeight: 400,
  };
  return (
    <>
      <div className="mainwrapper">
        <Container>
          <div className="welcome">
            <div className="bigtext">
              <p style={styleObj}>LEARN ABOUT A SUBJECT</p>
              <p>WHEREVER AND WHENEVER YOUR WANT</p>
              <p>NO LIMITS</p>
              <p className="smallwelcome">
                Complete a skills-based online course at your own pace with our
                partner MSBM.
              </p>
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Start Now</span>
              </button>
            </div>
            <div className="unknown"></div>
          </div>
        </Container>
      </div>
      <Article />
      <Container>
        <div className="about-us">
          <div className="about-us-img">
            <img src={aboutus}></img>
          </div>
          <div className="about-us-text">
            <p className="aboutusheader">About us</p>
            <p className="aboutuswelcome">Welcome to The Student Coach</p>
            <p className="aboutusexplain">
              Accessing relevant information and opportunities for careers can
              be daunting . Are you exploring your study and career options at
              home or abroad ? Then you have come to the right place.
            </p>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Learn More</span>
            </button>
          </div>
        </div>
      </Container>
      <p className="header">SERVICES</p>

      <div className="services">
        <div className="service">
          <i class="fa-sharp fa-solid fa-users-line ikon"></i>
          <p className="serviceheader">Community</p>
          <p className="servicetext">
            Join a forum on a topic of interest or create your own to start a
            conversation with like-minded people. Find your tribe!
          </p>
        </div>
        <div className="service">
          <i class="fa-sharp fa-solid fa-chalkboard-user ikon"></i>
          <p className="serviceheader">Coaching</p>
          <p className="servicetext">
            Our Coaches are experienced professionals including trailblazers
            with notable achievements as former students at home and abroad.
          </p>
        </div>
        <div className="service">
          <i class="fa-sharp fa-solid fa-calendar-days ikon"></i>
          <p className="serviceheader">Events</p>
          <p className="servicetext">
            Access the latest information to amplify your study and career
            opportunities . Check out our event page and sign up!
          </p>
        </div>
        <div className="service">
          <i class="fa-sharp fa-solid fa-school ikon"></i>
          <p className="serviceheader">Courses</p>
          <p className="servicetext">
            Develop applicable skills and tap into the confidence that you need
            for academic and career success
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
}
export default Mainpage;
