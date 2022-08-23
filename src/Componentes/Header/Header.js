import header from '../../Componentes/Header/header.module.css'

import React from 'react'

import { faArrowLeft, faArrowRight, faArrowRightArrowLeft, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <div>
        <header className={header.backgroundColor}>
          <div className={header.containerRipleyAndUser}>
            <h1 className={header.textStyle}>RipleyTECH_</h1>
            <h3 className={header.textStyle}>USUARIO</h3>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </div>
        </header>
    </div>
  )
}

export default Header