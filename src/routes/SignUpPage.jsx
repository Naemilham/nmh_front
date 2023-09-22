import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    id: "",
    pw: "",
    거시기: "",
    저시기: "",
    머시기: "",
  });
  const signUp = () => {
    console.log(info);
  };
  return (
    <div className="w-screen h-screen flex justify-center bg-zinc-400">
      <div className="w-1/2 h-full flex flex-col justify-center items-center gap-10">
        <p className="text-2xl">내밀함</p>
        {Object.keys(info).map((name) => {
          return (
            <input
              required
              type="text"
              id={name}
              className="input w-80 h-10"
              placeholder={name}
              onChange={(e) => setInfo({ ...info, [name]: e.target.value })}
            />
          );
        })}
        <button
          className="w-40 h-10 bg-white"
          onClick={(e) => {
            signUp();
          }}
        >
          회원가입
        </button>
        <p
          className="text-sm"
          onClick={(e) => {
            navigate("/signin");
          }}
        >
          로그인 로그인
        </p>
        <hr className="w-80" />
        <div className="flex justify-center gap-1">
          <button className="w-20 h-20 bg-red-600"> google </button>
          <button className="w-20 h-20 bg-red-600"> google </button>
          <button className="w-20 h-20 bg-red-600"> google </button>
          <button className="w-20 h-20 bg-red-600"> google </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
