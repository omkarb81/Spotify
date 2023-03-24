let songIndex= 0;
let audioElement = new Audio("songs/1.mp3");
let myprogressbar= document.getElementById('myprogressbar');
let masterplay= document.getElementById('masterplay');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItem= Array.from(document.getElementsByClassName('songItem'));
let songs=[
    { songName:"Kesariya-Brahmastra", filePath:"songs/1.mp3", coverPath:"covers/Kesariya-Brahmastra.jpg"},
    { songName:"Srivalli-Pushpa", filePath:"songs/2.mp3", coverPath:"covers/srivalli.jpeg"},
    { songName:"Apna-Bana-Le-Piya", filePath:"songs/3.mp3", coverPath:"covers/apna bana le piya.jpg"},
    { songName:"Agar-Tum-Saath-Ho", filePath:"songs/4.mp3", coverPath:"covers/agar tum saath ho.jpg"},
    { songName:"Tera Hone Laga Hoon", filePath:"songs/5.mp3", coverPath:"covers/tera hone laga hoon.jpg"},
    { songName:"Chhukar Mere Man Ko", filePath:"songs/6.mp3", coverPath:"covers/chukar mere man ko.jpeg"},
    { songName:"Mere-Samne-Wali-Khidki", filePath:"songs/7.mp3", coverPath:"covers/mere samne vali khidaki.jpg"},
    { songName:"Give Me Some Sunshine", filePath:"songs/8.mp3", coverPath:"covers/give-me-some-sunshine.jpg"},
    { songName:"Saaj-Hyo-Tujha", filePath:"songs/9.mp3", coverPath:"covers/saaj hyo tuza song.jpg"},

]
songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML= songs[i].songName;
});


 

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause(); 
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value= progress;
})
myprogressbar.addEventListener('click',()=>{
    audioElement.currentTime= ((myprogressbar.value*audioElement.duration)/100);
})
const makeAllPlay= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle"); 
        gif.style.opacity=0;
    })      
}
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8)
    {
        songIndex=0;
    }
    else
    {
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity=1;

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity=1;

})

