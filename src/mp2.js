
//Initialize the Variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgress=document.getElementById('myProgress');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songs=[
    {songName:"As it was",filePath:"1.mp3",coverPath:"cover1.jpg"},
    {songName:"Stereo Hearts",filePath:"2.mp3",coverPath:"cover2.jpg"},
    {songName:"Sudebaazi",filePath:"3.mp3",coverPath:"cover3.jpg"},
    {songName:"Bin Tere",filePath:"4.mp3",coverPath:"cover4.jpg"},
    {songName:"Ishq Risk",filePath:"5.mp3",coverPath:"cover5.jpg"},
    {songName:"Kho Gaye",filePath:"6.mp3",coverPath:"cover6.jpg"},
    {songName:"Let me down slowly",filePath:"7.mp3",coverPath:"cover7.jpg"},
    {songName:"Arcade",filePath:"8.mp3",coverPath:"cover8.jpg"},
]

//audioElement.play();


//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
      //Update seekbar
      progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
      myProgress.value=progress;
})
myProgress.addEventListener('change',()=>{
    audioElement.currentTime=myProgress.value*audioElement.duration/100;
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
//auto change songs
audioElement.src=songs[songIndex].filePath;
audioElement.play();
audioElement.addEventListener('ended',function(){
    songIndex++;
    if(songIndex<songs.length){
        audioElement.src=songs[songIndex].filePath;
        audioElement.play();
        gif.style.opacity=1;
    }
    else{
        songIndex=0;
        audioElement.src=songs[songIndex].filePath;
        audioElement.play();
        gif.style.opacity=0;
    }
    masterSongName.innerText=songs[songIndex].songName;
});