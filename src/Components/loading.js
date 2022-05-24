import React from "react";
import { BallTriangle } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="loading mt30" style={{ color: "grey" }}>
      <div className="spinner">
        <BallTriangle
          heigth="80"
          width="80"
          color="grey"
          ariaLabel="loading-indicator"
        />
      </div>
      <h4 className="mt30">One Moment ... </h4>
    </div>
  );
};

export default Loading;
