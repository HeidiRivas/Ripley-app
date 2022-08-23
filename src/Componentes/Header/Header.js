import header from '../../Componentes/Header/header.module.css'
import IconLogOut from '../../Componentes/imagenes/IconLogOut.png'
import React from 'react'

const Header = () => {
  return (
    <div>
        <header className={header.backgroundColor}>
          <div className={header.containerRipleyAndUser}>
            <h1 className={header.textStyle}>RipleyTECH_</h1>
            <h3 className={header.textStyle}>USUARIO</h3>
            <img src={IconLogOut} className={header.iconlogout}/>
          </div>
        </header>
    </div>
  )
}

export default Header