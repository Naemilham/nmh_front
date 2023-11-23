import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailCreatePage = () => {
  const navigate = useNavigate();

  const colors = ["#FFF1BF", "#DCECFF", "#E3DFFD"];
  const borderColors = ["#F5D151D1", "#0078F0", "#932ED0D1"];

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
              <div class="w-14 h-[23px]  bg-sky-600 drop-shadow-md"></div>
              <div className="w-14 h-28 border bg-white vertical-text text-center text-lg font-bold pl-2 text-sky-600 drop-shadow-md">
                둘러보기
              </div>
            </div>
            <div className="flex flex-col ml-2 mb-6 hover:-translate-x-2">
              <div class="w-12 h-[23px]  bg-[#4694F0] drop-shadow-md translate-x-2"></div>
              <div 
                className="w-12 h-28 border bg-white vertical-text text-center text-lg font-bold pl-2 text-[#4694F0] drop-shadow-md translate-x-2"
                onClick={(e) => {navigate("/subscribelist")}}
              >
                나의 작가
              </div>
            </div>
            <div className="flex flex-col ml-2 mb-6 hover:-translate-x-2">
              <div class="w-12 h-[23px]  bg-[#4694F0] drop-shadow-md translate-x-2"></div>
              <div className="w-12 h-28 border bg-white vertical-text text-center text-lg font-bold pl-2 text-[#4694F0] drop-shadow-md translate-x-2">
                나의 정보
              </div>
            </div>
          </div>
          {/*content*/}
          <div className="bg-white text-black w-3/4 h-5/6 flex flex-col justify-center items-center rounded-lg drop-shadow-xl gap-5">
            <div className="w-11/12 h-12 bg-gray-200 rounded-lg text-[#5C5C5C] text-lg flex justify-center items-center">
              내밀함에서 활동하는 모든 보내는 이들을 만나보세요!  관심있는 보내는 이들을 더 알아보고, 메일링을 구독할 수도 있어요.
            </div>
            <div className="w-[90%] h-[480px] pb-8 overflow-y-scroll grid grid-cols-3 auto-rows-[90%] place-items-center gap-y-10">
                {
                  writerInfo.map((info, idx) => (
                    <div className="w-[90%] h-full bg-white rounded-xl drop-shadow-xl">
                      <div className={`w-full h-3/5 rounded-t-xl bg-[${colors[idx%3]}] flex justify-center items-center`}>
                        <img className="h-4/5" src={info.image}/>
                      </div>
                      <div className="w-full h-2/5 flex flex-col justify-center px-3">
                        <div className="line-clamp-1 text-[#00000099] text-2xl font-bold">
                          {info.name}
                        </div>
                        <div className="line-clamp-1 text-[#00000099] text-lg">
                          {info.description}
                        </div>
                        <button 
                          className={`w-2/5 h-2/5 mt-2 bg-[${colors[idx%3]}] rounded-xl border-2 border-[${borderColors[idx%3]}] self-end text-lg text-[#00000099] font-bold`}
                          onClick={()=>{
                            alert("모달");
                          }}
                        >
                          더 알아보기
                        </button>
                      </div>
                    </div>
                  ))
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailCreatePage;
