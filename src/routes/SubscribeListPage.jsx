import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailCreatePage = () => {
  const navigate = useNavigate();

  const [subscribeInfo, setSuvscribeInfo] = useState([
    {
      name: "CA피바라",
      image: require("../assets/images/profilePhoto1.png"),
      period: 20,
    },
    {
      name: "DA람쥐",
      image: require("../assets/images/profilePhoto2.png"),
      period: 12410294812,
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
              <div 
                className="w-14 h-28 border bg-white vertical-text text-center text-lg font-bold pl-2 text-sky-600 drop-shadow-md"
                onClick={(e) => {navigate("/writerlist")}}
              >
                둘러보기
              </div>
            </div>
            <div className="flex flex-col ml-2 mb-6">
              <div class="w-12 h-[23px]  bg-[#4694F0] drop-shadow-md"></div>
              <div className="w-12 h-28 border bg-white vertical-text text-center text-lg font-bold pl-2 text-[#4694F0] drop-shadow-md">
                나의 작가
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
          <div className="bg-white text-black w-3/4 h-5/6 flex flex-col justify-center items-center rounded-lg drop-shadow-xl gap-5">
            <div className="w-11/12 h-12 bg-gray-200 rounded-lg text-[#5C5C5C] text-lg flex justify-center items-center">
                구독 중인 보내는 이들의 목록을 확인하고, 구독 여부를 변경할 수 있습니다.
            </div>
            <div className="w-[90%] h-[480px] pb-8 overflow-y-scroll grid grid-cols-3 auto-rows-[70%] place-items-center gap-y-10">
                {
                  subscribeInfo.map((info) => (
                    <div className="w-[90%] h-full bg-white rounded-xl drop-shadow-xl">
                      <div className="w-full h-3/5 bg-gray-200 rounded-t-xl flex justify-center items-center">
                        <img className="h-4/5" src={info.image}/>
                      </div>
                      <div className="w-full h-2/5 flex flex-col justify-center px-3">
                        <div className="line-clamp-1 text-[#00000099] text-2xl font-bold">
                          {info.name}
                        </div>
                        <div className="line-clamp-1 text-[#00000099] text-lg">
                          내밀함에서 함께한 지 <span className="font-bold">{info.period}일 째</span>
                        </div>
                        <div className="h-2/5 mt-2 flex flex-row justify-between items-end">
                            <img 
                                src={require("../assets/images/unsubscribe.png")}
                                className="w-[13%] h-4/5"
                                onClick={()=>{
                                    alert("물어보는 창");
                                }}
                            />
                            <button 
                                className="w-2/5 h-full bg-gray-200 rounded-xl border-2 border-gray-400 self-end text-lg text-[#00000099] font-bold"
                                onClick={()=>{
                                    alert("모달");
                                }}
                            >
                                더 알아보기
                            </button>
                        </div>
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
