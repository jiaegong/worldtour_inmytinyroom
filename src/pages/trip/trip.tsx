import React from "react";
import Controller from "../../components/controller/controller";

function Trip() {
  return (
    <>
      <video src={`https://www.youtube.com/watch?v=LPgZ4lKfBPw`} autoPlay controls />
      <Controller />
    </>
  );
}

export default Trip;
