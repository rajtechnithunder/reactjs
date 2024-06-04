import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      // console.log(char);
      pass += str.charAt(char);
      // console.log(pass);
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500'>
        
        <h1 className="text-2xl text-center text-white pb-4">
          Password Generator
        </h1>

        <div className='flex shadow-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='w-full outline-none py-2 px-4 rounded-s-md'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            className='outline-none bg-blue-700 text-white px-4 py-1 shrink-0 rounded-e-md'
            onClick={copyPasswordToClipboard}
          > 
          Copy 
          </button>
        </div>

        <div className='flex text-sm gap-x-4'>
          <div className='flex items-center gap-x-2'>
            <input 
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label className='text-orange-400'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label className='text-orange-400'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label className='text-orange-400'>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
