import styles from "./styles.module.css";
import type { HeroSectionAndromedaProps } from "./types";

export const HeroSectionAndromeda = ({ className = "hero-section", backgroundImageUrl = "" }: HeroSectionAndromedaProps) => {
  return (
    <section className={`${styles.hero} ${className}` } style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          <span>Web</span> <span className={styles.highlight}>Developer</span>
        </h1>
        <p className={styles.subtitle}>
          I like to craft solid and scalable frontend products with great user
          experiences.
        </p>

        <div className={styles.highlights}>
          <p>
            Highly skilled at progressive enhancement, design systems & UI
            Engineering.
          </p>
          <p>
            Proven experience building successful products for clients across
            several countries.
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <img src={""} alt="Profile" className={styles.image} />
      </div>
    </section>
  );
};
