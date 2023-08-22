import React, { useEffect } from 'react';

const Timer = (props) => {

  useEffect(() => {
    //timer component 가 맨 처음 브라우저에 랜더링 되었을때 실행
    const timer = setInterval(() => {
      console.log("타이머 돌아가는중...");
    }, 1000);

    //timer component 가 unmounted 될때 실행
    return () => {
      clearInterval(timer)
      console.log("타이머가 종료되었습니다.")
    }
  }, []);

  return (
    <div>
      <span>
        타이머를 시작합니다. 콘솔을 보세요!
      </span>
    </div>
  )
};

export default Timer;