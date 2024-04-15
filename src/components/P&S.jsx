import React from "react";
import Button from "./Button";

const ProblemNDSolutions = () => {
  return (
    <div className=" z-50">
      <div className="problemandsolution ">
        <div className="miningisfarfromideal section-narrow ">
          <div id="miningvideowrapper" className="">
            <video
              id="miningvideo"
              preload="true"
              autoPlay="autoplay"
              loop
              muted
              playsInline
            >
              <source src="/img/mining.mp4" type="video/mp4" />
            </video>
            <div className="video-overlay hidden-desktop "></div>
          </div>

          <div className="content z-50">
            <h1>
              Traditional Mining Is { ""}
              <span className=" ">Far From Ideal</span> and Has Many
              Problems
            </h1>

            <p>
              Traditional mining operations typically focus on one coin with the
              best average long-term return for an extended period of time.
              Changing mining client, pool, wallet details, and tweaking GPU
              overclocks for optimal mining, generally require
              <b>complex manual processes</b>.
            </p>
            <br />
            <p>
              So many <b>opportunities are missed</b> by mining only long-term
              profitable coins, disregarding short-term ones that can be twice
              as profitable for periods as short as an hour.
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
          <h2>Hash AI Is a Solution to the Problem</h2>
          <p>
            Our advanced AI algorithms <b>provide significant benefits</b> in
            terms of ROI (return on investment) for both clients and token
            holders, as well as helping businesses and individuals achieve their
            financial goals sooner and far more efficiently.
          </p>
        </div>

        <div className="howitworks section-narrow fadein">
          <div className="wrapper">
            <h4>AI analyse market conditions</h4>
            <img src="/img/analyse.svg" />
          </div>
          <div className="wrapper wrapper-mid">
            <h4>Assess coin profitability</h4>
            <img src="/img/coin.svg" />
          </div>
          <div className="wrapper">
            <h4>Adjust what coin is mined</h4>
            <img src="/img/target.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemNDSolutions;
