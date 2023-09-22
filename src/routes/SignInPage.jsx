import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignInPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const login = () => {
    console.log(id, pw);
  };
  return (
    <div className="w-screen h-screen flex justify-center bg-zinc-400">
      <div className="w-1/2 h-full flex flex-col justify-center items-center gap-10">
        <p className="text-2xl">내밀함</p>
        <input
          required
          type="text"
          id="username"
          className="input w-80 h-10"
          placeholder="id"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          required
          type="text"
          id="username"
          className="input w-80 h-10"
          placeholder="pw"
          onChange={(e) => setPw(e.target.value)}
        />
        <button
          className="w-40 h-10 bg-white"
          onClick={(e) => {
            login();
          }}
        >
          로그인
        </button>
        <p
          className="text-sm"
          onClick={(e) => {
            navigate("/signup");
          }}
        >
          회원가입 회원가입
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

export default SignInPage;
