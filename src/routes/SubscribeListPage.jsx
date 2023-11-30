import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailCreatePage = () => {
  const navigate = useNavigate();

  const colors = ["#FFF1BF", "#DCECFF", "#E3DFFD"];
  const borderColors = ["#F5D151D1", "#0078F0", "#932ED0D1"];

  const [showModal, setShowModal] = useState(false);
  const [subscribeInfo, setSubscribeInfo] = useState([
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
            <div className="font-black font-PretendardRegular text-lg justify-self-end text-[#0078F080]">
              로그아웃
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-row justify-stretch">
        <div className="w-full h-full flex flex-row justify-center items-center">
          {/*tag*/}
          <div className="flex flex-col justify-end">
            <div className="flex flex-col ml-2 mb-6 hover:-translate-x-2">
              <div class="w-12 h-[23px]  bg-[#7B8086] drop-shadow-md translate-x-2"></div>
              <div
                className="w-12 h-28 border bg-white vertical-text text-center text-lg font-extrabold font-NPSfontBold pl-2 text-[#7B8086] drop-shadow-md translate-x-2"
                onClick={(e) => {
                  navigate("/writerlist");
                }}
              >
                둘러보기
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div class="w-15 h-[23px]  bg-[#4694F0] drop-shadow-md translate-x-1.5"></div>
              <div className="w-15 h-28 border bg-white vertical-text text-center text-lg font-NPSfontBold font-black pl-2 text-[#4694F0] drop-shadow-lg translate-x-1.5">
                나의 작가
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
          <div className="bg-white text-black w-3/4 h-5/6 flex flex-col justify-center items-center rounded-lg drop-shadow-xl gap-5">
            {showModal ? (
              <>
                <div className="w-5/6 h-full flex flex-col justify-center items-center gap-5">
                  <div className="w-full h-[25%] bg-gray-300 rounded-2xl border-2 border-[#F5D151D1] relative">
                    <img
                      src={require("../assets/images/modalBackground.png")}
                      className="w-full h-full object-none rounded-2xl"
                    />
                    <div className="w-[18%] h-[50%] text-[#675013] text-3xl font-bold font-NPSfontBold shadow-lg rounded-xl bg-[#FFF1BF] border-2 border-[#F5D151] flex justify-center items-center absolute left-[3%] -bottom-[10%]">
                      권혁범
                    </div>
                    <img
                      src={require("../assets/images/hyukbeom.jpg")}
                      className="w-[18%] aspect-square rounded-full border-2 border-[#F5D151EB] absolute right-[5%] -bottom-[50%]"
                    />
                  </div>
                  <div className="w-full h-[54%] rounded-2xl flex flex-row justify-between gap-5">
                    <div className="w-[40%] h-full flex flex-col justify-between gap-5">
                      <div className="w-full h-[33%] bg-[#FEF9E5] rounded-lg border-2 border-[#F5D151D1] text-[#584410DB] text-center text-xl font-NotoSerifKR font-bold flex justify-center items-center">
                        “누구도 강요한 적 없는 <br />
                        매일의 약속을 지키기 위해”
                      </div>
                      <div className="w-full h-[66%] bg-[#FEF9E5] rounded-lg border-2 border-[#F5D151D1] text-[#7C5C0B] text-justify text-base font-PretendardRegular font-medium flex justify-center items-center px-5">
                        안녕하세요. 대학 졸업을 앞두고 있는 25살 권혁범이라고
                        합니다. 저의 하루하루를 기억하고 공유하기 위해 글쓰기를
                        시작하게 되었습니다. <br /> 주말을 제외한 매일 자정,
                        저의 글이 여러분의 메일함을 찾아갈 예정입니다. 부디
                        즐겁게 읽어주세요.
                      </div>
                    </div>
                    <div className="w-[58%] h-full bg-[#FEF9E5] rounded-lg border-2 border-[#F5D151D1] flex flex-col justify-center items-start px-10 gap-8">
                      <div className="w-[30%] h-[15%] bg-[#FFF1BF] rounded-lg border-2 border-[#F5D151D1] text-[#675013] text-xl font-NPSfontBold font-bold flex justify-center items-center">
                        샘플 메일링
                      </div>
                      <div className="w-full h-[70%] text-[#7C5C0B] font-NotoSerifKR">
                        멋사에는 서비스를 직접 기획하고 개발하는 프로젝트를
                        진행하는 팀들이 있습니다. 2학기가 시작되면서 여러 팀들이
                        아이디어를 발전시키고 있습니다.
                        <br />
                        그 중 한 팀에서 제 메일링과 관련된 서비스를
                        제안해주었습니다. 제 메일을 구독해주는 학교 선배가
                        아이디어를 제안해주었다고 해요.
                        <br />이 프로젝트의 기획을 듣는데 괜히 마음이
                        설렜습니다. 무언가를 꾸준히하고 있으면 주변 사람들에게
                        예상치 못한 새로운 영향을 미칠 수 있다는 걸 직접 눈으로
                        보게 된 경험이었습니다.
                        <br />
                        오늘의 일이, 그리고 주변인들이 잘 보고 있다고 건네는
                        우호적인 말이, 또 이 메일을 읽으며 사이가 돈독해지는
                        그런 경험들이, 메일을 준비하고 보내는 이 순간에 위로가
                        됩니다.
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-[15%] h-[10%] bg-[#FFF1BF] shadow-xl rounded-lg border-2 border-[#F5D151D1] text-[#675013] text-xl font-bold font-NPSfontBold flex justify-center items-center self-end"
                    onClick={() => {
                      window.alert("구독이 완료되었습니다.");
                    }}
                  >
                    구독하기
                  </button>
                </div>
                <button
                  className="text-[#EAC33BF0] text-3xl font-bold absolute right-[2%] top-[2%]"
                  onClick={() => setShowModal(false)}
                >
                  X
                </button>
              </>
            ) : (
              <>
                <div className="w-11/12 h-12 bg-gray-200 rounded-lg text-[#5C5C5C] text-lg font-semibold font-PretendardRegular flex justify-center items-center">
                  구독 중인 보내는 이들의 목록을 확인하고, 구독 상태를 변경할 수
                  있어요.
                </div>
                <div className="w-[90%] h-[480px] pb-8 overflow-y-scroll grid grid-cols-3 auto-rows-[90%] place-items-center gap-y-10">
                  {subscribeInfo.map((info, idx) => (
                    <div className="w-[90%] h-full bg-white rounded-xl drop-shadow-xl">
                      <div
                        className={`w-full h-3/5 rounded-t-xl bg-[${
                          colors[idx % 3]
                        }] flex justify-center items-center`}
                      >
                        <img className="h-4/5" src={info.image} />
                      </div>
                      <div className="w-full h-2/5 flex flex-col justify-center px-3">
                        <div className="line-clamp-1 ml-1 text-[#000000aa] text-2xl font-black font-NPSfontBold">
                          {info.name}
                        </div>
                        <div className="line-clamp-1 text-[#00000099] text-lg">
                          {info.description}
                        </div>
                        <div className="flex justify-between mt-4 mx-1">
                          <img
                            className="drop-shadow-sm"
                            src={require("../assets/images/unsubscribe.png")}
                            onClick={() => {
                              alert("구독이 취소되었습니다.");
                            }}
                          />
                          <button
                            className={`w-2/5 h-14 bg-[${
                              colors[idx % 3]
                            }] rounded-xl border-2 border-[${
                              borderColors[idx % 3]
                            }] self-end text-lg text-[#00000099] font-bold`}
                            onClick={() => {
                              setShowModal(true);
                            }}
                          >
                            더 알아보기
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailCreatePage;
