import header from '../../Componentes/Header/header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

const Header = () => {
  return (
    <div>
        <header className={header.backgroundColor}>
          <div className={header.containerRipleyAndUser}>
            <h1 className={header.textStyle}>RipleyTECH_</h1>
            <h3 className={header.textStyle}>USUARIO</h3>
            <FontAwesomeIcon icon={"fa-regular fa-arrow-right-from-bracket"} />
          </div>
        </header>
    </div>
  )
}

export default Header