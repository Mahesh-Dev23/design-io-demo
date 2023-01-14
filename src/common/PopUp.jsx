import React, {useContext} from 'react'
import { DesignContext } from '../App'
import ColorOptions from './ColorOptions'
import GradientOption from './GradientOption'
import GradColor from '../designView/GradColor'

const PopUp = () => {
    const { newState, dispatch } = useContext(DesignContext)
    // console.log(newState.backgroundOption)
    
  return (
    <div className='popUp'>
        <div className='closeBtn' onClick={() => dispatch({ type:'POPUP', value: false})}>x</div>
        
        { newState.backgroundOption === "darks" || newState.backgroundOption === "lights" || newState.backgroundOption === "grays" ||
          newState.backgroundOption === "color1" || newState.backgroundOption === "color2" ? <ColorOptions /> : null }
        { newState.backgroundOption === 'gradients' &&  <GradientOption /> }
        { newState.backgroundOption === 'Start Colors' || newState.backgroundOption === 'End Colors' ? <GradColor /> : null }
    </div>
  )
}

export default PopUp