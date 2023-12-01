import { resolvePath } from "react-router-dom";
import { instance, instanceWithToken } from "./axios";
import { removeCookie } from "../utils/cookie";
import { async } from "q";

// account
export const refreshToken = async (data) => {
  const response = await instance.post("/api/accounts/token/refresh/", data);
  if (response.status === 200) {
    console.log("Refresh Success");
  } else {
    console.log("Error");
  }
}
export const signOut = async () => {
  removeCookie("access_token")
  removeCookie("refresh_token")
  removeCookie("userId");
  removeCookie("profileId");

  window.location.href = "/";
} 

export const signIn = async (data) => {
  let response;
  try{
    response = await instance.post("/api/accounts/signin/", data);
  } catch (err) {
    response = err;
  }
  return response;
};

export const signUp = async (data) => {
  let response;
  try{
    response = await instance.post("/api/accounts/signup/", data);
  } catch (err) {
    response = err;
  };
  return response;
}

export const getUserInfo = async (profile_id) => {
  let response;
  try{
    response = await instanceWithToken.get(`/api/accounts/info/${profile_id}/`);
  } catch (err) {
    response = err;
  }
  return response;
}

export const sendVerificationEmail = async (data) => {
  let response;
  try{
    response = await instance.post("/api/accounts/send-verification-email/", data);
  } catch (err) {
    response = err;
  }
  return response;
};

export const verifyEmail = async (id, data) => {
  let response;
  try{
    response = await instance.patch(`/api/accounts/verify-email/${id}/`, data);
  } catch (err) {
    response = err;
  }
  return response;
};

// email
export const sendEmail = async (data) => {
  let response;
  try{
    response = await instance.post("/api/mails/send/", data);
  } catch (err) {
    response = err;
  }
  return response;
};

export const saveEmail = async (data) => {
  let response;
  try{
    response = await instance.post("/api/mails/", data);
  } catch (err) {
    response = err;
  }
  return response;
};

// subscribe
export const subscribe = async (data) => {
  let response;
  try{
    response = await instanceWithToken.post("/api/subscription/subscribe/", data);
  } catch (err) {
    response = err;
  }
  return response;
}

// data

export const getAllWriter = async (data) => {
  let response;
  try{
    response = await instance.get("/api/accounts/writers/", data);
  } catch (err) {
    response = err;
  }
  return response;
}

// accounts API
// export const signIn = async (data) => {
//   const response = await instance.post("/api/accounts/signin/", data);
//   if (response.status === 200) {
//     window.location.href = "/";
//   } else {
//     console.log("Error");
//   }
// };

// export const signOut = async () => {
//   const response = await instance.post("/api/accounts/signout/");
//   if (response.status === 200) {
//     window.location.href = "/";
//   } else {
//     console.log("Error");
//   }
// };
  
// export const signUp = async (data) => {
//   const response = await instance.post("/api/accounts/signup/", data);
//   if (response.status === 200) {
//     window.location.href = "/";
//   } else {
//     console.log("Error");
//   }
//   return response;
// };

// export const sendVerificationEmail = async (data) => {
//   const response = await instance.post("/api/accounts/send-verification-email/", data);
//   return response;
// };

// // id : ?
// export const resendVerificationEmail = async (id) => {
//   const response = await instance.post(`/api/accounts/resend-verification-email/${id}/`);
//   return response;
// };

// export const verifyEmail = async (id) => {
//   const response = await instance.post(`/api/accounts/verify-email/${id}/`);
//   return response;
// };

// export const getAllWriters = async () => {
//   const response = await instance.get("/api/accounts/writers/");
//   return response;
// };

// export const getAllReaders = async () => {
//   const response = await instance.get("/api/accounts/readers/");
//   return response;
// };

// // email save API
// export const saveEmail = async (data) => {
//   const response = await instance.post("/api/mails/save/", data);
//   if (response.status === 201) {
//     console.log("Mail saved successfully");
//     window.location.href = "/";
//   } else {
//     console.log("[Error] Mail save failed");
//   }
// };

// export const modifyEmail = async (data) => {
//   const response = await instance.patch("/api/mails/save/", data);
//   if (response.status === 200) {
//     console.log("Mail modified successfully");
//     window.location.href = "/";
//   } else {
//     console.log("[Error] Mail modify failed");
//   }
// };

// export const deleteEmail = async (data) => {
//   const response = await instance.delete("/api/mails/save/", data);
//   if (response.status === 204) {
//     console.log("Mail deleted successfully");
//     window.location.href = "/";
//   } else {
//     console.log("[Error] Mail delete failed");
//   }
// }

// // email send API
// export const sendEmail = async (data) => {
//   const response = await instance.post("/api/mails/", data);
//   return response;
// };

// export const getEmail = async () => {
//   const response = await instance.get("/api/mails/");
//   return response;
// };

// export const replyEmail = async (data) => {
//   const response = await instance.post("/api/mails/reply/", data);
//   return response;
// };

// // subscription API
// export const subscribe = async (data) => {
//   const response = await instance.post("/api/subscription/subscribe/", data);
//   return response;
// };

// export const unsubscribe = async (data) => {
//   const response = await instance.delete("/api/subscription/unsubscribe/", data);
//   return response;
// }
