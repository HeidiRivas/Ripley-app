import header from '../../Componentes/Header/header.module.css'
import { Link } from 'react-router-dom'
import React from 'react'
import ripleytech from '../../Componentes/imagenes/ripleytech.png'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
      <header className={header.backgroundColor}>
        <div className={header.containerRipleyAndUser}>
            <img src={ripleytech} alt='logoripley' className={header.logoripleytech} />
            <h1 className={header.textStyle}>RipleyTECH_</h1>
            <h3 className={header.textStyleUser}>USUARIO</h3>
            <Link to='/'>
              <FontAwesomeIcon icon={faArrowRightFromBracket} className={header.iconStyle}/>
            </Link>
          </div>
      </header>
  )
}

export default Header