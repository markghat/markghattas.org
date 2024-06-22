import { useEffect } from "react";
import Image from 'next/image';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { fab, faDiscord } from "@fortawesome/free-brands-svg-icons";
const MacBookPro148 = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="relative bg-white w-full h-[7489px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-left text-34xl text-black font-outfit lg:w-[1512px]"
      data-animate-on-scroll
    >
      <img
        className="absolute top-[0px] left-[0px] w-[206.23px] h-[195px] object-cover"
        alt=""
        src="/MG_Logo.png"
      />
      <div className="absolute top-[1122px] left-[724px] font-semibold inline-block w-[1059px] h-[149px]">
        <p className="m-0">Student at Duke University...</p>
        <p className="m-0 text-47xl">&nbsp;</p>
      </div>
      <div className="absolute top-[2078px] left-[21px] font-semibold inline-block w-[1059px] h-[149px]">
        <p className="m-0">With a broad array of experience...</p>
        <p className="m-0 text-47xl">&nbsp;</p>
      </div>

      
      <div className="absolute top-[0%] left-[7.1%] w-[100%] h-[49.4%] overflow-hidden text-93xl">      {/*Floating Computer}
        <div className="absolute top-[169.25px] left-[736px] w-[500.5px] h-[517.22px] [transform:_rotate(-19.76deg)] [transform-origin:0_0]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hidden"
            alt=""
            src="/ComputerImage.png"
          />
        </div>
        <img
          className="absolute h-[86.09%] w-[45.94%] top-[2.62%] right-[1.71%] bottom-[11.29%] left-[52.35%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/ComputerImage.png"
        />
        */}
        {/*Hi, I'm Mark  169, 0, 1059*/}
        <div className="absolute top-[5%] bottom-[25%] left-[2%] w-[90%] flex flex-col items-start justify-start">
          <div className="w-[50%] overflow-hidden flex flex-col items-start justify-start">
            <div className="relative font-semibold inline-block w-[383px] h-[149px] shrink-0">
              <p className="m-0">{`Hi, `}</p>
              <p className="m-0">&nbsp;</p>
            </div>
            <div className="self-stretch relative text-[150px] mt-[-37px]">
              <span className="font-semibold">{`I’m `}</span>
              <b>Mark</b>
            </div>
          </div>
        </div>

        {/*Linkedin Button*/} 
        <a href="http://linkedin.com/in/markghat"
        target="_blank">
        <img
          className="absolute top-[558px] left-[0px] w-[199.15px] h-[206px]"
          alt=""
          src="/linkedin1.svg"
        />
        </a>

        {/*Github Button*/} 
        <a
          className="[text-decoration:none] absolute top-[558px] left-[206px] w-[138px] h-[138px]"
          href="http://www.github.com/markghat"
          target="_blank"
        >
          <img
            className="absolute top-[0px] left-[-40.15px] w-[218.29px] h-[204px]"
            alt=""
            src="/Button.svg"
          />
          <img
            className="absolute top-[10px] left-[18px] w-[102px] h-[102px] overflow-hidden"
            alt=""
            src="/icongithub1.svg"
          />

        {/*Resume Button*/} 
        </a>
        <a href="https://drive.google.com/file/d/1Tg-KL-m9YDApqOHnh0bt0iWhePnGcyA9/view?usp=sharing"
        target="_blank">
        <img
          className="absolute top-[558px] left-[341.85px] w-[218.29px] h-[204px]"
          alt=""
          src="/Button.svg"
        />
        <img
          className="absolute top-[575px] left-[408px] w-[92px] h-[88px]"
          alt=""
          src="/docs1.svg"
        />
        </a>
        <img
          className="absolute h-[9.87%] w-[5.35%] top-[87.14%] right-[48.77%] bottom-[3%] left-[45.89%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/shape-68.svg"
        />
      </div>
      <img
        className="absolute top-[2429px] left-[21px] w-[1483px] h-[749px] overflow-hidden"
        alt=""
        src="/frame.svg"
      />
      
      <div className="absolute top-[3264px] left-[-75px] w-[1884px] h-[4276px] overflow-hidden text-11xl text-gray-600 font-dm-sans">
        <div className="absolute top-[1433px] left-[75px] bg-gray-200 w-[1512px] h-[2792px]" />
        <div className="absolute top-[0px] left-[75px] bg-gainsboro-300 w-[1512px] h-[1433px]" />
        <div className="absolute top-[3092px] left-[75px] bg-black w-[1512px] h-[1184px]" />
        <div className="absolute top-[3420px] left-[20vw] text-[10vw] font-semibold font-outfit text-white inline-block w-[1059px] h-[149px]">
          Let’s Connect
        </div>

        {/*email*/}
        
        
        <div
          className="[text-decoration:none] absolute top-[3796px] left-[31vw] text-[5vw] font-semibold font-outfit text-white inline-block w-[9vw] h-[9vh] transition-transform transition-color transform hover:scale-110"
        >
          <a href="mailto:markag121@gmail.com">
          Email
          
          <img
    className="absolute h-[115.82vh] w-[5.31vw] top-[-1vw] bottom-[-9.91vw] left-[-7.5vw] max-w-full overflow-hidden max-h-full"
    alt=""
    src="/email.png"
  />
  </a>
        </div>

        {/*Linkedin*/}
        <div className="relative">
  <div
    className="[text-decoration:none] absolute top-[3653px] left-[31vw] text-[5vw] font-semibold font-outfit text-white inline-block w-[9vw] h-[9vh] transition-transform transition-color transform hover:scale-110"
    target="_blank"
  >
    <a href="http://www.linkedin.com/in/markghat">
    Linkedin
    <img
    className="absolute top-[-10px] right-[11vw]"
    alt=""
    src="/linkedin2.svg"
  />
  </a>
  </div>

  
