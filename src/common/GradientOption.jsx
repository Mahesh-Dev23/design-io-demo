import React, { useContext, useState, useEffect } from 'react'
import { DesignContext } from '../App'

const GradientOption = () => {
    const { newState, dispatch } = useContext(DesignContext)
    const [ gradType, setGradType ] = useState('Linear-gradient')
    const [ gradDirection, setGradDirection ] = useState('')
    const [ gradCSS, setGradCSS ] = useState({})
    const [ deg, setDeg ] = useState(0)

    // useEffect(()=>{ dispatch({ type:'COLORARR', key: 'color2', value: newState.colorSchemes.grays[2] }) },[])

    useEffect(()=>{
        if( gradType === '' || gradType === 'Linear-gradient' ) { setGradDirection(`${deg}deg`)}
        if( gradType === 'Radial-gradient' ) {setGradDirection('circle')}
        setGradCSS({backgroundImage: `${gradType}(${gradDirection}, rgba(${newState.color1}, 1), rgba(${newState.color2}, 1))`})
    },[newState.color1, newState.color2, gradType, gradDirection, deg])

    useEffect(()=>{
        if(Object.keys(gradCSS).length === 0) return
        dispatch({type:"BACKGROUND", value: gradCSS })
    },[gradCSS])

    // console.log(newState.color1)
  return (
    <div>
        <div className='popBtnStack' >
            <div className='colorBtn' 
                style={{background: `rgb(${newState.color1})`}}
                onClick={() => dispatch({type: 'BACkOPTION', value: 'color1'})}
            >
            </div>
            <div className='colorBtn' 
                style={{background: `rgb(${newState.color2})`}}
                onClick={() => dispatch({type: 'BACkOPTION', value: 'color2'})}
            >
            </div>
        </div>
        <div className='popBtnStack' >  
              <div className='popbtn' onClick={() => setGradType('Linear-gradient')}> Linear Gradient </div>  
              <div className='popbtn' onClick={() => setGradType('Radial-gradient')}> Radial Gradient </div>
        </div>
        <div className='popBtnStack' > 
                <p>Linear Degree '0-360' </p>
                {/* <p>Radial center offset </p> */}
                <input type= "text" value={deg} placeholder={0} onChange={(e)=> setDeg(e.target.value) } />
                {/* <input type= "text" placeholder='x, y'/> */}
              
        </div>
    </div>
  )
}

export default GradientOption