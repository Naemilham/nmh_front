import { useEffect } from "react";
// import {signIn} from "../apis/api";
import axios from "axios";

const ApiTest = () => {
  useEffect(() => {
    const getPostAPI = async () => {
      const response = await axios.get("https://naemilham.site/");
      console.log(response);
    };
    getPostAPI();
  }, []);
	return (
		<div>여기는 apitest!</div>
	);
};

export default ApiTest;
