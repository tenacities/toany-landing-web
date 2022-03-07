/**
 * dom의 스케일을 인라인css로 바꿈
 * @param {HTMLElement} dom 바꿀 DOM
 * @param {number} scale 스케일
 */
export function scaleDom(dom: HTMLElement, scale: number) {
  if (scale == 1) {
    console.log("!!!!!");
  }
  dom.style.transform = `scale(${scale})`;
}
