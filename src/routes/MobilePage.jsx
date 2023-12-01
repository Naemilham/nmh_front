import React from "react";
import { useState } from "react";
import { Carousel } from "@material-tailwind/react";

const MobilePage = () => {
  const images = [
    require("../assets/images/carousel1.png"),
    require("../assets/images/carousel2.png"),
  ];
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
      <div className="w-full h-[740px] bg-[#FFF1BF] bg-opacity-70 p-4 flex flex-col justify-center items-center gap-4">
        <div className="font-extrabold text-[#F2BF00] mt-4 text-center text-4xl font-PretendardRegular">
          우리가 공유하는
          <br />
          가장 진솔한 이야기
        </div>
        <img
          className="flex items-center drop-shadow-md"
          src={require("../assets/images/mobile_envelope.png")}
        />

        <div className="text-[16px] text-center font-PretendardRegular ">
          내밀함은 홍보가 필요한 메일링 서비스 작가와
          <br />
          프라이빗한 소통을 원하는 독자를 연결해주는 <br />
          메일링 서비스 플랫폼이에요.
        </div>
        <div className="w-[300px] h-40 bg-gray-50 bg-opacity-70 rounded-[10px] flex flex-col items-center justify-center">
          <div className="text-center text-base justify-center font-bold font-NPSfontBold">
            메일링 서비스란?
          </div>
          <div className="text-center text-sm justify-center font-medium font-PretendardRegular">
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
      <div className="w-full h-[740px] bg-[#DCECFF] bg-opacity-80 flex flex-col p-4 justify-center items-center gap-4">
        <div className="  text-blue-400 text-center text-4xl mt-6 mb-4 font-[900] font-GmarketSansMedium">
          왜 메일링인가요?
        </div>
        <div className="flex flex-col gap-3">
          <div className=" text-black text-center text-xl font-bold font-NPSfontBold">
            #행복한고민 #소통 #능동성
          </div>
          <div className="flex flex-col gap-1">
            <div className=" text-black text-center text-sm font-medium font-PretendardRegular">
              “몇 주차에는 어떤 작품을 어떤 이미지와 함께
              <br />
              전송할지 고민하면서 창작자의 눈 이외에도
              <br />
              기획자, 편집자, 디자이너 등의 시선으로 작품을 볼 수 있었어요.
            </div>
            <div className="text-right text-black text-[11px] font-medium font-PretendardRegular">
              - 차도하 시인, '목소리' 메일링 서비스 운영{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <div className=" text-black text-center text-xl font-bold font-NPSfontBold">
            #편리함 #선택권 #자유도
          </div>
          <div className="flex flex-col gap-1">
            <div className=" text-black text-center text-sm font-medium font-PretendardRegular">
              “내가 찾지 않더라도 제시간에 메일을 통해서 <br />
              원하는 정보를 받아볼 수 있다는 것과 <br />
              자신이 정보의 타임라인과 페이지 등을 <br />
              자유자재로 구성할 수 있다는 것이 매력적이예요”
            </div>
            <div className="text-right text-black text-[11px] font-medium font-PretendardRegular">
              - 이융희, 문화연구자{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <div className=" text-black text-center text-xl font-bold font-NPSfontBold">
            #작은습관 #친근함 #새로움
          </div>
          <div className="flex flex-col gap-1">
            <div className=" text-black text-center text-sm font-medium font-PretendardRegular">
              "아침마다 나를 위해서 메일 앱이 알림을 울려주는 게 좋다. <br />
              괜히 작가와 더 가까워진 것 같은 기분이 드는 것이 <br />
              책과의 차이점이라고 생각한다.""
            </div>
            <div className="text-right text-black text-[11px] font-medium font-PretendardRegular">
              - 박진성, 메일링 서비스 애용자{" "}
            </div>
          </div>
        </div>
      </div>

      {/*body 3*/}
      <div className="w-full h-[860px] bg-[#E3DFFD] bg-opacity-70 flex flex-col p-4 justify-center items-center gap-4">
        <div className="  text-[#9270F7] text-center text-4xl mt-6 mb-4 font-[900] font-GmarketSansMedium">
          왜 내밀함인가요?
        </div>

        <div className="flex flex-col gap-3">
          <div className="w-[301px] h-[215px] bg-white rounded-[20px] flex flex-col items-center justify-center">
            <div className="text-center text-violet-400 text-[45px] font-bold font-PretendardRegular">
              1
            </div>
            <div className="text-center text-violet-400 text-[26px] font-bold font-PretendardRegular">
              메일링 운영을 편리하게!
            </div>
            <div className="text-center text-black text-[13px] font-medium font-PretendardRegular">
              작가님은 창작에만 집중하세요! <br />
              메일 전송과 구독자 관리, 결제 확인 등의
              <br />
              번거로움을 내밀함이 덜어드려요.
              <br />
              글쓰기의 즐거움을 내밀함과 함께 되찾으세요.
            </div>
          </div>
          <div className="w-[301px] h-[215px] bg-white rounded-[20px] flex flex-col items-center justify-center">
            <div className="text-center text-violet-400 text-[45px] font-bold font-PretendardRegular">
              2
            </div>
            <div className="text-center text-violet-400 text-[26px] font-bold font-PretendardRegular">
              작가 탐색을 한 곳에서!
            </div>
            <div className="text-center text-black text-[13px] font-medium font-PretendardRegular">
              새로운 메일링을 구독해보고 싶으셨나요?
              <br />
              블로그, 인스타그램, 네이버 스토어 등을 <br />
              돌아다니는 대신
              <br />
              내일함에서 나의 최애 작가님을 찾아보세요.
            </div>
          </div>
          <div className="w-[301px] h-[215px] bg-white rounded-[20px] flex flex-col items-center justify-center">
            <div className="text-center text-violet-400 text-[45px] font-bold font-PretendardRegular ">
              3
            </div>
            <div className="text-center text-violet-400 text-[26px] font-bold font-PretendardRegular">
              구독 관리를 간단하게!
            </div>
            <div className="text-center text-black text-[13px] font-medium font-PretendardRegular">
              취소하고 싶은 구독이 있지만
              <br />
              작가님 눈치가 보여 유지하고 계신가요?
              <br />
              여러 메일링의 구독료를 한 번에 결제하고 싶으신가요?
              <br />
              내밀함으로 메일링의 즐거움을 더욱 온전히 즐기세요.
            </div>
          </div>
        </div>
      </div>
      {/*body 4*/}
      <div className="w-full h-[860px] bg-[#FFFFFF] bg-opacity-70 flex flex-col p-4 justify-center items-center gap-4">
        <div className="  text-black text-center text-4xl mt-6 mb-4 font-[900] font-GmarketSansMedium">
          지금 내밀함에서는!
        </div>
        <div className="w-full flex flex-row justify-center">
          <Carousel autoplay={true} loop={true} className="w-full">
            {images.map((img) => (
              <div className="w-full h-full flex flex-row justify-center">
                <img src={img} className="object-contain" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="text-center text-black text-lg font-bold font-['DM Sans'] uppercase">
          ▶ 내밀함의 서비스를 직접 체험해보고 싶으신가요?
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
