
import { stats } from "../constants";
import styles from "../style";
import CountUp from 'react-countup';

const Stats = () => (
  <div >
  <h1 className=" text-[60px] text-shadow text-center text-slate-100 font-bold my-[60px]">Why Zeantra</h1>
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 `}>
    {stats.map((stat) => (

      <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row `} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          <CountUp end={parseFloat(stat.value.replace(/[^0-9.]/g, ""))} duration={2} />+
        </h4>
        <div>

        </div>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {"             " + stat.title + ""}
        </p>
      </div>
      
    ))}
  </section>
  </div>
);

export default Stats;