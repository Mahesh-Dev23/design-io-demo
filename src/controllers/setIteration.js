let a
let count = 0
const setIteration = (colorInd, length, ind) => {
    let i = colorInd
    count = ind
    let len = length + 3
    // console.log(count)
    // const itr = () => {
        // count = false
        //  console.log("itr", ind)
        if(i === undefined )return
        // let i = ind
        // a = false
        // let i = ind
          if( i === 0 && a === undefined )  a = true
          
          if( a && i === len )  a = false
          
          if( a && i < len ) i =  i + 1 
          
          if( a === false){
                //   console.log("two", i)
                if( i > 0 ) i = i - 1 
                
                if( i === 0 ) {
                    a = true
                    count = count + 1
                }
          }
          // console.log(` i ${i}, a ${a}, count ${count}`)
           return {i, count, a}
    // }    
        // return setTimeout( itr, 5000)
    
    
    
}

export default setIteration