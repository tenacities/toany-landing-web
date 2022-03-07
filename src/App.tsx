import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import { useWindowScroll, useWindowSize } from "react-use";
import { scaleDom } from "./utils/StyleUtils";

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
    height: windowHeight * 4,
    onScroll(percent: number, dom: Scene1Dom) {
      if (percent < 0.2) {
        // 사람 확대
        const humanScale = (75 + (percent / 0.2) * 25) / 100;
        scaleDom(dom.human!!, humanScale);
      } else if (0.2 < percent) {
        scaleDom(dom.human!!, 1);
      }
    },
  });
  // page2
  ret.push({
    height: windowHeight,
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

  const { height: windowHeight } = useWindowSize();
  const { y: scrollY } = useWindowScroll();

  const [sceneInfos, setSceneInfos] = useState<Array<SceneInfo>>([]);
  const [pageHeight, setPageHeight] = useState(0);

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
          } as Scene1Dom);
          break;
        default:
          break;
      }
    }
  }

  return (
    <>
      <Header />
      <div className="w-screen" style={{ height: pageHeight }}>
        <section className="w-screen" style={{ height: sceneInfos[0]?.height }}>
          <div className="sticky block top-0 h-screen w-full background">
            <img
              className="absolute -left-1/3 md:-left-1/3 lg:-left-10 bottom-0 origin-bottom-left md:max-w-4xl"
              ref={scene1Human}
              src={require("./images/1page/human 1.png")}
              alt="human"
            />
            <div className="absolute w-screen md:w-1/2 md:mt-24 right-0 top-1/3 text-center">
              <div className="font-bold text-4xl lg:text-7xl md:text-6xl text-white tracking-wide">
                VR 시대는 온다
              </div>
              <button className="rounded-full bg-[#81A9EF] text-white px-10 py-2 mt-7 mr-8 drop-shadow-lg">
                앱 다운로드
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
