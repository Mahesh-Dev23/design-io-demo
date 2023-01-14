import React, { useContext, useCallback} from 'react'
import { DesignContext } from '../App'
import ColorBtn from './ColorBtn'

const ColorOptions = () => {
    const { newState, dispatch } = useContext(DesignContext)

    let newColors = [ ...newState.colorSchemes.darks, ...newState.colorSchemes.lights, ...newState.colorSchemes.grays ]
     
    const selectedColor =  (e) => { 
        
        if( newState.backgroundOption === 'color1' || newState.backgroundOption === 'color2' ) {
            
            dispatch({ type: 'COLORARR', key: newState.backgroundOption , value: e })
            dispatch({ type:'BACkOPTION', value: 'gradients'})
           
        } else{
            
            dispatch({ type: 'COLORARR', key: 'color1', value: e })
        }

    }
    
    
  return (
         
         newState.backgroundOption === 'color1' || newState.backgroundOption === 'color2' ? 
            <div className='popBtnStack' style={{gridTemplateColumns: 'auto auto auto auto'}}> 
                {
                    newColors.map( (col, index) => 
                        <div key={col+index+'gradient'}  onClick = {()=>selectedColor(col)}>
                            <ColorBtn color={col} />
                        </div>)
                }
            </div>
         : 
         
            <div className='popBtnStack'>
                {
                    newState.colorSchemes[newState.backgroundOption]?.map( (col, index) => 
                        <div key={col+index}  onClick = {()=>selectedColor(col)}>
                            <ColorBtn color={col} />
                        </div>)
                }
            </div>
    
  )
}

export default ColorOptions