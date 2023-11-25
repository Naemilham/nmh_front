import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailCreatePage = () => {
  const navigate = useNavigate();

  const colors = ["#FFF1BF", "#DCECFF", "#E3DFFD"];
  const borderColors = ["#F5D151D1", "#0078F0", "#932ED0D1"];

  const [showModal, setShowModal] = useState(false)
  const [modalInfo, setModalInfo] = useState({})

  const [writerInfo, setWriterInfo] = useState([
    {
      name: "CA피바라",
      description: "우주 여행을 하는 카피바라",
      image: require("../assets/images/profilePhoto1.png"),
    },
    {
      name: "DA람쥐",
      description: "도토리좋아도토리",
      image: require("../assets/images/profilePhoto2.png"),
    },
    {
      name: "엄청이름이긴토끼끼",
      description: "넘어가는 부분은 ...으로 처리하기기기기기기",
      image: require("../assets/images/profilePhoto3.png"),
    },
    {
      name: "CA피바라",
      description: "우주 여행을 하는 카피바라",
      image: require("../assets/images/profilePhoto1.png"),
    },
    {
      name: "CA피바라",
      description: "우주 여행을 하는 카피바라",
      image: require("../assets/images/profilePhoto1.png"),
    },
    {
      name: "CA피바라",
      description: "우주 여행을 하는 카피바라",
      image: require("../assets/images/profilePhoto1.png"),
    },
    {
      name: "CA피바라",
      description: "우주 여행을 하는 카피바라",
      image: require("../assets/images/profilePhoto1.png"),
    },
  ]);

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
              <div class="w-14 h-[23px]  bg-[#7B8086] drop-shadow-md"></div>
              <div className="w-14 h-28 border bg-white vertical-text text-center text-lg font-bold pl-2 text-[#7B8086] drop-shadow-md">
                둘러보기
              </div>
            </div>
            <div className="flex flex-col ml-2 mb-6 hover:-translate-x-2">
              <div class="w-12 h-[23px]  bg-[#7B8086] drop-shadow-md translate-x-2"></div>
              <div 
                className="w-12 h-28 border bg-white vertical-text text-center text-lg font-bold pl-2 text-[#7B8086] drop-shadow-md translate-x-2"
                onClick={(e) => {navigate("/subscribelist")}}
              >
                나의 작가
              </div>
            </div>
            <div className="flex flex-col ml-2 mb-6 hover:-translate-x-2">
              <div class="w-12 h-[23px]  bg-[#7B8086] drop-shadow-md translate-x-2"></div>
              <div className="w-12 h-28 border bg-white vertical-text text-center text-lg font-bold pl-2 text-[#7B8086] drop-shadow-md translate-x-2">
                나의 정보
              </div>
            </div>
          </div>
          {/*content*/}
          <div className="bg-white text-black w-3/4 h-5/6 flex flex-row justify-center items-center rounded-lg drop-shadow-xl">
            <div className="w-5/6 h-full flex flex-col justify-center items-center gap-5">
              <div className="w-full h-[25%] bg-gray-300 rounded-2xl border-2 border-[#F5D151D1] relative">
                <img src={require("../assets/images/modalBackground.png")} className="w-full h-full object-none rounded-2xl"/>
                <div className="w-[18%] h-[50%] rounded-xl bg-[#FFF1BF] border-2 border-[#F5D151] absolute left-0 bottom-0">
                  권혁범
                </div>
                <img src={require("../assets/images/hyukbeom.jpg")} className="w-[30%] h-[30%] aspect-square rounded-full border-2 border-[#F5D151EB] absolute right-0 bottom-0" />
              </div>
              <div className="w-full h-[54%] rounded-2xl flex flex-row justify-between gap-5">
                <div className="w-[40%] h-full flex flex-col justify-between gap-8">
                    <div className="w-full h-[33%] bg-[#FEF9E5] rounded-lg border-2 border-[#F5D151D1] italic text-xl font-bold flex justify-center items-center">
                      “우주를 여행하는 카피바라”
                    </div>
                    <div className="w-full h-[66%] bg-[#FEF9E5] rounded-lg border-2 border-[#F5D151D1] text-justify flex justify-center items-center px-3">
                      안녕하세요. 대학 졸업을 앞두고 있는 25살 권혁범이라고 합니다.
                      저의 매일매일을 기억하고 공유하기 위해 글쓰기를 시작하게 되었습니다.
                      주말을 제외한 매일 자정, 저의 글이 여러분의 메일함을 찾아갈 예정입니다.
                      부디 즐겁게 읽어주세요.
                    </div>
                </div>
                <div className="w-[58%] h-full bg-[#FEF9E5] rounded-lg border-2 border-[#F5D151D1] flex flex-col justify-center items-start px-10 gap-8">
                  <div className="w-[30%] h-[20%] bg-[#FFF1BF] rounded-lg border-2 border-[#665109] flex justify-center items-center">
                    샘플 메일링
                  </div>
                  <div className="w-full h-[60%]">
                    멋사에는 서비스를 직접 기획하고 개발하는 프로젝트를 진행하는 팀들이 있습니다. 2학기가 시작되면서 여러 팀들이 아이디어를 발전 시키고 있습니다.
                    그 중 한 팀에서 제 메일링과 관련된 서비스를 제안해주었습니다.
                    제 메일을 구독해주는 학교 선배가 아이디어를 제안해주었다고 해요.
                    이 프로젝트의 기획을 듣는데 괜히 마음이 설렜습니다.
                    무언가를 꾸준히하고 있으면 주변 사람들에게 예상치 못한 새로운 영향을 미칠 수 있다는 걸 직접 눈으로 보게 된 경험이었습니다.
                  </div>
                </div>
              </div>
              <div className="w-[20%] h-[10%] bg-[#FFF1BF] rounded-lg border-2 border-[#665109] self-end">
                구독하기
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailCreatePage;
