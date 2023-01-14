export const findValidValue = (val) => {
    if(val=== '') return
    let message = ''
    let valid = false
    let valArr, textVal,  digitval, allTextVal, hashVal = ''
    
    if( val.length > 13) { message = 'Please provide valid inputs!' }

    valArr = val.split('')

    digitval = val.match(/\d/g)
    textVal = val.match(/[abcdef ,#]/gi)
    allTextVal = val.match(/[g-z]/gi)
    hashVal = val.match(/#/gi)
    
    
    if( digitval === null ) { digitval = '' } 
    if( textVal === null ) { textVal = ''} 
    if( allTextVal === null ) { allTextVal = ''}
    if( hashVal === null ) { hashVal = ''}
    // console.log(val[0])
    if( hashVal.length > 0 && val[0] !== '#' ) return {message : `With HEX value add character '#' once at begining!` , valid: false }
    if( allTextVal.length > 0) return { message : `Character onwards letter 'g / G' are invalid!`, valid: false }
    // if( textVal.length > 0 ) {console.log( textVal)}
    // if( digitval.length === 0 && textVal.length  === 0 ) { message = 'Some inputs are not valid characters!' }
    if( val.length !== (digitval.length + textVal.length)) { message = 'All inputs are not correct!' }
    
    if( digitval.length > 0 && val.includes(',') && digitval.length === (val.length - textVal.length) )  {
        
         textVal = val.match(/[abcdef]/gi)
        
        if( textVal === null ) { textVal = ''}
        
        
        if( textVal.length > 0 && digitval.length === 0) { 
            message = 'For rgb value provide only digits.' 
        }else{

            valArr = val.replace(' ', '').split(',')
            

            if(valArr.length !== 3){
                if( valArr.length > 3 ) { 
                    message = 'For rgb provide not more than 3 coma seperated values!' 
                }else if(  valArr.length < 3 ) { 
                    message = 'For rgb provide 3 coma seperated values!' 
                }
            }

            if( valArr.length === 3 ) {
                message = ''
                for(let i = 0; i < valArr.length; i++){
                    
                    if( valArr[i] < 0 || valArr[i] > 255 ) { 
                        // console.log( 255 - valArr[i] )
                        message = 'Value should be between 0 to 255' 
                    }else{
                        message = `${val} is rgb.`; valid = true 
                    }
                }
                
            }
        } 
        
        
     } else {
        if( val.length > 7 || val.length < 6) { message = 'Provide 6 character HEX value' }
        if( val.match(/\s/g)) { message = 'No space in HEX value' }
        let hashVal = val.match(/#/gi)
        // console.log(hashVal)
        textVal = val.match(/[abcdef]/gi)
        if( textVal === null ) { textVal = ''} 
        if( val[0] === '#' && val.length === 7){ message = `${val} is hex.`; valid = true }
        if( val[0] !== '#' && val.length === 6){ message = `${val} is hex.`; valid = true }
     }
       
        return { message, valid }
    }