import React from 'react'
import './style.css'

const Header = () => {
    let logado = true;
    let nome = 'Gabriel';

    return(
        <>
            <header>
                <nav>
                    <div className='logo'>
                        LOGO
                    </div>
                    {logado && 
                        <div className="perfil">
                            <h5>Bem vindo(a) {nome}!</h5>
                        </div>
                    }
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        {logado && 
                         <li>
                            <a href="/sobre">Sobre</a>
                         </li>
                        }
                        <li>
                            <a href="/portifolio">Portifólio</a>
                        </li>
                        <li>
                            <a href="/produtos">Produtos</a>
                        </li>
                        <li>
                            <a href="/contatos">Contatos</a>
                        </li>
                        
                    </ul>
                </nav>
                <h6>&copy; Todos os direitos reservados.</h6>
            </header>
        </>
    );
}

export default Header;