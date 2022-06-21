import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
// import { useWindowScroll, useWindowSize } from "react-use";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { isMobile } from "react-device-detect";
// import { formatPhoneNumber } from "./utils/StringUtils";
import { useTranslation } from "react-i18next";
// import { useAlert } from "react-alert";
import page1bg from "./images/1page/bg.png";
import page1img from "./images/1page/img1.png";

// interface SceneInfo {
//   height: number;
//
//   onScroll(percent: number, dom: SceneDOM): void;
// }

// type SceneDOM = Scene1Dom | Scene2Dom | Scene3Dom;

// interface Scene1Dom {
//   appDown: HTMLDivElement | null;
// }
//
// interface Scene2Dom {
// }
//
// interface Scene3Dom {
// }

/**
 * 화면크기에 맞는 씬을 생성한다
 * @param {number} windowHeight 브라우저 높이
 * @return {Array<SceneInfo>}
 */
// function generatePageInfos(windowHeight: number): Array<SceneInfo> {
//   const ret: Array<SceneInfo> = [];
//
//   // page1
//   ret.push({
//     height: windowHeight,
//     onScroll(percent: number, dom: Scene1Dom) {
//     },
//   });
//   // page2
//   ret.push({
//     height: windowHeight,
//     onScroll(percent: number, dom: Scene1Dom) {
//     },
//   });
//   // page3
//   ret.push({
//     height: windowHeight,
//     onScroll(percent: number, dom: Scene1Dom) {
//     },
//   });
//   return ret;
// }

/**
 * 앱 진입점
 * @constructor
 */
