import React, { useState } from "react";
import { useInterval } from "react-use";

interface Props {
  textsWithColor: { text: string; color: string }[];
}

const TextSpinner = (props: Props) => {
  const [slot, setSlot] = useState(0);
  useInterval(() => {
    setSlot((slot + 1) % props.textsWithColor.length);
  }, 1500);

  return (
    <div className={'inline-block overflow-hidden w-[70px] h-[2.5rem]'}>
      <div className={`inline-block transition duration-150 ease-in-out`} style={{transform: `translateY(-${42 * slot}px)`}}>
        {props.textsWithColor.map((it, index) => {
          return <span key={index}>
            <span style={{color: it.color}} className={'inline-block leading-[2.25rem] h-[2.5rem]'}>{it.text}</span>
          </span>
        })}
      </div>
    </div>
  )
}

export default TextSpinner;
