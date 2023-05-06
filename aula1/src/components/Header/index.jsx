import React from 'react'
import './header.css'
import Button from '../Button';

const Header = () =>{
    return(
        <>
        <header>
            <div>Logo</div>
            <nav>
                <ul>
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li>
                        <a href="">Serviços</a>
                    </li>
                    <li>
                        <a href="">Contato</a>
                    </li>
                    <li>
                        <Button texto="Entrar"/>
                        <Button texto="Sair"/>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header;