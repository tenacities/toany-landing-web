import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import { useWindowScroll, useWindowSize } from "react-use";
import { scaleDom, translateDom } from "./utils/StyleUtils";
import { useForm } from "react-hook-form";
import axios from "axios";
import { isMobile } from "react-device-detect";
import { formatPhoneNumber } from "./utils/StringUtils";
import { useTranslation } from "react-i18next";

interface SceneInfo {
  height: number;

  onScroll(percent: number, dom: SceneDOM): void;
}

type SceneDOM = Scene1Dom | Scene2Dom;

interface Scene1Dom {
  human: HTMLImageElement | null;
  line1: HTMLImageElement | null;
  line2: HTMLImageElement | null;
  line3: HTMLImageElement | null;
  appDown: HTMLDivElement | null;
  window1: HTMLDivElement | null;
  window2: HTMLDivElement | null;
  window3: HTMLDivElement | null;
  window4: HTMLDivElement | null;
  description: HTMLDivElement | null;
  scene2human1: HTMLImageElement | null;
  scene2human2: HTMLImageElement | null;
}

interface Scene2Dom {
  scene1: HTMLElement | null;
  human1: HTMLImageElement | null;
  dim: HTMLDivElement | null;
  description: HTMLDivElement | null;
  human2: HTMLImageElement | null;
  event: HTMLDivElement | null;
}

/**
 * 화면크기에 맞는 씬을 생성한다
 * @param {number} windowHeight 브라우저 높이
 * @return {Array<SceneInfo>}
 */
function generatePageInfos(windowHeight: number): Array<SceneInfo> {
  const ret: Array<SceneInfo> = [];

  // page1
  ret.push({
    height: windowHeight * 5,
    onScroll(percent: number, dom: Scene1Dom) {
      if (percent < 0.2) {
        // 사람 확대
        const humanScale = (75 + (percent / 0.2) * 25) / 100;
        scaleDom(dom.human!!, humanScale);
      } else if (0.2 < percent && percent < 0.5) {
        scaleDom(dom.human!!, 1);
      } else if (0.8 < percent) {
        if (
          !isMobile &&
          !window.isAutoScrolling &&
          window.scrollDirection == "down"
        ) {
          window.scrollTo({ left: 0, top: this.height, behavior: "smooth" });
          window.isAutoScrolling = true;
        }
      }

      if (window.scrollDirection == "up") {
        window.isAutoScrolling = false;
      }

      // 사람 얼굴로 포커싱 되면서 description 보이게
      if (0.5 < percent) {
        dom.appDown?.classList.add("opacity-0");
        dom.description?.classList.remove("opacity-0");
        [dom.window1, dom.window2, dom.window3, dom.window4].forEach((it) =>
          it?.classList.add("active")
        );
      } else {
        dom.appDown?.classList.remove("opacity-0");
        dom.description?.classList.add("opacity-0");
        [dom.window1, dom.window2, dom.window3, dom.window4].forEach((it) =>
          it?.classList.remove("active")
        );
      }

      translateDom(dom.line1!!, -percent * 50, -percent * 50);
      translateDom(dom.line2!!, -percent * 100, -percent * 100);
      translateDom(dom.line3!!, -percent * 150, -percent * 150);
      dom.scene2human1?.classList?.add("opacity-0");
      dom.scene2human2?.classList?.add("opacity-0");
    },
  });
  // page2
  ret.push({
    height: windowHeight * 4,
    onScroll(percent: number, dom: Scene2Dom) {
      if (0 <= percent && percent < 0.1) {
        dom.human1?.classList?.remove("opacity-0");
        dom.human1?.classList?.remove("lg:-translate-x-full");
      } else if (0.1 <= percent && percent < 0.5) {
        dom.human1?.classList?.remove("opacity-0");
        dom.human1?.classList?.add("lg:-translate-x-full");
      } else if (0.5 <= percent) {
        dom.human1?.classList?.add("opacity-0");
      }

      if (0.5 <= percent) {
        dom.human2?.classList?.remove("opacity-0");
        dom.event?.classList?.remove("opacity-0");
      } else {
        dom.human2?.classList?.add("opacity-0");
        dom.event?.classList?.add("opacity-0");
      }

      if (percent <= 0.1) {
        dom.dim?.classList?.add("!opacity-0");
        dom.description?.classList?.add("opacity-0");
        dom.description?.classList?.remove("-translate-y-1/2");
      } else if (0.1 <= percent && percent < 0.5) {
        dom.dim?.classList?.remove("!opacity-0");
        dom.description?.classList?.remove("opacity-0");
        dom.description?.classList?.remove("translate-y-1/4");
        dom.description?.classList?.remove("-translate-y-full");
        dom.description?.classList?.add("-translate-y-1/2");
      } else if (0.5 < percent) {
        dom.dim?.classList?.add("!opacity-0");
        dom.description?.classList?.add("opacity-0");
        dom.description?.classList?.remove("-translate-y-1/2");

        if (window.scrollDirection == "down") {
          dom.description?.classList?.add("-translate-y-full");
        } else {
          dom.description?.classList?.add("translate-y-1/4");
        }
      }

      if (0.7 < percent) {
        if (
          !isMobile &&
          !window.isAutoScrolling &&
          window.scrollDirection == "down"
        ) {
          window.scrollTo({
            left: 0,
            top: (dom.scene1?.clientHeight || 0) + this.height,
            behavior: "smooth",
          });
          window.isAutoScrolling = true;
        }
      } else {
        window.isAutoScrolling = false;
      }

      if (window.scrollDirection == "up") {
        window.isAutoScrolling = false;
      }
    },
  });
  // page3
  ret.push({
    height: windowHeight * 2,
    onScroll(percent: number) {
      console.log(`page3: ${percent}`);
    },
  });
  return ret;
}

