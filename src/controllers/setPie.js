export const setPie= () => {

    let first = ''
        let mid = ''
        let last = ')'
        let currentMid = ''
        let i  = 1
        if(arr === undefined) return
        let sections = 360 / i
        
        
        
        let onePieDegree = sections  
        let halfPie = sections / 2 
        
        let startingDeg = 0
        let degree
        let startDeg
        let endDeg




    onePieDegree = 360 / arr.length
    halfPie = 180 / arr.length
    endDeg = onePieDegree
    startDeg = halfPie

    first = `conic-gradient(from -${startDeg }deg, rgba(${arr[0]}, 1) ${startDeg}deg, rgba(${arr[0]}, 1) ${endDeg}deg`
    startDeg = endDeg
    
        
    if ( i >= 1 ) {
        for( let d = 0; d <= i  ; d++ ){
            // console.log("startDeg ", startDeg , endDeg)
            // startDeg = endDeg
                
            currentMid = `, rgba(${arr[i]}, 1) ${startDeg}deg, rgba(${arr[i]}, 1) ${endDeg}deg`
            startDeg = endDeg
            endDeg = endDeg + onePieDegree
            // startDeg = endDeg - onePieDegree
        }
    //  console.log("pie degree", startDeg, endDeg ) 
        if( x > 0 && i < arr.length ){
            // console.log(mid.includes(currentMid), arr[i])

            if( mid.includes(currentMid)) {
                mid = mid.replace( currentMid, '')}
        }else if(i < arr.length){
            
            mid = mid + currentMid
        }
    } 
    
    // console.log("pie degree1", first + mid + last )
    // setFirstPart(first)
    // setMiddlePart(mid)
    return {frist, mid}
        
}