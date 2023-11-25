import { useEffect } from "react";
// import {signIn} from "../apis/api";
import axios from "axios";
import { getCookie } from "../utils/cookie";
import { sendVerificationEmail } from "../apis/api";

const ApiTest = () => {
  useEffect(() => {
    const getPostAPI = async () => {
      // // const response = await axios.post("https://naemilham.site/api/accounts/send-verification-email/", 
      // //   {
      // //      "email": "idltkim@gmail.com",
      // //   }, 
      // //    {
      // //    headers: {
      // //      "Content-Type": "application/json",
      // //      "X-CSRFToken": getCookie("csrftoken"),
      // //    },
      // //    withCredentials: true
      // //  });
      // const response = await sendVerificationEmail({"email": "idltkim@gmail.com",});
      // console.log(response);
    };
    getPostAPI();
  }, []);
	return (
		<div>여기는 apitest!</div>
	);
};

export default ApiTest;
