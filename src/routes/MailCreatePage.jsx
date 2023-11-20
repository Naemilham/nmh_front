import { useState } from "react";

const MailCreatePage = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-[#ECF2FF] to-[#FFF4D2]">
      {/*header*/}
      <div className="flex flex-row justify-center mt-6">
        <div className="w-11/12 h-20 sticky z-50 top-0 bg-white flex flex-row justify-between items-center whitespace-nowrap rounded-xl drop-shadow-lg">
          <div className="w-full h-full pl-10 flex flex-row items-center gap-5">
            <img
              className="h-1/2"
              src={require("../assets/images/nmhIcon-yellow.png")}
            />
            <div className="flex items-end gap-2">
              <div className="font-extrabold text-4xl text-[#0078F080]">
                내밀함
              </div>
              <div className=" text-lg font-semibold ml-1 text-[#00000099]">
                우리가 공유하는 가장 진솔한 이야기
              </div>
            </div>
          </div>
          <div className="w-max h-full pr-10 flex flex-row items-center gap-5">
            <div className="font-bold text-xl text-[#0078F080]">로그아웃</div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-row justify-stretch">
        <div className="w-full h-full flex flex-row justify-center items-center">
          {/*tag*/}
          <div className="flex flex-col justify-end">
            <div className="flex flex-col mb-6">
              <div class="w-14 h-[23px]  bg-sky-600 drop-shadow-md"></div>
              <div className="w-14 h-28 border bg-white vertical-text text-center text-lg font-bold pl-2 text-sky-600 drop-shadow-md">
                편지쓰기
              </div>
            </div>
            <div className="flex flex-col ml-2 mb-6">
              <div class="w-12 h-[23px]  bg-[#4694F0] drop-shadow-md"></div>
              <div className="w-12 h-28 border bg-white vertical-text text-center text-lg font-bold pl-2 text-[#4694F0] drop-shadow-md">
                기억상자
              </div>
            </div>
            <div className="flex flex-col ml-2 mb-6">
              <div class="w-12 h-[23px]  bg-[#4694F0] drop-shadow-md"></div>
              <div className="w-12 h-28 border bg-white vertical-text text-center text-lg font-bold pl-2 text-[#4694F0] drop-shadow-md">
                나의 정보
              </div>
            </div>
          </div>
          {/*content*/}
          <div className="bg-white text-black w-3/4 h-5/6 flex flex-col justify-self-center items-center rounded-lg drop-shadow-xl">
            <input
              placeholder="제목을 입력해 주세요."
              className="w-11/12 h-16 border-2 mt-8 p-4 border-gray-300 flex flex-col justify-between rounded-lg"
            ></input>
            <textarea
              placeholder="내용을 입력해 주세요."
              className="w-11/12 h-4/5 border-2 mt-2 p-4 border-gray-300 flex flex-col justify-between items-center rounded-lg resize-none"
            />
            <div className="w-full h-1/5 flex flex-row justify-center items-center gap-5">
              <button
                type="button"
                className="button-a !w-32"
                onClick={() => {
                  window.alert("추후 제공될 기능입니다.");
                }}
              >
                미리보기
              </button>
              <button
                type="button"
                className="button-a !w-32"
                onClick={() => {
                  window.alert(
                    "소중한 마음 잘 전해받았습니다. 메일은 오늘 자정에 받는 이들에게 전달됩니다."
                  );
                }}
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
