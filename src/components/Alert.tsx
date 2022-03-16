import React from "react";
import {AlertTemplateProps} from 'react-alert';

export interface AlertProps extends AlertTemplateProps{
  title?: string
}

const Alert = (props: AlertProps) => {
  return (
    <div className="flex flex-row items-center justify-center top-0 left-0 w-screen h-[120vh] pb-[20vh]">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" />
      <div className="bg-white w-[255px] z-10 rounded-xl p-2 z-[1000]">
        <div className="flex flex-row items-center justify-between">
          <span className="font-bold">알림</span>
          <svg onClick={props.close} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="mt-6 text-center" dangerouslySetInnerHTML={{__html: props.message as string || ''}}/>
        <button className="mt-4 w-full text-center bg-[#05C362] font-bold text-lg rounded-lg text-white p-2" onClick={props.close}>알겠습니다!</button>
      </div>
    </div>
  );
};

export default Alert;
