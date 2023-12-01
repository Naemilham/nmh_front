import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveEmail, sendEmail, signOut } from "../apis/api";

const MailCreatePage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [emailId, setEmailId] = useState(-1);

  const save = async () => {
    console.log("tt", title, content);
    const response = await saveEmail({
      subject: title,
      message: content,
      writer: 1,
    });
    setEmailId(response.data.id);
    console.log(response);
  };

  const send = async () => {
    const response = await sendEmail({
      email_id: emailId,
    });
    console.log(response);
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-[#ECF2FF] to-[#FFF4D2]">
      {/*header*/}
      <div className="flex flex-row justify-center mt-6">
        <div className="w-5/6 h-20 sticky z-50 top-0 bg-white flex flex-row justify-between items-center whitespace-nowrap rounded-xl drop-shadow-lg">
          <div className="w-full h-full pl-10 flex flex-row items-center gap-3">
            <img
              className="h-1/2 drop-shadow-sm"
              src={require("../assets/images/nmhIcon-yellow.png")}
            />
            <div className="flex items-end">
              <div
                className="font-extrabold text-4xl drop-shadow-sm ml-2 font-KimjungchulMyungjoBold text-[#0078F080]"
                onClick={(e) => {
                  navigate("/");
                }}
              >
                내밀함
              </div>
              <div className="text-lg font-semibold font-NotoSerifKR ml-2 text-[#00000099]">
                우리가 공유하는 가장 진솔한 이야기
              </div>
            </div>
          </div>
          <div className="w-max h-full pr-10 flex flex-row items-center gap-5">
            <div 
              className="font-extrabold font-PretendardRegular text-lg justify-self-end text-[#0078F080]"
              onClick={()=>signOut()}
            >
              로그아웃
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-row justify-stretch">
        <div className="w-full h-full flex flex-row justify-center items-center">
          {/*sidebar*/}
          <div className="flex flex-col justify-end">
            <div className="flex flex-col mb-6">
              <div class="w-15 h-[23px]  bg-[#4694F0] drop-shadow-md translate-x-1.5"></div>
              <div className="w-15 h-28 border bg-white vertical-text text-center text-lg font-NPSfontBold font-black pl-2 text-[#4694F0] drop-shadow-lg translate-x-1.5">
                편지 쓰기
              </div>
            </div>
            <div className="flex flex-col ml-2 mb-6 hover:-translate-x-2">
              <div class="w-12 h-[23px]  bg-[#7B8086] drop-shadow-md translate-x-2"></div>
              <div
                className="w-12 h-28 border bg-white vertical-text text-center text-lg font-extrabold font-NPSfontBold pl-2 text-[#7B8086] drop-shadow-md translate-x-2"
                onClick={() => {
                  window.alert("추후 제공될 기능입니다.");
                }}
              >
                기억 상자
              </div>
            </div>
            <div className="flex flex-col ml-2 mb-6 hover:-translate-x-2">
              <div class="w-12 h-[23px]  bg-[#7B8086] drop-shadow-md translate-x-2"></div>
              <div
                className="w-12 h-28 border bg-white vertical-text text-center text-lg font-extrabold font-NPSfontBold pl-2 text-[#7B8086] drop-shadow-md translate-x-2"
                onClick={() => {
                  window.alert("추후 제공될 기능입니다.");
                }}
              >
                나의 정보
              </div>
            </div>
          </div>
          {/*content*/}
          <div className="bg-white text-black outline-none w-3/4 h-5/6 flex flex-col justify-self-center items-center rounded-lg drop-shadow-xl">
            <input
              placeholder="제목을 입력해 주세요."
              className="w-11/12 h-16 border-2 mt-10 p-4 outline-none text-lg font-PretendardRegular border-gray-300 flex flex-col justify-between rounded-lg"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <textarea
              placeholder="내용을 입력해 주세요."
              className="w-11/12 h-4/5 border-2 mt-2 p-4 outline-none font-PretendardRegular border-gray-300 flex flex-col justify-between items-center rounded-lg resize-none"
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="w-full h-1/5 flex flex-row justify-center items-center gap-5">
              <button
                type="button"
                className="button-a !w-32 font-NPSfontBold"
                onClick={() => save()}
              >
                저장하기
              </button>
              <button
                type="button"
                className="button-a !w-32 font-NPSfontBold"
                onClick={() => send()}
              >
                편지 보내기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailCreatePage;