function App() {
  const pageWrap = useRef<HTMLDivElement>(null);
  const scene1Section = useRef<HTMLDivElement>(null);

  // const { height: windowHeight } = useWindowSize();
  // const windowHeight = window.innerHeight;
  // const maxWindowHeight = useRef(0);
  // const prevScrollY = useRef(0);
  // const { y: scrollY } = useWindowScroll();
  // window.scrollDirection = prevScrollY.current < scrollY ? "down" : "up";
  // prevScrollY.current = scrollY;
  // const [sceneInfos, setSceneInfos] = useState<Array<SceneInfo>>([]);
  // const [pageHeight, setPageHeight] = useState(0);
  const lastPageMove = useRef(0);
  const touchStartXY = useRef<[Number, Number]>([-1, -1]);
  const [currentPage, setCurrentPage] = useState(0);
  const [potentialUsers, setPotentialUsers] = useState('0');
  const [totalDownloads, setTotalDownloads] = useState('0');
  const { t } = useTranslation();
  // const alert = useAlert();

  // 사전 신청자 수
  useEffect(() => {
    const numOfPotentialUsers = 12865;
    setPotentialUsers(numOfPotentialUsers.toString().padStart(5, '0'));
  }, []);

  // 누적 다운로드 수
  useEffect(() => {
    const numOfTotalDownloads = 4321;
    setTotalDownloads(numOfTotalDownloads.toString().padStart(5, '0'));
  }, []);

  // 휠 이벤트 핸들링
  const handleWheelEvent = (e: WheelEvent) => {
    if (Date.now() - lastPageMove.current < 500 ) return;
    lastPageMove.current = Date.now();

    if (e.deltaY > 0) {
      setCurrentPage((prev) => prev + 1);
    } else {
      if (currentPage == 0) return;
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleTouchStartEvent = (e: TouchEvent) => {
    touchStartXY.current = [e.touches[0].clientX, e.touches[0].clientY];
  }

  const handleTouchMoveEvent = (e: TouchEvent) => {
    if (Date.now() - lastPageMove.current < 500 ) return;
    const y: number = touchStartXY.current.at(1) as number || 0;

    if (y - e.touches[0].clientY < -50) {
      if (currentPage == 0) return;
      lastPageMove.current = Date.now();
      setCurrentPage((prev) => prev - 1);
    }

    if (y - e.touches[0].clientY > 50) {
      lastPageMove.current = Date.now();
      setCurrentPage((prev) => prev + 1);
    }
  }

  // 휠, 터치 이벤트 등록
  useEffect(() => {
    window.addEventListener('wheel', handleWheelEvent);
    window.addEventListener('touchstart', handleTouchStartEvent);
    window.addEventListener('touchmove', handleTouchMoveEvent);
    return () => {
      window.removeEventListener('wheel', handleWheelEvent);
      window.removeEventListener('touchstart', handleTouchStartEvent);
      window.removeEventListener('touchmove', handleTouchMoveEvent);
    }
  }, [currentPage]);

  // 페이지 이동 핸들링
  useEffect(() => {
    if (currentPage < 0) {
      setCurrentPage(0);
    }
    console.log(currentPage);
  }, [currentPage]);

  // 페이지 정보 초기화
  // useEffect(() => {
  //   if (maxWindowHeight.current < windowHeight) {
  //     maxWindowHeight.current = windowHeight;
  //     setSceneInfos(generatePageInfos(windowHeight));
  //   }
  // }, [windowHeight]);

  // 전체 페이지 높이 설정
  // useEffect(() => {
  //   setPageHeight(
  //     sceneInfos
  //       .map((it) => it.height)
  //       .reduce(
  //         (previousValue, currentValue) => previousValue + currentValue,
  //         0
  //       )
  //   );
  // }, [sceneInfos]);

  // 현재 스크롤 위치에 보이는 페이지 정보 계산 및 이벤트 발생.
  // if (sceneInfos.length != 0) {
  //   let currentPage = 0;
  //   let tempScrollY = scrollY;
  //   while (tempScrollY > 0) {
  //     tempScrollY -= sceneInfos[currentPage].height;
  //     if (tempScrollY >= 0) {
  //       currentPage += 1;
  //     }
  //   }
  //
  //   const currentPageInfo = sceneInfos[currentPage];
  //   let currentPagePercent =
  //     tempScrollY == 0
  //       ? 0
  //       : (tempScrollY + currentPageInfo.height) / currentPageInfo.height;
  //   if (scrollY < 0) {
  //     currentPagePercent = 0;
  //   }
  //
  //   if (currentPageInfo) {
  //     switch (currentPage) {
  //       case 0:
  //         currentPageInfo.onScroll(currentPagePercent, {
  //           appDown: scene1AppDown.current,
  //         } as Scene1Dom);
  //         break;
  //       case 1:
  //         currentPageInfo.onScroll(currentPagePercent, {
  //         } as Scene2Dom);
  //         break;
  //       case 2:
  //         currentPageInfo.onScroll(currentPagePercent, {
  //         } as Scene3Dom);
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // }

  // type FormValues = {
  //   phone: string;
  // };

  // const { register, handleSubmit, watch, setValue } = useForm<FormValues>();

  // let phoneNumber = watch("phone", "");
  // phoneNumber = phoneNumber.replaceAll("-", "");
  // phoneNumber = phoneNumber.replace(/(^\d{3})([0-9]+)([0-9]{4})/, "$1-$2-$3");
  // phoneNumber = formatPhoneNumber(phoneNumber);
  //
  // useEffect(() => {
  //   setValue("phone", phoneNumber);
  // }, [phoneNumber]);

  // const onSubmit = (data: FormValues) => {
  //   data.phone = data.phone.replaceAll("-", "");
  //   if (data.phone.length != 11) {
  //     alert.show(t("home:message.checkLen"));
  //     return;
  //   }
  //
  //   if (!data.phone.startsWith("010")) {
  //     alert.show(t("home:message.not010"));
  //     return;
  //   }
  //   axios
  //     .post("https://api.lnd.toany.app/pu/reg", data, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((res) => {
  //       if (res.data.code) alert.show(t("home:message.already"));
  //       else alert.show(t("home:message.reg complete"));
  //     })
  //     .catch((e) => {
  //       alert.show("에러는 너굴맨이 처리했다구!");
  //       console.error(e);
  //     });
  // };

  return (
    <>
      <Header fontColor={'white'}/>
      <div ref={pageWrap} className="w-screen h-full transition-transform ease-in-out duration-500" style={{transform: `translateY(-${currentPage * innerHeight}px)`}}>
        <section ref={scene1Section} className="w-screen h-full">
          <div className="sticky block top-0 w-screen bg-white" style={{height: innerHeight}}>
            <div className="relative flex items-center justify-center max-w-[100vw] w-screen h-full">
              <div className={`absolute invisible md:visible top-0 w-full h-full`} style={{backgroundImage: `url(${page1bg})`}}/>
              <div className={`absolute visible md:invisible top-0 w-full h-full`}>
                <div className={`absolute w-full h-full bg-black opacity-60`}/>
                <img className={`absolute left-1/2 -translate-x-1/2 w-[45vh] h-auto -z-10 bottom-0`} src={page1img} alt=""/>
              </div>
              <div className={`absolute w-screen md:w-1/2 mt-0 md:mt-24 lg:mt-32 left-0 top-[15%] md:top-1/3 text-center transition-opacity duration-150 ease-in-out`}>
                <div className="font-bold text-6xl lg:text-7xl md:text-6xl text-white tracking-wide lg:leading-snug scale-x-[85%] md:scale-x-100 tracking-normal" dangerouslySetInnerHTML={{
                  __html: t("home:page1.appDownTitle")
                }}>
                </div>
              </div>
              {/*모바일 시작*/}
              <div className={`absolute visible md:invisible top-[35%] text-white text-4xl font-bold scale-x-[85%]`}>
                우리 같이 <span className={`text-[#FD0071]`}>연애</span>해
              </div>
              <div className={`absolute visible md:invisible bottom-0 bg-white w-[95vw] px-10 py-4`}>
                <div className={`text-gray-700 scale-x-[85%] origin-left leading-[1rem]`}>사전 신청자 수</div>
                <div className={`font-bold text-2xl scale-x-[85%] origin-left leading-[1.5rem]`}>&nbsp;{new Intl.NumberFormat().format(Number.parseInt(potentialUsers))}</div>
              </div>
              {/*모바일 끝*/}

              {/*가로형 시작*/}
              <div className={`absolute invisible md:visible w-screen md:w-1/2 right-0 top-[20%] text-center transition-opacity duration-150 ease-in-out`}>
                <div className={`text-white text-5xl font-bold mb-8`}>
                  사전 신청자 수
                </div>
                <div className={`flex flex-row justify-center gap-2`}>
                  {potentialUsers.split('').map((v, i) => {
                    return (<div key={i} className={`w-20 h-24 bg-white rounded-xl text-5xl leading-[6rem] font-bold`}>
                      {v}
                    </div>);
                  })}
                  <div className={`text-white font-bold text-5xl self-end`}>명</div>
                </div>
                <div className={`text-white text-5xl font-bold mb-8 mt-32`}>
                  누적 다운로드 수
                </div>
                <div className={`flex flex-row justify-center gap-2`}>
                  {totalDownloads.split('').map((v, i) => {
                    return (<div key={i} className={`w-20 h-24 bg-white rounded-xl text-5xl leading-[6rem] font-bold`}>
                      {v}
                    </div>);
                  })}
                  <div className={`text-white font-bold text-5xl self-end`}>명</div>
                </div>
              </div>
              <svg className="absolute invisible md:visible bottom-16 w-10 -translate-x-1/2 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
              {/*가로형 끝*/}
              {/*하단 버튼 시작*/}
              <button className="absolute bottom-24 md:bottom-32 rounded-full bg-black text-white text-3xl px-20 md:px-24 py-5 md:py-7 mt-7 drop-shadow-lg scale-x-[85%] md:scale-x-100 origin-center">
                {t("home:page1.appDownload")}
              </button>
              {/*하단 버튼 끝*/}
            </div>
          </div>
        </section>
        <section className="w-screen h-full">
          <div className="sticky top-0 h-screen w-screen bg-red-500">
            <div className="relative w-screen h-screen">
              <div className="absolute top-0 w-screen h-screen background">

                {/*<img*/}
                {/*  className="absolute sm:w-auto md:w-1/2 sm:max-w-[50vh] left-1/2 h-auto top-[20vh] -translate-x-1/2 opacity-0 transition-all duration-1000"*/}
                {/*  ref={scene2Human1}*/}
                {/*  src={require("./images/2page/human 2.png")}*/}
                {/*  alt="human"*/}
                {/*/>*/}
                {/*<img*/}
                {/*  className="absolute sm:w-auto md:w-1/2 sm:max-w-[50vh] left-1/2 h-auto top-[20vh] -translate-x-1/2 opacity-0 transition-all duration-1000 lg:-translate-x-full"*/}
                {/*  ref={scene2Human2}*/}
                {/*  src={require("./images/3page/human 3.png")}*/}
                {/*  alt="human2"*/}
                {/*/>*/}
                {/*<div*/}
                {/*  ref={scene2Dim}*/}
                {/*  className="absolute w-screen h-screen bg-black transition-opacity duration-500 opacity-60 !opacity-0"*/}
                {/*/>*/}
                {/*<div*/}
                {/*  ref={scene2Description}*/}
                {/*  className="absolute w-fit font-bold text-5xl md:text-6xl !leading-snug text-white top-1/2 left-1/2 lg:left-3/4 -translate-x-1/2 translate-y-1/4 transition-all duration-500 opacity-0"*/}
                {/*>*/}
                {/*  <div>{t("home:page2.description1")}</div>*/}
                {/*  <div>{t("home:page2.description2")}</div>*/}
                {/*</div>*/}
                {/*<div*/}
                {/*  ref={scene2Event}*/}
                {/*  className="absolute w-fit top-1/2 left-1/2 lg:left-3/4 lg:pr-16 -translate-x-1/2 -translate-y-1/2 duration-500 opacity-0"*/}
                {/*>*/}
                {/*  <div className="w-screen lg:w-auto font-bold text-5xl md:text-6xl text-white text-center lg:text-right">*/}
                {/*    {t("home:page2.eventTitle")}*/}
                {/*  </div>*/}
                {/*  <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center mt-8">*/}
                {/*    <form className="h-12" onSubmit={handleSubmit(onSubmit)}>*/}
                {/*      <input*/}
                {/*        className="drop-shadow-xl h-full px-6 box-border w-44 md:mr:12 rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md"*/}
                {/*        type="tel"*/}
                {/*        placeholder="010-0000-0000"*/}
                {/*        maxLength={13}*/}
                {/*        {...register("phone")}*/}
                {/*      />*/}
                {/*      <button className="font-bold text-white px-6 h-full bg-gradient-to-b from-[#298BFD] to-[#3982FD] drop-shadow-lg rounded-tr-md rounded-br-md">*/}
                {/*        SIGN UP*/}
                {/*      </button>*/}
                {/*    </form>*/}
                {/*    <button className="font-bold w-fit md:w-auto mt-6 md:mt-0 ml-1.5 bg-white p-3 px-6 text-[#035FF8] drop-shadow-xl">*/}
                {/*      LEARN MORE*/}
                {/*    </button>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </section>
        {/*<section className="w-screen" style={{ height: sceneInfos[2]?.height }}>*/}
        {/*  <div className="relative w-screen h-screen">*/}
        {/*    <div className="absolute w-screen h-[200vh] top-0">*/}
        {/*      <div className="relative w-screen h-full">*/}
        {/*        <div className="youtube-video-container">*/}
        {/*          <iframe*/}
        {/*            className="youtube-video"*/}
        {/*            src="https://www.youtube.com/embed/wDU6Y1PNAt8?autoplay=1&mute=1&loop=1&controls=0&rel=0&iv_load_policy=3"*/}
        {/*            title="YouTube video player"*/}
        {/*            frameBorder="0"*/}
        {/*            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
        {/*            allowFullScreen*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*        <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-screen h-full">*/}
        {/*          <div style={{ height: (sceneInfos[2]?.height || 0) / 2 }} />*/}
        {/*          <div ref={scene3Dim} className="absolute top-0 left-0 w-screen h-full bg-black transition-opacity duration-500 opacity-60 !opacity-0" />*/}
        {/*          <div className="flex flex-col items-center justify-center min-w-[30vw] p-3 bg-black z-10">*/}
        {/*            <input*/}
        {/*              className="w-full p-3"*/}
        {/*              type="text"*/}
        {/*              placeholder={t("home:page3.inputIdPlaceholder")}*/}
        {/*            />*/}
        {/*            <input*/}
        {/*              className="w-full p-3 mt-4"*/}
        {/*              type="password"*/}
        {/*              placeholder={t("home:page3.inputPasswordPlaceholder")}*/}
        {/*            />*/}
        {/*            <div className="mt-3 ml-auto">*/}
        {/*              <button className="mr-4 text-white">*/}
        {/*                {t("home:page3.signup")}*/}
        {/*              </button>*/}
        {/*              <button className="text-white">*/}
        {/*                {t("home:page3.findPassword")}*/}
        {/*              </button>*/}
        {/*            </div>*/}
        {/*            <button className="w-full text-white text-center mt-3 p-3 bg-[#1E2F59]">*/}
        {/*              {t("home:page3.signIn")}*/}
        {/*            </button>*/}
        {/*            <hr className="w-full my-6 border-gray-500" />*/}
        {/*            <div className="text-white">*/}
        {/*              {t("home:page3.snsSignInDescription")}*/}
        {/*            </div>*/}
        {/*            <div className="flex justify-evenly w-full my-6">*/}
        {/*              <button className="max-w-[18%] rounded-full overflow-hidden">*/}
        {/*                <img*/}
        {/*                  src={require("./images/3page/sns_kakao.png")}*/}
        {/*                  alt="kakao login"*/}
        {/*                />*/}
        {/*              </button>*/}
        {/*              <button className="max-w-[18%] rounded-full overflow-hidden">*/}
        {/*                <img*/}
        {/*                  src={require("./images/3page/sns_google.png")}*/}
        {/*                  alt="google login"*/}
        {/*                />*/}
        {/*              </button>*/}
        {/*              <button className="max-w-[18%] rounded-full overflow-hidden">*/}
        {/*                <img*/}
        {/*                  src={require("./images/3page/sns_apple.png")}*/}
        {/*                  alt="apple login"*/}
        {/*                />*/}
        {/*              </button>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
      </div>
    </>
  );
}

export default App;
