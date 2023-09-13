import { IconMenuDeep } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import logo from "../../assets/Logo.webp";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menuHandlers = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.header__img} width={2155} height={2156} />
      <nav className={styles.header__nav}>
        <ul className={styles.header__ul}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portofolio">Portofolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.header__toggle} onClick={menuHandlers}>
        {toggle ? <IconX className={styles.header__menu} /> : <IconMenuDeep className={styles.header__menu} />}
      </div>
      {toggle ? (
        <div className={styles.header__list__menu}>
          <ul>
            <li>
              <a href="#home" onClick={menuHandlers}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={menuHandlers}>
                About
              </a>
            </li>
            <li>
              <a href="#portofolio" onClick={menuHandlers}>
                Portofolio
              </a>
            </li>
            <li>
              <a href="#contact" onClick={menuHandlers}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
