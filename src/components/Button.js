import React from 'react'

const Button = (props) => {
    return (
        <div>
             <button style ={{backgroundColor:props.color}}className ='btn' onClick = {props.onClick}> {props.text} </button>
        </div>
    )
}

export default Button
