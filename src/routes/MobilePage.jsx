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
        <div className="font-medium text-center text-sm">
          구독만 하면 내가 원하는 작가의 글이 택배처럼 배송돼요.
        </div>
        <div className="font-medium text-center text-xs">
          ✅ 내밀함은 홍보가 필요한 메일링 서비스 작가와 <br />
          프라이빗한 소통을 원하는 독자를 연결해주는 <br />
          메일링 서비스 플랫폼이에요.
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
