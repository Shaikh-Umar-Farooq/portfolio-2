import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import resume from "../images/Resume.svg";
import pdf from "../images/Resume.pdf";
import "../pages/css/resume.css";

const Resume = () => {
    return (
        <div className="resume">
            <Navbar />
            <div className="resume-container">
                <img src={resume} alt="resume" />
            </div>
            <a href={pdf} download="umarshaikh-resume">
                <button
                    className="download"
                >
                    Download
                </button>
            </a>

            <Footer />
        </div>
    );
};

export default Resume;