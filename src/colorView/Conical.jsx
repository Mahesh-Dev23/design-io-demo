import React,{ useContext, useState, useEffect} from 'react'
import { DesignContext } from '../App'
import useGradient from '../hooks/useGradiant'

export const Conical = () => {
    const { newState } = useContext(DesignContext)
    
    const gradient = useGradient()
    

    const [ arrayCount, setArrayCount ] = useState(null)
    const [ currentArray, setCurrentArray ] = useState()

    const increaseCount = () => {
         console.log("1 increase count")
        if( arrayCount === null ) return
        // console.log("2 increase count")
        
        if( arrayCount === currentArray?.length ) {
            clearTimeout(increaseCount)
            clearInterval(increaseCount)
            setArrayCount( 0 )
        } 
        if( arrayCount < currentArray?.length ) return setArrayCount( arrayCount + 1 )
        
    }

    const sliceArray = (arr, slice) => {
        let i = 0
        let newArr 
        for( i = 0 ; i < arr.length; i++){
            newArr =  arr.slice(0 , slice)
        }
        return newArr
    }

    useEffect(()=> { 
        if(Object.keys(newState.colorSchemes).length === 0) return
        setCurrentArray(newState.colorSchemes['triadic']) 
        
    }, [newState.colorSchemes])
    
    
    //  console.log(gradient)
    

    return (
    <div className='conical' style={{backgroundImage: gradient}}> 
        <div className='conicalInside'></div>
    </div>
  )
}
