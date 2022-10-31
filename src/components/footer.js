import "./footer.css";
const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <>
            <footer>
                <div class="footer-links">
                    <a href="https://www.instagram.com/shaikh_umar_001/">Instagram</a>
                    <a href="https://www.linkedin.com/in/umar-shaikh-96b7b31a5/">Linkedin</a>
                    <a href="https://github.com/Shaikh-Umar-Farooq/">Github</a>
                </div>
                © Umar Shaikh {year}
            </footer>

        </>
    );
};
export default Footer;