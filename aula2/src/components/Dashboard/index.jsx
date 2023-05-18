import React from 'react'

const Dashboard = () =>{

    const [contador, setContador] = React.useState(0)
    const [visivel, setVisivel] = React.useState(false)

    React.useEffect(() => {
        console.log("O componente foi montado!")
    },[])

    React.useEffect(() => {
        console.log("O componente foi montado novamente!")
    })

    React.useEffect(() => {
        console.log("O componente foi afetado pela state!")
    }, [visivel])

    return(
        <>
            <h1>Dashboard</h1>
            <button 
                className={visivel ? 'active' : ''}
                onClick={() =>{setContador(contador + 1)}}>
                Incrementar {contador}
            </button>
            <button onClick={() => {setVisivel(!visivel)}}>Preencher</button>
        </>
    );
}

export default Dashboard;