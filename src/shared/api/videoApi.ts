import axios from "axios";

const getTripVideo = async (cityName: string | undefined) => {
  const { data } = await axios.get(`http://13.209.17.177/api/video?cityName=${cityName}`);

  return data;
};

const videoApi = {
  getTripVideo,
};

export default videoApi;