/**
 * 앱 진입점
 * @constructor
 */
function App() {
  const scene1Section = useRef<HTMLElement>(null);
  const scene1Human = useRef<HTMLImageElement>(null);
  const scene1Line1 = useRef<HTMLImageElement>(null);
  const scene1Line2 = useRef<HTMLImageElement>(null);
  const scene1Line3 = useRef<HTMLImageElement>(null);
  const scene1Window1 = useRef<HTMLDivElement>(null);
  const scene1Window2 = useRef<HTMLDivElement>(null);
  const scene1Window3 = useRef<HTMLDivElement>(null);
  const scene1Window4 = useRef<HTMLDivElement>(null);
  const scene1AppDown = useRef<HTMLDivElement>(null);
  const scene1Description = useRef<HTMLDivElement>(null);

  const scene2Human1 = useRef<HTMLImageElement>(null);
  const scene2Dim = useRef<HTMLDivElement>(null);
  const scene2Description = useRef<HTMLDivElement>(null);
  const scene2Human2 = useRef<HTMLImageElement>(null);
  const scene2Event = useRef<HTMLDivElement>(null);

  const { height: windowHeight } = useWindowSize();
  const maxWindowHeight = useRef(0);
  const prevScrollY = useRef(0);
  const { y: scrollY } = useWindowScroll();
  window.scrollDirection = prevScrollY.current < scrollY ? "down" : "up";
  prevScrollY.current = scrollY;
  const [sceneInfos, setSceneInfos] = useState<Array<SceneInfo>>([]);
  const [pageHeight, setPageHeight] = useState(0);
  const { t } = useTranslation();

  let headerFontColor: "white" | "black" = "white";

  // 페이지 정보 초기화
  useEffect(() => {
    if (maxWindowHeight.current < windowHeight) {
      maxWindowHeight.current = windowHeight;
      setSceneInfos(generatePageInfos(windowHeight));
    }
  }, [windowHeight]);

  // 전체 페이지 높이 설정
  useEffect(() => {
    setPageHeight(
      sceneInfos
        .map((it) => it.height)
        .reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        )
    );
  }, [sceneInfos]);

  // 현재 스크롤 위치에 보이는 페이지 정보 계산 및 이벤트 발생.
  if (sceneInfos.length != 0) {
    let currentPage = 0;
    let tempScrollY = scrollY;
    while (tempScrollY > 0) {
      tempScrollY -= sceneInfos[currentPage].height;
      if (tempScrollY >= 0) {
        currentPage += 1;
      }
    }

    const currentPageInfo = sceneInfos[currentPage];
    let currentPagePercent =
      tempScrollY == 0
        ? 0
        : (tempScrollY + currentPageInfo.height) / currentPageInfo.height;
    if (scrollY < 0) {
      currentPagePercent = 0;
    }

    console.log(currentPage, currentPagePercent);

    if (currentPageInfo) {
      switch (currentPage) {
        case 0:
          currentPageInfo.onScroll(currentPagePercent, {
            human: scene1Human.current,
            line1: scene1Line1.current,
            line2: scene1Line2.current,
            line3: scene1Line3.current,
            appDown: scene1AppDown.current,
            window1: scene1Window1.current,
            window2: scene1Window2.current,
            window3: scene1Window3.current,
            window4: scene1Window4.current,
            description: scene1Description.current,
            scene2human1: scene2Human1.current,
            scene2human2: scene2Human2.current,
          } as Scene1Dom);
          break;
        case 1:
          currentPageInfo.onScroll(currentPagePercent, {
            scene1: scene1Section.current,
            human1: scene2Human1.current,
            dim: scene2Dim.current,
            description: scene2Description.current,
            human2: scene2Human2.current,
            event: scene2Event.current,
          } as Scene2Dom);
          break;
        default:
          break;
      }
    }

    if (0 == currentPage && 0.5 < currentPagePercent) {
      headerFontColor = "black";
    } else {
      headerFontColor = "white";
    }
  }

  type FormValues = {
    phone: string;
  };

  const { register, handleSubmit, watch, setValue } = useForm<FormValues>();

  let phoneNumber = watch("phone", "");
  phoneNumber = phoneNumber.replaceAll("-", "");
  phoneNumber = phoneNumber.replace(/(^\d{3})([0-9]+)([0-9]{4})/, "$1-$2-$3");
  phoneNumber = formatPhoneNumber(phoneNumber);

  useEffect(() => {
    setValue("phone", phoneNumber);
  }, [phoneNumber]);

  const onSubmit = (data: FormValues) => {
    data.phone = data.phone.replaceAll("-", "");
    if (data.phone.length != 11) {
      alert("check length");
      return;
    }

    if (!data.phone.startsWith("010")) {
      alert("check 010");
      return;
    }
    axios
      .post("https://api.landing.toany.app/pu/reg", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.code) alert("duplicated!!");
        else alert("done!!");
      })
      .catch(() => {
        alert("unknown error!!");
      });
  };

  return (
    <>
      <Header fontColor={headerFontColor} />
      <div className="w-screen" style={{ height: pageHeight }}>
        <section
          ref={scene1Section}
          className="w-screen"
          style={{ height: sceneInfos[0]?.height }}
        >
          <div className="sticky block top-0 h-screen w-screen bg-white">
            <div className="relative flex items-center justify-center max-w-[100vw] w-screen h-full overflow-hidden">
              <div className="absolute background top-0 w-full h-full" />
              <img
                className="absolute w-1/3 top-0 left-0"
                ref={scene1Line2}
                src={require("./images/1page/line 2.png")}
                alt=""
              />
              <img
                className="absolute top-0 right-0"
                ref={scene1Line3}
                src={require("./images/1page/line 3.png")}
                alt=""
              />
              <img
                className="absolute -left-1/3 md:-left-1/3 lg:-left-10 bottom-0 origin-bottom-left h-[85vh] max-w-none"
                ref={scene1Human}
                src={require("./images/1page/human 1.png")}
                alt="human"
              />
              <img
                className="absolute w-2/3 left-0 bottom-0"
                ref={scene1Line1}
                src={require("./images/1page/line 1.png")}
                alt="line1"
              />
              <div
                ref={scene1AppDown}
                className={`absolute w-screen md:w-1/2 md:mt-24 right-0 top-1/3 text-center transition-opacity duration-150 ease-in-out`}
              >
                <div className="font-bold text-4xl lg:text-7xl md:text-6xl text-white tracking-wide">
                  {t("home:page1.appDownTitle")}
                </div>
                <button className="rounded-full bg-[#81A9EF] text-white px-10 py-2 mt-7 mr-8 drop-shadow-lg">
                  {t("home:page1.appDownload")}
                </button>
              </div>
              <div
                ref={scene1Window1}
                className={`scene1-window-frame scene1-window-frame-1`}
              />
              <div
                ref={scene1Window2}
                className={`scene1-window-frame scene1-window-frame-2`}
              />
              <div
                ref={scene1Window3}
                className={`scene1-window-frame scene1-window-frame-3`}
              />
              <div
                ref={scene1Window4}
                className={`scene1-window-frame scene1-window-frame-4`}
              />
              <div
                ref={scene1Description}
                className="absolute flex flex-col md:flex-row md:justify-between top-[55vh] lg:px-[10vh] md:px-10 w-full h-[45vh] opacity-0 transition-opacity duration-500"
              >
                <div className="font-bold lg:text-6xl md:text-5xl text-3xl md:mt-6 mt-3 !leading-snug text-center md:text-left md:min-w-min md:max-w-sm">
                  {t("home:page1.descriptionTitle1")} <br />{" "}
                  {t("home:page1.descriptionTitle2")}
                </div>
                <div className="lg:text-3xl md:text-2xl text-xl md:mt-6 md:mr-0 mr-2 md:max-w-sm text-right">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore, eligendi, nulla. Ad aliquid ducimus in neque odit
                  repellat suscipit. Consequuntur corporis cum dignissimos et
                  eum facere odit provident sint vitae!
                </div>
                <div
                  className={`absolute font-bold bottom-[15vh] left-1/2 -translate-x-1/2 ${
                    isMobile && "hidden"
                  }`}
                >
                  scroll
                </div>
                <div
                  className={`absolute border-r-2 h-[13vh] bottom-0 left-1/2 -translate-x-1/2 ${
                    isMobile && "hidden"
                  }`}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen" style={{ height: sceneInfos[1]?.height }}>
          <div className="sticky top-0 h-screen w-screen bg-red-500">
            <div className="relative w-screen h-screen">
              <div className="absolute top-0 w-screen h-screen background">
                <img
                  className="absolute sm:w-auto md:w-1/2 sm:max-w-[50vh] left-1/2 h-auto top-[20vh] -translate-x-1/2 opacity-0 transition-all duration-1000"
                  ref={scene2Human1}
                  src={require("./images/2page/human 2.png")}
                  alt="human"
                />
                <img
                  className="absolute sm:w-auto md:w-1/2 sm:max-w-[50vh] left-1/2 h-auto top-[20vh] -translate-x-1/2 opacity-0 transition-all duration-1000 lg:-translate-x-full"
                  ref={scene2Human2}
                  src={require("./images/3page/human 3.png")}
                  alt="human2"
                />
                <div
                  ref={scene2Dim}
                  className="absolute w-screen h-screen bg-black transition-opacity duration-500 opacity-60 !opacity-0"
                />
                <div
                  ref={scene2Description}
                  className="absolute w-fit font-bold text-5xl md:text-6xl !leading-snug text-white top-1/2 left-1/2 lg:left-3/4 -translate-x-1/2 translate-y-1/4 transition-all duration-500 opacity-0"
                >
                  <div>{t("home:page2.description1")}</div>
                  <div>{t("home:page2.description2")}</div>
                </div>
                <div
                  ref={scene2Event}
                  className="absolute w-fit top-1/2 left-1/2 lg:left-3/4 lg:pr-16 -translate-x-1/2 -translate-y-1/2 duration-500 opacity-0"
                >
                  <div className="w-screen lg:w-auto font-bold text-5xl md:text-6xl text-white text-center lg:text-right">
                    {t("home:page2.eventTitle")}
                  </div>
                  <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center mt-8">
                    <form className="h-12" onSubmit={handleSubmit(onSubmit)}>
                      <input
                        className="drop-shadow-xl h-full px-6 box-border w-44 md:mr:12 rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md"
                        type="tel"
                        placeholder="010-0000-0000"
                        maxLength={13}
                        {...register("phone")}
                      />
                      <button className="font-bold text-white px-6 h-full bg-gradient-to-b from-[#298BFD] to-[#3982FD] drop-shadow-lg rounded-tr-md rounded-br-md">
                        SIGN UP
                      </button>
                    </form>
                    <button className="font-bold w-fit md:w-auto mt-6 md:mt-0 ml-1.5 bg-white p-3 px-6 text-[#035FF8] drop-shadow-xl">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen" style={{ height: sceneInfos[2]?.height }}>
          <div className="relative w-screen h-screen">
            <div className="absolute w-screen h-[200vh] top-0">
              <div className="relative flex flex-col font-bold text-white w-screen h-screen justify-start items-center pt-[15vh]">
                <div className="text-6xl mb-12 text-center">소개영상</div>
                <div className="youtube-video-container">
                  <iframe
                    className="youtube-video"
                    src="https://www.youtube.com/embed/QvGJWQrEOZs"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-screen h-screen">
                <div className="flex flex-col items-center justify-center min-w-[30vw] p-3 bg-black">
                  <input
                    className="w-full p-3"
                    type="text"
                    placeholder={t("home:page3.inputIdPlaceholder")}
                  />
                  <input
                    className="w-full p-3 mt-4"
                    type="password"
                    placeholder={t("home:page3.inputPasswordPlaceholder")}
                  />
                  <div className="mt-3 ml-auto">
                    <button className="mr-4 text-white">
                      {t("home:page3.signup")}
                    </button>
                    <button className="text-white">
                      {t("home:page3.findPassword")}
                    </button>
                  </div>
                  <button className="w-full text-white text-center mt-3 p-3 bg-[#1E2F59]">
                    {t("home:page3.signIn")}
                  </button>
                  <hr className="w-full my-6 border-gray-500" />
                  <div className="text-white">
                    {t("home:page3.snsSignInDescription")}
                  </div>
                  <div className="flex justify-evenly w-full my-6">
                    <button className="max-w-[18%] rounded-full overflow-hidden">
                      <img
                        src={require("./images/3page/sns_kakao.png")}
                        alt="kakao login"
                      />
                    </button>
                    <button className="max-w-[18%] rounded-full overflow-hidden">
                      <img
                        src={require("./images/3page/sns_google.png")}
                        alt="google login"
                      />
                    </button>
                    <button className="max-w-[18%] rounded-full overflow-hidden">
                      <img
                        src={require("./images/3page/sns_apple.png")}
                        alt="apple login"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
