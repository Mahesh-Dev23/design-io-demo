

const grads = (type, mode, colArr1, colArr2) => {

    const lin1 = (col) => `rgba(${col[2]},1) 70%, rgba(${col[1]},1) 70%, rgba(${col[1]},1) 80%, 
                    rgba(${col[3]},1) 80%, rgba(${col[3]},1) 90%, rgba(${col[4]},1) 90%`

    // ---------------------------------------------------------------------------------------------------------------------------------------

    const lin2 = `rgba(255, 255, 255, .9) 35%, rgba(255, 255, 255, .5)70%, rgba(255, 255, 255, .5)60%, rgba(255, 255, 255, .8)60%
                , rgba(255, 255, 255, .7)90%, rgba(255, 255, 255, .8)90%, rgba(255, 255, 255, .6)100%`   

    // ---------------------------------------------------------------------------------------------------------------------------------------

    const stripe1 = (col) => `rgba(${col[2]},.5) 40%, rgba(${col[1]},.6) 40%, rgba(${col[2]},.8) 55%, rgba(${col[3]},.4) 70%`  

    // ---------------------------------------------------------------------------------------------------------------------------------------
    
    const curve = (col) => `rgba(${col[2]},0) 0%, rgba(${col[2]},.5)12%, rgba(${col[2]},1)14%, rgba(${col[2]},.6)15%, rgba(${col[2]},0)30%`

    // ---------------------------------------------------------------------------------------------------------------------------------------

    const curveClip = (col) => `rgba(${col[3]},.5) 0deg, rgba(${col[3]},.5)90deg, rgba(${col[3]},1)90deg, rgba(${col[3]},1)270deg`
    
    // ---------------------------------------------------------------------------------------------------------------------------------------

    const strip45 = (col) => `rgba(${col[0]}, 0) 10%, rgba(${col[0]},.1) 10%, rgba(${col[0]},0) 70%,
                            rgba(${col[0]},0) 70%,rgba(${col[0]},.2) 70%, rgba(${col[0]}, .2) 80%, 
                            rgba(${col[2]}, .2) 80%, rgba(${col[2]}, .2) 90%, rgba(${col[0]}, .2) 90%, rgba(${col[0]}, .1) 90%`
    
    // ---------------------------------------------------------------------------------------------------------------------------------------

    const conic = (col) => `at 100% 100%, rgba(${col[0]}, 0) 10deg, rgba(${col[0]}, 1) 10deg, rgba(${col[0]},1) 320deg, 
                        rgba(${col[2]},1) 320deg, rgba(${col[2]},1) 320deg, rgba(${col[2]},1) 340deg, 
                        rgba(${col[1]},1) 340deg, rgba(${col[1]},1) 360deg`
    
    // ---------------------------------------------------------------------------------------------------------------------------------------

    const conic2 = (col) => ` rgba(${col[2]}, .3) 0deg, rgba(${col[3]}, .8) 40deg, rgba(${col[2]},.8) 120deg, 
                        rgba(${col[3]},.8) 190deg, rgba(${col[2]},.4) 240deg, rgba(${col[3]},.8) 300deg, 
                        rgba(${col[1]},.3) 340deg, rgba(${col[1]},.7) 360deg`
    
    // ---------------------------------------------------------------------------------------------------------------------------------------
                   
    const radial = (col) => `circle at bottom right, rgba(${col[5]}, .9) 10%, rgba(${col[5]}, .7) 10%, rgba(${col[5]},1) 20%, 
                        rgba(${col[5]},0) 20%, rgba(${col[5]},0) 30%, rgba(${col[5]},0) 30%, 
                        rgba(${col[5]},1) 30%, rgba(${col[5]},.8) 90%, rgba(${col[5]},1) 100%`
    
    // ---------------------------------------------------------------------------------------------------------------------------------------

    if(!colArr1 || !type ) return
        
        let col2 

        if(!colArr2) {
            col2 = colArr1 
        } else {
            col2 = colArr2
        }

    let grad1 = `repeating-linear-gradient(45deg, ${stripe1(colArr1)}), repeating-linear-gradient(0deg, ${stripe1(colArr2)}), ${mode}`   

    // ----------------------------------------------------------------------------------
        
    let grad2 = `conic-gradient( at 10% -10%, ${conic2(colArr1)} ), repeating-radial-gradient(circle at 10% 0%, ${curve(colArr1)} ), ${mode}`

    // ----------------------------------------------------------------------------------
    
    let grad3 = ` repeating-linear-gradient(60deg, ${lin2}), repeating-linear-gradient(120deg, ${stripe1(colArr1)} ),  repeating-linear-gradient(240deg, ${stripe1(colArr2)} ), ${mode}`

    // ----------------------------------------------------------------------------------

    let grad4 = `linear-gradient(45deg, ${strip45(colArr1)}), linear-gradient(135deg, ${strip45(colArr2)}), ${mode}`
    
    // ----------------------------------------------------------------------------------
    
    let grad5 = `radial-gradient( ${radial(colArr1)} ), conic-gradient( ${conic(colArr2)} ), ${mode}`
    
    // ----------------------------------------------------------------------------------

    let grad6 = `linear-gradient( ${lin2} ), linear-gradient(90deg, ${lin1(colArr1)} ), ${mode}`
    
    let gradients = { grad1, grad2, grad3, grad4, grad5, grad6 } 
    // console.log(type, colArr1, colArr2)   
    
    let gradient = gradients[type]

    return gradient
}


class CreateGradientBackground {

    

    constructor(type, mode, colArr1, colArr2){
        
        this.getGrad = grads(type, mode, colArr1, colArr2)

    }

    setGrad(type, mode, colArr1, colArr2){
        // console.log(type, colArr1, colArr2)
        this.getGrad = grads(type, mode, colArr1, colArr2)
        return this.getGrad
    }


}

export default CreateGradientBackground