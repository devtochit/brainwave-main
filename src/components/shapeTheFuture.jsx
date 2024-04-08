import React from "react";
import { roadmap1, roadmap2 } from "../assets";


const ShapeTheFuture = () => {
  return (
    <div className="section-narrow">
      <div className="shapethefuture fadein">
        <img src={"/img/graphiccard.png"} />

        <div className="content">
          <h2>
            Together, We <span className="gradient-text">Shape the Future</span>
            <br />
            Of Decentralized Finance
          </h2>
          <a href="https://dapp.hashai.cc" target="_blank" className="btn-dapp">
            Check Our DApp
            <img src="./img/dapplaunch.svg" />
          </a>
        </div>
      </div>

      <div className="container-revolutionaryforce mt-5 mb-5 fade">
        <p className="revolutionaryforce">
          Hash AI and its AI-driven mining facility, represent a
          <b>revolutionary force</b> in the cryptocurrency landscape. The
          integration of AI-optimized mining, sustainability practices, and
          community engagement positions Hash AI as a beacon of innovation and
          efficiency.
        </p>

        <div className="wrapper limitlesspossibilities">
          <h4>Limitless Possibilities of Mining</h4>
          <p className="text-med">
            Join us at Hash AI, where the power of AI meets the limitless
            possibilities of cryptocurrency mining.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShapeTheFuture;
