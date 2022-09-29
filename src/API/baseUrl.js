import axios from "axios";

const Client = axios.create({
  baseUrl: "https://belajar-react.smkmadinatulquran.sch.id/api",
});

export default Client;