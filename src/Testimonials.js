import "./testimon.css";
import {useEffect,useState} from "react";
import ip from "./components/ip.svg";


export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  const handleSliderMouseEnter = () => {
    setIsPaused(true);

    document.querySelector(".App5").style.animationPlayState = "paused";
  };

  const handleSliderMouseLeave = () => {
    setIsPaused(false);
    document.querySelector(".App5").style.animationPlayState = "running";
  };
  const details = [
    {
      des:
        "“Using this website to trade crypto futures is like driving a luxury sports car - it's fast, it's exciting, and it gets me where I want to go in style. The advanced charting tools and real-time market data are like having a powerful engine under the hood, and the low trading fees are like a high-performance machine that's also fuel-efficient.”",
        name: "John Doe",
        role: "Designer"
    },
    {
      des:
        "“The platform's advanced charting tools are like a map, helping me chart my course toward profitable trades. Overall, I'm really impressed with this platform and excited to explore all the possibilities it offers.”",
        name: "Jane Smith",
        role: "Developer"
    },
    {
      des:
        "“As someone who's new to crypto trading, this website makes it so easy to get started! They also have many educational resources available, and the customer support team is always quick to answer any questions I have.”",
        name: "Bob Johnson",
        role: "Project Manager"
    },
    {
      des:
        "“I've been trading crypto futures for a while now, and I have to say - this website is the best I've used so far. The charting tools are advanced and allow me to do some in-depth analysis. And the margin requirements are really reasonable. Overall, I'm really impressed with this platform!”",
        name: "Sarah Williams",
        role: "Marketing"
    },
    {
      des:
        "“The trading fees are really low, which means I can make more profit from my trades. And the platform is really user-friendly - even for someone like me who's not super tech-savvy.”",
        name: "Mike Smith",
        role: "Developer"
    },
    {
      des:
        "“As someone who's always looking for the next big thing, I was really excited to try out this crypto futures trading website. And I have to say, it definitely lived up to my expectations.”",
        name: "Karen Johnson",
          role: "Designer"
    },
    {
      des:
        "“I'm always looking for ways to diversify my investment portfolio, and crypto futures trading seemed like a great option. I'm glad I found this website because it's been an amazing way to start.”",
      name: "Soffair Meor",
      role: "web desiner"
    },{
      des:
        "“Using this website to trade crypto futures is like driving a luxury sports car - it's fast, it's exciting, and it gets me where I want to go in style. The advanced charting tools and real-time market data are like having a powerful engine under the hood, and the low trading fees are like a high-performance machine that's also fuel-efficient.”",
        name: "John Doe",
        role: "Designer"
    },
    {
      des:
        "“The platform's advanced charting tools are like a map, helping me chart my course toward profitable trades. Overall, I'm really impressed with this platform and excited to explore all the possibilities it offers.”",
        name: "Jane Smith",
        role: "Developer"
    }
  ];

  return (
    <div clasName="an" style={{display:'flex',gap:'48px',height:'auto',marginBottom:'8%',}}
    >
    {details.map((detail,index)=>(
      <div className="App5"
      key={index}
          style={{
             
            animationPlayState: isPaused ? "paused" : "running",

          }}
      onMouseEnter={handleSliderMouseEnter}
       onMouseLeave={handleSliderMouseLeave}
      >

        <p className="papp"  >{detail.des}</p>
        <div
          style={{

          marginBottom:0,
          display: "flex",
            flexDirection: "row",
              heigt:'80%'

          }}
        >
          <img src={ip} className="img23"  />
          <div>
            <p className="pname">{detail.name}</p>
            <p className="pwork">{detail.role}</p>
          </div>
        </div>
      </div>))}
    </div>
  );
}
