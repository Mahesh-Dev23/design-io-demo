import React, { useContext, useEffect, useState } from 'react'
import { DesignContext } from '../App'
import ColorBtn from '../common/ColorBtn'
import BackgroundMenu from './BackgroundMenu'
import PopUp from '../common/PopUp'


const Background = () => {
    const { newState, dispatch } = useContext(DesignContext)
       

    useEffect(()=>{
      if( newState.color1 === newState.color2) return dispatch({ type: 'COLORARR', key: 'color2', value: 'grayLight1'}) 
      let background = {background : `rgba(${newState.color1}, 1)`}
      
      dispatch({type:"BACKGROUND", value: background })
    },[newState.color1])

    useEffect(()=>{
      if(newState.backgroundOption !== 'gradients') return
      let backgroundImage = { backgroundImage: `linear-gradient(120deg, rgba(${newState.color1}, 1), rgba(${newState.color2}, 1))`}
      
      dispatch({type:"BACKGROUND", value: backgroundImage })
    },[newState.backgroundOption])

    // if(Object.keys(newState.colors).length !== 0) return console.log(newState.colors)

  return (
    <div className='section backgroundSection' id={newState.section[1]} style={newState.background}>
      <div className="title">{newState.section[1]}</div>

      <div>
        
      </div>
      
      <BackgroundMenu />

      { newState.popUp === true && <PopUp /> }

    </div>
  )
}

export default Background