import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/footer"
import "../pages/css/work.css"
import Project from "../components/project";
import dicegame from "../images/dicegame.png";
import drumkit from "../images/drumkit.png";
import simongame from "../images/simon-img.png";
const Work = () => {
    return (
        <>
            <Navbar />
            <div class="header">
                <h1>
                    Hey! I'm  <Link class="underline" to="/about">  Umar Shaikh</Link >
                    , front - end web
                    developer.
                </h1>
            </div>
            <div class="project-container">
                <div class="project-flex">
                    <Project img={dicegame} url="https://shaikh-umar-farooq.github.io/dicegame/" name="Dice Game" language="HTML:35.9% CSS:24.6% JS:39.5%"></Project>
                    <Project img={drumkit} url="https://shaikh-umar-farooq.github.io/drum-kit/" name="Drum Kit" language="HTML:36.8% CSS:34.6% JS:28.6%"></Project>
                    <Project img={simongame} url="https://shaikh-umar-farooq.github.io/simon-game/" name="Simon Game" language="HTML:44.4% CSS:21.3% JS:34.3%"></Project>

                </div>
            </div>
            <Footer />
        </>
    );
};
export default Work;