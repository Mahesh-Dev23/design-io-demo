import React, { useEffect, useContext, useState, useMemo }  from 'react'
import { DesignContext } from '../App'

const GradColor = () => {
    const { newState, dispatch } = useContext(DesignContext)

    const setGradColors = (name) => {
        let gradKey = newState.backgroundOption.split(' ')[0].toLowerCase()
        // console.log({...newState.gradColor,  [gradKey] :  newState.colorThemes[name] })
        dispatch({ type: 'COLORARR', key: 'gradColor' , value: {...newState.gradColor,  [gradKey] :  newState.colorThemes[name] }})
    }
  return (
    newState.colorThemeNames.length > 0 &&
    <>
        <div>{`Change ${newState.backgroundOption}`}</div>
        <div className='popBtnStack' >

            {
                newState.colorThemeNames.map( name => 
                    <div className='btn' 
                        key={name}
                        style={{ justifySelf:'stretch', borderRadius: '10px'}}
                        onClick={() => setGradColors(name)} 
                    >
                        {name}
                    </div>)
            }
            
        
        </div>
    </>
  )
}

export default GradColor