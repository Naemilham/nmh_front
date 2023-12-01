import React from "react";
import { useState } from "react";

const MobilePage = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-[#ECF2FF] to-[#FFF4D2]">
      {/*header*/}
      <div className="flex flex-row justify-center">
        <div className="w-full h-20 sticky z-50 top-0 bg-white flex rounded-b-lg drop-shadow-[0_10px_10px_rgba(0,120,240,0.2)]">
          <div className="w-full h-full flex items-center justify-center gap-4">
            <img
              className="h-1/2 drop-shadow-sm"
              src={require("../assets/images/nmhIcon-yellow.png")}
            />
            <div className="font-extrabold text-4xl drop-shadow-md font-KimjungchulMyungjoBold text-[#0078F080]">
              내밀함
            </div>
          </div>
        </div>
      </div>
      {/*body 1*/}
      <div className="w-full h-[700px] flex flex-col justify-center items-center gap-5">
        <div className="font-bold text-center text-2xl">
          우리가 공유하는
          <br />
          가장 진솔한 이야기
        </div>
        <img
          className="flex items-center"
          src={require("../assets/images/mobile_envelope.png")}
        />

        <div className="font-bold text-center text-xl">
          내밀함은 홍보가 필요한 메일링 서비스 작가와
          <br />
          프라이빗한 소통을 원하는 독자를 연결해주는 <br />
          메일링 서비스 플랫폼이에요.
        </div>
        <div className="w-[300px] h-[160px] bg-gray-50 bg-opacity-70 rounded-[10px]">
          <div className="test-">메일링 서비스란?</div>
          <div className="text-sm">
            독자가 소정의 구독료를 지불하면
            <br />
            구독한 작가로부터 수필과 일기 등을 <br />
            정기적으로 웹메일로 받아볼 수 있는 서비스이다.
            <br />
            등단 작가 뿐만 아니라 아마추어 메일링 작가들도 <br />
            SNS, 블로그 등을 통해 활발히 활동하고 있다.
          </div>
        </div>
      </div>

      {/*body 2*/}
      <div className="w-full h-[700px] flex flex-col">
        <div className="flex flex-col items-center gap-2">
          <div className="  text-blue-400 text-4xl font-bold">
            왜 메일링인가요?
          </div>
          <div className=" text-black text-xl font-bold">
            #행복한고민 #소통 #능동성
          </div>
          <div className=" text-black text-sm font-medium">
            “몇 주차에는 어떤 작품을 어떤 이미지와 함께 전송할지
            <br />
            고민하면서 창작자의 눈 이외에도
            <br />
            기획자, 편집자, 디자이너 등의 시선으로 작품을 볼 수 있었어요.
          </div>
          <div className="t text-black text-[11px] font-medium">
            - 차도하 시인, '목소리' 메일링 서비스 운영{" "}
          </div>
        </div>
      </div>

      {/*footer*/}
      <div className="w-full h-40 py-2 bg-[#DCECFF8F] flex flex-col justify-center self-center items-center">
        <div className="w-4/5 h-full flex flex-col justify-center self-center items-start gap-1">
          <div className="font-bold text-lg text-[#4795F0] font-NotoSerifKR">
            내밀함
          </div>
          <div className="font-NotoSerifKR text-sm text-[#555555D1]">
            서울대학교 웹개발 동아리 멋쟁이사자처럼@SNU <br />
            2023-2 스크럼 프로젝트 <br />
            이수혁, 석재원, 이호준, 조유진
          </div>

          <div className="font-light font-PretendardRegular text-sm text-[#555555D1]">
            ⓒ2023 멋쟁이사자처럼@SNU. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePage;
