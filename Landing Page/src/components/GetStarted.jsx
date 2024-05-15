import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  const handleClick = () => {
    window.location.href = "https://zeantradesktop-bcu5wnpd5-shanukafer98s-projects.vercel.app/";
  }

  return (
    <div
      onClick={handleClick}
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer shadow-blue  hover:shadow-2xl transition-all duration-200  animate-bounce border border-slate-100 border-solid `}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;