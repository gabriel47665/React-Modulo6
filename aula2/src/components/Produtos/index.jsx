import React from 'react'
import Produto from '../Produto';

const Produtos = () => {

    const [lista, setLista] = React.useState([]);

    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(listaDeProdutos=>{
            setLista(listaDeProdutos)
        })
    }, [])
    
    return(
        <>
            <h1>Produtos</h1>
            <ul className='produtos'>
                {
                    lista.map(produto => {
                    return <li key={produto.id}><Produto {...produto} /></li>
                    })
                }
            </ul>
        </>
    );
}

export default Produtos;