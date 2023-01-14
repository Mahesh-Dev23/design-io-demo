import React, { useEffect, useContext, useState, useMemo } from 'react'
import { DesignContext } from '../App'
import ColorBox from '../colorView/ColorBox'

const Themes = () => {
    const { newState, dispatch } = useContext(DesignContext)

    const allThemes = useMemo(()=>{
    
        if( Object.keys(newState.colorThemes).length === 0 ) 
        return Object.values(newState.colorThemes)
    
      },[newState.colorThemes])
    
      
    //   const arr = useMemo(()=>{ 
        
    //     if( allArr === undefined ) return
    //     if( ind === undefined ) return 
    //     if( allArr !== undefined || ind !== undefined ) {
    //       // console.log(ind)
    //       return [ ...allArr[ ind ]]
          
    //     } 
         
    //   },[allArr, ind])


      
  return (
     <div className="colorThemes">
        {   
            newState.colorThemeNames?.map( (name) => 
                <ColorBox  
                    key={name} 
                    title={name} 
                    arr={newState.colorThemes[name]}
                />
                )
        }
          
    </div> 
  )
}

export default Themes