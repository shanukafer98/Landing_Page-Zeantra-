import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import image from "../assets/fast.png";

const CardDeal = () => (
  <section className={`${layout.section} `}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Ensure <span className="text-gradient">Fast & Secure</span><br className="sm:block hidden" /> Experience
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       By using cutting edge technologies, we ensure that you got an fast and secure experience. We use the latest encryption technology to ensure that your data is safe and secure.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={image} alt="billing" className="w-[500px] h-[500px] shadow-normal " />
    </div>
  </section>
);

export default CardDeal;
