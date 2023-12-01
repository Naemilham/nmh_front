import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { subscribe, getAllWriter, signOut } from "../apis/api";
import { getCookie } from "../utils/cookie";

const MailCreatePage = () => {
  const navigate = useNavigate();

  const colors = ["#FFF1BF", "#DCECFF", "#E3DFFD"];
  const borderColors = ["#F5D151D1", "#0078F0", "#932ED0D1"];

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [profileImage, setProfileImage] = useState("");
  const [writerInfo, setWriterInfo] = useState([]);

  const testSubscribe = async () => {
    const response = await subscribe({
      subscribed_user: modalData.user.profile_id,
      subscribing_user: getCookie("profileId"),
      categories_id: null,
    });
    if (response.request.status == 201) {
      alert("구독이 완료되었습니다.");
    } else {
      alert(response.response.data.non_field_errors);
    }
  };

  const profileMap = {
    아름드리25: require("../assets/images/profile_Arumduri.png"),
    오카리나: require("../assets/images/profile_Ocarina.png"),
    체리마루: require("../assets/images/profile_Cherry.png"),
    포와로36: require("../assets/images/profile_Powaro.png"),
    덜어린왕자: require("../assets/images/profile_Little Prince.png"),
    낭만고양이: require("../assets/images/profile_NangmanCat.png"),
    판교굼벵이: require("../assets/images/profile_Pangyo.png"),
    하주봉: require("../assets/images/profile_Hajubong.png"),
  };

  const getWriterData = async () => {
    const writerData = await getAllWriter();
    setWriterInfo(writerData.data);
  };
  useEffect(() => {
    getWriterData();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-[#ECF2FF] to-[#FFF4D2]">
      <div className="flex flex-row justify-center mt-6">
        <div className="w-5/6 h-20 sticky z-50 top-0 bg-white flex flex-row justify-between items-center whitespace-nowrap rounded-xl drop-shadow-lg">
          <div className="w-full h-full pl-10 flex flex-row items-center gap-3">
            <img
              className="h-1/2 drop-shadow-sm"
              src={require("../assets/images/nmhIcon-yellow.png")}
            />
            <div className="flex items-end">
              <div
                className="font-extrabold text-4xl drop-shadow-sm ml-2 font-KimjungchulMyungjoBold text-[#0078F080] cursor-pointer"
                onClick={(e) => {
                  navigate("/");
                }}
              >
                내밀함
              </div>
              <div className="cursor-default text-lg font-semibold font-NotoSerifKR ml-2 text-[#00000099]">
                우리가 공유하는 가장 진솔한 이야기
              </div>
            </div>
          </div>
          <div className="w-max h-full pr-10 flex flex-row items-center gap-5">
            <div
              className="font-black font-PretendardRegular text-lg justify-self-end text-[#0078F080] cursor-pointer"
              onClick={() => signOut()}
            >
              로그아웃
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-row justify-stretch">
        <div className="w-full h-full flex flex-row justify-center items-center">
          {/*tag*/}
          <div className="flex flex-col justify-end">
            <div className="flex flex-col mb-6">
              <div class="w-15 h-[23px]  bg-[#4694F0] drop-shadow-md translate-x-1.5 cursor-pointer"></div>
              <div className="w-15 h-28 border bg-white vertical-text text-center text-lg font-NPSfontBold font-black pl-2 text-[#4694F0] drop-shadow-lg translate-x-1.5 cursor-pointer">
                둘러보기
              </div>
            </div>
            <div className="flex flex-col ml-2 mb-6 hover:-translate-x-2">
              <div class="w-12 h-[23px]  bg-[#7B8086] drop-shadow-md translate-x-2 cursor-pointer"></div>
              <div
                className="w-12 h-28 border bg-white vertical-text text-center text-lg font-extrabold font-NPSfontBold pl-2 text-[#7B8086] drop-shadow-md translate-x-2 cursor-pointer"
                onClick={(e) => {
                  navigate("/subscribelist");
                }}
              >
                나의 작가
              </div>
            </div>
            <div className="flex flex-col ml-2 mb-6 hover:-translate-x-2">
              <div class="w-12 h-[23px]  bg-[#7B8086] drop-shadow-md translate-x-2 cursor-pointer"></div>
              <div
                className="w-12 h-28 border bg-white vertical-text text-center text-lg font-extrabold font-NPSfontBold pl-2 text-[#7B8086] drop-shadow-md translate-x-2 cursor-pointer"
                onClick={() => {
                  window.alert("추후 제공될 기능입니다.");
                }}
              >
                나의 정보
              </div>
            </div>
          </div>
          {/*content*/}
          <div className="bg-white text-black w-3/4 h-5/6 flex flex-col justify-center items-center rounded-lg drop-shadow-2xl gap-5">
            {showModal ? (
              <>
                <div className="w-5/6 h-full flex flex-col justify-center items-center gap-5">
                  <div className="w-full h-[25%] bg-gray-300 rounded-2xl border-2 border-[#F5D151D1] relative">
                    <img
                      src={require("../assets/images/modalBackground.png")}
                      className="w-full h-full object-none rounded-2xl"
                    />
                    <div className="w-[18%] h-[50%] cursor-default text-[#675013] text-3xl font-bold font-NPSfontBold shadow-lg rounded-xl bg-[#FFF1BF] border-2 border-[#F5D151] flex justify-center items-center absolute left-[3%] -bottom-[10%]">
                      {modalData.user.nickname}
                    </div>
                    <img
                      src={profileImage}
                      className="w-[18%] aspect-square rounded-full border-2 border-[#F5D151EB] absolute right-[5%] -bottom-[50%]"
                    />
                  </div>
                  <div className="w-full h-[54%] rounded-2xl flex flex-row justify-between gap-5">
                    <div className="w-[40%] h-full flex flex-col justify-between gap-5">
                      <div className="w-full h-[33%]  bg-[#FEF9E5] rounded-xl border-2 border-[#F5D151D1] text-[#584410DB] text-center text-2xl font-NPSfontBold font-bold flex justify-center items-center">
                        {modalData.self_introduction}
                      </div>
                      <div className="w-full h-[66%] bg-[#FEF9E5] rounded-xl border-2 border-[#F5D151D1] text-[#7C5C0B] text-justify text-[16px] font-NotoSerifKR flex justify-center items-center px-5">
                        {modalData.mailing_introduction}
                      </div>
                    </div>
                    <div className="w-[58%] h-full bg-[#FEF9E5] rounded-xl border-2 border-[#F5D151D1] flex flex-col justify-center items-start px-10 gap-8">
                      <div className="w-[30%] h-[15%] cursor-default bg-[#FFF1BF] rounded-lg border-2 border-[#F5D151D1] text-[#675013] text-xl font-NPSfontBold font-bold flex justify-center items-center">
                        샘플 메일링
                      </div>
                      <div className="w-full h-[70%] text-[#7C5C0B] font-NotoSerifKR text-[16px] line-clamp-[9]">
                        {modalData.example}
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-[15%] h-[8%] bg-[#FFF1BF] shadow-xl rounded-lg border-2 border-[#F5D151D1] text-[#675013] text-xl font-bold font-NPSfontBold flex justify-center items-center self-end"
                    onClick={() => {
                      testSubscribe();
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
                <div className="w-11/12 h-12 cursor-default bg-gray-200 rounded-lg text-[#5C5C5C] text-lg font-semibold font-PretendardRegular flex justify-center items-center">
                  내밀함에서 활동하는 모든 보내는 이들을 만나보세요. 관심있는
                  보내는 이들에 대해 더 알아보고, 메일링을 구독할 수도 있어요.
                </div>
                <div className="w-[90%] h-[480px] pb-8 overflow-y-scroll grid grid-cols-3 auto-rows-[90%] place-items-center gap-y-10">
                  {writerInfo.map((info, idx) => (
                    <div className="w-[90%] h-full bg-white rounded-xl drop-shadow-xl">
                      <div
                        className={`w-full h-3/5 rounded-t-xl bg-[${
                          colors[idx % 3]
                        }] flex justify-center items-center`}
                      >
                        <img
                          className="h-4/5 rounded-full"
                          src={profileMap[info.user.nickname]}
                        />
                      </div>
                      <div className="w-full h-2/5 flex flex-col justify-center px-3">
                        <div className="line-clamp-1 ml-1 text-[#000000aa] text-2xl font-black font-NPSfontBold">
                          {info.user.nickname}
                        </div>
                        <div className="line-clamp-1 ml-1 text-[#00000099] text-[19px] font-[500] font-PretendardRegular">
                          {info.self_introduction}
                        </div>
                        <button
                          className={`w-2/5 h-2/5 bg-[${
                            colors[idx % 3]
                          }] rounded-xl border-1 border-[${
                            borderColors[idx % 3]
                          }] self-end text-lg text-[#00000099] font-NPSfontBold font-extrabold hover:text-[#52565a]`}
                          onClick={() => {
                            setProfileImage(profileMap[info.user.nickname]);
                            setModalData(info);
                            setShowModal(true);
                          }}
                        >
                          더 알아보기
                        </button>
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
