import React,{ useContext, useState, useEffect } from 'react'
import { DesignContext } from '../App'
// import { findValidValue } from '../controllers/validateValue'

const ColorValueInput = ({message}) => {
    const { newState, dispatch } = useContext(DesignContext)
    const [ val, setVal ] = useState('')
    const [ msg, setMsg ] = useState('')

    useEffect(()=> { setVal(newState.inputValue) },[  ])

    useEffect(()=> { 
        val !== '' && dispatch({type:'STATECHANGE', key: 'inputValue', value: val })
    },[val])

    //  console.log(val)
  return (
    <input 
        type="text" 
        value={val} 
        placeholder={`${newState.inputValue}`} 
        onChange={ e => setVal(e.target.value) }
    />
  )
}

export default ColorValueInput