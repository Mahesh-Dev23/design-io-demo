import React, { useEffect, useContext } from 'react'
import { DesignContext } from '../App'
import useGradient from '../hooks/useGradiant'

const ColorBox = ({colorMain, title, arr}) => {
    const { newState, dispatch } = useContext(DesignContext) 

    const { gradient, index } = useGradient({ind : arr?.length, rgb: newState.mainColor?.rgb,  arr : arr ? arr : [], time: 300 } )
    // console.log(gradient)
    const style = {
        mainBox: {
            display: "grid",
            gridTemplateRows: "auto 1fr",
            gap: "5px",
           
        },
        colorBox: {
            display: "grid",
            gridTemplateColumns: "50% 50%",
            border: "0px solid lightGray",
            justifyContent: "stretch",
            alignContent: "stretch",
            aspectRatio : "1/1",
            position:"relative",
            borderRadius: "50%",
            overflow: "hidden",
        },
        
        colorMain: {
            width: "40%",
            aspectRatio : "1/1",
            border: "5px solid white",
            position: "absolute",
            left: "50%",
            top: "50%",
            translate: "-50% -50%",
            background: `rgb(${colorMain})`
        },
        title:{
            margin: 0
        }
    }

    useEffect(()=>{
        let circle = document.getElementById(title)
        // circle.style.setProperty('--circleGradient', gradient )
    },[])

  return (
    <div style={style.mainBox}>
        
        <div className='colorCircle' 
            style={{background: `conic-gradient(rgba(${newState.colorSchemes?.grays[1]}, 1), rgba(${newState.colorSchemes?.grays[1]}, 1)) padding-box, ${gradient} border-box`}}
        >
            
            {/* <div style={{background: `rgb(${color1})`}}></div>*/}
            
            {/* <div  className='colorCircle' id={title}
                style={{background: `rgba(${newState.colorSchemes?.grays[1]}, 1)`}}
            >

            </div> */}
        </div>
        <p style={style.title}  className="title">{title.replace('_', ' ')}</p>
    </div>
  )
}

export default ColorBox