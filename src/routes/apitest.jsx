import { useEffect } from "react";
// import {signIn} from "../apis/api";
import axios from "axios";
import { getCookie } from "../utils/cookie";

const ApiTest = () => {
  useEffect(() => {
    const getPostAPI = async () => {
      const response = await axios.get("http://naemilham.site");
      // const response = await axios.post("http://naemilham.site/api/accounts/signup/", 
      //   {
      //     "username": "user3",
      //     "password1": "user3user3",
      //     "password2": "user3user3",
      //     "email": "idltkim@gmail.com",
      //     "nickname": "유저3",
      //     "is_writer": "true"
      // }, 
      //   {
      //   headers: {
      //     "Content-Type": "application/json",
      //     "X-CSRFToken": getCookie("csrftoken"),
      //   },
      //   withCredentials: true
      // });
      console.log(response);
    };
    getPostAPI();
  }, []);
	return (
		<div>여기는 apitest!</div>
	);
};

export default ApiTest;
