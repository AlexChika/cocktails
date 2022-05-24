import React from "react";
const Error = ({ children }) => {
  return (
    <div className="error mt30">
      <img src={require("../Assets/error.png")} alt="" />
      <p className="mb20">Ooops An Error Occured.</p>
      {children}
    </div>
  );
};

export default Error;
