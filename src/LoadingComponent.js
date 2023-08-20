import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const LoadingComponent = () => {
  return (
    <div className="wrapper">
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="blue"
        innerCircleColor="blue"
        middleCircleColor="red"
      />
    </div>
  );
};

export default LoadingComponent;
