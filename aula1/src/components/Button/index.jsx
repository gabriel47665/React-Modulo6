import React from 'react'

const Button = (props) => {
    return(
        <>
            <button style={{
                lineHeight: '26px',
                borderRadius: '5px',
                marginLeft:'16px',
                marginTop: '10px', 
                lineHeight:'26px'}}>{props.texto}</button>
        </>
    )
}

export default Button;