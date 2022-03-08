/**
 * dom의 스케일을 인라인css로 바꿈
 * @param {HTMLElement} dom 바꿀 DOM
 * @param {number} scale 스케일
 */
export function scaleDom(dom: HTMLElement, scale: number) {
  dom.style.transform = `scale(${scale})`;
}


/**
 * dom의 위치를 인라인css로 바꿈
 * @param {HTMLElement} dom 이동할 DOM
 * @param {number} x 좌표
 * @param {number} y 좌표
 */
export function translateDom(dom: HTMLElement, x: number, y: number) {
  dom.style.transform = `translate(${x}px, ${y}px)`;
}
