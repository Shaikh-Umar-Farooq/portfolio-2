import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/footer"
import "../pages/css/work.css"

import headerPic from "../images/headerPic.svg";
import headerPic2 from "../images/headerPic2.svg";
import Arrow from "../images/Arrow.svg";
import Tabcontent from "../components/tab";
const Work = () => {
    return (
        <>
            <Navbar />
            <div class="header">

                <h1>
                    <div className="containerText">
                        <div>
                            Hey! I'm  <Link class="underline" to="/about">  Umar Shaikh</Link>
                            ,&nbsp;</div>
                        <div className="slidingVertical">
                            <span>front-end web developer.</span>
                            <span>UI/UX designer.</span>
                        </div>
                    </div>
                </h1>
                <div className="headerPic">
                    <img id="pic2" src={headerPic2} alt="headerPic2" />
                    <img id="pic1" src={headerPic} alt="headerPic" />

                </div>
            </div>
            <div className="arrow"><img src={Arrow} alt="arrow" /></div>
            <Tabcontent />



            <Footer />
        </>
    );
};
export default Work;