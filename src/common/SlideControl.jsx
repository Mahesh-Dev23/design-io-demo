import React from 'react'

const SlideControl = ({arr, active, index}) => {

    const setInd = (e) => index(e)
  return (
    arr.length > 0 &&
    <div className='slideContol' style={{gridTemplateColumns: `repeat(${arr.length}, 30px)`}}>
        { arr.map( (res, index) => 
          <div 
            className='btn btn-slide' 
            onClick={()=>setInd(index)} 
            key={res+index}
            style={{background: active === res && 'rgba(0,0,0,.8)'}}
          >
            {index + 1}
          </div>
        )}
    </div>
  )
}

export default SlideControl