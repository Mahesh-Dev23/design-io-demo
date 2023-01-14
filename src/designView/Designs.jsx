import React, { useEffect, useContext, useState, useMemo } from 'react'
import { DesignContext } from '../App'
import { designs } from '@mahesh-dev/design-io'
import ColorValueInput from '../common/ColorValueInput'
import SlideControl from '../common/SlideControl'
import PopUp from '../common/PopUp'

const Designs = () => {
    const { newState, dispatch } = useContext(DesignContext)
    const [ grad, setGrad ] = useState({grad1:'', grad2:'', grad3:'', grad4:'', grad5:'', grad6:''})
    const [ themeNames, setThemeNames ] = useState([])
    const [ currentTheme, setCurrentTheme ] = useState('grad1')
    const [ mode, setMode ] = useState(true)
    const [ activeMenu, setActiveMenu ] = useState('')
    const [ endColor, setEndColor ] = useState([])
    const dark = `rgba(20,20,20,1)`
    const light = `rgba(255,255,255,1)`

    // let grad1, grad2, grad3, grad4, grad5, grad6 = ''

    // const newGrad = new CreateGradientBackground()

    

    useEffect(()=> {
        if(Object.keys(newState.colorThemes).length === 0 || Object.keys(newState.colorSchemes).length === 0) return

            let grad1 = {start: newState.colorThemes?.gray_Tones, end:newState.colorThemes?.contrast, back: mode ? light : dark, gradient:designs( 'gradient-patterns', newState.colorThemes?.gray_Tones, newState.colorThemes?.contrast,"grad1", light)}
            let grad2 = {start: newState.colorThemes?.contrast, end:newState.colorThemes?.vibrant, back: mode ? light : dark, gradient:designs( 'gradient-patterns', newState.colorThemes?.contrast, newState.colorThemes?.vibrant,"grad2", light)}
            let grad3 = {start: newState.colorThemes?.contrast, end:newState.colorThemes?.contrast, back: mode ? light : dark, gradient:designs( 'gradient-patterns', newState.colorThemes?.contrast, newState.colorThemes?.contrast,"grad3", light)}
            let grad4 = {start: newState.colorThemes?.vibrant, end:newState.colorThemes?.gray_Tones, back: mode ? light : dark, gradient:designs( 'gradient-patterns', newState.colorThemes?.vibrant, newState.colorThemes?.gray_Tones,"grad4", light)}
            let grad5 = {start: newState.colorThemes?.gray_Tones, end:newState.colorThemes?.contrast, back: mode ? light : dark, gradient:designs( 'gradient-patterns', newState.colorThemes?.gray_Tones, newState.colorThemes?.contrast,"grad5", light)}
            let grad6 = {start: newState.colorThemes?.soft, end:newState.colorThemes?.subtle, back: mode ? light : dark, gradient:designs( 'gradient-patterns', newState.colorThemes?.soft, newState.colorThemes?.subtle,"grad6", light)}

            setGrad({ grad1, grad2, grad3, grad4, grad5, grad6 })   

    },[newState.colorSchemes, newState.colorThemes, currentTheme])

    useEffect(()=>{
        let thm = Object.keys(grad)
        setThemeNames(thm)
        
    },[grad])

    useEffect(()=>{
       if ( newState.gradColor.start.length === 0 && newState.gradColor.end.length === 0 ) return
        // let changeGrad = newGrad.setGrad(currentTheme, grad[currentTheme].back, newState.gradColor.start, newState.gradColor.end)
        let changeGrad = designs( 'gradient-patterns', grad[currentTheme].back, newState.gradColor.start,currentTheme, light)
        setGrad({ ...grad, [currentTheme]: { ...currentTheme, gradient:changeGrad} })
    },[newState.gradColor])

    // console.log(newState.gradColor)
    
    const changeDesign = (e) => {
        setActiveMenu(e)
        dispatch({ type:'BACkOPTION', value: e})
        dispatch({ type:'POPUP', value: true})
        // console.log({ start: grad[currentTheme].start, end: grad[currentTheme].end })
        
    }

    const toggleMode = () => {
        setActiveMenu('mode')
        mode ? setMode(false) : setMode(true)
    }

    return (
    Object.keys(newState.colorThemes).length !== 0 && Object.keys(newState.colorThemes).length !== 0 &&
    <div className='section backgroundSection' id={newState.section[2]} 
    style={{background: `rgba(${newState.colorSchemes?.grays[1]}, 1)`}}
    >
        <div className="title">{newState.section[2].replace("-", " ")}</div>
        <div style={{ display:'grid', justifyContent:'center', gap:'10px' }}>

            <div className='designOptions' style={{background: grad[currentTheme].gradient}}></div>

            <SlideControl arr={themeNames} active={currentTheme} index={(e) => setCurrentTheme(themeNames[e])}/>
        </div>
       
        <div  style={{ display:'grid', gridTemplateColumns: 'auto auto', justifyContent:'center', gap:'10px', alignSelf:'center'}}>
            <p>{`Change Color Scheme: `}</p>
            <div className='backgroundOptions'  >
                <p className='btn' onClick={()=> changeDesign('Start Colors')} 
                    style={{background:activeMenu === 'Start Colors' && `rgba(0,0,0,.3)`}}
                >
                    Start Colors
                </p>
                <p className='btn' onClick={()=> changeDesign('End Colors')} 
                    style={{background:activeMenu === 'End Colors' && `rgba(0,0,0,.3)`}}
                >
                    End Colors
                </p>
                <p className='btn' onClick={()=> toggleMode()} 
                    style={{background:activeMenu === 'mode' && `rgba(0,0,0,.3)`}}
                >
                    { mode ? 'Light Mode' : 'Dark Mode' }
                    </p>
            </div>
        </div>
         
        { newState.popUp === true && <PopUp /> }
    </div>
  )
}

export default Designs