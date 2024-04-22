import React from "react";
import Button from "./Button";
import { service1, service2, service3 } from "../assets";

const ProblemNDSolutions = () => {
  return (
    <div className=" z-50">
      <div className="problemandsolution ">
        <div className="miningisfarfromideal section-narrow ">
          <div id="miningvideowrapper" className="">
            <img src={service2} alt="" className="h-[45rem] w-[409px]" />
            {/* <video
              id="miningvideo"
              preload="true"
              autoPlay="autoplay"
              loop
              muted
              playsInline
            >
              <source src="/img/mining.mp4" type="video/mp4" />
            </video> */}
            <div className="video-overlay hidden-desktop "></div>
          </div>

          <div className="content z-50">
            <h1>
              Cross-Chain Trading Often Involves{""}
              <span className=" "> Unnecessary Complexity</span>
            </h1>

            <p>
              Trading across multiple chains often requires juggling multiple
              platforms and complex manual processes. Our bot simplifies this by
              providing a unified interface to trade and analyze market trends
              seamlessly.
            </p>
            <br />
            <p>
              So many <b>opportunities are missed</b> when analyzing from
              disparate sources. Our bot centralizes all information in one
              spot, preventing losses and enabling you to seize every
              opportunity.
            </p>

            {/* <a
              href="https://dapp.hashai.cc"
              target="_blank"
              className="btn-dapp"
            >
              Try Our DApp <img src="/img/dapplaunch.svg" />
            </a> */}
            <Button className=" mt-10">Try Our Bot</Button>
          </div>
        </div>
        <div className="solutiontotheproblem section-narrow fadein">
          <h2>Kaitana Is the Solution to the Problem</h2>
          <p>
            Our advanced AI enable you to efficiently analyze and purchase
            tokens across chains, helping businesses and individuals achieve
            their financial goals sooner and far more efficiently.
          </p>
        </div>

        <div className="howitworks section-narrow fadein">
          <div className="wrapper">
            <h4>AI analyse market conditions</h4>
            <img src="/img/analyse.svg" />
          </div>
          <div className="wrapper wrapper-mid">
            <h4>Checks for popular market trends</h4>
            <img src="/img/coin.svg" />
          </div>
          <div className="wrapper">
            <h4>Allows you to purchase by typing</h4>
            <img src="/img/target.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemNDSolutions;
