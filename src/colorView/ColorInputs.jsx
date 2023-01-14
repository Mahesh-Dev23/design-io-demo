import React,{ useContext, useState, useEffect} from 'react'
import { DesignContext } from '../App'
import ColorValueInput from '../common/ColorValueInput'
import SlideControl from '../common/SlideControl'
import MainColors from '../main/MainColors'


const ColorInputs = ({colorScheme, getIndex}) => {
    const { newState, dispatch } = useContext(DesignContext)
    const [ ind, setInd ] = useState(0)
    const [ instruct, setInstruct ] = useState('')
    
    useEffect(()=>{getIndex(ind)},[])

    useEffect(()=>{getIndex(ind)},[ind])

    useEffect(()=> { 
      if(newState.mainColor?.message === undefined ) return
      setInstruct(newState.mainColor?.message)
      
    },[ newState.mainColor ])
    
    
    
  return (
    <div className='colorInputs' >
      <div>
        Current Color Scheme for your color.
        <div className='bigTitle transit'>{colorScheme}</div>
      </div>
      <div className='inputSample' style={{background:`rgb(${newState.mainColor?.rgb})`}}>
        {`Current color: rgb(${newState.mainColor?.rgb})`}
      
        <p >Provide rgb/hex color value in the box below</p>
        <ColorValueInput />
        { instruct !== '' && <div className='iText'>{instruct}</div> }
      </div>     

      { 
        newState.colorSchemeNames?.length > 0 &&
        <SlideControl arr={newState.colorSchemeNames.includes(colorScheme) ? newState.colorSchemeNames : newState.colorThemeNames} 
        active={colorScheme} 
        index={(e) => setInd(e)}
        />
      }
      
      {/* <div className='slideContol' style={{gridTemplateColumns: `repeat(${newState.colorSchemeNames?.length}, 30px)`}}>
        { newState.colorSchemeNames?.map( (res, index) => 
          <div 
            className='btn btn-slide' 
            onClick={()=>setInd(index)} 
            key={res+index}
            style={{background: colorScheme === res && 'rgba(0,0,0,.8)'}}
          >
            {index + 1}
          </div>
        )}
      </div> */}
      
    </div>
  )
}

export default ColorInputs