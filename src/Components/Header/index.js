import logo from "../../assets/skillcoup_white.png";
import classes from "./index.css";
import "./index.css";
import Buttons from "../Home/Buttons";
import "../Home/Hero.css";

const HeaderComponent = () => {
  return (
    <>
      <header id="header-container">
        <div id="header">
          <div className="container">
            <div className="left-side">
              <div id="logo">
                <a href="{{ url('/') }}">
                  <img src={logo} alt="skillcoup logo" />
                </a>
              </div>
            </div>

            <div className="right-side">
              <nav id="navigation">
                <ul id="responsive">
                  <li>
                    <a href={"/"}>Home</a>
                  </li>
                  <li>
                    <a href={"/about-us"}>About</a>
                  </li>
                  <li>
                    <a href={"/contact"}>Contact us</a>
                  </li>
                  {/* <li>
                          <Buttons buttonText={"Log in"} />
                        </li>
                        <li>
                          <Buttons buttonText={"Sign Up"} />
                        </li> */}
                </ul>
              </nav>
              <div class="clearfix"></div>

              <span class="mmenu-trigger">
                <button
                  class="hamburger hamburger--collapse bg-dark"
                  type="button"
                >
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default HeaderComponent;
