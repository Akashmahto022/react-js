import React, { useCallback, useState, useEffect, useRef } from "react";

const PasswordGenerator = () => {
  const [password, setPasword] = useState("akash5060");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharacterAllowed, setSpecialCharacterAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const passwordRef = useRef()

  const randomPasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (specialCharacterAllowed) {
      str += "@#$%(*&&!";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      console.log(pass, char);
    }
    setPasword(pass);
  }, [length, numberAllowed, specialCharacterAllowed, setPasword]);

  useEffect(()=>{
    randomPasswordGenerator()
  }, [length,numberAllowed,specialCharacterAllowed,randomPasswordGenerator])

  const copyPassword = ()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }


  // const passwordgenerator = () => {
  //   let pass = "";
  //   let char =
  //     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
  //   for (let i = 1; i <= length; i++) {
  //     const randomIndex = Math.floor(Math.random() * char.length + 1);
  //     console.log(randomIndex);
  //     pass += char[randomIndex];
  //   }
  //   console.log(pass);
  //   setPasword(pass);
  // };

  return (
    <div style={{color: "white"}}>
      <input style={{ backgroundColor: "blue" }} ref={passwordRef}  type="text" value={password} readOnly placeholder="password" />
      <button style={{ backgroundColor: "blue" }} onClick={copyPassword}>Copy</button>
      <div>
        <input onChange={(e)=>{setLength(e.target.value)}} type="range" min={6} max={40} value={length} />
        <label htmlFor="">Length: {length}</label>
      </div>
      <div>
        <input type="checkbox" defaultChecked={numberAllowed} onChange={(()=>{
          setNumberAllowed((prev) => !prev)
        })}/>
        <label htmlFor="">Number: {numberAllowed}</label>
      </div>
      <div>
        <input type="checkbox" defaultChecked={specialCharacterAllowed} onChange={(()=>{
          setSpecialCharacterAllowed((prev) => !prev)
        })}/>
        <label htmlFor="">Special character: {numberAllowed}</label>
      </div>
    </div>
  );
};

export default PasswordGenerator;
