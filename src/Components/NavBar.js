import styles from "./NavBar.module.css";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import NavLink from "react-bootstrap/esm/NavLink";


function NavBar() {
  return (
    <div className={styles.navBar}>
      <nav>
        <ul>
          <li><NavLink href="#Header">Apresentação</NavLink></li>
          <li><NavLink href="#Skills">Habilidades</NavLink></li>
          <li><NavLink href="#Projects">Projetos</NavLink></li>
        </ul>
      </nav>
      <section>
        <ul>
          <li><a href=""><FaInstagram size={30}/></a></li>
          <li><a href=""><FaLinkedin size={30}/></a></li>
          <li><a href=""><FaGithub size={30}/></a></li>
        </ul>
      </section>
    </div>
  );
}

export default NavBar;
