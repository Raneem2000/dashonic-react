import { fas } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import { createContext } from 'react'

export const Menu = createContext('');

function MenuContext({children}) {

    const [isOpen, setIsOpen] = useState(true)

  return (
    <Menu.Provider         
    value = {{isOpen, setIsOpen}}>
        {children}
    </Menu.Provider>
  )
}

export default MenuContext