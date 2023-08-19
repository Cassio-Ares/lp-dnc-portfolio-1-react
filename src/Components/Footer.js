import styles from "./Footer.module.css";
import { FaBeer, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <section>
        <ul>
          <li>
            <FaInstagram size={40} />
          </li>
          <li>
            <FaLinkedin size={40} />
          </li>
          <li>
            <FaGithub size={40} />
          </li>
        </ul>
      </section>
      <p>
        cassiotadeu.ads@gmail.com 
        <br/>
        Cassio 2023
      </p>
    </div>
  );
}

export default Footer;
