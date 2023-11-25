import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwVisible, setPwVisible] = useState(false);
  const login = () => {
    console.log(id, pw);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-b from-[#ECF2FF] to-[#FFF4D2]">
      <div className="w-2/5 h-7/10 bg-white rounded-[10px] drop-shadow-[0_35px_35px_rgba(0,120,240,0.25)] relative flex flex-col justify-normal items-center gap-10 pt-20">
        <div className="w-1/6 h-1/5 absolute -top-16 bg-[#EDF5FE] opacity-75 rounded-full shadow "></div>
        <img
          src={require("../assets/images/nmhIcon-yellow.png")}
          className="w-[9%] h-[7%] absolute -top-6"
        />

        <div className="flex flex-col justify-normal items-center gap-5 pt-2">
          <p className="font-sans text-5xl font-bold text-[#80BBF7]">내밀함</p>
          <p className="font-sans font-normal text-lg text-[#00000099]">
            우리가 공유하는 가장 진솔한 이야기
          </p>
        </div>

        <div className="w-3/5 flex border-b border-[#777E90] pt-5">
          <input
            required
            type="text"
            id="username"
            placeholder="아이디"
            className="input w-full h-12 rounded-lg text-[#00000070]"
            onChange={(e) => setId(e.target.value)}
          />
          <img
            src={require("../assets/images/peopleIcon.png")}
            className="w-[40px] h-[40px]"
          ></img>
        </div>

        <div className="w-3/5 flex border-b border-[#777E90]">
          <input
            required
            type={pwVisible ? "text" : "password"}
            id="username"
            placeholder="비밀번호"
            className="input w-full h-12 rounded-lg text-[#00000070]"
            onChange={(e) => setId(e.target.value)}
          />
          {pwVisible ? (
            <img
              src={require("../assets/images/visibleIcon.png")}
              className="w-[38px] h-[32px] pt-[8px]"
              onClick={(e) => setPwVisible(!pwVisible)}
            ></img>
          ) : (
            <img
              src={require("../assets/images/invisibleIcon.png")}
              className="w-[40px] h-[40px]"
              onClick={(e) => setPwVisible(!pwVisible)}
            ></img>
          )}
        </div>

        <div className="pt-10 pb-12">
          <button
            className="w-full h-16 bg-[#E5F1FD] border border-[#0078F0] rounded-lg drop-shadow-md"
            onClick={(e) => {
              login();
            }}
          >
            <p className="text-[#0078F0] font-sans text-xl font-bold">로그인</p>
          </button>

          <p className="font-sans text-sm font-normal text-[#00000099] drop-shadow-md pt-3">
            내밀함에 처음 방문하셨나요? 지금{" "}
            <span
              className="font-bold"
              onClick={(e) => {
                navigate("/signup");
              }}
            >
              회원가입
            </span>{" "}
            해보세요!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
