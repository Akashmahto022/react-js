import React, { useContext, useState } from "react";
import { UserContext } from "../context/user-context/UserContext";

const Counter = () => {
  const [number, setNumber] = useState(2);
  const { setNo } = useContext(UserContext);
  const { no } = useContext(UserContext);

  const addNo = ()=>{
    setNumber(number+2);
    setNo(number)
  }
  const subNo=()=>{
    setNumber(number-2)
    setNo(number)
  }
  return (
    <div style={{ display: "flex", gap: "12px", cursor: "pointer" }}>
      <h1 onClick={addNo}>+</h1>
      <h1>{!no ? number : no}</h1>
      <h1 onClick={subNo}>-</h1>
    </div>
  );
};

export default Counter;
