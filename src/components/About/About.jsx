import styles from "./About.module.css";
import profile from "../../assets/IMG_1978WHT.webp";
import Button from "../UI/Button/Button";
import portofolio from "../../assets/CV-Riska-Agung.pdf";

const About = () => (
  <section id="about" className={styles.about}>
    <h2 className={styles.about__h2}>About</h2>
    <article className={styles.about__article}>
      <figure className={styles.about__figure}>
        <img src={profile} alt="about profile" width={1773} height={2365} />
      </figure>
      <div className={styles.about__paragraph}>
        <p className={styles.about__p}>
          My name Riska Agung and I&apos;m passionate frontend web developer using web technologies to build amazing products. As a Junior Front-End Developer,
          I have expertise in HTML, CSS, Tailwind, JavaScript, React.
        </p>
        <p className={styles.about__p}>I will love to hear from you. whether it&apos;s a project, job oportunity, or just a chat. feel free to contact me.</p>
        <div className={styles.about__button}>
          <Button>
            <a href={portofolio} download>
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </article>
  </section>
);

export default About;
