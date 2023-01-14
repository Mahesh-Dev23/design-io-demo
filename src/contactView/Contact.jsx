import React, { useEffect, useContext, useState, useMemo } from 'react'
import { DesignContext } from '../App'
import Themes from '../themes/Themes'

const Contact = () => {
    const { newState, dispatch } = useContext(DesignContext)
  return (
    Object.keys(newState.colorSchemes).length !== 0 &&
    <div className='section backgroundSection' id={newState.section[3]} style={{background: `rgba(${newState.colorSchemes?.grays[1]}, 1)`}}>
        <div className="title">{newState.section[3]}</div>
        <Themes />
    </div>
  )
}

export default Contact