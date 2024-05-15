import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import image from "../assets/forecast.png";

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse} `}>
    <div className={`${layout.sectionImgReverse} pr-20`}>
      <img src={image} alt="billing" className="w-[500px] h-[500px] shadow-normal " />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={`${layout.sectionInforeverse} `}>
      <h2 className={`${styles.heading2}  `}>
      <span className="text-gradient ">Forecast & Optimize</span><br className="sm:block hidden" />your sales and profit
        
      </h2>
      <p className={`${styles.paragraph} max-w-[500px]  `}>
        We use customize machine learning models to forecast your sales and profit. We also provide you with the best possible way to optimize your sales and profit.
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
);

export default Billing;
