const pieProgress = (time, pie) =>{
    let progress = 0
    let piePart = pie / time
    for( let t = 1; t < pie; t++){
        progress = piePart * t
    }
    console.log(progress)
    return progress
}

export default pieProgress