import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiCredly } from "react-icons/si";
import "./ContactIcons.css";

function ContactIcons() {
    return (
        <div className="icon-container">
            <a href="https://www.linkedin.com/in/christopherc3/" title="LinkedIn">
                <FaLinkedin className="icons icon-linkedin" />
            </a>
            <a href="public/ChristopherClarkResume.pdf" title="Resume" target="_blank" rel="noopener noreferrer">
                <FaFilePdf className="icons icon-pdf" />
            </a>
            <a href="mailto:christophersjgrclark@gmail.com" title="Email">
                <MdEmail className="icons icon-email" />
            </a>
            <a href="https://info.credly.com/" title="Credly">
                <SiCredly className="icons icon-credly" />
            </a>
        </div>
    );
}

export default ContactIcons;