</div>

        
        
        <div className="absolute top-[122px] left-[407px] font-semibold font-outfit inline-block w-[1059px] h-[149px] text-34xl text-gray-300">
          <p className="m-0">Here are some of my past roles...</p>
          <p className="m-0 text-47xl text-gray-100">&nbsp;</p>
        </div>
        <div className="absolute top-[1492px] left-[825px] font-semibold font-outfit inline-block w-[1059px] h-[149px] text-34xl text-gainsboro-100">
          <p className="m-0">...and some personal projects</p>
          <p className="m-0 text-47xl text-black">&nbsp;</p>
        </div>
        <div className="relative">
        <img
          className="absolute top-[398px] left-[801px] rounded-11xl w-[675px] h-[371px] object-cover"
          alt=""
          src="/Fidelity.png"
          layout="fill"
          objectFit="cover"
        />
          </div>
        <div className="relative"></div>
        <div className="relative">
        <img
          className="absolute top-[398px] left-[187px] rounded-11xl w-[675px] h-[371px] object-cover"
          alt=""
          src="/Fidelity.png"
          layout="fill"
          objectFit="cover"
        />
          </div>
        <div className="relative">
        <img
          className="absolute top-[996px] left-[801px] rounded-11xl w-[675px] h-[371px] object-cover"
          alt=""
          src="/XPRIZE.png"
          fill
        />
       </div>
        <a href = "https://github.com/markghat/VRMeditationSpace"
        target="_blank">
        <img
          className="absolute top-[1744px] left-[692px] rounded-11xl w-[861px] h-[419px] object-cover"
          alt=""
          src="/VR_Image.png"
        />
        </a>
        <a href = "https://github.com/markghat/PLPredictor"
        target="_blank">
        <img
          className="absolute top-[2416px] left-[102px] rounded-11xl w-[701px] h-[522.36px] object-cover"
          alt=""
          src="PL_Image.png"
        />
        </a>
        
        <div className="absolute top-[1796px] left-[231px] rounded-11xl bg-gainsboro-200 w-[535px] h-[316px]" />
        <b className="absolute top-[1867px] left-[289px] inline-block text-center w-[414px] h-[173px]">
          Interactive meditation world that facilitates controlled breathing and
          meditation.
        </b>
        <div className="absolute top-[2519px] left-[640px] rounded-11xl bg-thistle w-[535px] h-[316px]" />
        <b className="absolute top-[2590px] left-[671px] inline-block text-center w-[475px] h-[173px]">
          ML application using Premier League statistics from previous seasons
          to predict the current season’s champion.
        </b>
        <div className="absolute top-[555px] left-[801px] rounded-11xl w-[535px] h-[316px]" />
        <div className="absolute top-[1130px] left-[0px] rounded-11xl w-[535px] h-[316px]" />
        <b className="absolute top-[421px] left-[988px] text-25xl inline-block font-space-mono text-black w-[560px] h-[163px]">
          Fidelity Investments
        </b>
        <b className="absolute top-[996px] left-[189px] text-25xl inline-block font-space-mono text-black w-[560px] h-[163px]">
          XPRIZE Robotics
        </b>
        <b className="absolute top-[477px] left-[990px] text-16xl inline-block text-gray-400 w-[406px] h-[118px]">
          Full Stack SWE Intern
        </b>
        <b className="absolute top-[1052px] left-[189px] text-16xl inline-block text-gray-400 w-[493px] h-[118px]">
          Research Assistant
        </b>
        <b className="absolute top-[1808px] left-[256px] text-16xl inline-block text-gray-500 text-center w-[493px] h-[118px]">
          VR Meditation Space
        </b>
        <b className="absolute top-[2531px] left-[661px] text-16xl inline-block text-gray-500 text-center w-[493px] h-[118px]">
          Premier League Predictor
        </b>
        <b className="absolute top-[536px] left-[990px] inline-block w-[539px] h-[173px]">
          Developed proprietary search engine and implemented embedding
          techniques and pageRank algorithms to allow dta engineers to search
          for and access company databases.
        </b>
        <b className="absolute top-[1111px] left-[189px] inline-block w-[414px] h-[173px]">
          Developed data processing scripts for autonomous drones enabling
          real-time biodiversity mapping.
        </b>
        
      </div>
      <div className="absolute top-[1424px] left-[0px] bg-midnightblue w-[1515px] h-[376px] overflow-hidden text-center text-29xl text-whitesmoke font-roboto">
        <img
          className="absolute top-[91px] left-[46px] w-[259px] h-[194px] object-cover hidden"
          alt=""
          src="/Duke_Logo2@2x.png"
        />
        <div className="absolute top-[119px] left-[349px] w-[998px] h-[184px] overflow-hidden">
          <div className="absolute top-[0px] left-[124px] text-left inline-block w-[874px] h-[75px] text-34xl">
            <p className="m-0">
              <span className="font-semibold">
                <span>{`B.S. Computer Science & Statistics `}</span>
              </span>
            </p>
            <p className="m-0 text-lightgray">
              <span className="font-semibold">
                <span>&nbsp;</span>
              </span>
            </p>
            <p className="m-0 text-47xl font-semibold font-outfit text-black">
              &nbsp;
            </p>
          </div>
          <div className="absolute top-[75px] left-[124px] inline-block w-[874px] h-[75px]">
            <p className="m-0">
              <span className="font-semibold">
                <span>Math Minor</span>
              </span>
            </p>
            <p className="m-0 text-34xl text-lightgray">
              <span className="font-semibold">
                <span>&nbsp;</span>
              </span>
            </p>
            <p className="m-0 text-47xl font-semibold font-outfit text-black">
              &nbsp;
            </p>
          </div>
          <div className="absolute top-[109px] left-[0px] inline-block w-[874px] h-[75px] font-ranga">
            <p className="m-0">&nbsp;</p>
            <p className="m-0 text-34xl font-semibold font-roboto text-lightgray">
              &nbsp;
            </p>
            <p className="m-0 text-47xl font-semibold font-outfit text-black">
              &nbsp;
            </p>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[1424px] left-[0px] w-[465px] h-[376px] object-cover"
        alt=""
        src="/Duke_Logo2.png"
      />
    </div>
  );
};

export default MacBookPro148;
