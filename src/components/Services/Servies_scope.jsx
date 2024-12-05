import React from "react";
import "./Servies_scope.css";
import StatBox from "./StatBox";

function Servies_scope() {
  return (
    <div style={{backgroundColor : "#E9F2FA"}}>
      <div className="service_container">
        <div className="info-box">
          <div className="text-content">
            <h2>What is team building?</h2>
            <p>
              Etiam erat velit scelerisque in dictum non consectetur. Nisl purus
              in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium
              nibh ipsum. Image from freepik
            </p>
            <button className="read-more">read more</button>
          </div>
        </div>
        <div className="stats-box">
          <StatBox/>
        </div>
      </div>
    </div>
  );
}

export default Servies_scope;
