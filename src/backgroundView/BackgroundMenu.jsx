import React, { useContext } from 'react'
import { DesignContext } from '../App'


const BackgroundMenu = () => {
    const { newState, dispatch } = useContext(DesignContext)
  const setBackground = (e) => { 
        dispatch({ type:'BACkOPTION', value: e})
        dispatch({ type:'POPUP', value: true})
    }  
  return (
    <div className='backgroundOptions' style={{gridTemplateColumns: `repeat(${newState.backgroundMenu.length}, auto)` }}>
        
        { newState.backgroundMenu.map( menu => 
          <div 
            className='btn' 
            onClick={() => setBackground(menu)} 
            key={menu}
            style={{background:newState.backgroundOption === menu && `rgba(0,0,0,.3)`}}
          > 
            {menu} 
          </div>  
          
          )}
      </div >
  )
}

export default BackgroundMenu