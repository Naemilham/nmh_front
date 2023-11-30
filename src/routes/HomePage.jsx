import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import { getCookie } from "../utils/cookie";
import { signOut, getUserInfo } from "../apis/api";

const HomePage = () => {
  const navigate = useNavigate();
  const images = [
    require("../assets/images/carousel1.png"),
    require("../assets/images/carousel2.png"),
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(""); 
  const [isWriter, setIsWriter] = useState(false);

  const getInfo = async () =>  {
    const profileId = getCookie("profileId");
    const response = await getUserInfo();
    if(response.request.status === 200){
      setIsWriter(response.data.user.is_writer);
    }
    console.log(response);
  }

  useEffect(() => {
    const loggedIn = getCookie("access_token") ? true : false;
    setIsLoggedIn(loggedIn);
    if(loggedIn){
      getInfo();
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-20 sticky z-50 top-0 bg-white flex flex-row justify-between items-center whitespace-nowrap drop-shadow-[0_10px_10px_rgba(0,120,240,0.2)]">
        <div className="w-full h-full pl-10 flex flex-row items-center gap-5">
          <img
            className="h-1/2"
            src={require("../assets/images/nmhIcon-yellow.png")}
          />
          <div className="flex items-end">
            <div className="font-extrabold text-4xl drop-shadow-sm ml-2 font-KimjungchulMyungjoBold text-[#0078F080]">
              내밀함
            </div>
            <div className="text-lg font-semibold font-NotoSerifKR ml-2 text-[#00000099]">
              우리가 공유하는 가장 진솔한 이야기
            </div>
          </div>
        </div>
        <div className="w-max h-full pr-10 flex flex-row items-center gap-5">
          { isLoggedIn ?
            <>
              <div
                className="font-black font-PretendardRegular text-lg justify-self-end text-[#0078F080]"
                onClick={(e) => {
                  navigate("/signup");
                }}
              >
                회원가입
              </div>
              <div
                className="font-black font-PretendardRegular text-lg justify-self-end text-[#0078F080]"
                onClick={(e) => {
                  navigate("/signin");
                }}
              >
                로그인
              </div>
            </> : 
            <>
              <div
                className="font-black font-PretendardRegular text-lg justify-self-end text-[#0078F080]"
                onClick={(e) => {
                  isWriter ? navigate("/mailcreate") : navigate("/writerlist")
                }}
              >
                {isWriter ? "워크스페이스" : "마이페이지"}
              </div>
              <div
                className="font-black font-PretendardRegular text-lg justify-self-end text-[#0078F080]"
                onClick={(e) => {
                  signOut();
                }}
              >
                로그아웃
              </div>
            </>
          }
          
        </div>
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

      <div className="w-full h-60 pt-16 flex flex-col items-center gap-4">
        <p className="text-xl font-NotoSerifKR">
          매일 나의 메일함으로 찾아오는 편지
        </p>
        <p className="font-extrabold text-4xl font-NotoSerifKR">
          지금 만나볼 수 있는 타인의 내밀함
        </p>
      </div>

      <div className="w-full h-[420px] flex flex-row justify-center">
        <div className="w-5/6 h-full flex flex-row justify-center gap-6">
          <div className="w-80 h-80 bg-[#FFF1BF] rounded-2xl flex flex-col justify-center items-center">
            <div className="w-full h-70 px-4 flex flex-col justify-between gap-6">
              <div className="line-clamp-[7] font-medium font-NotoSerifKR text-base text-[#3B5266] text-justify">
                저는 ‘친함’과 ‘편함’이 구분되는 두 개의 축이라고 생각합니다.
                친한데 편하지 않은 사람이 있을수도, 편한데 친하지 않은 사람이
                있을 수도 있다고 생각합니다. 제게 ‘친한’ 사람은 최근에 오랜
                시간을 함께 보낸 사람입니다. 같이 수업을 들었을 수도 있고,
                동아리에서 자주 얼굴을 마주쳤을 수도 있겠죠. 서로의 소식을
                궁금해하고, 물어보고, 알아가면서 친밀해진 사람들이 있습니다.
                서로의 정보나 생각들이 잘 동기화되어있는 사람들이, 친한
                사람이라고 할 수 있겠네요.
              </div>
              <div className="flex flex-col justify-between items-end pr-1">
                <div className="font-extrabold font-NPSfontBold text-[22px] text-end text-[#304659]">
                  권혁범
                </div>
                <div className="font-semibold font-PretendardRegular text-end text-[#555555ee]">
                  졸업을 앞둔 대학생
                </div>
              </div>
            </div>
          </div>

          <div className="w-80 h-80 bg-[#DCECFF] rounded-2xl flex flex-col justify-center items-center">
            <div className="w-full h-70 px-4 flex flex-col justify-between gap-6">
              <div className="line-clamp-[7] font-medium font-NotoSerifKR text-base text-[#3B5266] text-justify">
                언젠가는 지구를 떠나 새로운 생명체를 만날 수 있을까요? 어린 시절
                우주비행사 카피바라가 주인공인 공상 과학 동화를 표지가 닳도록
                읽었습니다. 돌이켜 생각해보니 나를 천문학 연구의 길로 이끈 건
                동화책이었네요. 어머니의 아파트를 정리하다 창고에서 잊고 지냈던
                그 책을 발견했습니다.
              </div>
              <div className="flex flex-col justify-between items-end pr-1">
                <div className="font-extrabold font-NPSfontBold text-[22px] text-end text-[#304659]">
                  CA피바라
                </div>
                <div className="font-semibold font-PretendardRegular text-end text-[#555555ee]">
                  우주 여행을 하는 카피바라
                </div>
              </div>
            </div>
          </div>

          <div className="w-80 h-80 bg-[#E3DFFD] rounded-2xl flex flex-col justify-center items-center">
            <div className="w-full h-70 px-4 flex flex-col justify-between gap-6">
              <div className="line-clamp-[7] font-medium font-NotoSerifKR text-base text-[#3B5266] text-justify">
                어제는 S전자 지원 마감일이었다. 제출 버튼을 누르고 며칠간 못 잔
                잠을 몰아서 잤다. 일어나자마자 채용공고 사이트를 켜 다음으로
                준비해야 할 기업을 확인하고, 취준 오픈채팅방에 새벽동안 쌓인
                카톡을 읽으며 초조함을 느낀다. 지원과 탈락을 반복하는 취업준비는
                끝나지 않는 시험과도 같다.
              </div>
              <div className="flex flex-col justify-between items-end pr-1">
                <div className="font-extrabold font-NPSfontBold text-[22px] text-end text-[#304659]">
                  은지98
                </div>
                <div className="font-semibold font-PretendardRegular text-end text-[#555555ee]">
                  취업이 너무 하고 싶은 사람
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-40 bg-[#DCECFF8F] flex flex-col justify-center items-center">
        <div className="w-3/4 h-24 px-16 flex flex-row justify-between items-end">
          <div className="flex flex-col gap-1">
            <div className="font-bold text-xl text-[#4795F0] font-NotoSerifKR">
              내밀함
            </div>
            <div className="font-NotoSerifKR text-sm text-[#555555D1]">
              서울대학교 웹개발 동아리 멋쟁이사자처럼@SNU <br />
              2023-2 스크럼 프로젝트 <br />
              이수혁, 석재원, 이호준, 조유진
            </div>
          </div>
          <div className="h-full flex flex-col justify-end">
            <div className="font-light font-PretendardRegular text-sm text-[#555555D1]">
              ⓒ2023 멋쟁이사자처럼@SNU. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
