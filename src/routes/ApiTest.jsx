import { useEffect } from "react";
// import {signIn} from "../apis/api";
import axios from "axios";
import { getCookie } from "../utils/cookie";

const ApiTest = () => {
  useEffect(() => {
	  console.log("돼나?");
    const getPostAPI = async () => {
	console.log("돼라");
       const response = await axios.post("https://naemilham.site/api/accounts/send-verification-email/", 
        {
           "email": "idltkim@gmail.com",
        }, 
         {
         headers: {
           "Content-Type": "application/json",
           "X-CSRFToken": getCookie("csrftoken"),
         },
         withCredentials: true
       });
      console.log(response);
    };
    getPostAPI();
  }, []);
	return (
		<div>여기는 apitest!</div>
	);
};

export default ApiTest;
