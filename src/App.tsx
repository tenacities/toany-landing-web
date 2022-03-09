import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import { useWindowScroll, useWindowSize } from "react-use";
import { scaleDom, translateDom } from "./utils/StyleUtils";


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
}

interface Scene2Dom {
  human?: HTMLImageElement | null;
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
      } else if (.8 < percent) {
        if (!window.isAutoScrolling && window.scrollDirection == "down") {
          window.scrollTo({left: 0, top: this.height, behavior: 'smooth'});
          window.isAutoScrolling = true;
        }
      }

      if (window.scrollDirection == 'up') {
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
    },
  });
  // page2
  ret.push({
    height: windowHeight * 2,
    onScroll(percent: number) {
      console.log(`page2: ${percent}`);
    },
  });
  // page3
  ret.push({
    height: windowHeight,
    onScroll(percent: number) {
      console.log(`page3: ${percent}`);
    },
  });
  // page4
  ret.push({
    height: windowHeight,
    onScroll(percent: number) {
      console.log(`page4: ${percent}`);
    },
  });
  // page5
  ret.push({
    height: windowHeight,
    onScroll(percent: number) {
      console.log(`page5: ${percent}`);
    },
  });
  // page6
  ret.push({
    height: windowHeight,
    onScroll(percent: number) {
      console.log(`page6: ${percent}`);
    },
  });
  return ret;
}

/**
 * 앱 진입점
 * @constructor
 */
function App() {
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

  const { height: windowHeight } = useWindowSize();
  const prevScrollY = useRef(0);
  const { y: scrollY } = useWindowScroll();
  window.scrollDirection = prevScrollY.current <= scrollY ? "down" : "up";
  prevScrollY.current = scrollY;
  const [sceneInfos, setSceneInfos] = useState<Array<SceneInfo>>([]);
  const [pageHeight, setPageHeight] = useState(0);

  let headerFontColor: "white" | "black" = "white";

  // 페이지 정보 초기화
  useEffect(() => {
    setSceneInfos(generatePageInfos(windowHeight));
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

    if (sceneInfos[currentPage]) {
      switch (currentPage) {
        case 0:
          sceneInfos[currentPage].onScroll(currentPagePercent, {
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
          } as Scene1Dom);
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

  return (
    <>
      <Header fontColor={headerFontColor} />
      <div className="w-screen" style={{ height: pageHeight }}>
        <section className="w-screen" style={{ height: sceneInfos[0]?.height }}>
          <div className="sticky block top-0 h-screen w-screen bg-white">
            <div className="relative flex items-center justify-center max-w-[100vw] w-screen h-full overflow-x-clip">
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
                  VR 시대는 온다
                </div>
                <button className="rounded-full bg-[#81A9EF] text-white px-10 py-2 mt-7 mr-8 drop-shadow-lg">
                  앱 다운로드
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
                className="absolute flex flex-col md:flex-row justify-between top-[55vh] lg:px-[10vh] md:px-10 w-full h-[45vh] opacity-0 transition-opacity duration-500"
              >
                <div className="font-bold lg:text-6xl md:text-4xl text-3xl md:mt-6 mt-3 !leading-snug text-center md:text-left min-w-fit">
                  VR은 일상에 <br /> 녹아들어야 한다
                </div>
                <div className="lg:text-3xl md:text-2xl text-xl md:mt-6 md:mr-0 mr-2 max-w-screen-sm text-right">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore, eligendi, nulla. Ad aliquid ducimus in neque odit
                  repellat suscipit. Consequuntur corporis cum dignissimos et
                  eum facere odit provident sint vitae!
                </div>
                <div className='absolute font-bold bottom-[15vh] left-1/2 -translate-x-1/2'>scroll</div>
                <div className='absolute border-r-2 h-[13vh] bottom-0 left-1/2 -translate-x-1/2' />
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen" style={{ height: sceneInfos[1]?.height }}>
          <div className="sticky top-0 h-screen w-screen bg-red-500">
            <div className="relative">
              <div className="absolute top-0 w-screen h-screen background">

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
