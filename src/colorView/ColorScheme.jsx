import React, { useEffect, useContext, useState, useMemo } from 'react'
import { designs } from '@mahesh-dev/design-io'
import ColorBox from './ColorBox'
import { DesignContext } from '../App'
import MainColors from '../main/MainColors'
import useGradient from '../hooks/useGradiant'
import ColorInputs from './ColorInputs'
import setIteration from '../controllers/setIteration'

const ColorScheme = () => {

  const { newState, dispatch } = useContext(DesignContext) 
  const [ colVal, setColVal ] = useState("239, 109, 71") // 0, 215, 184  255, 170, 40
  const [ ind, setInd ] = useState(0)
  const [ section, setSection ]= useState(0)
  const [ colorInd, setColorInd ] = useState(0)
  const [ time, setTime ] = useState(500)
  
  // const newColors = new codesign()
  // const colors = newColors.setColor('140, 179, 217')
  
  

  useEffect(()=> {
    dispatch({type:'STATECHANGE', key: 'inputValue', value: colVal })
    const mainColor = designs( 'color-Values', colVal )
    dispatch({type:'COLORARR', key: 'mainColor', value: mainColor })
    setInd(0)
  },[])

  useEffect(()=>{
    // console.log(newState.inputValue)
    if(newState.inputValue === '') return
    
     setColVal(newState.inputValue)
  },[newState.inputValue])  

  useEffect(()=>{ 
    
    
    const mainColor = designs( 'color-Values', colVal )
    
    // const vals = newColors.setColorSections( colVal )
    if(mainColor === undefined || mainColor?.message !== '') return
    // if(mainColor?.message !== '') {
      dispatch({type:'COLORARR', key: 'mainColor', value: mainColor })
    // }

    const allColors = designs( 'all-Colors', colVal )
    const colorSchemes = designs( 'color-Schemes', colVal )
    const colorThemes = designs( 'color-Themes', colVal )
    
    if(allColors === undefined) return
    if(Object.keys(allColors).length !== 0) {
      dispatch({ type:"COLORS", value: allColors })
    }

    if(colorSchemes === undefined) return
    if(Object.keys(colorSchemes).length !== 0) {
      dispatch({ type:'COLORARR', key: 'colorSchemes', value: colorSchemes })
      dispatch({ type:'COLORARR', key: 'colorSchemeNames', value: Object.keys(colorSchemes)  })
      dispatch({ type:'COLORARR', key: 'color1', value: colorSchemes.darks[2] })
      dispatch({ type:'COLORARR', key: 'color2', value: colorSchemes.grays[1] })
    }

    if(colorThemes === undefined) return
    if(Object.keys(colorThemes).length !== 0) {
      dispatch({ type:'COLORARR', key: 'colorThemes', value: colorThemes })
      dispatch({ type:'COLORARR', key: 'colorThemeNames', value: Object.keys(colorThemes)  })
    }

    
  }, [colVal])

  
  const allArr = useMemo(()=>{
    if( Object.keys(newState[newState.section[0][section].replace("-", "")]).length !== 0 ) return Object.values(newState[newState.section[0][section].replace("-", "")])

  },[newState.colorSchemes, newState.colorThemes, section])

  // console.log(allArr)
  // const arr = useMemo(()=>{ 
    
  //   if( allArr === undefined ) return
  //   if( ind === undefined ) return 
  //   if( allArr !== undefined || ind !== undefined ) {
  //     // console.log(ind)
  //     return [ ...allArr[ ind ]]
      
  //   } 
     
  // },[allArr, ind])
  // console.log(ind)
  const itrTimeOut = (itr) => { setTimeout(() => {
      
    if(itr.count === allArr.length - 1 && itr.a === false ){ 
      // console.log(itr.i, itr.a, itr.count)
      setSection( section === 0 ? 1 : 0 )
      setInd( 0 )
    }
    if(itr.i === 1 && itr.a === false && itr.count < allArr.length - 1){
      // console.log(itr.i, itr.a, itr.count)
      setInd( ind + 1 )
    }
    setColorInd( itr.i )
  }, time )}

  const changeScheme = () => {
    setSection(section === 0 ? 1 : 0)
    setInd(0)
  }

  useEffect(()=>{
    if( allArr === undefined  ) return
    
    let itr =  setIteration( colorInd, allArr[ind].length, ind )
    
    itrTimeOut(itr)
    
  },[ind, colorInd, allArr])
  
  
  
 

  useEffect(()=>{
    if(newState.colorSchemeNames.length === 0 ) return
    section === 0 && dispatch({ type:'COLORARR', key: 'colorScheme', value: newState.colorSchemeNames[ind] })
    section === 1 && dispatch({ type:'COLORARR', key: 'colorScheme', value: newState.colorThemeNames[ind] })
  },[ind, section])
    
  
   
  const { gradient } = useGradient({ind : colorInd, rgb: newState.mainColor?.rgb,  arr : allArr && allArr[ind], time } )  
  
  const getIndex = (e) =>{ 
    // setColorInd(0)
    setInd(e)
    // console.log(e)
  }
  

  
    
  // console.log(gradient)
  return (
    <div className="ColorSchemeSection section transit" id={newState.section[0][0]} 
    style={{backgroundImage: gradient ? gradient : `conic-gradient(rgba(${colVal}, 1) , rgba(${colVal})`}}
    >
        <div className="title" >{newState.section[0][section].replace("-", " ")}</div>
        <ColorInputs 
          colorScheme = { section === 0 ? newState.colorSchemeNames[ind] : newState.colorThemeNames[ind]} 
          getIndex={getIndex}
        />
        
        <div className='btn' 
        style={{borderRadius: "10px"}}
          onClick={()=> changeScheme()}
        >
          {`Change to ${newState.section[0][section === 0 ? 1 : 0].replace("-", " ")}`}
        </div>
    </div>
  )
}

export default ColorScheme