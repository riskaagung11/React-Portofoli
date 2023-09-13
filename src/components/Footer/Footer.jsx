import styles from "./Footer.module.css";
import { IconBrandFacebook } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.footer__p}>Copyright &copy; 2023 by Riska Agung</p>
    <div className={styles.footer__social_media}>
      <a href="https://www.facebook.com/riskaagungn" target="_blank" rel="noreferrer">
        <IconBrandFacebook className={styles.footer__icon} />
      </a>
      <a href="https://www.instagram.com/riskaagung/" target="_blank" rel="noreferrer">
        <IconBrandInstagram className={styles.footer__icon} />
      </a>
      <a href="https://www.linkedin.com/in/riska-agung-11b26a1ba" target="_blank" rel="noreferrer">
        <IconBrandLinkedin className={styles.footer__icon} />
      </a>
      <a href="https://github.com/riskaagung11" target="_blank" rel="noreferrer">
        <IconBrandGithub className={styles.footer__icon} />
      </a>
    </div>
  </footer>
);

export default Footer;
