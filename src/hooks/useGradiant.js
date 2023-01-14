import React,{  useState, useEffect, useMemo} from 'react'
import pieProgress from '../controllers/pieProgress'

// import { setIteration } from '../controllers/setIterations'

const useGradient = ({ind, rgb, arr, time}) => {
    
    

    const [ gradient, setGrdient ] = useState()
    const [ firstPart, setFirstPart ] = useState('')
    const [ middlePart, setMiddlePart ] = useState('')
    const [ lastPart, setLastPart ] = useState(')')     
    
    const [ i, setI ] = useState(0)
    
    

    useEffect(()=>{ setI(ind) },[ind])
 
    useEffect(()=>{
        if(rgb === '') return 
        setGrdient( `conic-gradient(rgba(${rgb}, 1) , rgba(${rgb})` )
    },[rgb])

    useEffect(()=> {
        setGrdient( firstPart + middlePart + lastPart ) 
    },[rgb, firstPart, middlePart, lastPart])

    const getMiddle = useMemo(() => {
        let first = ''
        let mid = ''
        let last = ')'
        let currentMid = ''
        
        if(arr === undefined ||  rgb === undefined) return
        
        // console.log( ind, rgb, arr)
        // const setPie = () => {
            // console.log("i ", i)

            let pie = 360 / i
        
            let onePieDegree = pie  
            let halfPie = pie / 2 
            
            let startDeg = halfPie
            let endDeg = 360

            // pieProgress(time, pie)
            // console.log(pie, startDeg, endDeg)

            first = `conic-gradient(from ${startDeg }deg, rgba(${arr[0]}, 1) -${startDeg}deg, rgba(${arr[0]}, 1) ${endDeg}deg`
            if( i > 1){
                endDeg = onePieDegree + halfPie 
                //  console.log("before itr", pie, startDeg, endDeg)
                
                    startDeg = 360 - halfPie
                    // console.log(startDeg)
                
                first = `conic-gradient(from ${0 }deg, rgba(${arr[0]}, 1) ${0}deg, rgba(${arr[0]}, 1) ${halfPie}deg`
                mid = ''
                
                startDeg = halfPie
                for( let d = 1; d < i; d++){
                    
                    
                    
                    if( endDeg > 360 ){ endDeg = endDeg - 360 }
                    
                    currentMid = `, rgba(${arr[d]}, 1) ${startDeg}deg, rgba(${arr[d]}, 1) ${endDeg}deg`
                    last = `, rgba(${arr[0]}, 1) ${endDeg}deg)`
                    startDeg = endDeg
                    endDeg = endDeg + pie

                        
                    mid = mid + currentMid
                    
                }

            
            // console.log(mid)
            // console.log("pie degree1", first + mid + last )
            
            setFirstPart(first)
            setMiddlePart(mid)
            setLastPart(last)
        }
        

        
    },[arr, i ])
    //   console.log( getMiddle )
    // console.log( 'mid ', middlePart ) 
    // console.log( 'last ', lastPart )

     return {gradient }
}

export default  useGradient