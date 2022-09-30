import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import EventImg from './images/event.png';
import Bg from './images/bg.png';
/**
 * 앱 진입점
 * @constructor
 */
function App() {
  const pageWrap = useRef<HTMLDivElement>(null);
  // const page5WrapDesktop = useRef<HTMLDivElement>(null);
  // const page5WrapMobile = useRef<HTMLDivElement>(null);

  // const { height: windowHeight } = useWindowSize();
  // const windowHeight = window.innerHeight;
  // const maxWindowHeight = useRef(0);
  // const prevScrollY = useRef(0);
  // const { y: scrollY } = useWindowScroll();
  // window.scrollDirection = prevScrollY.current < scrollY ? "down" : "up";
  // prevScrollY.current = scrollY;
  // const [sceneInfos, setSceneInfos] = useState<Array<SceneInfo>>([]);
  // const [pageHeight, setPageHeight] = useState(0);
  // const lastPageMove = useRef(0);
  // const touchStartXY = useRef<[Number, Number]>([-1, -1]);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [potentialUsers, setPotentialUsers] = useState('0');
  // const [totalDownloads, setTotalDownloads] = useState('0');
  // const [headerFontColor, setHeaderFontColor] = useState<'white' | 'black'>('white');
  // const [page3Rotation, setPage3Rotation] = useState(0);
  // const [pageScrollY, setPageScrollY] = useState(0);
  // const { t } = useTranslation();
  const [footerHeight, setFooterHeight] = useState(200);
  const [footerPanel, setFooterPanel] = useState(0); // 0: noting open, 1: korean info open, 2: eng info open
  // const alert = useAlert();

  // // 사전 신청자 수
  // useEffect(() => {
  //   const numOfPotentialUsers = 12865;
  //   setPotentialUsers(numOfPotentialUsers.toString().padStart(5, '0'));
  // }, []);
  //
  // // 누적 다운로드 수
  // useEffect(() => {
  //   const numOfTotalDownloads = 4321;
  //   setTotalDownloads(numOfTotalDownloads.toString().padStart(5, '0'));
  // }, []);

  // 휠 이벤트 핸들링
  // const handleWheelEvent = (e: WheelEvent) => {
  //   if (Date.now() - lastPageMove.current < 500 ) return;
  //
  //   let elem = e.target as HTMLElement | null;
  //   while (true) {
  //     if (elem === null) break;
  //     if (elem.classList.contains('ignoreScroll')) return;
  //     if (elem.id === 'root') break;
  //     elem = elem.parentElement;
  //   }
  //
  //   lastPageMove.current = Date.now();
  //   if (e.deltaY > 0) {
  //     setCurrentPage((prev) => prev + 1);
  //   } else {
  //     if (currentPage == 0) return;
  //     setCurrentPage((prev) => prev - 1);
  //   }
  // };

  // const handleTouchStartEvent = (e: TouchEvent) => {
  //   touchStartXY.current = [e.touches[0].clientX, e.touches[0].clientY];
  // }
  //
  // const handleTouchMoveEvent = (e: TouchEvent) => {
  //   if (Date.now() - lastPageMove.current < 500 ) return;
  //
  //   let elem = e.target as HTMLElement | null;
  //   while (true) {
  //     if (elem === null) break;
  //     if (elem.classList.contains('ignoreScroll')) return;
  //     if (elem.id === 'root') break;
  //     elem = elem.parentElement;
  //   }
  //
  //   const y: number = touchStartXY.current.at(1) as number || 0;
  //
  //   if (y - e.touches[0].clientY < -50) {
  //     if (currentPage == 0) return;
  //     lastPageMove.current = Date.now();
  //     setCurrentPage((prev) => prev - 1);
  //   }
  //
  //   if (y - e.touches[0].clientY > 50) {
  //     lastPageMove.current = Date.now();
  //     setCurrentPage((prev) => prev + 1);
  //   }
  // }

  // 휠, 터치 이벤트 등록
  // useEffect(() => {
  //   window.addEventListener('wheel', handleWheelEvent);
  //   window.addEventListener('touchstart', handleTouchStartEvent);
  //   window.addEventListener('touchmove', handleTouchMoveEvent);
  //   return () => {
  //     window.removeEventListener('wheel', handleWheelEvent);
  //     window.removeEventListener('touchstart', handleTouchStartEvent);
  //     window.removeEventListener('touchmove', handleTouchMoveEvent);
  //   }
  // }, [currentPage]);

  // 페이지 이동 핸들링
  // useEffect(() => {
  //   if (currentPage < 0) {
  //     setCurrentPage(0);
  //     return;
  //   }
  //   if (1 < currentPage) {
  //     setCurrentPage(1);
  //     return;
  //   }
  //
  //   // if (currentPage == 5)
  //   //   setPageScrollY(4 * innerHeight);
  //
  //   if (currentPage == 1)
  //     setPageScrollY(0 * innerHeight + footerHeight);
  //
  //   if (0 <= currentPage && currentPage <= 0)
  //     setPageScrollY(currentPage * innerHeight);
  //
  // }, [currentPage, footerHeight]);

  // // 마지막페이지 좌우 스크롤
  // useEffect(() => {
  //   console.log(currentPage);
  //   if (currentPage == 4) {
  //     page5WrapMobile?.current?.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  //     page5WrapDesktop?.current?.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  //   }
  //
  //   if (currentPage == 5) {
  //     page5WrapMobile?.current?.scrollTo({top: 0, left: innerWidth, behavior: 'smooth'});
  //     page5WrapDesktop?.current?.scrollTo({top: 0, left: innerWidth, behavior: 'smooth'});
  //   }
  // }, [currentPage]);

  // // 헤더 색상 변경
  // useEffect(() => {
  //   if (currentPage == 1 || currentPage == 3) {
  //     setHeaderFontColor('black');
  //   } else {
  //     setHeaderFontColor('white');
  //   }
  // }, [currentPage]);

  // // page3 문구 로테이션
  // useEffect(() => {
  //   if (currentPage == 2) {
  //     const interval = setInterval(() => {
  //       setPage3Rotation(prev => {
  //         return (prev + 1) % 5;
  //       });
  //     }, 2000);
  //     return () => {
  //       clearInterval(interval);
  //     }
  //   }
  // }, [currentPage]);

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
      <div ref={pageWrap} className="w-screen transition-transform ease-in-out duration-500">
        <section className="w-screen h-full">
          <div className="sticky block top-0 w-screen bg-white">
            <div className="relative w-screen lg:h-full">
              {/* 가로형 시작 */}
              <div className={`flex flex-col justify-center items-center w-full lg:h-full bg-center bg-cover`} style={{backgroundImage: `url(${Bg})`}}>
                <div className={`relative flex flex-col pt-16 justify-center items-center w-full max-w-full h-full bg-black bg-opacity-60`}>
                  <div className={`relative mb-8 w-full`}>
                    <div className={`mx-auto bg-white w-48 h-48 lg:w-72 lg:h-72 bg-opacity-40 rounded-full`}/>
                    <img className={`absolute top-7 lg:top-10 left-1/2 -translate-x-1/2 max-w-full w-[20rem] lg:w-[31rem]`} src={EventImg} alt=""/>
                  </div>
                  <div className={`mb-8 p-2 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6 lg:w-[885px] bg-white bg-opacity-50 lg:text-center`}>
                    <div className={`flex flex-row lg:flex-col bg-white items-center p-4 rounded-xl shadow-lg`}>
                      <div className={`font-GangwonEduHyeonokT text-2xl lg:text-4xl rounded-full bg-[#F5B4D0] flex justify-center items-center shrink-0 w-6 h-6 lg:w-10 lg:h-10 text-white mr-4 lg:mr-0 lg:mb-2`}>01</div>
                      <div className={`font-GangwonEduPowerExtraBoldA text-xl lg:text-3xl mr-4 lg:mr-0 lg:mb-2 basis-[96px] lg:basis-0 shrink-0`}>메타버스 단체 소개팅</div>
                      <div className={`font-Pretendard-Regular`} style={{wordBreak: 'keep-all'}}>ToAny World에서 단체 소개팅을 진행합니다.</div>
                    </div>
                    <div className={`flex flex-row lg:flex-col bg-white items-center p-4 rounded-xl shadow-lg`}>
                      <div className={`font-GangwonEduHyeonokT text-2xl lg:text-4xl rounded-full bg-[#DFB8D5] flex justify-center items-center shrink-0 w-6 h-6 lg:w-10 lg:h-10 text-white mr-4 lg:mr-0 lg:mb-2`}>02</div>
                      <div className={`font-GangwonEduPowerExtraBoldA text-xl lg:text-3xl mr-4 lg:mr-0 lg:mb-2 basis-[96px] lg:basis-0 shrink-0`}>일시</div>
                      <div className={`font-Pretendard-Regular`} style={{wordBreak: 'keep-all'}}>10/7 금요일, 18:00~18:40 <br/> (이후에도 자주 진행예정입니다.)</div>
                    </div>
                    <div className={`flex flex-row lg:flex-col bg-white items-center p-4 rounded-xl shadow-lg`}>
                      <div className={`font-GangwonEduHyeonokT text-2xl lg:text-4xl rounded-full bg-[#68CEF1] flex justify-center items-center shrink-0 w-6 h-6 lg:w-10 lg:h-10 text-white mr-4 lg:mr-0 lg:mb-2`}>03</div>
                      <div className={`font-GangwonEduPowerExtraBoldA text-xl lg:text-3xl mr-4 lg:mr-0 lg:mb-2 basis-[96px] lg:basis-0 shrink-0`}>신청</div>
                      <div className={`font-Pretendard-Regular`} style={{wordBreak: 'keep-all'}}>아래 사전신청 양식을 작성해주세요.</div>
                    </div>
                    <div className={`flex flex-row lg:flex-col bg-white items-center p-4 rounded-xl shadow-lg`}>
                      <div className={`font-GangwonEduHyeonokT text-2xl lg:text-4xl rounded-full bg-[#1D4E79] flex justify-center items-center shrink-0 w-6 h-6 lg:w-10 lg:h-10 text-white mr-4 lg:mr-0 lg:mb-2`}>04</div>
                      <div className={`font-GangwonEduPowerExtraBoldA text-xl lg:text-3xl mr-4 lg:mr-0 lg:mb-2 basis-[96px] lg:basis-0 shrink-0`}>보상</div>
                      <div className={`font-Pretendard-Regular`} style={{wordBreak: 'keep-all'}}>만남이 성사된 커플에게는 맥주 한잔 씩을, 인증사진을 찍어서 보내주시는 분들께는 안주까지 지급해드립니다-!</div>
                    </div>
                  </div>
                  <a className={`mb-16 text-4xl bg-[#1E4E79] border-4 rounded-full px-16 py-4 text-white font-GangwonEduPowerExtraBoldA cursor-pointer blank`} href={`https://forms.gle/7M2cQNzu9vC1cHdHA`} target='_blank' rel='noreferrer'>사전신청</a>
                </div>
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
