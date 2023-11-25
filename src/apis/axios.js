// src/apis/axios.js

import axios from "axios";
import { getCookie } from "../utils/cookie";
import { refreshToken } from "./api";

// baseURL, credential, 헤더 세팅
axios.defaults.baseURL = "https://naemilham.site";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["X-CSRFToken"] = getCookie("csrftoken");

// 누구나 접근 가능한 API들
export const instance = axios.create();