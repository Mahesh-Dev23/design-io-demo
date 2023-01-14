import React,{ useContext, useEffect, useState, memo } from 'react'
import { DesignContext } from '../App'

const ColorBtn = ({color, selectedColor}) => {
    // const { newState, dispatch } = useContext(DesignContext)
    // const [ color1, setColor ] = useState('color1')
    const [ me, setMe ] = useState('')
    
    // console.log("colorBtn ", me)
    
  return (
    <div className='colorBtn' 
        style={{background: `rgb(${color})`}}
    >
        
    </div>
  )
}

export default React.memo(ColorBtn) 