const labelMap = {
    1:{name:'Eu Te Amo', color:'red'},
    2:{name:'L', color:'yellow'},
    3:{name:'I', color:'lime'},
    4:{name:'B', color:'blue'},
    5:{name:'R', color:'black'},
    6:{name:'A', color:'red'},
    7:{name:'S', color:'purple'}

}

export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'black'
            ctx.font = '30px Arial'         
            
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)+'%', x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/2);
            ctx.stroke()
        }
    }
}