import React from 'react'
import {useInput} from '../Util/Input'

const Input = ({...props}) => {
const username = useInput("");
const password = useInput("")

    return(
        <input className={props.className} name={props.name} type={props.type} placeholder={props.placeholder} {...props.input}/>
    )       
}

export default Input