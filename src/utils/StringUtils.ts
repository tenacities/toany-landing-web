/**
 * 전화번호 입력 시 하이픈 자동 삽입.
 * @param {string} value 하이픈이 없는 전화번호
 * @return {string} 하이픈이 적용된 전화번호
 */
export function formatPhoneNumber(value: string): string {
  if (!value) {
    return "";
  }

  value = value.replace(/[^0-9]/g, "");

  const result: string[] = [];
  let restNumber: string;

  // 지역번호와 나머지 번호로 나누기
  if (value.startsWith("02")) {
    // 서울 02 지역번호
    result.push(value.substring(0, 2));
    restNumber = value.substring(2);
  } else if (value.startsWith("1")) {
    // 지역 번호가 없는 경우
    // 1xxx-yyyy
    restNumber = value;
  } else {
    // 나머지 3자리 지역번호
    // 0xx-yyyy-zzzz
    result.push(value.substring(0, 3));
    restNumber = value.substring(3);
  }

  if (restNumber.length === 7) {
    // 7자리만 남았을 때는 xxx-yyyy
    result.push(restNumber.substring(0, 3));
    result.push(restNumber.substring(3));
  } else {
    result.push(restNumber.substring(0, 4));
    result.push(restNumber.substring(4));
  }

  return result.filter((val) => val).join("-");
}
