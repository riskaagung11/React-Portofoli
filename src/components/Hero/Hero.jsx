import styles from "./Hero.module.css";
import profile from "../../assets/Capture.webp";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import tailwind from "../../assets/tailwind.svg";
import javascript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";

const Hero = () => (
  <section id="home" className={styles.hero}>
    <article className={styles.hero__article}>
      <div>
        <h1 className={styles.hero__h1}>Hi, My Name</h1>
        <h2 className={`${styles.hero__h2} nowrap`}>Riska Agung</h2>
        <p className={styles.hero__p}>and I&apos;m a Frontend Developer</p>
      </div>
      <figure className={styles.hero__figure}>
        <img src={profile} alt="profile" width={1773} height={2365} />
      </figure>
    </article>
    <article className={styles.article__skill}>
      <p className={styles.hero__p}>Skills :</p>
      <ul className={styles.article__skill__ul}>
        <li>
          <img src={html} alt="Html" />
        </li>
        <li>
          <img src={css} alt="CSS" />
        </li>
        <li>
          <img src={tailwind} alt="Tailwind" />
        </li>
        <li>
          <img src={javascript} alt="Javascript" />
        </li>
        <li>
          <img src={react} alt="React" />
        </li>
      </ul>
    </article>
  </section>
);

export default Hero;
