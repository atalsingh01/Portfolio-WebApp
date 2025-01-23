import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.jpg"

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className=" mx-2 w-10 h-10 rounded-full border-2 border-gray-300"
          src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2x1">
      <a href="https://www.linkedin.com/in/atal-pratap-singh-9b37b8239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      <a href="https://github.com/atalsingh01" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/atalpratapsingh12?igsh=MTFseWNnZ3RpY2lybQ==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
