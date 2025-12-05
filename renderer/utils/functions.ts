export const calcPtx = (tag:number) =>{
    return Math.floor(tag /256)
}

export const calcRadio = (tag:number) =>{
       const tagR1 =  Math.floor((1 + tag) /256)  
        const tagR2 = Math.floor(1 + tag)
    return {tagR1, tagR2}
}
export const calcMems = (tag:number) =>{
       const tagR1 =  Math.floor((3 + tag) /256)  
        const tagR2 = Math.floor(3 + tag)
    return {tagR1, tagR2}
}
export const calcOptalert = (tag:number) =>{
       const tagR1 =  Math.floor((4 + tag) /256)  
        const tagR2 = Math.floor(4 + tag)
    return {tagR1, tagR2}
}
export const calcGps1 = (tag:number) =>{
       const tagR1 =  Math.floor((3 + tag) /256)  
        const tagR2 = Math.floor(3 + tag)
    return {tagR1, tagR2}
}
export const calcGps2 = (tag:number) =>{
       const tagR1 =  Math.floor((4 + tag) /256)  
        const tagR2 = Math.floor(4 + tag)
    return {tagR1, tagR2}
}
