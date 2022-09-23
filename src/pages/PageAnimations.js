import React, { useState } from "react";
import Navbar from "../components/Navbar";

const PageAnimations = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);

  const [effectCar, setEffectCar] = useState(true);
  const [effectMoto, setEffectMoto] = useState(true);

  const handleClick = () => {
    setSecond(!second);
    setThird(!third);
    setEffectCar(!effectCar);
    setEffectMoto(!effectMoto);
  };

  return (
    <>
   <Navbar />
      <h1 className="h1Animations mt-3 animate__animated  animate__backInUp">
        ¡Hola!
      </h1>

      <hr />
      <h1
        className={`mt-3 text-white mt-3 ${
          first
            ? "animate__animated animate__backInLeft"
            : "animate__animated animate__backOutRight"
        }`}
      >
        Welcome
      </h1>

      <button onClick={() => setFirst(!first)} className="btn btn-primary">
        click true/false
      </button>
   <hr />
      <button onClick={() => handleClick()} className="btn btn-warning mb-3">
        click true/false
      </button>
      <br />
      {second ? (
        <img
          width={"550em"}
          height={"220em"}
          src="./assets/carRightSide2.jpg"
          alt="car"
          className={` effect effectCar1 ${
            effectCar
              ? " animate__animated animate__backInLeft"
              : "animate__animated animate__backOutRight"
          }`}
        />
      ) : (
        <img
          width={"300em"}
          src="./assets/carRightSide2.jpg"
          alt="car"
          className={` effect ${
            effectCar
              ? " animate__animated animate__backInLeft"
              : "animate__animated animate__backOutRight"
          }`}
        />
      )}
      {/*  */}

      {third ? (
        <img
          width={"100em"}
          src="./assets/motoRightSide.jpg"
          alt="car"
          className={`effect  ${
            effectMoto
              ? "  animate__animated animate__backOutRight"
              : "animate__animated animate__backInLeft"
          }`}
        />
      ) : (
        <img
          width={"350em"}
          src="./assets/motoRightSide.jpg"
          alt="car"
          className={` effect  ${
            effectMoto
              ? "  animate__animated animate__backOutRight"
              : "animate__animated animate__backInLeft"
          }`}
        />
      )}
    </>
  );
};

export default PageAnimations;
