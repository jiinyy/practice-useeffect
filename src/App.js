
// useEffect 사용하여 Counter 만들기
// 왜 처음에 mount 될때 console.log('랜더링중') 두번찍힐까..?

import React, { useEffect, useState } from 'react';

export default function App () {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 랜더링이 될때마다 실행됨- 랜더링 이후
  useEffect(() => {
    console.log('랜더링중');
  });

  // 마운팅 + [ count ] 변경될때만 실행.
  useEffect(() => {
    console.log('count 가 변경 될때만 실행');
  },[count]);

  // 마운팅 + [ name ] 변경될때만 실행.
  useEffect(() => {
    console.log('name 가 변경 될때만 실행');
  },[name]);

  // 맨처음 랜더링 될때만 실행
  useEffect(() => {
    console.log('처음 랜더링 될때만 실행됩니다');
  },[]);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>{count}</span>
      <input type="text" onChange={handleInputChange} ></input>
      <span>{name}</span>

    </div>
  );
}

