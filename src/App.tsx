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
import page21 from "./images/2page/1.png";
import page22 from "./images/2page/2.png";
import page23 from "./images/2page/3.png";
import page2social from "./images/2page/social.png";
import page2fnb from "./images/2page/fnb.jpg";
import page3bg from "./images/3page/bg.png";
import page3video from "./images/3page/bg.mp4";
import page4Mbti from "./images/4page/mbti.png";
import page5Character from "./images/5page/character.png";
import { Link } from 'react-router-dom';

/**
 * 앱 진입점
 * @constructor
 */
function App() {
  const pageWrap = useRef<HTMLDivElement>(null);
  const page5WrapDesktop = useRef<HTMLDivElement>(null);
  const page5WrapMobile = useRef<HTMLDivElement>(null);

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
  const [headerFontColor, setHeaderFontColor] = useState<'white' | 'black'>('white');
  const [page3Rotation, setPage3Rotation] = useState(0);
  const [pageScrollY, setPageScrollY] = useState(0);
  const { t } = useTranslation();
  const [footerHeight, setFooterHeight] = useState(200);
  const [footerPanel, setFooterPanel] = useState(0); // 0: noting open, 1: korean info open, 2: eng info open
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

    let elem = e.target as HTMLElement | null;
    while (true) {
      if (elem === null) break;
      if (elem.classList.contains('ignoreScroll')) return;
      if (elem.id === 'root') break;
      elem = elem.parentElement;
    }

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

    let elem = e.target as HTMLElement | null;
    while (true) {
      if (elem === null) break;
      if (elem.classList.contains('ignoreScroll')) return;
      if (elem.id === 'root') break;
      elem = elem.parentElement;
    }

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
      return;
    }
    if (6 < currentPage) {
      setCurrentPage(6);
      return;
    }

    if (currentPage == 5)
      setPageScrollY(4 * innerHeight);

    if (currentPage == 6)
      setPageScrollY(4 * innerHeight + footerHeight);

    if (0 <= currentPage && currentPage <= 4)
      setPageScrollY(currentPage * innerHeight);

  }, [currentPage, footerHeight]);

  // 마지막페이지 좌우 스크롤
  useEffect(() => {
    console.log(currentPage);
    if (currentPage == 4) {
      page5WrapMobile?.current?.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      page5WrapDesktop?.current?.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    if (currentPage == 5) {
      page5WrapMobile?.current?.scrollTo({top: 0, left: innerWidth, behavior: 'smooth'});
      page5WrapDesktop?.current?.scrollTo({top: 0, left: innerWidth, behavior: 'smooth'});
    }
  }, [currentPage]);

  // 헤더 색상 변경
  useEffect(() => {
    if (currentPage == 1 || currentPage == 3) {
      setHeaderFontColor('black');
    } else {
      setHeaderFontColor('white');
    }
  }, [currentPage]);

  // page3 문구 로테이션
  useEffect(() => {
    if (currentPage == 2) {
      const interval = setInterval(() => {
        setPage3Rotation(prev => {
          return (prev + 1) % 5;
        });
      }, 2000);
      return () => {
        clearInterval(interval);
      }
    }
  }, [currentPage]);

  useEffect(() => {
    if (footerPanel == 0)
      setFooterHeight(200);
    else
      setFooterHeight(400);
  }, [footerPanel]);

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
      <Header fontColor={headerFontColor}/>
      <div ref={pageWrap} className="w-screen h-full transition-transform ease-in-out duration-500" style={{transform: `translateY(-${pageScrollY}px)`}}>
        <section className="w-screen h-full">
          <div className="sticky block top-0 w-screen bg-white" style={{height: innerHeight}}>
            <div className="relative flex items-center justify-center max-w-[100vw] w-screen h-full">
              <div className={`absolute invisible md:visible top-0 w-full h-full`} style={{backgroundImage: `url(${page1bg})`}}/>
              <div className={`absolute visible md:invisible top-0 w-full h-full`}>
                <div className={`absolute w-full h-full bg-black opacity-60`}/>
                <img className={`absolute left-1/2 -translate-x-1/2 w-[45vh] h-auto -z-10 bottom-0`} src={page1img} alt=""/>
              </div>
              {/*모바일 시작*/}
              <div className={`absolute lg:hidden w-screen md:w-1/2 mt-0 md:mt-24 lg:mt-32 left-0 top-[15%] md:top-1/3 text-center transition-opacity duration-150 ease-in-out`}>
                <div className="font-bold text-5xl lg:text-7xl md:text-6xl text-white tracking-wide lg:leading-snug scale-x-[85%] md:scale-x-100 tracking-normal" style={{fontFamily:"Cafe24 Ohsquare"}} dangerouslySetInnerHTML={{
                  __html: t("home:page1.appDownTitle")
                }}>
                </div>
              </div>
              <div className={`absolute visible md:invisible top-[35%] text-white text-4xl font-bold scale-x-[85%]`}>
                우리 같이 <span className={`text-[#FD0071]`}>연애</span>해
              </div>
              <div className={`absolute visible md:invisible bottom-0 bg-white w-[95vw] px-10 py-4`}>
                <div className={`text-gray-700 scale-x-[85%] origin-left leading-[1rem]`}>사전 신청자 수</div>
                <div className={`font-bold text-2xl scale-x-[85%] origin-left leading-[1.5rem]`}>&nbsp;{new Intl.NumberFormat().format(Number.parseInt(potentialUsers))}</div>
              </div>
              {/*모바일 끝*/}

              {/*가로형 시작*/}
              <div className={`hidden lg:absolute w-screen md:w-1/2 mt-0 md:mt-24 lg:mt-32 left-0 top-[15%] md:top-1/3 text-center transition-opacity duration-150 ease-in-out`}>
                <div className="font-bold text-6xl lg:text-7xl md:text-6xl text-white tracking-wide lg:leading-snug scale-x-[85%] md:scale-x-100 tracking-normal" dangerouslySetInnerHTML={{
                  __html: t("home:page1.appDownTitle")
                }}>
                </div>
              </div>
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
          <div className="sticky block top-0 w-screen bg-white" style={{height: innerHeight}}>
            <div className="relative w-screen h-full pt-14">
              {/* 모바일 시작 */}
              <div className={`visible lg:invisible w-full`}>
                <div className={`mt-10 text-black text-center font-bold text-5xl scale-x-[85%]`}>사전신청 혜택</div>
                <img className={`w-32 mt-20`} src={page21} alt=""/>
                <img className={`w-24 mt-24 ml-auto`} src={page22} alt=""/>
                <img className={`w-16 mt-24`} src={page23} alt=""/>
                <div className={`absolute top-1/4 w-full text-center text-4xl font-bold scale-x-[85%] leading-relaxed`}>배달비 무료<br/>아이템 66% 할인<br/>전용 휘장</div>
                <button className={`absolute left-1/2 -translate-x-1/2 bottom-24 bg-[#2FB7F8] text-white text-2xl rounded-full px-20 py-5 scale-x-[85%]`} style={{wordBreak: 'keep-all'}}>사전신청</button>
              </div>
              {/* 모바일 끝 */}
              {/* 가로형 시작 */}
              <div className={`invisible lg:visible`}>
                <div className={`absolute top-[10%] left-1/2 -translate-x-1/2 font-bold text-6xl text-black`}>사전신청 이벤트</div>
                <div className={`absolute top-0 left-0 flex flex-row w-full h-full items-center justify-center gap-8`}>
                  <div className={`text-white text-2xl font-bold bg-black rounded-xl text-center pt-2 pb-4 px-6`}>아이템 66% 할인
                    <div className={`flex flex-row gap-4 mt-2`}>
                      <div className={`relative bg-white p-4 rounded-xl text-black w-56`}>
                        <img className={`absolute top-0 left-0 w-full h-full opacity-60`} src={page2social} alt=""/>
                        <span className={`absolute left-0 w-full`}>&lt; Social &gt;</span>
                        <span className={`absolute top-1/2 -translate-y-1/2 left-0 w-full`}>운명의 상대에게는 DM을 보내보자</span>
                      </div>
                      <div className={`relative bg-white p-4 rounded-xl text-black w-56`}>
                        <img className={`absolute top-0 left-0 w-full h-full opacity-60`} src={page2fnb} alt=""/>
                        <span className={`absolute left-0 w-full`}>&lt; Fnb &gt;</span>
                        <span className={`absolute top-1/2 -translate-y-1/2 left-0 w-full`}>우리끼리만 식사 하고 싶을 땐 Private table을 펼쳐보자</span>
                      </div>
                      <div className={`bg-white p-4 rounded-xl text-black w-56`}>&lt; Metaverse &gt;<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
                    </div>
                  </div>
                  <div className={``}>
                    <div className={`bg-black rounded-xl text-center w-56 text-white font-bold text-2xl h-full self-stretch`}>배달비 무료 <br/><br/><br/><br/><br/><br/></div>
                    <div className={`bg-black rounded-xl text-center w-56 text-white font-bold text-2xl h-full self-stretch mt-8`}>전용 휘장 <br/><br/><br/><br/><br/><br/></div>
                  </div>
                </div>
                <button className="absolute left-1/2 -translate-x-1/2 bottom-24 md:bottom-32 rounded-full bg-black text-white text-3xl px-20 md:px-24 py-5 md:py-7 mt-7 drop-shadow-lg scale-x-[85%] md:scale-x-100 origin-center">
                  사전신청
                </button>
                <svg className="absolute invisible md:visible bottom-16 w-10 left-1/2 -translate-x-1/2 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
              </div>
              {/* 가로형 끝 */}
            </div>
          </div>
        </section>
        <section className="w-screen h-full">
          <div className="sticky block top-0 w-screen bg-white" style={{height: innerHeight}}>
            <div className="relative w-screen h-full">
              {/* 모바일 시작 */}
              <div className={`lg:hidden w-full h-full pt-24 bg-center`} style={{backgroundImage: `url('${page3bg}')`}}>
                <video className={`absolute top-0 w-full h-full object-cover`} autoPlay muted loop playsInline preload={'auto'} src={page3video}/>
                <div className={`absolute top-0 w-full h-full bg-black opacity-60`}/>
                <div className={`absolute top-[10%] left-1/2 -translate-x-1/2 w-full text-white text-center font-bold text-4xl scale-x-[85%] leading-snug`}>&ldquo;색청&rdquo;<br/>대화의 뉘앙스를<br/>색으로 느껴본 적 있나요?</div>
                <div className={`absolute top-[40%] left-1/2 -translate-x-1/2 text-center w-full opacity-0 ease-in-out duration-1000 ${page3Rotation == 0 ? '!opacity-100': ''}`}>
                  <div className={`text-5xl text-[#FF3534] font-bold scale-x-[85%] mb-12`}>기쁨</div>
                  <div className={`text-4xl text-[#eb4c4c] font-bold scale-x-[85%] leading-snug`}>ㅋㅋㅋㅋ <br/>오늘 진짜 재밌는 일 <br/>있었어요</div>
                </div>
                <div className={`absolute top-[40%] left-1/2 -translate-x-1/2 text-center w-full opacity-0 ease-in-out duration-1000 ${page3Rotation == 1 ? '!opacity-100': ''}`}>
                  <div className={`text-5xl text-[#366EFF] font-bold scale-x-[85%] mb-12`}>분노</div>
                  <div className={`text-4xl text-[#6590ff] font-bold scale-x-[85%] leading-snug`}>아니 이건 진짜 <br/>너무 불합리한 거 <br/>아닌가요?</div>
                </div>
                <div className={`absolute top-[40%] left-1/2 -translate-x-1/2 text-center w-full opacity-0 ease-in-out duration-1000 ${page3Rotation == 2 ? '!opacity-100': ''}`}>
                  <div className={`text-5xl text-[#FF9102] font-bold scale-x-[85%] mb-12`}>불안</div>
                  <div className={`text-4xl text-[#ffb643] font-bold scale-x-[85%] leading-snug`}>이번에 F뜨면 <br/>장학금 짤리는데.. <br/>ㅜㅜ</div>
                </div>
                <div className={`absolute top-[40%] left-1/2 -translate-x-1/2 text-center w-full opacity-0 ease-in-out duration-1000 ${page3Rotation == 3 ? '!opacity-100': ''}`}>
                  <div className={`text-5xl text-[#85FE2A] font-bold scale-x-[85%] mb-12`}>슬픔</div>
                  <div className={`text-4xl text-[#b5ff65] font-bold scale-x-[85%] leading-snug`}>4년 동안 한 번도 <br/>싸운 적 없던 <br/>여친인데..</div>
                </div>
                <div className={`absolute top-[40%] left-1/2 -translate-x-1/2 text-center w-full opacity-0 ease-in-out duration-1000 ${page3Rotation == 4 ? '!opacity-100': ''}`}>
                  <div className={`text-5xl text-[#FFD200] font-bold scale-x-[85%] mb-12`}>당황</div>
                  <div className={`text-4xl text-[#fade61] font-bold scale-x-[85%] leading-snug`}>미팅 나갔는데 <br/>전남친이 앉아있더라고요 <br/>당황...</div>
                </div>
                <button className={`absolute left-1/2 -translate-x-1/2 bottom-14 bg-[#2FB7F8] text-white text-2xl rounded-full px-20 py-5 scale-x-[85%]`} style={{wordBreak: 'keep-all'}}>사전신청</button>
                <svg className="absolute invisible md:visible bottom-16 w-10 left-1/2 -translate-x-1/2 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
              </div>
              {/* 모바일 끝 */}
              {/* 가로형 시작 */}
              <div className={`hidden lg:block w-full h-full bg-center`} style={{backgroundImage: `url('${page3bg}')`}}>
                <video className={`absolute top-0 w-full h-full object-cover`} autoPlay muted loop playsInline preload={'auto'} src={page3video}/>
                <div className={`absolute top-0 w-full h-full bg-black opacity-60`}/>
                <div className={`absolute top-[15%] w-full left-1/2 -translate-x-1/2 text-white text-center font-bold text-5xl leading-snug`}>&ldquo;색청&rdquo;<br/>대화의 뉘앙스를 색으로 느껴본 적 있나요?</div>
                <div className={`absolute flex flex-row justify-center items-center gap-32 top-[45%] text-center w-full opacity-0 ease-in-out duration-1000 ${page3Rotation == 0 ? '!opacity-100': ''}`}>
                  <div className={`text-6xl text-[#FF3534] font-bold`}>기쁨</div>
                  <div className={`text-4xl text-[#eb4c4c] font-bold leading-snug`}>ㅋㅋㅋㅋ 오늘 진짜 재밌는 일 <br/>있었어요</div>
                </div>
                <div className={`absolute flex flex-row justify-center items-center gap-32 top-[45%] text-center w-full opacity-0 ease-in-out duration-1000 ${page3Rotation == 1 ? '!opacity-100': ''}`}>
                  <div className={`text-6xl text-[#366EFF] font-bold`}>분노</div>
                  <div className={`text-4xl text-[#6590ff] font-bold leading-snug`}>아니 이건 진짜 <br/>너무 불합리한 거 아닌가요?</div>
                </div>
                <div className={`absolute flex flex-row justify-center items-center gap-32 top-[45%] text-center w-full opacity-0 ease-in-out duration-1000 ${page3Rotation == 2 ? '!opacity-100': ''}`}>
                  <div className={`text-6xl text-[#FF9102] font-bold`}>불안</div>
                  <div className={`text-4xl text-[#ffb643] font-bold leading-snug`}>이번에 F뜨면 <br/>장학금 짤리는데..ㅜㅜ</div>
                </div>
                <div className={`absolute flex flex-row justify-center items-center gap-32 top-[45%] text-center w-full opacity-0 ease-in-out duration-1000 ${page3Rotation == 3 ? '!opacity-100': ''}`}>
                  <div className={`text-6xl text-[#85FE2A] font-bold`}>슬픔</div>
                  <div className={`text-4xl text-[#b5ff65] font-bold leading-snug`}>4년 동안 한 번도 <br/>싸운 적 없던 여친인데..</div>
                </div>
                <div className={`absolute flex flex-row justify-center items-center gap-32 top-[45%] text-center w-full opacity-0 ease-in-out duration-1000 ${page3Rotation == 4 ? '!opacity-100': ''}`}>
                  <div className={`text-6xl text-[#FFD200] font-bold`}>당황</div>
                  <div className={`text-4xl text-[#fade61] font-bold leading-snug`}>미팅 나갔는데 <br/>전남친이 앉아있더라고요 <br/>당황...</div>
                </div>
                <button className="absolute left-1/2 -translate-x-1/2 bottom-24 md:bottom-32 rounded-full bg-black text-white text-3xl px-20 md:px-24 py-5 md:py-7 mt-7 drop-shadow-lg scale-x-[85%] md:scale-x-100 origin-center">
                  사전신청
                </button>
                <svg className="absolute invisible md:visible bottom-16 w-10 left-1/2 -translate-x-1/2 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
              </div>
              {/* 가로형 끝 */}
            </div>
          </div>
        </section>
        <section className="w-screen h-full">
          <div className="sticky block top-0 w-screen bg-white" style={{height: innerHeight}}>
            <div className="relative w-screen h-full">
              {/* 모바일 시작 */}
              <div className={`block lg:hidden w-full pt-14`}>
                <div className={`mt-5 text-black text-center font-bold text-2xl`}>MBTI는 과학이다</div>
                <img className={`mt-5 px-8 w-[70%] mx-auto`} src={page4Mbti} alt=""/>
                <div className={`px-4`}>
                  <div className={`flex flex-row items-center mt-4`}>
                    <svg className={`inline-block w-6`} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"/></svg>
                    <span className={`font-bold text-lg`}>나의 MBTI</span>
                  </div>
                  <div className={`text-md`}>내 MBTI를 설정하여 타인에게 소개합니다.</div>
                  <div className={`flex flex-row items-center mt-4`}>
                    <svg className={`inline-block w-6`} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"/></svg>
                    <span className={`font-bold text-lg`}>평균 MBTI</span>
                  </div>
                  <div className={`text-md`}>AnyGora에 속해있는 유저들의 평균 MBTI를 출력, 원하는 대화에 쉽게 참여할 수 있습니다.</div>
                  <div className={`flex flex-row items-center mt-4`}>
                    <svg className={`inline-block w-6`} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"/></svg>
                    <span className={`font-bold text-lg`}>남이 보는 내 MBTI</span>
                  </div>
                  <div className={`text-md`}>타인이 보는 내 모습은? 다른 사람들이 평가하는 내 MBTI를 알아볼 수 있습니다.</div>
                </div>
                <button className={`absolute left-1/2 -translate-x-1/2 bottom-10 bg-[#2FB7F8] text-white text-2xl rounded-full px-20 py-4 scale-x-[85%]`} style={{wordBreak: 'keep-all'}}>사전신청</button>
              </div>
              {/* 모바일 끝 */}
              {/* 가로형 시작 */}
              <div className={`hidden lg:flex justify-center items-center w-full h-full bg-[#FFF1BA]`}>
                <div className={`flex flex-row justify-center items-center mx-auto gap-10 mb-12`}>
                  <div>
                    <div className={`text-6xl font-bold mb-16`}>MBTI는 과학이다</div>
                    <img className={`w-[40vw]`} src={page4Mbti} alt=""/>
                  </div>
                  <div className={`flex flex-col gap-4`}>
                    <div className={`bg-white p-2 pr-8 rounded-lg`}>
                      <div className={`font-bold`}>나의 MBTI</div>
                      내 MBTI를 설정하여 타인에게 소개 합니다.<br/><br/><br/>
                    </div>
                    <div className={`bg-white p-2 pr-8 rounded-lg`}>
                      <div className={`font-bold`}>평균 MBTI</div>
                      AnyGora에 속해있는 유저들의 평균 MBTI를<br/>출력, 원하는 대화에 쉽게 참여 할 수 있습니다.<br/><br/>
                    </div>
                    <div className={`bg-white p-2 pr-8 rounded-lg`}>
                      <div className={`font-bold`}>남이 보는 내 MBTI</div>
                      타인이 보는 내 모습은? 다른 사람들이 평가하는<br/>내 MBTI를 알아볼 수 있습니다.<br/><br/>
                    </div>
                  </div>
                </div>
                <button className="absolute left-1/2 -translate-x-1/2 bottom-24 md:bottom-18 rounded-full bg-black text-white text-3xl px-20 md:px-16 py-5 md:py-4 mt-7 drop-shadow-lg scale-x-[85%] md:scale-x-100 origin-center">
                  사전신청
                </button>
                <svg className="absolute invisible md:visible bottom-12 w-10 left-1/2 -translate-x-1/2 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
              </div>
              {/* 가로형 끝 */}
            </div>
          </div>
        </section>
        <section className="w-screen h-full">
          <div className="sticky block top-0 w-screen bg-white" style={{height: innerHeight}}>
            <div className="relative w-screen h-full">
              {/* 모바일 시작 */}
              <div className={`block lg:hidden w-full pt-20`}>
                <div ref={page5WrapMobile} className={`flex flex-row w-full overflow-x-scroll pointer-events-none`} style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                  <div className={`min-w-[100vw]`}>
                    <div className={`ml-5 mr-auto text-black font-bold text-4xl scale-x-[85%] w-fit leading-tight`}>선배들과의 밥약<br/>충분히 즐기셨나요?</div>
                    <img className={`w-32 mt-14`} src={page21} alt=""/>
                    <div className={`flex flex-row items-center`}>
                      <div className={`w-fit text-3xl font-bold scale-x-[85%] leading-tight ml-6 mt-4`}>늦었다고<br/>생각하시나요?<br/>막상 직접 만나기엔<br/>부담스럽나요?</div>
                      <img className={`w-24 ml-auto`} src={page22} alt=""/>
                    </div>
                    <img className={`w-16 mt-24`} src={page23} alt=""/>
                  </div>
                  <div className={`min-w-[100vw]`}>
                    <div className={`ml-5 mr-auto text-black font-bold text-4xl scale-x-[85%] w-fit leading-tight`}>그래서 준비했습니다</div>
                    <img className={`w-32 mt-14`} src={page21} alt=""/>
                    <div className={`flex flex-row items-center`}>
                      <div className={`w-fit text-3xl font-bold scale-x-[85%] leading-tight ml-6 mt-4`}>ToAny<br/>Is the<br/>Social FnB Metaverse<br/>To Any</div>
                      <img className={`w-24 ml-auto`} src={page22} alt=""/>
                    </div>
                    <img className={`w-16 mt-24`} src={page23} alt=""/>
                  </div>
                </div>
                <button className={`absolute left-1/2 -translate-x-1/2 bottom-12 bg-[#2FB7F8] text-white text-2xl rounded-full px-20 py-5 scale-x-[85%]`} style={{wordBreak: 'keep-all'}}>사전신청</button>
              </div>
              {/* 모바일 끝 */}
              {/* 가로형 시작 */}
              <div className={`hidden lg:flex justify-center items-center w-full h-full bg-[#3A3D4C]`}>
                <div ref={page5WrapDesktop} className={`flex flex-row w-full overflow-x-hidden`}>
                  <div className={`flex flex-row justify-center items-center gap-10 mb-12 min-w-[100vw]`}>
                    <div className={`ml-auto`}>
                      <div className={`text-6xl font-bold mb-16 text-white`}>선배들과의 밥약<br/>충분히 즐기셨나요?</div>
                      <div className={`text-6xl font-bold text-white`}>늦었다고 생각하시나요?<br/>막상 직접 만나기엔<br/>부담스럽나요?</div>
                    </div>
                    <img className={`w-[35%] ml-auto`} src={page5Character} alt=""/>
                  </div>
                  <div className={`flex flex-row justify-center items-center gap-10 mb-12 min-w-[100vw]`}>
                    <div className={``}>
                      <div className={`text-6xl font-bold mb-16 text-white text-center leading-tight`}>그래서 준비했습니다<br/><br/>ToAny<br/>Is the<br/>Social FnB Metaverse<br/>To Any</div>
                    </div>
                  </div>
                </div>
                <button className="absolute left-1/2 -translate-x-1/2 bottom-24 md:bottom-18 rounded-full bg-black text-white text-3xl px-20 md:px-16 py-5 md:py-4 mt-7 drop-shadow-lg scale-x-[85%] md:scale-x-100 origin-center">
                  사전신청
                </button>
                <svg className="absolute invisible md:visible bottom-12 w-10 left-1/2 -translate-x-1/2 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
              </div>
              {/* 가로형 끝 */}
            </div>
          </div>
        </section>
        <section>
          <div className="sticky block top-0 w-screen bg-white" style={{height: footerHeight}}>
            <div className="flex lg:hidden relative w-screen h-full">
              <div className={`justify-center items-start w-full h-full bg-white p-4`}>
                <div className="flex flex-col w-full justify-start items-start">
                  <div className="flex flex-row w-full">
                    <div>
                      <img className="h-12" src={require('./images/tenacities.png')}/>
                      <img className="h-12 mt-4" src={require('./images/logo.png')}/>
                    </div>
                    <div className="ml-6 text-gray-500">
                      <div className="font-bold">(주)테너시티즈</div>
                      <div className="font-bold">TenaCities Co., Ltd</div>
                      <Link className="font-bold text-sm text-gray-800" to={'/policy/privacy'}>개인정보처리방침</Link>
                      <div className="text-sm mt-1">Social FnB Metaverse ToAny</div>
                      <div className="text-sm">Served By Tenacities</div>
                    </div>
                  </div>
                  <div className="mt-4" onClick={() => footerPanel === 1 ? setFooterPanel(0) : setFooterPanel(1)}>(주)테너시티즈 사업자정보 <svg className={`${footerPanel === 1 ? 'rotate-180' : ''} inline w-5 ml-2 transition-all`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg></div>
                  <div className={`${footerPanel === 1 ? 'h-32 mt-4' : 'h-0'} ml-4 text-gray-500 text-sm overflow-hidden transition-all duration-300`}>
                    <div>(주)테너시티즈 | 대표자명 : 마진형</div>
                    <div>서울 구로구 디지털로 34길 55 코오롱싸이언스밸리 2차</div>
                    <div>B101 웍앤코. E16</div>
                    <div>사업자번호 : 516-88-02307</div>
                    <div>고객센터, 제휴문의, 이메일 문의 :</div>
                    <div>toany.official@toany.app</div>
                  </div>
                  <div className="" onClick={() => footerPanel === 2 ? setFooterPanel(0) : setFooterPanel(2)}>TenaCities Co., Ltd Business info <svg className={`${footerPanel === 2 ? 'rotate-180' : ''} inline w-5 ml-2`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg></div>
                  <div className={`${footerPanel === 2 ? 'h-32' : 'h-0'} ml-4 mt-4 text-gray-500 text-sm overflow-hidden transition-all duration-300`}>
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
            <div className="hidden lg:flex relative w-screen h-full">
              <div className={`justify-center items-start w-full h-full bg-white p-4`}>
                <div className="flex flex-row w-full justify-start items-start">
                  <div>
                    <img src={require('./images/tenacities.png')}/>
                    <img src={require('./images/logo.png')} className="mt-4"/>
                  </div>
                  <div>
                    <div className="ml-6 text-gray-500 text-sm">
                      <div className="text-md font-bold mt-2">(주)테너시티즈</div>
                      <div className="text-md font-bold">TenaCities Co., Ltd</div>
                      <Link className="font-bold text-gray-800" to={'/policy/privacy'}>개인정보처리방침</Link>
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
            {/*  가로형 끝 */}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
