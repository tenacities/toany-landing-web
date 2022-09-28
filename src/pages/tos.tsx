/* eslint-disable no-irregular-whitespace */
import React from "react";
/**
 * 서비스 이용약관
 * @constructor
 */
export default function TOS() {
  const html = `
  <html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=Generator content="Microsoft Word 15 (filtered)">
<title>모바일게임 표준약관</title>
<style>
<!--
 /* Font Definitions */
 @font-face
\t{font-family:Gulim;
\tpanose-1:2 11 6 0 0 1 1 1 1 1;}
@font-face
\t{font-family:"Cambria Math";
\tpanose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
\t{font-family:"Arial Unicode MS";
\tpanose-1:2 11 6 4 2 2 2 2 2 4;}
@font-face
\t{font-family:"Malgun Gothic";
\tpanose-1:2 11 5 3 2 0 0 2 0 4;}
@font-face
\t{font-family:宋?;
\tpanose-1:0 0 0 0 0 0 0 0 0 0;}
@font-face
\t{font-family:함초롬바탕;
\tpanose-1:0 0 0 0 0 0 0 0 0 0;}
@font-face
\t{font-family:함초롬돋움;
\tpanose-1:0 0 0 0 0 0 0 0 0 0;}
@font-face
\t{font-family:휴먼명조;
\tpanose-1:0 0 0 0 0 0 0 0 0 0;}
@font-face
\t{font-family:"\\@Gulim";
\tpanose-1:2 11 6 0 0 1 1 1 1 1;}
@font-face
\t{font-family:"\\@Malgun Gothic";}
@font-face
\t{font-family:"\\@휴먼명조";
\tpanose-1:0 0 0 0 0 0 0 0 0 0;}
@font-face
\t{font-family:"\\@함초롬바탕";
\tpanose-1:0 0 0 0 0 0 0 0 0 0;}
@font-face
\t{font-family:"\\@宋?";
\tpanose-1:0 0 0 0 0 0 0 0 0 0;}
@font-face
\t{font-family:"\\@함초롬돋움";
\tpanose-1:0 0 0 0 0 0 0 0 0 0;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
\t{margin:0in;
\ttext-autospace:none;
\tword-break:break-all;
\tfont-size:11.0pt;
\tfont-family:"Malgun Gothic",sans-serif;}
p.a, li.a, div.a
\t{mso-style-name:바탕글;
\tmargin:0in;
\ttext-align:justify;
\ttext-justify:inter-ideograph;
\tline-height:103%;
\ttext-autospace:none;
\tword-break:break-all;
\tfont-size:10.0pt;
\tfont-family:"함초롬바탕",serif;
\tcolor:black;}
.MsoChpDefault
\t{font-family:"Malgun Gothic",sans-serif;}
 /* Page Definitions */
 @page WordSection1
\t{size:595.25pt 841.85pt;
\tmargin:70.85pt 56.65pt 70.85pt 56.65pt;}
div.WordSection1
\t{page:WordSection1;}
 /* List Definitions */
 ol
\t{margin-bottom:0in;}
ul
\t{margin-bottom:0in;}
-->
</style>

</head>

<body lang=EN-US link=blue vlink=purple style='word-wrap:break-word'>

<div class=WordSection1>

<p class=a align=center style='margin-left:40.4pt;text-align:center;text-indent:
-40.4pt;word-break:normal'><b><span lang=ZH-CN style='font-size:18.0pt;
line-height:103%;font-family:"휴먼명조",serif'>모바일게임 표준약관</span></b></p>

<p class=a style='margin-left:40.4pt;text-indent:-40.4pt'><b><span
style='font-size:16.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></b></p>

<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0
 style='margin-left: auto;border-collapse:collapse;border:none'>
 <tr style='height:73.95pt'>
  <td width=148 style='width:111.1pt;border:none;padding:1.4pt 1.4pt 1.4pt 1.4pt;
  height:73.95pt'>
  <p class=a align=center style='text-align:center;word-break:normal'>
  <table cellpadding=0 cellspacing=0>
   <tr>
    <td width=17 height=0></td>
   </tr>
   <tr>
    <td></td>
    <td><img width=118 height=94 src="data:image/jpeg;base64,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"
    alt="그림입니다. 원본 그림의 이름: CLP00000f140615.bmp 원본 그림의 크기: 가로 841pixel, 세로 621pixel"></td>
   </tr>
  </table>
  <br clear=ALL>
  </p>
  </td>
 </tr>
 <tr style='height:13.8pt'>
  <td width=148 style='width:111.1pt;border:none;padding:1.4pt 1.4pt 1.4pt 1.4pt;
  height:13.8pt'>
  <p class=a align=center style='margin-left:39.7pt;text-align:center;
  text-indent:-39.7pt;line-height:normal'><b><span lang=ZH-CN style='font-size:
  11.0pt;font-family:"Gulim",sans-serif'>표준약관 제</span></b><b><span
  style='font-size:11.0pt;font-family:"Gulim",sans-serif'>10078<span
  lang=ZH-CN>호</span></span></b></p>
  </td>
 </tr>
 <tr style='height:13.8pt'>
  <td width=148 style='width:111.1pt;border:none;padding:1.4pt 1.4pt 1.4pt 1.4pt;
  height:13.8pt'>
  <p class=a align=center style='margin-left:33.6pt;text-align:center;
  text-indent:-33.6pt;line-height:normal'><b><span style='font-size:11.0pt;
  font-family:"Gulim",sans-serif'>(2017. 10. 27. <span lang=ZH-CN>제정</span>)</span></b></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span style='font-size:1.0pt'>&nbsp;</span></p>

<p class=a style='margin-left:40.4pt;text-indent:-40.4pt'><span
style='font-size:18.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a align=center style='margin-top:5.0pt;margin-right:0in;margin-bottom:
5.0pt;margin-left:0in;text-align:center;word-break:normal'><b><span lang=ZH-CN
style='font-size:14.0pt;line-height:103%;font-family:"휴먼명조",serif'>제</span></b><b><span
style='font-size:14.0pt;line-height:103%;font-family:"휴먼명조",serif'>1<span
lang=ZH-CN>장 총칙</span></span></b></p>

<p class=a align=center style='margin-top:5.0pt;margin-right:0in;margin-bottom:
5.0pt;margin-left:0in;text-align:center;word-break:normal'><b><span
style='font-size:6.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></b></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>1<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>목적</span>) </span></b><span lang=ZH-CN style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>이 약관은 ㈜테너시티즈</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>(<span
lang=ZH-CN>이하 </span></span><span style='font-size:12.0pt;line-height:103%;
font-family:"Arial Unicode MS",serif'>“</span><span lang=ZH-CN
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>회사</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>”</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>라
합니다</span><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>)<span
lang=ZH-CN>가 모바일 기기를 통해 제공하는 게임 서비스 및 이에 부수하는 네트워크</span>, <span lang=ZH-CN>웹사이트</span>,
<span lang=ZH-CN>기타 서비스</span>(<span lang=ZH-CN>이하 </span></span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>“</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>서비스</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>”</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>라
합니다</span><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>)<span
lang=ZH-CN>의 이용에 대한 회사와 서비스 이용자의 권리ㆍ의무 및 책임사항</span>, <span lang=ZH-CN>기타 필요한 사항을
규정함을 목적으로 합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>2<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>용어의 정의</span>)</span></b><span style='font-size:12.0pt;line-height:
103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>이 약관에서 사용하는 용어의 정의는 다음과 같습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 1.
</span><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>“</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>회사</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>”</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>라
함은 모바일 기기를 통하여 서비스를 제공하는 사업자를 의미합니다</span><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>.</span></p>

<p class=a style='margin-left:22.2pt;text-indent:-22.2pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 2. </span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>“</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>회원</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>”</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>이란
이 약관에 따라 이용계약을 체결하고</span><span style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>, <span lang=ZH-CN>회사가 제공하는 서비스를 이용하는 자를 의미합니다</span>.</span></p>

<p class=a style='margin-left:21.25pt;text-indent:-21.25pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 3. </span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>“</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>임시회원</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>”</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>이란
일부 정보만 제공하고 회사가 제공하는 서비스의 일부만 이용하는 자를 의미합니다</span><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>.</span></p>

<p class=a style='margin-left:21.85pt;text-indent:-21.85pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 4. </span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>“</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>모바일
기기</span><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>”</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>란
콘텐츠를 다운로드 받거나 설치하여 사용할 수 있는 기기로서</span><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>, <span lang=ZH-CN>휴대폰</span>, <span
lang=ZH-CN>스마트폰</span>, <span lang=ZH-CN>휴대정보단말기</span>(PDA), <span lang=ZH-CN>태블릿
등을 의미합니다</span>. </span></p>

<p class=a style='margin-left:22.3pt;text-indent:-22.3pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 5. </span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>“</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>계정정보</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>”</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>란
회원의 회원번호와 외부계정정보</span><span style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>, <span lang=ZH-CN>기기정보</span>, <span lang=ZH-CN>별명</span>,
<span lang=ZH-CN>프로필 사진</span>, <span lang=ZH-CN>친구목록 등 회원이 회사에 제공한 정보와 게임이용정보</span>
(<span lang=ZH-CN>캐릭터 정보</span>, <span lang=ZH-CN>아이템</span>, <span lang=ZH-CN>레벨
등</span>), <span lang=ZH-CN>이용요금 결제 정보 등을 통칭합니다</span>.</span></p>

<p class=a style='margin-left:21.85pt;text-indent:-21.85pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 6. </span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>“</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>콘텐츠</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>”</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>란
모바일 기기로 이용할 수 있도록 회사가 서비스 제공과 관련하여 디지털 방식으로 제작한 유료 또는 무료의 내용물 일체</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>(<span
lang=ZH-CN>게임 및 네트워크 서비스</span>, <span lang=ZH-CN>애플리케이션</span>, <span
lang=ZH-CN>게임 머니</span>, <span lang=ZH-CN>게임 아이템 등</span>)<span lang=ZH-CN>를 의미합니다</span>.
</span></p>

<p class=a style='margin-left:21.25pt;text-indent:-21.25pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 7. </span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>“</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>오픈마켓</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>”</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>이란
모바일 기기에서 게임 콘텐츠를 설치하고 결제할 수 있도록 구축된 전자상거래 환경을 의미합니다</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>.</span></p>

<p class=a style='margin-left:27.3pt;text-indent:-27.3pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 8.  </span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>“</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>애플리케이션</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>”</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>이란
회사가 제공하는 서비스를 이용하기 위하여 모바일 기기를 통해 다운로드 받거나 설치하여 사용하는 프로그램 일체를 의미합니다</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>.</span></p>

<p class=a style='margin-left:21.25pt;text-indent:-21.25pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>9 . </span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>“</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>게임서비스</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>”</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>라
함은 회사가 제공하는 서비스의 하나로서 회원이 모바일 기기에서 실행하는 게임 및 이에 부수하는 서비스를 의미합니다</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>이 약관에서 사용하는 용어의 정의는 본 조 제</span>1<span lang=ZH-CN>항에서 정하는 것을 제외하고는 관계법령
및 서비스별 정책에서 정하는 바에 의하며</span>, <span lang=ZH-CN>이에 정하지 아니한 것은 일반적인 상 관례에 따릅니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>3<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>회사정보 등의 제공</span>) </span></b><span lang=ZH-CN style='font-size:
12.0pt;line-height:103%;font-family:"휴먼명조",serif'>회사는 다음 각 호의 사항을 회원이 알아보기 쉽도록 게임
서비스 내에 표시합니다</span><span style='font-size:12.0pt;line-height:103%;font-family:
"휴먼명조",serif'>. <span lang=ZH-CN>다만</span>, <span lang=ZH-CN>개인정보처리방침과 약관은 회원이 연결화면을
통하여 볼 수 있도록 할 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 1.
<span lang=ZH-CN>상호 및 대표자의 성명 </span></span></p>

<p class=a style='margin-left:26.8pt;text-indent:-26.8pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 2. <span
lang=ZH-CN>영업소 소재지 주소</span>(<span lang=ZH-CN>회원의 불만을 처리할 수 있는 곳의 주소를 포함한다</span>)
</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 3.
<span lang=ZH-CN>전화번호</span>, <span lang=ZH-CN>전자우편주소</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 4.
<span lang=ZH-CN>사업자 등록번호</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 5.
<span lang=ZH-CN>통신판매업 신고번호 </span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 6.
<span lang=ZH-CN>개인정보처리방침 </span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 7.
<span lang=ZH-CN>서비스 이용약관 </span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>4<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>약관의 효력 및 변경</span>)</span></b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 이 약관의 내용을 회원이 알 수 있도록 게임서비스 내 또는 그 연결화면에 게시합니다</span>. <span
lang=ZH-CN>이 경우 이 약관의 내용 중 서비스 중단</span>, <span lang=ZH-CN>청약철회</span>, <span
lang=ZH-CN>환급</span>, <span lang=ZH-CN>계약 해제</span></span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>·</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>해지</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>, <span
lang=ZH-CN>회사의 면책사항 등과 같은 중요한 내용은 굵은 글씨</span>, <span lang=ZH-CN>색채</span>, <span
lang=ZH-CN>부호 등으로 명확하게 표시하거나 별도의 연결화면 등을 통하여 회원이 알아보기 쉽게 처리합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사가 약관을 개정할 경우에는 적용일자 및 개정내용</span>, <span lang=ZH-CN>개정사유 등을 명시하여 최소한
그 적용일</span> 7<span lang=ZH-CN>일 이전부터 게임서비스 내 또는 그 연결화면에 게시하여 회원에게 공지합니다</span>.
<span lang=ZH-CN>다만</span>, <span lang=ZH-CN>변경된 내용이 회원에게 불리하거나 중대한 사항의 변경인 경우에는
그 적용일</span> 30<span lang=ZH-CN>일 이전까지 본문과 같은 방법으로 공지하고 제</span>27<span
lang=ZH-CN>조 제</span>1<span lang=ZH-CN>항의 방법으로 회원에게 통지합니다</span>. <span
lang=ZH-CN>이 경우 개정 전 내용과 개정 후 내용을 명확하게 비교하여 회원이 알기 쉽도록 표시합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사가 약관을 개정할 경우 개정약관 공지 후 개정약관의 적용에 대한 회원의 동의 <span style='letter-spacing:
-.05pt'>여부를 확인합니다</span></span><span style='letter-spacing:-.05pt'>. <span
lang=ZH-CN>회사는 제</span>2<span lang=ZH-CN>항의 공지 또는 통지를 할 경우 회원이 개정약관에 대해</span></span><span
lang=ZH-CN> 동의 또는 거부의 의사표시를 하지 않으면 동의한 것으로 볼 수 있다는 내용도 함께 공지 또는 통지를 하며</span>, <span
lang=ZH-CN>회원이 이 약관 시행일까지 거부의 의사표시를 하지 않는다면 <span style='letter-spacing:-.15pt'>개정약관에
동의한 것으로 볼 수 있습니다</span></span><span style='letter-spacing:-.15pt'>. <span
lang=ZH-CN>회원이 개정약관에 대해 동의하지 않는 경우</span></span><span lang=ZH-CN> 회사 또는 회원은 서비스
이용계약을 해지할 수 있습니다</span>. </span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif;
letter-spacing:-.15pt'>④</span><span style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif;letter-spacing:-.15pt'> <span lang=ZH-CN>회사는 회원이 회사와 이
약관의 내용에 관하여 질의 및 응답을 할 수 있도록 조치를</span></span><span lang=ZH-CN
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 취합니다</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑤</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 「전자상거래 등에서의 소비자보호에 관한 법률」</span>, <span lang=ZH-CN>「약관의 규제에 관한 법률」</span>,
<span lang=ZH-CN>「게임산업진흥에 관한 법률」</span>, <span lang=ZH-CN>「정보통신망이용촉진 및 정보보호 등에 관한
<span style='letter-spacing:-.05pt'>법률」</span></span><span style='letter-spacing:
-.05pt'>, <span lang=ZH-CN>「콘텐츠산업진흥법」 등 관련 법령에 위배하지 않는 범위에서 이 약관을 개정</span></span><span
lang=ZH-CN>할 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>5<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>이용계약의 체결 및 적용</span>)</span></b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>이용계약은 회원이 되고자 하는 자</span>(<span lang=ZH-CN>이하 </span></span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>“</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>가입신청자</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>”</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>라
합니다</span><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>.)<span
lang=ZH-CN>가 이 약관의 내용에 대하여 동의를 한 다음 서비스 이용 신청을 하고</span>, <span lang=ZH-CN>회사가 그
신청에 대해서 승낙함으로써 체결됩니다</span>. </span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 가입신청자의 신청에 대하여 승낙함을 원칙으로 합니다</span>. <span lang=ZH-CN>다만</span>,
<span lang=ZH-CN>회사는 다음 각 호의 어느 하나에 해당하는 이용 신청에 대해서는 승낙을 거절할 수 있습니다</span>.</span></p>

<p class=a style='margin-left:26.0pt;text-indent:-26.0pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 1. <span
lang=ZH-CN>이용신청서 내용을 허위로 기재하거나 이용신청 요건을 충족하지 못한 경우 </span></span></p>

<p class=a style='margin-left:26.0pt;text-indent:-26.0pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 2. <span
lang=ZH-CN>회사가 서비스를 제공하지 않은 국가에서 비정상적이거나 우회적인 방법을 통해 서비스를 이용하는 경우 </span></span></p>

<p class=a style='margin-left:26.0pt;text-indent:-26.0pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 3. <span
lang=ZH-CN>「게임산업진흥에 관한 법률」등 관련 법령에서 금지하는 행위를 할 목적으로 신청 하는 경우 </span></span></p>

<p class=a style='margin-left:25.7pt;text-indent:-25.7pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 4. <span
lang=ZH-CN>사회의 안녕과 질서 또는 미풍양속을 저해할 목적으로 신청한 경우 </span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 5.
<span lang=ZH-CN>부정한 용도로 게임서비스를 이용하고자 하는 경우 </span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 6.
<span lang=ZH-CN>영리를 추구할 목적으로 게임서비스를 이용하고자 하는 경우 </span></span></p>

<p class=a style='margin-left:25.7pt;text-indent:-25.7pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 7. <span
lang=ZH-CN>그 밖에 각 호에 준하는 사유로서 승낙이 부적절하다고 판단되는 경우 </span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 다음 각 호의 어느 하나에 해당하는 경우 그 사유가 해소될 때까지 승낙을 유보할 수 있습니다</span>. </span></p>

<p class=a style='margin-left:22.4pt;text-indent:-22.4pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 1. <span
lang=ZH-CN>회사의 설비에 여유가 없거나</span>, <span lang=ZH-CN>특정 모바일 기기의 지원이 어렵거나</span>,
<span lang=ZH-CN>기술적 장애가 있는 경우 </span></span></p>

<p class=a style='margin-left:25.3pt;text-indent:-25.3pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 2. <span
lang=ZH-CN>서비스 상의 장애 또는 서비스 이용요금</span>, <span lang=ZH-CN>결제수단의 장애가 발생한 경우 </span></span></p>

<p class=a style='margin-left:24.9pt;text-indent:-24.9pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 3. <span
lang=ZH-CN>그 밖의 각 호에 준하는 사유로서 이용신청의 승낙이 어렵다고 판단되는 경우</span></span></p>

<p class=a style='margin-left:24.9pt;text-indent:-24.9pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> </span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>6<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>약관 외 준칙</span>) </span></b><span lang=ZH-CN style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 「전자상거래
등에서의 소비자보호에 관한 법률」</span><span style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>,<span lang=ZH-CN>「약관의 규제에 관한 법률」</span>,<span
lang=ZH-CN>「게임산업진흥에 관한 법률」</span>,<span lang=ZH-CN>「정보통신망이용촉진 및 정보보호 등에 관한 법률」</span>,<span
lang=ZH-CN>「콘텐츠산업진흥법」 등 관련 법령 또는 상 관례에 따릅니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>7<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>운영정책</span>)</span></b><span style='font-size:12.0pt;line-height:
103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>약관을 적용하기 위하여 필요한 사항과 약관에서 구체적 범위를 정하여 위임한 사항을 게임서비스 운영정책</span>(<span
lang=ZH-CN>이하 </span></span><span style='font-size:12.0pt;line-height:103%;
font-family:"Arial Unicode MS",serif'>“</span><span lang=ZH-CN
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>운영정책</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>”</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>이라
합니다</span><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>)<span
lang=ZH-CN>으로 정할 수 있습니다</span>. </span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 운영정책의 내용을 회원이 알 수 있도록 게임서비스 내 또는 그 연결화면에 게시합니다</span>. </span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif;
letter-spacing:-.05pt'>③</span><span style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif;letter-spacing:-.05pt'> <span lang=ZH-CN>운영정책을 개정하는 경우에는
제</span>4<span lang=ZH-CN>조 제</span>2<span lang=ZH-CN>항의 절차에 따릅니다</span>. <span
lang=ZH-CN>다만</span>, <span lang=ZH-CN>운영정책 개정</span></span><span lang=ZH-CN
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif;letter-spacing:
-.3pt'>내용이 다음 각 호의 어느 하나에 해당하는 경우에는 제</span><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif;letter-spacing:-.3pt'>2<span
lang=ZH-CN>항의 방법으로 사전에 공지합니다</span>. </span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 1.
<span lang=ZH-CN>약관에서 구체적으로 범위를 정하여 위임한 사항을 개정하는 경우 </span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 2.
<span lang=ZH-CN>회원의 권리</span></span><span style='font-size:12.0pt;line-height:
103%;font-family:"Arial Unicode MS",serif'>·</span><span lang=ZH-CN
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>의무와 관련 없는 사항을
개정하는 경우 </span></p>

<p class=a style='margin-left:21.85pt;text-indent:-21.85pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 3. <span
lang=ZH-CN>운영정책의 내용이 약관에서 정한 내용과 근본적으로 다르지 않고 회원이 예측할 수 있는 범위 내에서 운영정책을 개정하는 경우</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a align=center style='text-align:center;word-break:normal'><b><span
lang=ZH-CN style='font-size:14.0pt;line-height:103%;font-family:"휴먼명조",serif'>제</span></b><b><span
style='font-size:14.0pt;line-height:103%;font-family:"휴먼명조",serif'>2<span
lang=ZH-CN>장 개인정보 관리</span></span></b></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>8<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>개인정보의 보호 및 사용</span>)</span></b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 관련 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력하며</span>, <span
lang=ZH-CN>개인정보의 보호 및 사용에 대해서는 관련 법령 및 회사의 개인정보처리방침에 따릅니다</span>. <span
lang=ZH-CN>다만</span>, <span lang=ZH-CN>회사가 제공하는 서비스 이외의 링크된 서비스에서는 회사의 개인정보처리방침이
적용되지 않습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>서비스의 특성에 따라 회원의 개인정보와 관련이 없는 별명</span></span><span style='font-size:
12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>‧</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>캐릭터
사진</span><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>‧</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>상태정보
등 자신을 소개하는 내용이 공개될 수 있습니다</span><span style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 관련 법령에 의해 관련 국가기관 등의 요청이 있는 경우를 제외하고는 회원의 개인정보를 본인의 동의 없이 타인에게 제공하지
않습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>④</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 회원의 귀책사유로 개인정보가 유출되어 발생한 피해에 대하여 책임을 지지 않습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a align=center style='text-align:center;word-break:normal'><b><span
lang=ZH-CN style='font-size:14.0pt;line-height:103%;font-family:"휴먼명조",serif'>제</span></b><b><span
style='font-size:14.0pt;line-height:103%;font-family:"휴먼명조",serif'>3<span
lang=ZH-CN>장 이용계약 당사자의 의무</span></span></b></p>

<p class=a align=center style='text-align:center;word-break:normal'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>9<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>회사의 의무</span>)</span></b><span style='font-size:12.0pt;line-height:
103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 관련 법령</span>, <span lang=ZH-CN>이 약관에서 정하는 권리의 행사 및 의무의 이행을 신의에 따라
성실하게 준수합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 회원이 안전하게 서비스를 이용할 수 있도록 개인정보</span>(<span lang=ZH-CN>신용정보 포함</span>)<span
lang=ZH-CN>보호를 위해 보안시스템을 갖추어야 하며 개인정보처리방침을 공시하고 준수합니다</span>. <span lang=ZH-CN>회사는
이 약관 및 개인정보처리방침에서 정한 경우를 제외하고는 회원의 개인정보가 제</span>3<span lang=ZH-CN>자에게 공개 또는 제공되지
않도록 합니다</span>. </span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 계속적이고 안정적인 서비스의 제공을 위하여 서비스 개선을 하던 중 설비에 장애가 생기거나 데이터 등이 멸실</span></span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>·</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>훼손된
때에는 천재지변</span><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>,
<span lang=ZH-CN>비상사태</span>, <span lang=ZH-CN>현재의 기술로는 해결이 불가능한 장애나 결함 등 부득이한 사유가
없는 한 지체 없이 이를 수리 또는 복구하도록 최선의 노력을 다합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>10<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>회원의 의무</span>) </span></b><span style='font-size:12.0pt;line-height:
103%;font-family:"Arial Unicode MS",serif'>①</span><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'> <span lang=ZH-CN>회원은 회사에서 제공하는 서비스의
이용과 관련하여 다음 각 호에 해당하는 행위를 해서는 안 됩니다</span>.</span></p>

<p class=a style='margin-left:17.45pt;text-indent:-17.45pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 1. <span
lang=ZH-CN>이용신청 또는 회원 정보 변경 시 허위사실을 기재하는 행위</span></span></p>

<p class=a style='margin-left:21.2pt;text-indent:-21.2pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 2. <span
lang=ZH-CN>회사가 제공하지 않는 서비스나 비정상적인 방법을 통해 사이버 자산</span>(ID, <span lang=ZH-CN>캐릭터</span>,
<span lang=ZH-CN>아이템</span>, <span lang=ZH-CN>게임 머니 등</span>)<span lang=ZH-CN>을
매매 또는 증여하거나</span>, <span lang=ZH-CN>이를 취득하여 이용하는 행위</span></span></p>

<p class=a style='margin-left:21.25pt;text-indent:-21.25pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 3. <span
lang=ZH-CN>회사의 직원이나 운영자를 가장하거나 타인의 명의를 도용하여 글을 게시하거나 메일을 발송하는 행위</span>, <span
lang=ZH-CN>타인으로 가장하거나 타인과의 관계를 허위로 명시하는 행위</span></span></p>

<p class=a style='margin-left:22.15pt;text-indent:-22.15pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 4. <span
lang=ZH-CN>타인의 신용카드</span></span><span style='font-size:12.0pt;line-height:
103%;font-family:"Arial Unicode MS",serif'>⋅</span><span lang=ZH-CN
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>유</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>/<span
lang=ZH-CN>무선 전화</span></span><span style='font-size:12.0pt;line-height:103%;
font-family:"Arial Unicode MS",serif'>⋅</span><span lang=ZH-CN
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>은행 계좌 등을 도용하여
유료 콘텐츠를 구매하는 행위</span><span style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>, <span lang=ZH-CN>다른 회원의</span> ID <span lang=ZH-CN>및
비밀번호를 부정사용하는 행위</span></span></p>

<p class=a style='margin-left:21.2pt;text-indent:-21.2pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 5. <span
lang=ZH-CN>다른 회원의 개인정보를 무단으로 수집</span></span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>⋅</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>저장</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⋅</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>게시
또는 유포하는 행위</span></p>

<p class=a style='margin-left:22.2pt;text-indent:-22.2pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 6. <span
lang=ZH-CN>도박 등 사행행위를 하거나 유도하는 행위</span>, <span lang=ZH-CN>음란</span></span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⋅</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>저속한
정보를 교류</span><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⋅</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>게재하거나
음란 사이트를 연결</span><span style='font-size:12.0pt;line-height:103%;font-family:
"휴먼명조",serif'>(<span lang=ZH-CN>링크</span>)<span lang=ZH-CN>하는 행위</span>, <span
lang=ZH-CN>수치심</span></span><span style='font-size:12.0pt;line-height:103%;
font-family:"Arial Unicode MS",serif'>⋅</span><span lang=ZH-CN
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>혐오감 또는 공포심을 일으키는
말</span><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⋅</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>소리</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⋅</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>글</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⋅</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>그림</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⋅</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>사진
또는 영상을 타인에게 전송 또는 유포하는 행위 등 서비스를 불건전하게 이용하는 행위</span></p>

<p class=a style='margin-left:21.95pt;text-indent:-21.95pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 7. <span
lang=ZH-CN>서비스를 무단으로 영리</span>, <span lang=ZH-CN>영업</span>, <span lang=ZH-CN>광고</span>,
<span lang=ZH-CN>홍보</span>, <span lang=ZH-CN>정치활동</span>, <span lang=ZH-CN>선거운동
등 본래의 용도 이외의 용도로 이용하는 행위</span></span></p>

<p class=a style='margin-left:21.5pt;text-indent:-21.5pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 8. <span
lang=ZH-CN>회사의 서비스를 이용하여 얻은 정보를 무단으로 복제</span></span><span style='font-size:
12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>·</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>유통</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>·</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>조장하거나
상업적으로 이용하는 행위</span><span style='font-size:12.0pt;line-height:103%;font-family:
"휴먼명조",serif'>, <span lang=ZH-CN>알려지거나 알려지지 않은 버그를 악용하여 서비스를 이용하는 행위</span></span></p>

<p class=a style='margin-left:21.5pt;text-indent:-21.5pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 9. <span
lang=ZH-CN>타인을 기망하여 이득을 취하는 행위</span>, <span lang=ZH-CN>회사의 서비스의 이용과 관련하여 타인에게 피해를
입히는 행위</span></span></p>

<p class=a style='margin-left:28.1pt;text-indent:-28.1pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 10. <span
lang=ZH-CN>회사나 타인의 지적재산권 또는 초상권을 침해하는 행위</span>, <span lang=ZH-CN>타인의 명예를 훼손하거나
손해를 가하는 행위</span></span></p>

<p class=a style='margin-left:27.7pt;text-indent:-27.7pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 11. <span
lang=ZH-CN>법령에 의하여 전송 또는 게시가 금지된 정보</span>(<span lang=ZH-CN>컴퓨터 프로그램</span>)<span
lang=ZH-CN>나 컴퓨터 소프트웨어</span></span><span style='font-size:12.0pt;line-height:
103%;font-family:"Arial Unicode MS",serif'>⋅</span><span lang=ZH-CN
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>하드웨어 또는 전기통신장비의
정상적인 작동을 방해</span><span style='font-size:12.0pt;line-height:103%;font-family:
"Arial Unicode MS",serif'>⋅</span><span lang=ZH-CN style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>파괴할 목적으로 고안된 바이러스</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⋅</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>컴퓨터
코드</span><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⋅</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>파일</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⋅</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>프로그램
등을 고의로 전송</span><span style='font-size:12.0pt;line-height:103%;font-family:
"Arial Unicode MS",serif'>⋅</span><span lang=ZH-CN style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>게시</span><span style='font-size:
12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⋅</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>유포
또는 사용하는 행위</span></p>

<p class=a style='margin-left:27.55pt;text-indent:-27.55pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 12. <span
lang=ZH-CN>회사로부터 특별한 권리를 부여 받지 않고 애플리케이션을 변경하거나</span>, <span lang=ZH-CN>애플리케이션에
다른 프로그램을 추가</span></span><span style='font-size:12.0pt;line-height:103%;
font-family:"Arial Unicode MS",serif'>⋅</span><span lang=ZH-CN
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>삽입하거나</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>, <span
lang=ZH-CN>서버를 해킹</span></span><span style='font-size:12.0pt;line-height:103%;
font-family:"Arial Unicode MS",serif'>⋅</span><span lang=ZH-CN
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>역설계하거나</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>, <span
lang=ZH-CN>소스 코드나 애플리케이션 데이터를 유출</span></span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>⋅</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>변경하거나</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>, <span
lang=ZH-CN>별도의 서버를 구축하거나</span>, <span lang=ZH-CN>웹사이트의 일부분을 임의로 변경</span></span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⋅</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>도용하여
회사를 사칭하는 행위</span></p>

<p class=a style='margin-left:27.2pt;text-indent:-27.2pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 13. <span
lang=ZH-CN>그 밖에 관련 법령에 위반되거나 선량한 풍속 기타 사회통념에 반하는 행위 </span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회원의 계정 및 모바일 기기에 관한 관리 책임은 회원에게 있으며</span>, <span lang=ZH-CN>이를 타인이 이용하도록
하게 하여서는 안 됩니다</span>. <span lang=ZH-CN>모바일 기기의 관리 부실이나 타인에게 이용을 승낙함으로 인해 발생하는 손해에
대해서 회사는 책임을 지지 않습니다</span>. </span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif;
letter-spacing:-.15pt'>③</span><span style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif;letter-spacing:-.15pt'> <span lang=ZH-CN>회원은 각 오픈마켓에서 부정한
결제가 이루어지지 아니하도록 결제 비밀번호 기능을</span></span><span lang=ZH-CN style='font-size:
12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 설정하고 관리하여야 합니다</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>. <span
lang=ZH-CN>회원의 부주의로 인하여 발생하는 손해에 대해 회사는 책임지지 않습니다</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>④</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 다음 각 호의 행위의 구체적인 내용을 정할 수 있으며</span>, <span lang=ZH-CN>회원은 이를 따라야
합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 
1. <span lang=ZH-CN>회원의 계정명</span>, <span lang=ZH-CN>캐릭터명</span>, <span
lang=ZH-CN>길드명</span>, <span lang=ZH-CN>기타 게임 내에서 사용하는 명칭</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 
2. <span lang=ZH-CN>채팅내용과 방법</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 
3. <span lang=ZH-CN>게시판이용 및 서비스이용 방법</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 
4. <span lang=ZH-CN>카카오</span>, <span lang=ZH-CN>페이스북</span>, <span lang=ZH-CN>구글플러스
등 외부 모바일 플랫폼 제휴 서비스 정책</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a align=center style='text-align:center;word-break:normal'><b><span
lang=ZH-CN style='font-size:14.0pt;line-height:103%;font-family:"휴먼명조",serif'>제</span></b><b><span
style='font-size:14.0pt;line-height:103%;font-family:"휴먼명조",serif'>4<span
lang=ZH-CN>장 서비스 이용 및 이용제한</span></span></b></p>

<p class=a align=center style='text-align:center;word-break:normal'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>11<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>서비스의 제공</span>)</span></b><span style='font-size:12.0pt;line-height:
103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 제</span>5<span lang=ZH-CN>조의 규정에 따라 이용계약이 완료된 회원에게 그 즉시 서비스를 이용할
수 있도록 합니다</span>. <span lang=ZH-CN>다만</span>, <span lang=ZH-CN>일부 서비스의 경우 회사의 필요에
따라 지정된 일자부터 서비스를 개시할 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 회원에게 게임서비스를 제공할 때 이 약관에 정하고 있는 서비스를 포함하여 기타 부가적인 서비스를 함께 제공할 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 회원의 등급을 구분하고 이용시간</span>, <span lang=ZH-CN>이용횟수</span>, <span
lang=ZH-CN>제공 서비스의 범위 등을 세분화하여 이용에 차등을 둘 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>12<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>서비스의 이용</span>)</span></b><span style='font-size:12.0pt;line-height:
103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>게임서비스는 회사의 영업방침에 따라 정해진 시간 동안 제공합니다</span>. <span lang=ZH-CN>회사는 게임서비스
제공시간을 게임 애플리케이션 초기화면이나 게임서비스 공지사항에 적절한 방법으로 안내합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>제</span>1<span lang=ZH-CN>항에도 불구하고 회사는 다음 각 호의 경우에는 서비스의 전부 또는 일부를 일시
정지할 수 있습니다</span>. <span lang=ZH-CN>이 경우 회사는 사전에 그 정지의 사유와 기간을 게임 애플리케이션 초기화면이나
게임서비스 공지사항 등에 공지합니다</span>. <span lang=ZH-CN>다만</span>, <span lang=ZH-CN>사전에 공지할
수 없는 부득이한 사정이 있는 경우 사후에 공지할 수 있습니다</span>.</span></p>

<p class=a style='margin-left:21.75pt;text-indent:-21.75pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 1. <span
lang=ZH-CN>시스템 정기점검</span>, <span lang=ZH-CN>서버의 증설 및 교체</span>, <span
lang=ZH-CN>네트워크의 불안정 등의 시스템 운영상 필요한 경우</span></span></p>

<p class=a style='margin-left:22.05pt;text-indent:-22.05pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 2. <span
lang=ZH-CN>정전</span>, <span lang=ZH-CN>서비스 설비의 장애</span>, <span lang=ZH-CN>서비스 이용폭주</span>,
<span lang=ZH-CN>기간통신사업자의 설비 보수 또는 점검 등으로 인하여 정상적인 서비스 제공이 불가능한 경우</span></span></p>

<p class=a style='margin-left:22.85pt;text-indent:-22.85pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 3. <span
lang=ZH-CN>전시</span>, <span lang=ZH-CN>사변</span>, <span lang=ZH-CN>천재지변 또는 이에 준하는
국가비상사태 등 회사가 통제할 수 없는 상황이 발생한 경우</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 모바일 기기를 위한 전용 애플리케이션 또는 네트워크를 이용하여 서비스를 <span style='letter-spacing:
-.1pt'>제공합니다</span></span><span style='letter-spacing:-.1pt'>. <span
lang=ZH-CN>회원은 애플리케이션을 다운로드하여 설치하거나 네트워크를 이용하여 무료</span></span><span
lang=ZH-CN> 또는 유료로 서비스를 이용할 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>④</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>유료 콘텐츠의 경우에는 해당 서비스에 명시된 요금을 지급하여야 이용할 수 있습니다</span>. <span
lang=ZH-CN>네트워크를 통해 애플리케이션을 다운로드하거나 서비스를 이용하는 경우에는 가입한 이동통신사에서 정한 별도의 요금이 발생할 수
있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑤</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>다운로드하여 설치한 애플리케이션 또는 네트워크를 통해 이용하는 서비스의 경우에는 모바일 기기 또는 이동통신사의 특성에 맞도록
제공됩니다</span>. <span lang=ZH-CN>모바일 기기의 변경</span></span><span style='font-size:
12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>·</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>번호
변경 또는 해외 로밍의 경우에는 콘텐츠의 전부 또는 일부의 이용이 불가능할 수 있으며</span><span style='font-size:
12.0pt;line-height:103%;font-family:"휴먼명조",serif'>, <span lang=ZH-CN>이 경우 회사는 책임을
지지 않습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑥</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>다운로드하여 설치한 애플리케이션 또는 네트워크를 통해 이용하는 서비스의 경우에는 백그라운드 작업이 진행될 수 있습니다</span>.
<span lang=ZH-CN>이 경우 모바일 기기 또는 이동통신사의 특성에 맞도록 추가요금이 발생할 수 있으며 이와 관련하여 회사는 책임을 지지
않습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>13<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>서비스의 변경 및 중단</span>)</span></b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 원활한 게임서비스 제공을 위해 운영상 또는 기술상의 필요에 따라 서비스를 변경할 수 있으며</span>, <span
lang=ZH-CN>변경 전에 해당 내용을 게임서비스 내에 공지합니다</span>. <span lang=ZH-CN>다만</span>, <span
lang=ZH-CN>버그</span></span><span style='font-size:12.0pt;line-height:103%;
font-family:"Arial Unicode MS",serif'>·</span><span lang=ZH-CN
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>오류 등의 수정이나 긴급
업데이트 등 부득이하게 변경할 필요가 있는 경우 또는 중대한 변경에 해당하지 않는 경우에는 사후에 공지할 수 있습니다</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 영업양도</span></span><span style='font-size:12.0pt;line-height:
103%;font-family:"Arial Unicode MS",serif'>·</span><span lang=ZH-CN
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>분할</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>·</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>합병
등에 따른 영업의 폐지</span><span style='font-size:12.0pt;line-height:103%;font-family:
"휴먼명조",serif'>, <span lang=ZH-CN>게임제공의 계약만료</span>, <span lang=ZH-CN>당해 게임서비스의 현저한
수익 악화 등 경영상의 중대한 사유로 인해 게임서비스를 지속하기 어려운 경우에는 서비스 전부를 중단할 수 있습니다</span>. <span
lang=ZH-CN>이 경우 중단일자</span> 30<span lang=ZH-CN>일 이전까지 중단일자</span></span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>·</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>중단사유</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>·</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>보상조건
등을 게임 애플리케이션 초기화면 또는 그 연결화면을 통해 공지하고 제</span><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>27<span lang=ZH-CN>조 제</span>1<span
lang=ZH-CN>항의 방법으로 회원에게 통지합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>제</span>2<span lang=ZH-CN>항의 경우 회사는 사용하지 않았거나 사용기간이 남아 있는 유료 아이템에 대해</span> 
<span lang=ZH-CN>제</span>24<span lang=ZH-CN>조 제</span>3<span lang=ZH-CN>항에 따라 환급합니다</span>.
</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>14<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>정보의 수집 등</span>)</span></b><span style='font-size:12.0pt;line-height:
103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 회원간에 이루어지는 채팅 내용을 저장</span></span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>·</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>보관할
수 있으며 이 정보는 회사만이 보유합니다</span><span style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>. <span lang=ZH-CN>회사는 회원간의 분쟁 조정</span>, <span
lang=ZH-CN>민원 처리 또는 게임 질서의 유지를 위한 경우에 한하여</span>, <span lang=ZH-CN>제</span>3<span
lang=ZH-CN>자는 법령에 따라 권한이 부여된 경우에 한하여 이 정보를 열람할 수 있습니다</span>. </span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사 또는 제</span>3<span lang=ZH-CN>자가 제</span>1<span lang=ZH-CN>항에 따라 채팅
정보를 열람할 경우 회사는 사전에 열람의 사유 및 범위를 해당 회원에게 고지합니다</span>. <span lang=ZH-CN>다만</span>,
<span lang=ZH-CN>제</span>10<span lang=ZH-CN>조 제</span>1<span lang=ZH-CN>항에 따른 금지행위의
조사</span></span><span style='font-size:12.0pt;line-height:103%;font-family:
"Arial Unicode MS",serif'>·</span><span lang=ZH-CN style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>처리</span><span style='font-size:
12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>·</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>확인
또는 그 행위로 인한 피해 구제와 관련하여 이 정보를 열람해야 할 경우에는 사후에 고지할 수 있습니다</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 서비스의 원활하고 안정적인 운영 및 서비스 품질의 개선을 위하여 회원의 <span style='letter-spacing:
-.1pt'>개인정보를 제외한 회원의 모바일 기기 정보</span></span><span style='letter-spacing:-.1pt'>(<span
lang=ZH-CN>설정</span>,<span lang=ZH-CN>사양</span>,<span lang=ZH-CN>운영체제</span>, <span
lang=ZH-CN>버전 등</span>)<span lang=ZH-CN>를 수집 </span></span></span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif;
letter-spacing:-.1pt'>‧</span><span style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif;letter-spacing:-.1pt'> <span lang=ZH-CN>활용</span></span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>할
수 있습니다</span><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>④</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 서비스 개선 및 회원 대상 서비스 소개 등을 위한 목적으로 회원에게 추가정보를 요청할 수 있습니다</span>. <span
lang=ZH-CN>이 요청에 대해 회원은 승낙하거나 거절할 수 있으며</span>, <span lang=ZH-CN>회<span
style='letter-spacing:-.1pt'>사가 이 요청을 할 경우에는 회원이 이 요청을 거절할 수 있다는 뜻을 함께 고지합니다</span></span><span
style='letter-spacing:-.1pt'>.</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>15<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>광고의 제공</span>)</span></b><span style='font-size:12.0pt;line-height:
103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 서비스의 운영과 관련하여 게임서비스 내에 광고를 게재할 수 있습니다</span>. <span lang=ZH-CN>또한
수신에 동의한 회원에 한하여 전자우편</span>, <span lang=ZH-CN>문자서비스</span>(LMS/SMS), <span
lang=ZH-CN>푸시메시지</span>(Push Notification) <span lang=ZH-CN>등의 방법으로 광고성 정보를 전송할
수 있습니다</span>. <span lang=ZH-CN>이 경우 회원은 언제든지 수신을 거절할 수 있으며</span>, <span
lang=ZH-CN>회사는 회원의 수신 거절 시 광고성 정보를 발송하지 아니합니다</span>.  </span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사가 제공하는 서비스 중의 배너 또는 링크 등을 통해 타인이 제공하는 광고나 서비스에 연결될 수 있습니다</span>. </span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>제</span>2<span lang=ZH-CN>항에 따라 타인이 제공하는 광고나 서비스에 연결될 경우 해당 영역에서 제공하는
서비스는 회사의 서비스 영역이 아니므로 회사가 신뢰성</span>, <span lang=ZH-CN>안정성 등을 보장하지 않으며</span>, <span
lang=ZH-CN>그로 인한 회원의 손해에 대하여도 회사는 책임을 지지 않습니다</span>. <span lang=ZH-CN>다만</span>,
<span lang=ZH-CN>회사가 고의 또는 중과실로 손해의 발생을 용이하게 하거나 손해 방지를 위한 조치를 취하지 아니한 경우에는 그러하지
아니합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>16<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>저작권 등의 귀속</span>) </span></b><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사가 제작한 게임서비스 내의 콘텐츠에 대한 저작권과 기타 지적재산권은 회사에 귀속합니다</span><span
style='background:white'>.</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회원은 회사가 제공하는 게임서비스를 이용하여 얻은 정보 중에서 회사 또는 제공업체에 지적재산권이 귀속된 정보를 회사 또는 제공업체의
사전 동의 없이 복제</span></span><span style='font-size:12.0pt;line-height:103%;
font-family:"Arial Unicode MS",serif'>⋅</span><span lang=ZH-CN
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>전송 등의 방법</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>(<span
lang=ZH-CN>편집</span>, <span lang=ZH-CN>공표</span>, <span lang=ZH-CN>공연</span>, <span
lang=ZH-CN>배포</span>, <span lang=ZH-CN>방송</span>, 2<span lang=ZH-CN>차적 저작물 작성 등을
포함합니다</span>. <span lang=ZH-CN>이하 같습니다</span>)<span lang=ZH-CN>에 의하여 영리목적으로 이용하거나
타인에게 이용하게 하여서는 안 됩니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회원은 게임 내에서 보여지거나 게임서비스와 관련하여 회원 또는 다른 이용자가 게임 애플리케이션 또는 게임서비스를 통해 업로드
또는 전송하는 대화 텍스트를 포함한 커뮤니케이션</span>, <span lang=ZH-CN>이미지</span>, <span
lang=ZH-CN>사운드 및 모든 자료 및 정보</span>(<span lang=ZH-CN>이하 </span></span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>“</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>이용자
콘텐츠</span><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>”</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>라
합니다</span><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>.)<span
lang=ZH-CN>에 대하여 회사가 다음과 같은 방법과 조건으로 이용하는 것을 허락합니다</span>.</span></p>

<p class=a style='margin-left:16.25pt;text-indent:-16.25pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>1. <span
lang=ZH-CN>해당 이용자 콘텐츠를 이용</span>, <span lang=ZH-CN>편집 형식의 변경 및 기타 변형하는 것</span>(<span
lang=ZH-CN>공표</span>, <span lang=ZH-CN>복제</span>, <span lang=ZH-CN>공연</span>, <span
lang=ZH-CN>전송</span>, <span lang=ZH-CN>배포</span>, <span lang=ZH-CN>방송</span>, 2<span
lang=ZH-CN>차적 저작물 작성 등 어떠한 형태로든 이용 가능하며</span>, <span lang=ZH-CN>이용기간과 지역에는 제한이
없음</span>)</span></p>

<p class=a style='margin-left:18.25pt;text-indent:-18.25pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>2. <span
lang=ZH-CN>이용자 콘텐츠를 제작한 이용자의 사전 동의 없이 거래를 목적으로 이용자 콘텐츠를 판매</span>, <span
lang=ZH-CN>대여</span>, <span lang=ZH-CN>양도 행위를 하지 않음</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>④</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>게임 내에서 보여지지 않고 게임서비스와 일체화되지 않은 회원의 이용자 콘텐츠</span>(<span lang=ZH-CN>예컨대</span>,
<span lang=ZH-CN>일반게시판 등에서의 게시물</span>)<span lang=ZH-CN>에 대하여 회사는 회원의 명시적인 동의가 없이
이용하지 않으며</span>, <span lang=ZH-CN>회원은 언제든지 이러한 이용자 콘텐츠를 삭제할 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑤</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 회원이 게시하거나 등록하는 서비스 내의 게시물에 대해 제</span>10<span lang=ZH-CN>조 제</span>1<span
lang=ZH-CN>항에 따른 금지행위에 해당된다고 판단되는 경우에는 사전 통지 없이 이를 삭제 또는 이동하거나 그 등록을 거절할 수 있습니다</span>.
</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑥</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사가 운영하는 게시판 등에 게시된 정보로 인하여 법률상 이익이 침해된 회원은 회사에 해당 정보의 삭제 또는 반박 내용의 게재를
요청할 수 있습니다</span>. <span lang=ZH-CN>이 경우 회사는 신속하게 필요한 조치를 취하고 이를 신청인에게 통지합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑦</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>이 조는 회사가 게임서비스를 운영하는 동안 유효하며</span>, <span lang=ZH-CN>회원 탈퇴 후에도 지속적으로
적용됩니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>17<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>유료 콘텐츠의 구매</span>, <span lang=ZH-CN>사용기간 및 이용</span>)</span></b><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> </span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>게임서비스 내에서 회원이 구매한 유료 콘텐츠는 해당 애플리케이션을 다운로드 받거나 설치한 모바일 기기에서만 이용할 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회원이 구매한 유료 콘텐츠의 이용기간은 구매 시 명시된 기간에 따릅니다</span>. <span lang=ZH-CN>다만</span>,
<span lang=ZH-CN>제</span>13<span lang=ZH-CN>조 제</span>2<span lang=ZH-CN>항에 따라 서비스
중단이 이루어지는 경우 기간의 정함이 없는 유료 콘텐츠의 이용기간은 서비스 중단 공지 시 공지된 서비스의 중단일자까지로 합니다</span>. </span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>18<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>회원에 대한 서비스 이용제한</span>) </span></b><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회원은 제</span>10<span lang=ZH-CN>조에 따른 회원의 의무를 위반하는 행위를 하여서는 안 되며</span>,
<span lang=ZH-CN>해당 행위를 하는 경우에 회사는 다음 각 호의 구분에 따른 회원의 서비스 이용제한</span>, <span
lang=ZH-CN>관련 정보</span>(<span lang=ZH-CN>글</span>, <span lang=ZH-CN>사진</span>, <span
lang=ZH-CN>영상 등</span>) <span lang=ZH-CN>삭제 및 기타의 조치를 포함한 이용제한 조치를 할 수 있습니다</span>.
<span lang=ZH-CN>이용제한 조치가 이루어지는 구체적인 사유 및 절차는 제</span>19<span lang=ZH-CN>조 제</span>1<span
lang=ZH-CN>항에 따라 개별 게임의 운영정책에서 정합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 1.
<span lang=ZH-CN>일부 권한 제한</span> : <span lang=ZH-CN>일정기간 채팅 등 일정 권한을 제한</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 2.
<span lang=ZH-CN>캐릭터 이용제한</span> : <span lang=ZH-CN>일정기간 또는 영구히 회원 캐릭터의 이용을 제한</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 3.
<span lang=ZH-CN>계정 이용제한</span> : <span lang=ZH-CN>일정기간 또는 영구히 회원 계정의 이용을 제한</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 4.
<span lang=ZH-CN>회원 이용제한</span> : <span lang=ZH-CN>일정기간 또는 영구히 회원의 게임서비스 이용을 제한</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>제</span>1<span lang=ZH-CN>항의 이용제한이 정당한 경우에 회사는 이용제한으로 인하여 회원이 입은 손해를
배상하지 않습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 다음 각 호의 사유에 대한 조사가 완료될 때까지 해당 계정의 서비스 이용을 정지할 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 1.
<span lang=ZH-CN>계정이 해킹 또는 도용당했다는 정당한 신고가 접수된 경우</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 2.
<span lang=ZH-CN>불법프로그램 사용자 또는 작업장 등 위법행위자로 의심되는 경우</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 3.
<span lang=ZH-CN>그 밖에 각 호에 준하는 사유로 서비스 이용의 잠정조치가 필요한 경우</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>④</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>제</span>3<span lang=ZH-CN>항의 조사가 완료된 후</span>, <span lang=ZH-CN>유료 게임서비스의
경우에는 정지된 시간만큼 회원의 이용시간을 연장하거나 그에 상당하는 유료서비스 또는 캐쉬 등으로 보상합니다</span>. <span
lang=ZH-CN>다만</span>, <span lang=ZH-CN>회원이 제</span>3<span lang=ZH-CN>항 각 호의 사유에
해당하는 경우에는 그러하지 아니합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>19<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>이용제한 조치의 사유와 절차</span>)</span></b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 제</span>18<span lang=ZH-CN>조 제</span>1<span lang=ZH-CN>항에 따른 이용제한
조치의 구체적인 사유 및 절차를 제</span>10<span lang=ZH-CN>조 제</span>1<span lang=ZH-CN>항에 따른 금지행위의
내용</span></span><span style='font-size:12.0pt;line-height:103%;font-family:
"Arial Unicode MS",serif'>·</span><span lang=ZH-CN style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>정도</span><span style='font-size:
12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>·</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>횟수</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>·</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>결과
등을 고려하여 운영정책으로 정합니다</span><span style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사가 제</span>18<span lang=ZH-CN>조 제</span>1<span lang=ZH-CN>항에서 정한 이용제한
조치를 하는 경우에는 다음 각 호의 사항을 회원에게 사전 통지합니다</span>. <span lang=ZH-CN>다만</span>, <span
lang=ZH-CN>긴급히 조치할 필요가 있는 경우에는 사후에 통지할 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 1.
<span lang=ZH-CN>이용제한 조치의 사유</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 2.
<span lang=ZH-CN>이용제한 조치의 유형 및 기간</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 3.
<span lang=ZH-CN>이용제한 조치에 대한 이의신청 방법</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>20<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>이용제한 조치에 대한 이의신청 절차</span>) </span></b><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회원이 회사의 이용제한 조치에 불복하고자 할 때에는 이 조치의 통지를 받은 날부터</span> 14<span
lang=ZH-CN>일 이내에 불복 이유를 기재한 이의 신청서를 서면</span>, <span lang=ZH-CN>전자우편 또는 이에 준하는 방법으로
회사에 제출하여야 합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 제</span>1<span lang=ZH-CN>항의 이의신청서를 접수한 날부터</span> 15<span
lang=ZH-CN>일 이내에 불복 이유에 대하여 서면</span>, <span lang=ZH-CN>전자우편 또는 이에 준하는 방법으로 답변합니다</span>.
<span lang=ZH-CN>다만</span>, <span lang=ZH-CN>회사는 이 기간 내에 답변이 어려운 경우에는 그 사유와 처리일정을
통지합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 불복 이유가 타당한 경우에는 이에 따른 조치를 취합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a align=center style='text-align:center;word-break:normal'><b><span
lang=ZH-CN style='font-size:14.0pt;line-height:103%;font-family:"휴먼명조",serif'>제</span></b><b><span
style='font-size:14.0pt;line-height:103%;font-family:"휴먼명조",serif'>5<span
lang=ZH-CN>장 청약철회</span>, <span lang=ZH-CN>과오납금의 환급 및 이용계약의 해지</span></span></b></p>

<p class=a align=center style='text-align:center;word-break:normal'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>21<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>대금결제</span>) </span></b><span style='font-size:12.0pt;line-height:
103%;font-family:"Arial Unicode MS",serif'>①</span><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'> <span lang=ZH-CN>콘텐츠에 대한 구매 대금의 부과와
납부는 원칙적으로 이동통신사나 오픈마켓 사업자 등에서 정하는 정책이나 방법에 따릅니다</span>. <span lang=ZH-CN>또한 각 결제수단별
한도가 회사나 오픈마켓 사업자가 정하는 정책 또는</span>  <span lang=ZH-CN>정부의 방침에 따라 부여되거나 조정될 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>콘텐츠의 구매대금을 외화로 결제하는 경우에는 환율</span></span><span style='font-size:
12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>‧</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>수수료
등으로 인하여 실제 청구금액이 서비스의 상점 등에서 표시된 가격과 달라질 수 있습니다</span><span style='font-size:
12.0pt;line-height:103%;font-family:"휴먼명조",serif'>. </span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>22<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>청약 철회 등</span>)</span></b><span style='font-size:12.0pt;line-height:
103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사와 유료 콘텐츠의 구매에 관한 계약을 체결한 회원은 구매계약일과 콘텐츠 이용 가능일 중 늦은 날부터</span> 7<span
lang=ZH-CN>일 이내에 별도의 수수료</span></span><span style='font-size:12.0pt;line-height:
103%;font-family:"Arial Unicode MS",serif'>‧</span><span lang=ZH-CN
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>위약금 등의 부담 없이
청약철회를 할 수 있습니다</span><span style='font-size:12.0pt;line-height:103%;font-family:
"휴먼명조",serif'>. </span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회원은 다음 각 호에 해당하는 경우에는 회사의 의사에 반하여 제</span>1<span lang=ZH-CN>항에 따른 청약철회를
할 수 없습니다</span>. <span lang=ZH-CN>다만</span>, <span lang=ZH-CN>가분적 콘텐츠로 구성된 구매계약의
경우에는 가분적 콘<span style='letter-spacing:-.1pt'>텐츠 중 다음 각 호에 해당하지 아니하는 나머지 부분에 대하여는
그러하지 아니합니다</span></span><span style='letter-spacing:-.1pt'>.</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 1.
<span lang=ZH-CN>구매 즉시 사용되거나 적용되는 유료 콘텐츠</span></span></p>

<p class=a style='margin-left:15.6pt;text-indent:-15.6pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 2. <span
lang=ZH-CN>추가혜택이 제공되는 경우에 그 추가 혜택이 사용된 콘텐츠</span></span></p>

<p class=a style='margin-left:21.25pt;text-indent:-21.25pt'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> 3. <span
lang=ZH-CN>개봉행위를 사용으로 볼 수 있거나 개봉 시 효용이 결정되는 콘텐츠의 개봉행위가 있는 경우</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 제</span>2<span lang=ZH-CN>항 각 호의 규정에 따라 청약철회가 불가능한 콘텐츠의 경우에는 그 사실을
회원이 쉽게 알 수 있는 곳에 명확하게 표시하고</span>, <span lang=ZH-CN>해당 콘텐츠의 시험사용 상품을 제공</span>(<span
lang=ZH-CN>한시적 이용의 허용</span>, <span lang=ZH-CN>체험용 제공 등</span>)<span
lang=ZH-CN>하거나 이에 대한 제공이 곤란한 경우에는 콘텐츠에 관한 정보 제공함으로써 회원의 청약철회의 권리행사가 방해받지 아니하도록 조치합니다</span>.
<span lang=ZH-CN>만약 회사가 이러한 조치를 하지 아니한 경우에는 제</span>2<span lang=ZH-CN>항 각 호의 청약철회
제한사유에도 불구하고 회원은 청약철회를 할 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>④</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회원은 제</span>1<span lang=ZH-CN>항 및 제</span>2<span lang=ZH-CN>항에도 불구하고
구매한 유료 콘텐츠의 내용이 표시</span></span><span style='font-size:12.0pt;line-height:103%;
font-family:"Arial Unicode MS",serif'>·</span><span lang=ZH-CN
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>광고의 내용과 다르거나
구매계약의 내용과 다르게 이행된 경우에 해당 콘텐츠가 이용 가능하게 된 날부터</span><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'> 3<span lang=ZH-CN>개월 이내</span>, <span
lang=ZH-CN>그 사실을 안 날 또는 알 수 있었던 날부터</span> 30<span lang=ZH-CN>일 이내에 청약철회를 할 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑤</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회원이 청약철회를 할 경우 회사는 플랫폼사업자 또는 오픈마켓 사업자를 통해 구매내역을 확인합니다</span>. <span
lang=ZH-CN>또한 회사는 회원의 정당한 철회 사유를 확인하기 위해 회원에게서 제공받은 정보를 통해 회원에게 연락할 수 있으며</span>,
<span lang=ZH-CN>추가적인 증빙을 요구할 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑥</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>제</span>1<span lang=ZH-CN>항부터 제</span>4<span lang=ZH-CN>항까지의 규정에 따라 청약철회가
이루어질 경우 회사는 지체 없이 회원의 유료 콘텐츠를 회수하고</span> 3<span lang=ZH-CN>영업일 이내에 대금을 환급합니다</span>.
<span lang=ZH-CN>이 경우 회사가 환급을 지연한 때에는 그 지연기간에 대하여 「전자상거래 등에서의 소비자보호에 관한 법률」 및 같은
법 시행령 제</span>21<span lang=ZH-CN>조의</span>3<span lang=ZH-CN>에서 정하는 이율을 곱하여 산정한 지연이자를
지급합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑦</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>미성년자가 모바일 기기에서 콘텐츠 구매계약을 체결하는 경우</span>, <span lang=ZH-CN>회사는 법정대리인의
동의가 없으면 미성년자 본인 또는 법정대리인이 그 계약을 취소할 수 있다는 내용을 고지하며</span>, <span lang=ZH-CN>미성년자가
법정대리인의 동의 없이 구매계약을 체결한 때에는 미성년자 본인 또는 법정대리인은 회사에 그 계약을 취소할 수 있습니다</span>. <span
lang=ZH-CN>다만</span>, <span lang=ZH-CN>미성년자가 법정대리인이 범위를 정하여 처분을 허락한 재산으로 콘텐츠를 구매한
경우 또는 미성년자가 속임수로써 자기를 성년자로 믿게 하거나 법정대리인의 동의가 있는 것으로 믿게 한 경우에는 취소할 수 없습니다</span>.
</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑧</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>콘텐츠 구매계약의 당사자가 미성년자인지 여부는 결제가 진행된 모바일 기기</span>, <span lang=ZH-CN>결제
실행자 정보</span>, <span lang=ZH-CN>결제 수단 명의자 등을 근거로 판단합니다</span>. <span
lang=ZH-CN>또한 회사는 정당한 취소인지를 확인하기 위해 미성년자 및 법정대리인임을 증명할 수 있는 서류의 제출을 요청할 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>23<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>과오납금의 환급</span>)</span></b><span style='font-size:12.0pt;line-height:
103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 과오납금이 발생하는 경우 과오납금을 회원에게 환급합니다</span>. <span lang=ZH-CN>다만</span>,
<span lang=ZH-CN>과오납금이 회사의 고의 또는 과실 없이 회원의 과실로 인하여 발생<span style='letter-spacing:
-.1pt'>한 경우에는 그 환급에 소요되는 실제 비용은 합리적인 범위 내에서 회원이 부담합니다</span></span><span
style='letter-spacing:-.1pt'>.</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>애플리케이션을 통한 결제는 오픈마켓 사업자가 제공하는 결제방식에 따르며</span>, <span lang=ZH-CN>결제 과정에서</span> 
<span lang=ZH-CN>과오납금이 발생하는 경우</span>, <span lang=ZH-CN>회사 또는 오픈마켓 사업자에게 환급을 요청하여야
합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>애플리케이션의 다운로드 또는 네트워크 서비스의 이용으로 인해 발생한 통신요금</span>(<span lang=ZH-CN>통화료</span>,
<span lang=ZH-CN>데이터 통화료 등</span>)<span lang=ZH-CN>은 환급 대상에서 제외될 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>④</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>환급은 서비스를 이용하고 있는 모바일 기기의 운영체제 종류에 따라 각 오픈마켓 사업자 또는 회사의 환급정책에 따라 진행됩니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑤</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 과오납금의 환급을 처리하기 위해 회원에게서 제공받은 정보를 통해 회원에게 연락할 수 있으며</span>, <span
lang=ZH-CN>필요한 정보의 제공을 요청할 수 있습니다</span>. <span lang=ZH-CN>회사는 회원으로부터 환급에 필요한 정보를
받은 날부터</span> 3<span lang=ZH-CN>영업일 이내에 환급합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>24<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>계약 해지 등</span>)</span></b><span style='font-size:12.0pt;line-height:
103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회원은 언제든지 서비스 이용을 원하지 않는 경우 회원 탈퇴를 통해 이용계약을 해지할 수 있습니다</span>. <span
lang=ZH-CN>회원탈퇴로 인해 회원이 게임서비스 내에서 보유한 게임이용정보는 모두 삭제되어 복구가 불가능하게 됩니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 회원이 이 약관 및 그에 따른 운영정책</span>, <span lang=ZH-CN>서비스 정책에서 금지하는 행위를
하는 등 본 계약을 유지할 수 없는 중대한 사유가 있는 경우에는 상당한 기간 전에 최고하고 기간을 정하여 서비스 이용을 중지하거나 이용계약을 해지할
수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>제</span>1<span lang=ZH-CN>항 및 제</span>2<span lang=ZH-CN>항에 따른 환급 및 손해배상은
「콘텐츠이용자보호지침」에 따라 처리합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>④</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 최근의 서비스 이용일부터 연속하여</span> 1<span lang=ZH-CN>년 동안 회사의 서비스를 이용하지 않은
회원</span>(<span lang=ZH-CN>이하 </span></span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>“</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>휴면계정</span><span
style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>”</span><span
lang=ZH-CN style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>이라
합니다</span><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>)<span
lang=ZH-CN>의 개인정보를 보호하기 위해 이용계약을 해지하고 회원의 개인정보 파기 등의 조치를 취할 수 있습니다</span>. <span
lang=ZH-CN>이 경우 조치일</span> 30<span lang=ZH-CN>일 전까지 계약해지</span>, <span
lang=ZH-CN>개인정보 파기 등의 조치가 취해진다는 사실 및 파기될 개인정보 등을 회원에게 통지합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a align=center style='text-align:center;word-break:normal'><b><span
lang=ZH-CN style='font-size:14.0pt;line-height:103%;font-family:"휴먼명조",serif'>제</span></b><b><span
style='font-size:14.0pt;line-height:103%;font-family:"휴먼명조",serif'>6<span
lang=ZH-CN>장 손해배상 및 면책조항 등</span></span></b></p>

<p class=a align=center style='text-align:center;word-break:normal'><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>25<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>손해배상</span>)</span></b><span style='font-size:12.0pt;line-height:
103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사 또는 회원은 본 약관을 위반하여 상대방에게 손해를 입힌 경우에는 그 손해를 배상할 책임이 있습니다</span>. <span
lang=ZH-CN>다만</span>, <span lang=ZH-CN>고의 또는 과실이 없는 경우에는 그러하지 아니 합니다</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사가 개별서비스 제공자와 제휴 계약을 맺고 회원에게 개별서비스를 제공하는 경우에 회원이 이 개별서비스 이용약관에 동의를 한
뒤 개별서비스 제공자의 고의 또는 과실로 인해 회원에게 손해가 발생한 경우에 그 손해에 대해서는 개별서비스 제공자가 책임을 집니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>26<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>회사의 면책</span>)</span></b><span style='font-size:12.0pt;line-height:
103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관하여 책임을 지지 않습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 서비스용 설비의 보수</span>, <span lang=ZH-CN>교체</span>, <span
lang=ZH-CN>정기점검</span>, <span lang=ZH-CN>공사 등 기타 이에 준하는 사유로 발생한 손해에 대하여 책임을 지지 않습니다</span>.
<span lang=ZH-CN>다만</span>, <span lang=ZH-CN>회사의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 회원의 고의 또는 과실로 인한 서비스 이용의 장애에 대하여는 책임을 지지 <span style='letter-spacing:
-.35pt'>않습니다</span></span><span style='letter-spacing:-.35pt'>. <span
lang=ZH-CN>다만</span>, <span lang=ZH-CN>회원에게 부득이하거나 정당한 사유가 있는 경우에는 그러하지 아니합니다</span>.</span></span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>④</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회원이 서비스와 관련하여 게재한 정보나 자료 등의 신뢰성</span>, <span lang=ZH-CN>정확성 등에 대하여 회사는
고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑤</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 회원이 다른 회원 또는 타인과 서비스를 매개로 발생한 거래나 분쟁에 대해 개입할 의무가 없으며</span>, <span
lang=ZH-CN>이로 인한 손해에 대해 책임을 지지 않습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑥</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 무료로 제공되는 서비스 이용과 관련하여 회원에게 발생한 손해에 대해서는 책임을 지지 않습니다</span>. <span
lang=ZH-CN>그러나 회사의 고의 또는 중과실에 의한 경우에는 그러하지 아니합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑦</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 회원이 서비스를 이용하여 기대하는 이익을 얻지 못하거나 상실한 것에 대하여 책임을 지지 않습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑧</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 회원의 게임상 경험치</span>, <span lang=ZH-CN>등급</span>, <span
lang=ZH-CN>아이템</span>, <span lang=ZH-CN>게임 머니 등의 손실에 대하여 책임을 지지 않습니다</span>. <span
lang=ZH-CN>다만</span>, <span lang=ZH-CN>회사의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑨</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 회원이 모바일 기기 비밀번호</span>, <span lang=ZH-CN>오픈마켓 사업자가 제공하는 비밀번호 등을 관리하지
않아 발생하는 제</span>3<span lang=ZH-CN>자 결제에 대해 책임을 지지 않습니다</span>. <span
lang=ZH-CN>다만</span>, <span lang=ZH-CN>회사의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑩</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회원이 모바일 기기의 변경</span>, <span lang=ZH-CN>모바일 기기의 번호 변경</span>, <span
lang=ZH-CN>운영체제</span>(OS) <span lang=ZH-CN>버전의 변경</span>, <span lang=ZH-CN>해외 로밍</span>,
<span lang=ZH-CN>통신사 변경 등으로 인해 콘텐츠 전부나 일부의 기능을 이용할 수 없는 경우 회사는 이에 대해 책임을 지지 않습니다</span>.
<span lang=ZH-CN>다만</span>, <span lang=ZH-CN>회사의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑪</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회원이 회사가 제공하는 콘텐츠나 계정정보를 삭제한 경우 회사는 이에 대해 책임을 지지 않습니다</span>. <span
lang=ZH-CN>다만</span>, <span lang=ZH-CN>회사의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>⑫</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 임시회원이 서비스 이용으로 발생한 손해에 대해서는 책임을 지지 않습니다</span>. <span
lang=ZH-CN>다만</span>, <span lang=ZH-CN>회사의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>27<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>회원에 대한 통지</span>)</span></b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'> </span><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사가 회원에게 통지를 하는 경우 회원의 전자우편주소</span>, <span lang=ZH-CN>전자메모</span>, <span
lang=ZH-CN>게임 서비스 내 쪽지</span>, <span lang=ZH-CN>문자메시지</span>(LMS/SMS) <span
lang=ZH-CN>등으로 할 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 회원 전체에게 통지를 하는 경우</span> 7<span lang=ZH-CN>일 이상 게임서비스 내에 게시하거나 팝업화면
등을 제시함으로써 제</span>1<span lang=ZH-CN>항의 통지에 갈음할 수 있습니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'>&nbsp;</span></p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>28<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>재판권 및 준거법</span>)</span></b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'> <span lang=ZH-CN>이 약관은 대한민국 법률에 따라 규율되고
해석됩니다</span>. <span lang=ZH-CN>회사와 회원 간에 발생한 분쟁으로 소송이 제기되는 경우에는 법령에 정한 절차에 따른 법원을
관할 법원으로 합니다</span>.</span></p>

<p class=a>&nbsp;</p>

<p class=a><b><span lang=ZH-CN style='font-size:12.0pt;line-height:103%;
font-family:"휴먼명조",serif'>제</span></b><b><span style='font-size:12.0pt;
line-height:103%;font-family:"휴먼명조",serif'>29<span lang=ZH-CN>조</span> (<span
lang=ZH-CN>회원의 고충처리 및 분쟁해결</span>)</span></b></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>①</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 회원의 편의를 고려하여 회원의 의견이나 불만을 제시하는 방법을 게임서비스 내 또는 그 연결화면에 안내합니다</span>.
<span lang=ZH-CN>회사는 이러한 회원의 의견이나 불만을 처리하기 위한 전담인력을 운영합니다</span>.</span></p>

<p class=a><span style='font-size:12.0pt;line-height:103%;font-family:"Arial Unicode MS",serif'>②</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사는 회원으로부터 제기되는 의견이나 불만이 정당하다고 객관적으로 인정될 경우에는 합리적인 기간 내에 이를 신속하게 처리합니다</span>.
<span lang=ZH-CN>다만</span>, <span lang=ZH-CN>처리에 장기간이 소요되는 경우에는 회원에게 장기간이 소요되는 사유와
처리일정을 게임서비스 내 공지하거나 제</span>27<span lang=ZH-CN>조 제</span>1<span lang=ZH-CN>항에 따라
통지합니다</span>.</span></p>

<p class=a style='margin-top:0in;margin-right:4.1pt;margin-bottom:0in;
margin-left:2.5pt;margin-bottom:.0001pt'><span style='font-size:12.0pt;
line-height:103%;font-family:"Arial Unicode MS",serif'>③</span><span
style='font-size:12.0pt;line-height:103%;font-family:"휴먼명조",serif'> <span
lang=ZH-CN>회사와 회원 간에 분쟁이 발생하여 제</span>3<span lang=ZH-CN>의 분쟁조정기관이 조정할 경우 회사는 이용제한
등 회원에게 조치한 사항을 성실히 증명하고</span>, <span lang=ZH-CN>조정기관의 조정에 따를 수 있습니다</span>.</span></p>

</div>

</body>

</html>
  `;



  return (
    <div className={`w-full h-screen overflow-scroll p-8`} dangerouslySetInnerHTML={{__html: html}}/>
  )
}
