import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGen = () => {
    const [password, setPasword] = useState("");
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const copyPassword = useRef();

    const PasswordGenerator = useCallback(()=>{
        let pass = "" 
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if (numberAllowed) {
            str += "0123456789"
        }
        if (charAllowed) {
            str += "!@#$%^&*()-=_+"
        }
        for(let i=1; i<=length; i++){
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str[char] 
        }
        setPasword(pass)    

    }, [length, numberAllowed, charAllowed, setPasword])

    useEffect(()=>{
        PasswordGenerator()
    }, [length, numberAllowed, charAllowed,setPasword])

    const copyPasswordToClipbord = ()=>{
        copyPassword.current?.select();
        window.navigator.clipboard.writeText(password)

    }


  return (
    <div className='text-white'>
    <div className='flex justify-center items-center'>
      <h1>Password Genrator</h1>
      </div>
      <div className=' flex justify-center items-center'>
        <input ref={copyPassword} className='text-black' type="text" placeholder='password' readOnly value={password}/>
        <button onClick={copyPasswordToClipbord} className='bg-blue-900'>Copy</button>
      </div>
      
      <div className='flex justify-center items-center gap-4'>
      <div className='flex justify-center items-center'>
        <input onChange={(e)=>{setLength(e.target.value)}} type="range" min={8} max={40} value={length}/>
        <label htmlFor="">lenght: {length}</label>
      </div>
      <div>
        <input onClick={()=>{setNumberAllowed((prev)=> !prev)}} type="checkbox" value={numberAllowed} />
        <label htmlFor="">Number Allowed</label>
        </div>
        <div>
        <input onClick={()=>{setCharAllowed((prev)=> !prev)}} type="checkbox" value={charAllowed} />
        <label htmlFor="">Char Allowed</label>
        </div>
      </div>
    </div>
  )
}

export default PasswordGen
