import React from "react";
import Controller from "../../components/controller/controller";
import ReactPlayer from "react-player/lazy";

function Trip() {
  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LPgZ4lKfBPw"
        playing={true}
        muted={true}
        controls={true}
      />
      <Controller />
    </>
  );
}

export default Trip;
