console.log("Welcome to Spotify");
//Welcome to Spotify


let songIndex = 0;
let audioElement = new Audio('../songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName : "Salam-e-Ishq", filePath: "../songs/1.mp3", coverpath :"../covers/1.jpg"},
    {songName : "Bhula dena mujhe", filePath: "../songs/2.mp3", coverpath :"../covers/2.jpg"},
    {songName : "Manu", filePath: "../songs/3.mp3", coverpath :"../covers/3.jpg"},
    {songName : "ishq", filePath: "../songs/4.mp3", coverpath :"../covers/4.jpg"},
    {songName : "love me like you do", filePath: "../songs/5.mp3", coverpath :"../covers/5.jpg"},
    {songName : "dance monkey", filePath: "../songs/6.mp3", coverpath :"../covers/6.jpg"},
    {songName : "ramta jogi", filePath: "../songs/7.mp3", coverpath :"../covers/7.jpg"},
    {songName : "tumhari kasam", filePath: "../songs/8.mp3", coverpath :"../covers/8.jpg"},
    {songName : "Hum-Huma", filePath: "../songs/9.mp3", coverpath :"../covers/9.jpg"},
   // {songName : "Teri kasam", filePath: "../songs/10.mp3", coverpath :"../covers/10.jpg"}
]

songItems.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
   //Update SeekBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myProgressBar.value = progress; 
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element)=>{
       element.classList.add('fa-circle-pause');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause')
    })
})