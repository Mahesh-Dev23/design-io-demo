import React,{ useContext} from 'react'
import { DesignContext } from '../App'
import ColorInputs from '../colorView/ColorInputs'
import { Conical } from '../colorView/Conical'

const MainColors = () => {
    const { newState, dispatch } = useContext(DesignContext)
  return (
    <div className='mainColors ' >
      
        <ColorInputs />
    </div>
  )
}

export default MainColors