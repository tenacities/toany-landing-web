import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ci from "./images/ci.png";
import songData from "./data/songData";

/**
 * 댄스 태-보 앱 진입점
 * @constructor
 */
function App() {
  const [footerPanel, setFooterPanel] = useState(0); // 0: noting open, 1: korean info open, 2: eng info open
  const [filterValue, setFilterValue] = useState<string>();

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value.toLowerCase());
  };

  const [filteredSongData, setFilteredSongData] = useState(songData);
  useEffect(() => {
    setFilteredSongData(
      !filterValue
        ? songData
        : songData.filter(
            (it) =>
              it.singerKor.includes(filterValue) ||
              it.singerEng.includes(filterValue) ||
              it.songKor.includes(filterValue) ||
              it.songEng.includes(filterValue)
          )
    );
  }, [filterValue]);

  return (
    <>
      <header>
        <img src={Ci} alt="" className={`mx-auto w-40 h-32`} />
      </header>
      <div
        className={`w-full text-center text-2xl font-GangwonEduPowerExtraBoldA`}
      >
        영문 곡 이름을 찾으시나요?
      </div>
      <div
        className={`w-full text-center text-sm font-GangwonEduPowerExtraBoldA text-gray-300`}
      >
        [듀엣 태보]의 영문 곡 검색 기능입니다
      </div>
      <div className={`w-full px-4 my-4`}>
        <input
          className={`w-full px-4 font-GangwonEduPowerExtraBoldA h-10 border-b-blue-500 bg-[#35E2B1] focus:bg-[#35CAA0] rounded-full outline-none placeholder-[#33b98f]`}
          type="text"
          placeholder={`곡 또는 가수 이름을 입력해 주세요.`}
          onChange={onFilterChange}
        />
      </div>
      <div className={`w-full px-4`}>
        {filteredSongData.length !== 0 ? (
          filteredSongData.map((it) => {
            return (
              <div
                key={it.id}
                className={`w-full border-2 border-emerald-200 mb-4 rounded-md p-4 font-GangwonEduPowerExtraBoldA`}
              >
                <div>ID: {it.id}</div>
                <div>한글 가수명: {it.singerKor}</div>
                <div>한글 노래명: {it.songKor}</div>
                <div>영문 가수명: {it.singerEng}</div>
                <div>영문 노래명: {it.songEng}</div>
              </div>
            );
          })
        ) : (
          <div
            className={`w-full text-center font-GangwonEduPowerExtraBoldA text-xl`}
          >
            검색 결과가 없습니다 ㅠㅠ
          </div>
        )}
      </div>

      <div className="flex lg:hidden relative w-full h-full px-4 mt-12">
        <div
          className={`justify-center items-start w-full h-full bg-white box-content`}
        >
          <div className="flex flex-col w-full justify-start items-start">
            <div className="flex flex-row w-full">
              <div>
                <img
                  className="h-12"
                  src={require("./images/tenacities.png")}
                />
                <img className="h-12 mt-4" src={require("./images/logo.png")} />
              </div>
              <div className="ml-6 text-gray-500">
                <div className="font-bold">(주)테너시티즈</div>
                <div className="font-bold">TenaCities Co., Ltd</div>
                <Link
                  className="font-bold text-sm text-gray-800"
                  to={"/policy/privacy"}
                >
                  개인정보처리방침
                </Link>
                <div className="text-sm mt-1">Social FnB Metaverse ToAny</div>
                <div className="text-sm">Served By Tenacities</div>
              </div>
            </div>
            <div
              className="mt-4"
              onClick={() =>
                footerPanel === 1 ? setFooterPanel(0) : setFooterPanel(1)
              }
            >
              (주)테너시티즈 사업자정보{" "}
              <svg
                className={`${
                  footerPanel === 1 ? "rotate-180" : ""
                } inline w-5 ml-2 transition-all`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </div>
            <div
              className={`${
                footerPanel === 1 ? "h-32 mt-4" : "h-0"
              } ml-4 text-gray-500 text-sm overflow-hidden transition-all duration-300`}
            >
              <div>(주)테너시티즈 | 대표자명 : 마진형</div>
              <div>서울 구로구 디지털로 34길 55 코오롱싸이언스밸리 2차</div>
              <div>B101 웍앤코. E16</div>
              <div>사업자번호 : 516-88-02307</div>
              <div>고객센터, 제휴문의, 이메일 문의 :</div>
              <div>toany.official@toany.app</div>
            </div>
            <div
              className=""
              onClick={() =>
                footerPanel === 2 ? setFooterPanel(0) : setFooterPanel(2)
              }
            >
              TenaCities Co., Ltd Business info{" "}
              <svg
                className={`${
                  footerPanel === 2 ? "rotate-180" : ""
                } inline w-5 ml-2`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </div>
            <div
              className={`${
                footerPanel === 2 ? "h-32" : "h-0"
              } ml-4 mt-4 text-gray-500 text-sm overflow-hidden transition-all duration-300`}
            >
              <div>TenaCities Co., Ltd | CEO : Jhonny Cloche Ma</div>
              <div>E-16, B101, 55, Digital-ro 34-gil, Guro-gu, Seoul,</div>
              <div>Republic of Korea</div>
              <div>Business registration No. : 516-88-02307</div>
              <div>mail: toany.official@toany.app</div>
            </div>
          </div>
        </div>
      </div>
      {/*  가로형 시작 */}
      <div className="hidden lg:flex relative w-full h-full px-4 mt-12">
        <div className={`justify-center items-start w-full h-full bg-white`}>
          <div className="flex flex-row w-full justify-start items-start">
            <div>
              <img src={require("./images/tenacities.png")} />
              <img src={require("./images/logo.png")} className="mt-4" />
            </div>
            <div>
              <div className="ml-6 text-gray-500 text-sm">
                <div className="text-md font-bold mt-2">(주)테너시티즈</div>
                <div className="text-md font-bold">TenaCities Co., Ltd</div>
                <Link
                  className="font-bold text-gray-800"
                  to={"/policy/privacy"}
                >
                  개인정보처리방침
                </Link>
                <div className="mt-8">Social FnB Metaverse ToAny</div>
                <div>Served By Tenacities</div>
              </div>
            </div>
            <div className="ml-4 text-gray-500 text-sm">
              <div>(주)테너시티즈 | 대표자명 : 마진형</div>
              <div>서울 구로구 디지털로 34길 55 코오롱싸이언스밸리 2차</div>
              <div>B101 웍앤코. E16</div>
              <div>사업자번호 : 516-88-02307</div>
              <div>고객센터, 제휴문의, 이메일 문의 :</div>
              <div>toany.official@toany.app</div>
            </div>
            <div className="ml-4 text-gray-500 text-sm">
              <div>TenaCities Co., Ltd | CEO : Jhonny Cloche Ma</div>
              <div>E-16, B101, 55, Digital-ro 34-gil, Guro-gu, Seoul,</div>
              <div>Republic of Korea</div>
              <div>Business registration No. : 516-88-02307</div>
              <div>mail: toany.official@toany.app</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
