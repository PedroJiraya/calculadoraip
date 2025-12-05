export const calcPtx = (tag:number) =>{
    return Math.floor(tag /256)
}

export const calcRadio = (tag:number) =>{
       const tagR1 =  Math.floor((10000 + tag) /256)  
        const tagR2 = Math.floor(10000 + tag)
    return {tagR1, tagR2}
}
export const calcMems = (tag:number) =>{
       const tagR1 =  Math.floor((30000 + tag) /256)  
        const tagR2 = Math.floor(30000 + tag)
    return {tagR1, tagR2}
}
export const calcOptalert = (tag:number) =>{
       const tagR1 =  Math.floor((40000 + tag) /256)  
        const tagR2 = Math.floor(40000+ tag)
    return {tagR1, tagR2}
}
export const calcGps1 = (tag:number) =>{
       const tagR1 =  Math.floor((30000 + tag) /256)  
        const tagR2 = Math.floor(30000 + tag)
    return {tagR1, tagR2}
}
export const calcGps2 = (tag:number) =>{
       const tagR1 =  Math.floor((40000 + tag) /256)  
        const tagR2 = Math.floor(40000 + tag)
    return {tagR1, tagR2}
}
