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
    <div className="w-screen h-screen flex justify-center bg-[#F2F3F8]">
      <div className="w-1/2 h-full flex flex-col justify-normal items-center gap-10 pt-20">
        <img src={require("../assets/images/nmhIcon.png")} className="w-1/14 h-1/10"/>
        <p className="font-['DM_Sans'] text-5xl font-bold">내밀함</p>
        <div className="w-3/4 pt-10">
          <p className="font-['DM_Sans'] text-2xl font-bold text-[#777E90] pb-2">
            아이디
          </p>
          <input
            required
            type="text"
            id="username"
            className="input w-full h-16 rounded-lg border-[1.5px] border-[#777E90]"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        
        <div className="w-3/4 pb-10">
          <p className="font-['DM_Sans'] text-2xl font-bold text-[#777E90] pb-2">
            비밀번호
          </p>
          <input
            required
            type="text"
            id="username"
            className="input w-full h-16 rounded-lg border-[1.5px] border-[#777E90]"
            onChange={(e) => setPw(e.target.value)}
          />
        </div>

        <button
          className="w-2/5 h-16 bg-black rounded-lg drop-shadow-md"
          onClick={(e) => {
            login();
          }}
        >
          <p className="text-white font-['DM_Sans'] text-2xl font-bold">로그인</p>
        </button>
        
        <p
          className="font-['DM_Sans'] text-lg font-bold text-[#777E90] drop-shadow-md"
          onClick={(e) => {
            navigate("/signup");
          }}
        >
           내밀함에 처음 방문하셨나요? 지금 회원가입 해보세요!
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
