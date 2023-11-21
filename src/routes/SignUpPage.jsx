import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwVerification, setPwVerification] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");

  const [pwVisible, setPwVisible] = useState(false);
  const [pwVerificationVisible, setPwVerificationVisible] = useState(false);


  const login = () => {
    console.log(id, pw);
  };

  const emailVerification = () => {
    console.log("이메일 확인");
  }
  
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-b from-[#ECF2FF] to-[#FFF4D2]">
      <div className="w-2/5 h-[90%] bg-white rounded-[10px] drop-shadow-[0_35px_35px_rgba(0,120,240,0.25)] relative flex flex-col justify-normal items-center gap-8">  
        <div className="flex flex-col justify-normal items-center gap-5 pt-10">
          <p className="font-sans text-4xl font-bold text-[#80BBF7]">내밀함</p>
          <p className="font-sans font-normal text-lg text-[#00000099]">우리가 공유하는 가장 진솔한 이야기</p>
        </div>
        
        <section className="w-full flex flex-col justify-normal items-center gap-10">
          <div className="w-3/5 h-8 flex itmes-start border-b border-[#777E90]">
            <input
              required
              type="text"
              id="username"
              placeholder="아이디"
              className="input w-full h-full rounded-lg text-[#00000070]" 
              onChange={(e) => setId(e.target.value)}
            />
            <img src={require("../assets/images/peopleIcon.png")} className="w-1/12 h-full"></img>
          </div>

          <div className="w-3/5 h-8 flex itmes-start border-b border-[#777E90]">
            <input
              required
              type="text"
              id="nickname"
              placeholder="닉네임"
              className="input w-full h-full rounded-lg text-[#00000070]" 
              onChange={(e) => setNickName(e.target.value)}
            />
            <img src={require("../assets/images/peopleIcon.png")} className="w-1/12 h-full"></img>
          </div>  

          <div className="w-3/5 h-8 flex itmes-start border-b border-[#777E90]">
            <input
              required
              type="text"
              id="email"
              placeholder="이메일"
              className="input w-full h-full rounded-lg text-[#00000070]" 
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
            className="w-2/12 h-full bg-[#E5F1FD] border border-[#0078F0] rounded-lg drop-shadow-md"
             onClick={(e) => {
                emailVerification();
              }}
            >
              <p className="text-[#0078F0] font-sans text-l font-bold">인증</p>
            </button>
          </div>

          <div className="w-3/5 h-8 flex itmes-start border-b border-[#777E90]">
            <input
              required
              type={pwVisible ? "text" : "password"}
              id="password"
              placeholder="비밀번호"
              className="input w-full h-full rounded-lg text-[#00000070]"
              onChange={(e) => setPw(e.target.value)}
            />
            {
              pwVisible ? 
              <img  
                src={require("../assets/images/visibleIcon.png")}
                className="w-1/12 h-4/5 pt-1"
                onClick={(e) => setPwVisible(!pwVisible)}
              ></img> :
              <img  
                src={require("../assets/images/invisibleIcon.png")}
                className="w-1/12 h-full"
                onClick={(e) => setPwVisible(!pwVisible)}
              ></img>
            }
          </div>

          <div className="w-3/5 h-8 flex itmes-start border-b border-[#777E90]">
            <input
              required
              type={pwVerificationVisible ? "text" : "password"}
              id="passwordVerification"
              placeholder="비밀번호 확인"
              className="input w-full h-full rounded-lg text-[#00000070]" 
              onChange={(e) => setPwVerification(e.target.value)}
            />
            {
              pwVerificationVisible ? 
              <img  
                src={require("../assets/images/visibleIcon.png")}
                className="w-1/12 h-4/5 pt-1"
                onClick={(e) => setPwVerificationVisible(!pwVerificationVisible)}
              ></img> :
              <img  
                src={require("../assets/images/invisibleIcon.png")}
                className="w-1/12 h-full"
                onClick={(e) => setPwVerificationVisible(!pwVerificationVisible)}
              ></img>
            }  
          </div>
          
          <div className="flex flex-col gap-3">
            <p className="font-sans text-sm font-normal text-[#00000099] drop-shadow-md">
              내밀함에서 어떠한 역할로 활동하고 싶은가요?
            </p>
            <div className="flex justify-around">
              <div className="flex gap-2">
                <input type="radio" name="role" value="받는 이" />
                <span className="font-sans text-sm font-bold text-[#00000099] drop-shadow-md">받는 이</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="role" value="보내는 이" />
                <span className="font-sans text-sm font-bold text-[#00000099] drop-shadow-md">보내는 이</span>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full pb-10 flex flex-col justify-normal items-center">
          <button
            className="w-2/5 h-12 bg-[#E5F1FD] border border-[#0078F0] rounded-lg drop-shadow-md"
            onClick={(e) => {
              login();
            }}
          >
            <p className="text-[#0078F0] font-sans text-xl font-bold">회원가입</p>
          </button>
        
          <p
            className="font-sans text-sm font-normal text-[#00000099] drop-shadow-md pt-3"
            onClick={(e) => {navigate("/signin");}}
          >
            이미 내밀함 계정이 있으신가요?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
