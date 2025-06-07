let StartButton=document.getElementById('StartButton')
let startimg=document.getElementById('startscreen')
let cave=document.getElementById('cave')
let noi=document.getElementById('noi')

let music=new Audio('Sound/cave.mp3')
let openmusic=new Audio('Sound/dark.mp3')

let ifstart=false

cave.style.display='none'

function cavemove(){
}
update()
function update(){
    if (ifstart){
        StartButton.style.display='none'
        startimg.style.display='none'
        cave.style.display='block'
        
    }else{
        StartButton.style.display='block'
        startimg.style.display='block'
    }
}

StartButton.addEventListener('click',()=>{
    if (!ifstart){
        ifstart=true
        music.play()
        openmusic.pause()
    }
    update()
})
music.addEventListener('ended',()=>{
    music.play()
})

openmusic.addEventListener('ended',()=>{
    openmusic.play()
})
noi.addEventListener('click',()=>{
    noi.style.display='none'
    openmusic.play()
})
