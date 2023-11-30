import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp, sendVerificationEmail, verifyEmail } from "../apis/api";

const SignUpPage = () => {
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwVerification, setPwVerification] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [isWriter, setIsWriter] = useState(false);

  const [emailId, setEmailId] = useState(-1);
  const [emailVerification, setEmailVerification] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);

  const [pwVisible, setPwVisible] = useState(false);
  const [pwVerificationVisible, setPwVerificationVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const register = async () => {
    if(id === "")
      alert("아이디를 입력해주세요!")
    else if(pw === ""){
      alert("닉네임을 입력해주세요!")
    }
    else if(pw === ""){
      alert("비밀번호를 입력해주세요!")
    }
    else if(pwVerification === ""){
      alert("비밀번호 확인을 입력해주세요!")
    }
    else if(pwVerification !== pw){
      alert("동일한 비밀번호를 입력해주세요!")
    }
    else if(emailVerified === false){
      alert("이메일 인증을 완료해주세요!")
    }
    else{
      const response = await signUp({
        "username": id,
        "password1": pw,
        "password2": pwVerification,
        "email": email,
        "nickname": nickName,
        "is_writer": isWriter,
      });
      if(response.request.status == 201){
        alert("회원가입을 완료했습니다.");
        navigate("/");
      }
      else{
        const responseData = response.response.data;
        const errMassage = responseData[Object.keys(responseData)[0]][0];
        alert(errMassage)
      }
    }
  };

  const handleEmailVerification = () => {
    if (!emailRegEx.test(email)) {
      alert("옳지 않은 이메일 형식입니다.");
    } else {
      sendEmail();
      setEmailVerified(false);
      setIsVisible(true);
    }
  };

  const sendEmail = async () => {
    const response = await sendVerificationEmail({
      email: email,
    });
    setEmailId(response.data.id);
    alert("인증 메일이 발송되었습니다.");
  };

  const confirmEmail = async () => {
    if (emailId != -1) {
      const response = await verifyEmail(emailId, {
        verification_code: emailVerification,
      });
      if(response.request.status == 200){
        alert("이메일 인증을 완료했습니다.");
        setEmailVerified(true);
      }
      else{
        const responseData = response.response.data;
        const errMassage = responseData[Object.keys(responseData)[0]];

        alert(errMassage);
      }
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-b from-[#ECF2FF] to-[#FFF4D2]">
      <div className="w-2/5 h-11/12 bg-white rounded-[10px] drop-shadow-[0_35px_35px_rgba(0,120,240,0.25)] relative flex flex-col justify-normal items-center gap-8">
        <div className="flex flex-col justify-normal items-center gap-4 pt-10">
          <p className="font-KimjungchulMyungjoBold text-5xl font-bold text-[#80BBF7]">
            내밀함
          </p>
          <p className="font-NotoSerifKR font-semibold text-xl text-[#00000099]">
            우리가 공유하는 가장 진솔한 이야기
          </p>
        </div>

        <section className="w-full flex flex-col justify-normal items-center gap-10">
          <div className="w-3/5 h-8 flex items-start border-b border-[#777E90]">
            <input
              required
              type="text"
              id="username"
              placeholder="아이디"
              className="input w-full h-full rounded-lg text-[#000000] outline-none font-PretendardRegular"
              onChange={(e) => setId(e.target.value)}
            />
            <img
              src={require("../assets/images/peopleIcon.png")}
              className="w-1/12 h-full"
            ></img>
          </div>

          <div className="w-3/5 h-8 flex items-start border-b border-[#777E90]">
            <input
              required
              type="text"
              id="nickname"
              placeholder="닉네임"
              className="input w-full h-full rounded-lg text-[#000000] outline-none font-PretendardRegular"
              onChange={(e) => setNickName(e.target.value)}
            />
            <img
              src={require("../assets/images/peopleIcon.png")}
              className="w-1/12 h-full"
            ></img>
          </div>

          <div className="w-3/5 h-8 flex items-center border-b border-[#777E90]">
            <input
              required
              type="text"
              id="email"
              placeholder="이메일"
              className="input w-full h-full rounded-lg text-[#000000] outline-none font-PretendardRegular"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="w-5/12 h-full bg-[#E5F1FD] border border-[#0078F0] rounded-lg font-PretendardRegular"
              onClick={handleEmailVerification}
            >
              <p className="text-[#0078F0] font-bold px-1">인증 메일 전송</p>
            </button>{" "}
          </div>
          {isVisible && (
            <div className="w-3/5 h-8 flex items-start border-b border-[#777E90]">
              <input
                required
                type="text"
                id="authCode"
                placeholder="인증 코드를 입력해주세요."
                className="input w-full h-full rounded-lg text-[#000000] outline-none font-PretendardRegular"
                onChange={(e) => setEmailVerification(e.target.value)}
              ></input>
              <button
                className="w-4/12 h-full bg-[#E5F1FD] border border-[#0078F0] rounded-lg drop-shadow-md"
                onClick={() => confirmEmail()}
              >
                <p className="text-[#0078F0] font-bold font-PretendardRegular">
                  인증하기
                </p>
              </button>
            </div>
          )}

          <div className="w-3/5 h-8 flex items-start border-b border-[#777E90]">
            <input
              required
              type={pwVisible ? "text" : "password"}
              id="password"
              placeholder="비밀번호"
              className="input w-full h-full rounded-lg text-[#000000] outline-none font-PretendardRegular"
              onChange={(e) => setPw(e.target.value)}
            />
            {pwVisible ? (
              <img
                src={require("../assets/images/visibleIcon.png")}
                className="w-1/12 h-4/5 pt-1"
                onClick={(e) => setPwVisible(!pwVisible)}
              ></img>
            ) : (
              <img
                src={require("../assets/images/invisibleIcon.png")}
                className="w-1/12 h-full"
                onClick={(e) => setPwVisible(!pwVisible)}
              ></img>
            )}
          </div>

          <div className="w-3/5 h-8 flex items-start border-b border-[#777E90]">
            <input
              required
              type={pwVerificationVisible ? "text" : "password"}
              id="passwordVerification"
              placeholder="비밀번호 확인"
              className="input w-full h-full rounded-lg text-[#000000] outline-none font-PretendardRegular"
              onChange={(e) => setPwVerification(e.target.value)}
            />
            {pwVerificationVisible ? (
              <img
                src={require("../assets/images/visibleIcon.png")}
                className="w-1/12 h-4/5 pt-1"
                onClick={(e) =>
                  setPwVerificationVisible(!pwVerificationVisible)
                }
              ></img>
            ) : (
              <img
                src={require("../assets/images/invisibleIcon.png")}
                className="w-1/12 h-full"
                onClick={(e) =>
                  setPwVerificationVisible(!pwVerificationVisible)
                }
              ></img>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-NotoSerifKR text-base font-semibold text-[#00000099] drop-shadow-md">
              내밀함에서 어떤 역할로 활동하고 싶으신가요?
            </p>
            <div className="flex justify-around">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="role"
                  value="받는 이"
                  checked
                  onClick={() => setIsWriter(false)}
                />
                <span className="font-PretendardRegular text-sm font-bold text-[#00000099] drop-shadow-md">
                  받는 이
                </span>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="role"
                  value="보내는 이"
                  onClick={() => setIsWriter(true)}
                />
                <span className="font-PretendardRegular text-sm font-bold text-[#00000099] drop-shadow-md">
                  보내는 이
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full pb-10 flex flex-col justify-normal items-center">
          <button
            className="w-2/5 h-12 bg-[#E5F1FD] border border-[#0078F0] rounded-lg drop-shadow-md"
            onClick={(e) => {
              register();
            }}
          >
            <p className="text-[#0078F0] font-PretendardRegular text-xl font-bold">
              회원가입
            </p>
          </button>

          <p className="font-PretendardRegular text-sm font-normal text-[#000000a5] drop-shadow-md pt-5">
            이미 내밀함 계정이 있으신가요? &nbsp;
            <span
              className="font-PretendardRegular font-bold"
              onClick={(e) => {
                navigate("/signin");
              }}
            >
              이 곳
            </span>
            에서 로그인해 주세요.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
