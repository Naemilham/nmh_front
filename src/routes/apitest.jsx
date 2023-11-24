import { useEffect } from "react";
// import {signIn} from "../apis/api";
import axios from "axios";

const apitest = () => {
  useEffect(() => {
    const getPostAPI = async () => {
      const response = await axios.get("https://naemilham.site/");
      console.log(response);
    };
    getPostAPI();
  }, []);

  return (
    <div>
      <h1>API TEST</h1>
    </div>
  );
};

export default apitest;
