import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
 
  <div className=" px-[50px] py-12 rounded-[20px] bg-teal-400 ms-12 max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-10 feedback-card border border-solid border-t-blue-700 border-l-blue-700 border-r-gray-300 border-b-gray-300 ">
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[14px] leading-[32.4px] text-white my-2">
      {content}
    </p>

    <div className="flex flex-row ">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
  
);


export default FeedbackCard;
