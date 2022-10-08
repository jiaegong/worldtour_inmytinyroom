import React from "react";
import Controller from "../../components/controller/controller";
import { useQuery } from "react-query";
import videoApi from "../../shared/api/videoApi";
import ReactPlayer from "react-player/lazy";
import { useParams } from "react-router";
import ChatBox from "../../components/chat/chatBox";

function Trip() {
  const params = useParams();
  const cityName = params.city;
  const { data } = useQuery("tripVideo", async () => {
    const res = await videoApi.getTripVideo(cityName);
    if (res) {
      return res.videoUrl[0];
    }
    throw new Error("Network response not ok");
  });

  return (
    <div style={{ width: "100%", height: "91vh", position: "relative" }}>
      <Controller />
      <ReactPlayer
        className="react-player"
        url={data}
        width="100%"
        height="100%"
        playing={true}
        muted={true}
      />
      <ChatBox />
    </div>
  );
}

export default Trip;
