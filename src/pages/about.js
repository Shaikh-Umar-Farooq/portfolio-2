import Navbar from "../components/Navbar";
import Umar from "../images/UMAR-IMG-01.svg";
import "./css/about.css";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
const About = () => {
    return (<>
        <Navbar />
        <div className="container about-container">
            <div className="row">
                <div className="col">
                    <h2>About me</h2>
                    <p>
                        <br />
                        I'm Umar Shaikh, a front end developer & UI/UX designer based in punjab, India.
                        <br />
                        <br />
                        second year college student,<span className="highlight"
                        > self taught</span> front-end developer and UI/UX designer, courteous and enthusiastic, with interests in emerging technologies. Able to take
                        ideas from concept to wireframe to prototype to production.

                        <br />
                        I gained experience of working in this area on some personal
                        projects. As this area complements my studies, I am keen to gain
                        more experience in the field. I am therefore currently looking for a
                        job or an internship as a front-end developer or UI/UX designer.
                        <br />
                    </p>
                    <br />
                    <h2>Present:</h2>
                    <p>
                        <br />
                        Currently pursuing my bachelor's degree in
                        <span className="highlight"> Electrical and computer engineering</span>,
                        at Thapar institute of engineering and technology.
                        <br />
                        <br />
                        Core member <span className="highlight"> front-end ACM student chapter</span> ,
                        TIET, as a web developer and a UI/UX designer.
                        <br />
                    </p>
                    <br />
                    <h2>Past:</h2>
                    <p>
                        <br />
                        Completed my high school from Rani Laxmi Bai memorial school,
                        Lucknow in 2020.
                        <br />
                        <br />
                        Worked as graphic designer in
                        <span className="highlight"> OWASP student chapter</span>, TIET.
                        <br />
                    </p>
                    <br />
                    <h2>But life is not all about work, is it?.</h2>
                    <p>
                        <br />
                        In my free time, you will find me doing excercises, playing football
                        / basketball, reading books, following new tech-releases, obsessing
                        with Netflix or improving my sketching skills.
                        <br />
                        <br />
                        Ah! I love cats also.
                        <br />
                    </p>
                </div>
                <div className="col umar-img-container">
                    <img className="umar-img" src={Umar} alt="umar-img" />
                    <div className="aboutme-btn-container">
                        <Link to="/resume">  <button
                            className="aboutme-btn"
                        // onClick={() => window.open('https://resume.io/r/nU26dIpE8', '_blank')}

                        >
                            MY RESUME
                        </button>
                        </Link>
                        <button
                            className="aboutme-btn"
                            onClick={() => window.open("https://www.linkedin.com/in/umar-shaikh-96b7b31a5/", '_blank')}
                        >
                            MY LINKEDIN
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />

    </>
    );
}

export default About;