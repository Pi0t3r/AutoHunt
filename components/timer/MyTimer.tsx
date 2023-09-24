import React from "react";
import { useTimer } from "react-timer-hook";
import { MyTimerProps } from "@/types/myTypes";

const MyTimer = ({ expiryTimestamp, onExpire }: MyTimerProps) => {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire,
  });

  return (
    <div>
      <div>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
};

export default MyTimer;
