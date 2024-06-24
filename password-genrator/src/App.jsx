import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // useRef Hook
  const passwordRef = useRef(null)

  //password fenerator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*{[}]~`";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])
  

  //copy to clipboard
  const copyToClipboard = useCallback(()=>{
    //for highlight the value
    passwordRef.current?.select()

    //range for select value
    passwordRef.current?.setSelectionRange(0,4)

    //copy to clip board
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyToClipboard}
         className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex item-center hap-x-1">
          <input
            type="range"
            min={6}
            max={16}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="">Length: {length}</label>
        </div>
        <div className="flex item-center hap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="characterAllowed"
            className="cursor-pointer"
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="">Character</label>
        </div>
        <div className="flex item-center hap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberAllowed"
            className="cursor-pointer"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="">Number</label>
        </div>
      </div>
    </div>
  );
};

export default App;
