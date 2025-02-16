import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4cb40603f9bf4f46953792bcd3e711f2",
  },
});
