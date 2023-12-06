import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const WindowSize = createContext('');

function WindowContext({children}) {

    const [windowSize, setWindowSize] = useState(
        window.innerWidth
    );

    useEffect(()=>{
        function setWindowWidth(){
            setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', setWindowWidth);

        //cleanUp function
        return () => {
            window.removeEventListener('resize', setWindowWidth);
        }

    },[])

  return (
    <WindowSize.Provider
    value = {{windowSize,setWindowSize}}>
        {children}
    </WindowSize.Provider>
      )
}

export default WindowContext