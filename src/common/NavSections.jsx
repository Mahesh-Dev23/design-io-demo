import React, { useContext } from 'react'
import { DesignContext } from '../App'

const NavSections = () => {
    const { newState, dispatch } = useContext(DesignContext)
    const goto = e => { 
        if( e === -1 && newState.sectionCount === 0 || e === 1 && newState.sectionCount === newState.section.length - 1) return
        dispatch({ type:"GOTOSECTION", value: e })
        dispatch({ type:'POPUP', value: false})
    }
        

    

  return (
    <div className='navSection'>
        <div className='btn-round' onClick={ ()=> goto(-1) }>
            <a href={`#${newState.section[newState.sectionCount]}`}>&#9650;</a>
        </div>
        <div className='btn-round' onClick={ ()=> goto(1) }>
            <a href={`#${newState.section[newState.sectionCount]}`}>&#9660;</a>
        </div>
    </div>
  )
}

export default NavSections