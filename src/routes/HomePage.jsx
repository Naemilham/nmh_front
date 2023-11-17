import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";

const HomePage = () => {
  const navigate = useNavigate();
  const images = [
    'https://images.pexels.com/photos/18845325/pexels-photo-18845325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/18783672/pexels-photo-18783672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/18729063/pexels-photo-18729063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ]

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-20 sticky z-50 top-0 bg-white flex flex-row justify-between items-center whitespace-nowrap">
        <div className="w-full h-full pl-10 flex flex-row items-center gap-5">
          <img className="h-1/2" src={require("../assets/images/nmhIcon-yellow.png")} />
          <div className="flex items-end gap-2">
            <div className="font-bold text-4xl text-[#0078F080]">내밀함</div>
            <div className="font-normal text-lg text-[#00000099]">우리가 공유하는 가장 진솔한 이야기</div>
          </div>
        </div>
        <div className="w-max h-full pr-10 flex flex-row items-center gap-5">
          <div
            className="font-bold text-xl text-[#0078F080]"
            onClick={(e) => {navigate("/signin")}}
          >로그인</div>
          <div 
            className="font-bold text-xl text-[#0078F080]"
            onClick={(e) => {navigate("/signup")}}
          >회원가입</div>
        </div>
      </div>

      <div className="w-full h-[500px] bg-[#DCECFF] flex flex-row justify-center">
        <Carousel autoplay={true} loop={true} className="w-2/3 h-[500px]">
          {images.map((img) => (
            <div className="w-full h-full bg-green-300 flex flex-row justify-center">
              <img src={img} className="object-contain"/>
            </div>
          ))}
        </Carousel>
      </div>
      

      <div className="w-full h-72 pt-28 flex flex-col items-center gap-5">
        <p className="text-xl">매일 나의 메일함으로 찾아오는 편지</p>
        <p className="font-bold text-3xl">지금 만나볼 수 있는 타인의 내밀함</p>
      </div>

      <div className="w-full h-[480px] flex flex-row justify-center">
        <div className="w-3/4 h-full flex flex-row justify-center gap-16">
          <div className="w-80 h-80 bg-[#FFF1BF] rounded-2xl flex flex-col justify-center items-center">
            <div className="w-full h-60 px-4 flex flex-col justify-between gap-6">
              <div className="line-clamp-[6] font-medium text-base text-[#3B5266] text-justify">유년의 뜰을 떠난 후 도시에서 보낸, 유년기의 열 곱은 되는 몇십 년 동안에 맛본 인생의 단맛과 쓴맛, 내 몸을 스쳐간 일이라고는 믿어지지 않게 격렬했던 애증과 애환, 허방과 나락, 행운과 기적, 이런 내 인생의 명장면(?)에 반복해서 몰입하다 보면 그렇게 시간이 가버린다.</div>
              <div className="flex flex-row justify-between items-end">
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-xl text-[#304659]">권혁범</div>
                  <div className="font-normal text-lg text-[#555555]">졸업을 앞둔 대학생</div>
                </div>
                <button className="w-28 h-12 bg-[#0078F01A] border-[1px] border-[#0078F0] rounded-lg font-bold text-lg text-[#0078F0]">편지받기</button>
              </div>
            </div>
          </div>

          <div className="w-80 h-80 bg-[#DCECFF] rounded-2xl flex flex-col justify-center items-center">
            <div className="w-full h-60 px-4 flex flex-col justify-between gap-6">
              <div className="line-clamp-[6] font-medium text-base text-[#3B5266] text-justify">어린 날, 내가 누렸던 평화를 생각할 때마다 어린 날의 커다란 상처로부터 일용할 양식, 필요한 물건, 입고 다니던 입성, 그리고 식구들 사이, 집 안 속 가득히 고루 스며 있던 어머니의 입김, 그 따스한 숨결이 어제인 듯 되살아난다. 싸우지 않고 다투지 않고 슬퍼하지 않은 어린 날이 어디 있으랴. 다만 그런 일이 어머니의 입김 속에서 이루어졌기....</div>
              <div className="flex flex-row justify-between items-end">
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-xl text-[#304659]">권혁범</div>
                  <div className="font-normal text-lg text-[#555555]">졸업을 앞둔 대학생</div>
                </div>
                <button className="w-28 h-12 bg-[#0078F01A] border-[1px] border-[#0078F0] rounded-lg font-bold text-lg text-[#0078F0]">편지받기</button>
              </div>
            </div>
          </div>

          <div className="w-80 h-80 bg-[#E3DFFD] rounded-2xl flex flex-col justify-center items-center">
            <div className="w-full h-60 px-4 flex flex-col justify-between gap-6">
              <div className="line-clamp-[6] font-medium text-base text-[#3B5266] text-justify">그럼 진짜 보통사람은 어디 있는 것일까? 과연 있기는 있는 것일까? 보통 사람이란 평균점수처럼 어떤 집단을 대표하고 싶어하는 가공의 숫자일 뿐, 실지로 존재하는 것은 아닐지도 모른다.</div>
              <div className="flex flex-row justify-between items-end">
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-xl text-[#304659]">권혁범</div>
                  <div className="font-normal text-lg text-[#555555]">졸업을 앞둔 대학생</div>
                </div>
                <button className="w-28 h-12 bg-[#0078F01A] border-[1px] border-[#0078F0] rounded-lg font-bold text-lg text-[#0078F0]">편지받기</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-40 bg-[#DCECFF8F] flex flex-col justify-center items-center">
        <div className="w-3/4 h-24 px-16 flex flex-row justify-between items-end">
          <div className="flex flex-col gap-1">
            <div className="font-bold text-xl text-[#4795F0]">내밀함</div>
            <div className="font-sans font-medium text-sm text-[#555555D1]">
              서울대학교 웹개발 동아리 멋쟁이 사자처럼@SNU <br/>
              2023-2 스크럼 프로젝트 <br/>
              이수혁, 석재원, 이호준, 조유진
            </div>
          </div>
          <div className="h-full flex flex-col justify-end">
            <div className="font-normal text-sm text-[#555555D1]">Copyright SNULION2023. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
