import React from "react";
import { roadmap1, roadmap2 } from "../assets";

const ShapeTheFuture = () => {
  return (
    <div className="section-narrow">
      <div className="shapethefuture fadein">
        <img src={"/fix.jpg"} />

        <div className="content">
          <h2>
          Unlocking Opportunities: <span className="gradient-text">Empower Your Crypto Journey</span>
            <br />
            Across Multiple Chains
          </h2>
          <a href="https://dapp.hashai.cc" target="_blank" className="btn-dapp">
            Launch our Bot
            <img src="./img/dapplaunch.svg" />
          </a>
        </div>
      </div>

      <div className="container-revolutionaryforce mt-5 mb-5 fade">
        <p className="revolutionaryforce">
         Our bot, powered by AI, represents a <b>groundbreaking advance</b> in the cryptocurrency world. By bringing together AI-driven analysis, seamless cross-chain trading, and real-time trend monitoring, our bot sets the standard for innovation and precision.
        </p>

        <div className="wrapper limitlesspossibilities">
        <h4>Unlock Boundless Crypto Insights</h4>
        <p className="text-med">
          Experience our bots fusion of AI and blockchain, opening the door to boundless opportunities in analysis and trading.
        </p>
        </div>
      </div>
    </div>
  );
};

export default ShapeTheFuture;
