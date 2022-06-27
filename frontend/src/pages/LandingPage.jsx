import React from "react";
import rafiki_hero from "../assets/images/rafiki_hero.png";
import hero_btn_icon from "../assets/images/hero_btn_icon.png";
import hero_ellipse from "../assets/images/hero_ellipse.png";
import fast_transfer from "../assets/images/fast_transfer.png";
import security from "../assets/images/security.png";
import scheduler from "../assets/images/scheduler.png";
import about_image_1 from "../assets/images/about_image_1.png";
import rafiki_2 from "../assets/images/rafiki.png"

const LandingPage = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row  gap-6 py-20 px-20 justify-center items-center relative">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            With P2Max, you can
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-green my-6">
            send so much more money
          </h1>
          <p className="text-base ">
            With zero charges, you can send money seamlessly.
          </p>
          <p className="text-base">
            Experience money transfer in a whole new way with P2Max
          </p>
          <div className="mt-6 pb-6 text-center md:text-left md:pb-0">
            <button className="flex justify-center items-center gap-4" id="btn">
              {" "}
              <img src={hero_btn_icon} alt="hero_btn_icon" />
              SEND MONEY NOW
            </button>
          </div>
          <img
            className="absolute bg-transparent w-[7.5rem] top-[260px] left-[90px]"
            src={hero_ellipse}
            alt="ero_ellipse"
          />
        </div>

        <div className="md:mt-6">
          <img src={rafiki_hero} alt="hero_img" />
        </div>
      </section>

      <section className=" py-20 px-20 justify-center items-center relative">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          What Makes P2Max Standout
        </h1>
        <div className="flex flex-col justify-center items-center md:flex-row mt-16 gap-7">
          <div className=" flex flex-col justify-center items-center gap-[5rem] py-16 px-[60px]  w-[32rem] h-[417px] bg-[#F7F7FA] shadow-[#808080]">
            <div className="flex justify-center items-center gap-5 mt-[2.6rem]">
              <img src={fast_transfer} alt="fast_transfer" />
              <h2 className="text-2xl font-bold text-center">Fast Transfers</h2>
            </div>
            <p className="text-base line-height-[1.4rem] max-w-[15rem]">
              We provide quick, fast and easy transfers from bank to bank to
              seamlessly fit into your busy and productive lifestyle.
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center gap-[5rem]  py-16 px-[60px]  w-[32rem] h-[417px] bg-[#F7F7FA] shadow-[#808080]">
            <div className="flex justify-center items-center gap-5 mt-[2.6rem]">
              <img src={security} alt="security" />
              <h2 className="text-2xl  font-bold text-center">Security</h2>
            </div>
            <p className="text-base line-height-[1.4rem] max-w-[15rem]">
              With P2Max It’s never been easier to send and receive money, but
              that doesn’t mean it shouldn’t be safe. We provide the peace of
              mind your looking for.{" "}
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center gap-[5rem] py-16 px-[60px]  w-[32rem] h-[417px] bg-[#F7F7FA] shadow-[#808080]">
            <div className="flex justify-center items-center gap-5 mt-[2.6rem]">
              <img src={scheduler} alt="scheduler" />
              <h2 className="text-2xl  font-bold text-center">Scheduler</h2>
            </div>
            <p className="text-base line-height-[1.4rem] max-w-[15rem]">
              Easily schedule your transactions to be processed at a later date
              straight from your dashboard.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-around items-center bg-[#F7F7FA] py-[4rem]">
        <img src={about_image_1} alt="about" />
        <div className="w-[458px]">
          <span className="bg-[#D9F8E0] py-[8px] px-[24px] ">ABOUT US </span>
          <h1 className="mt-[3.5rem] font-sans font-bold text-[32px] leadong-[38px] ">
            More than a financial service
          </h1>
          <p className="mt-5 font-sans font-normal text-base leading-[22px] ">
            P2Max is devoted to providing value to our customers and leaving a
            lasting impression through our services. Our emphasis is on a
            <span className="text-[#41DC65]">value-based approach</span> to
            providing <span className="text-[#41DC65]">innovative</span>{" "}
            solutions to money transfer.
          </p>
          <p className="mt-5 font-sans font-normal text-base leading-[22px] ">
            Being solid advocates for a greener and safer earth, we are also
            carbon neutral within all services we provide.
          </p>
          <button className="font-bold w-[131px] h-[38px] text-[12px] leading-[14px] py-[12px] px-[20px] bg-[#2B54E4] rounded-[4px] mt-6 text-white">
            Read More
          </button>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-around items-center py-[4rem]">
        <div className="w-[458px]">
          <span className="bg-[#D9F8E0] py-[8px] px-[24px] uppercase">
            frequently asked questions{" "}
          </span>
          <h1 className="mt-[3.5rem] font-sans font-bold text-[32px] leadong-[38px] ">
            “Hi there. I would love some more information about......”
          </h1>
          <p className="mt-5 font-sans font-normal text-base leading-[22px] ">
            Hey there. We do understand that you might have questions as regards
            what we do, who we are, or something outside this category. Chances
            are that someone has also asked us the same question too.
          </p>
          <p className="mt-5 font-sans font-normal text-base leading-[22px] ">
            Click on the button below to access our Frequently Asked Questions
            where answers might be waiting for you. And if they are not, you can
            always contact us.
          </p>
          <button className="font-bold w-[244px] h-[38px] text-[12px] leading-[14px] py-[12px] px-[20px] bg-[#2B54E4] rounded-[4px] mt-6 text-white">
          CLICK TO GET ANSWERS
          </button>
        </div>
        <img src={rafiki_2} alt="about" />

      </section>
    </>
  );
};

export default LandingPage;
