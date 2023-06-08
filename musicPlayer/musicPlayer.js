const playList = document.getElementsByClassName('playList')[0];
const audioPlayer = document.getElementsByClassName('audioPlayer')[0];
const times = document.getElementsByClassName('times')[0];
const currentProgress = document.getElementById('currentProgress');
const playBtn = document.getElementsByClassName('play')[0];
const pauseBtn = document.getElementsByClassName('pause')[0];
const backBtn = document.getElementsByClassName('back')[0];
const nextBtn = document.getElementsByClassName('next')[0];


const musics = [

   {Id:"./musics/Breaking_Benjamin_-_Breath_OFFICIAL_MUSIC_VIDEO(128k).mp3",title:"Breath",singer:"Breaking Benjamin"},
   {Id:"./musics/Breaking_Benjamin_-_Dear_Agony_(Aurora_Version)_ft._Lacey_Sturm(128k).mp3",title:"Dear Agony",singer:"Breaking Benjamin"},
   {Id:"./musics/Breaking_Benjamin_-_Angels_Fall_(Official_Lyric_Video)(128k).mp3",title:"Angels Fall",singer:"Breaking Benjamin"},
   {Id:"./musics/Breaking_Benjamin_-_Torn_in_Two__Aurora_Version_Lyric_Video_(128k).mp3",title:"Torn In Two",singer:"Breaking Benjamin"},
   {Id:"./musics/Breaking_Benjamin_-_The_Diary_of_Jane_(Official_Video)(128k).mp3",title:"Diary Of Jane",singer:"Breaking Benjamin"},
   {Id:"./musics/Breaking_Benjamin_-_Evil_Angel_+_Lyrics(128k).mp3",title:"Evil Angel",singer:"Breaking Benjamin"},


   {Id:"./musics/Avenged_Sevenfold_-_Dear_God_[Official_Music_Video](128k).mp3",title:"Dear God",singer:"Avenged Sevenfold"},
   {Id:"./musics/Avenged_Sevenfold_-_A_Little_Piece_Of_Heaven_[Official_Music_Video](128k).mp3",title:"A little Piece Of Heaven",singer:"Avenged Sevenfold"},
   {Id:"./musics/Avenged_Sevenfold_-_This_Means_War_[Official_Music_Video](128k).mp3",title:"This Means War",singer:"Avenged Sevenfold"},
   {Id:"./musics/Avenged_Sevenfold_-_I_Won't_See_You_Tonight_Part_1(128k).mp3",title:"I won't see you tonight",singer:"Avenged Sevenfold"},
   {Id:"./musics/Avenged_Sevenfold_-_Nightmare_[HQ](128k).mp3",title:"Nightmare",singer:"Avenged Sevenfold"},

   {Id:"./myanmar songs/ဖက်ထားမယ် - ‌နော‌နော် _ Naw Naw - Phet Htar Mal Lyrics Video_256k.mp3",title:"Phat Htar Mal",singer:"Naw Naw"},
   {Id:"./myanmar songs/Myin - Naww Naw_256k.mp3",title:"Myin",singer:"Naw Naw"},
   {Id:"./myanmar songs/A tine htet a lon- Naw Naw_256k.mp3",title:"A Tine Htet A Lon",singer:"Naw Naw"},
   {Id:"./myanmar songs/Min Ma Shi Nayt Myar - Han Htoo Lwin Big Bag_256k.mp3",title:"Min Ma Shi Nay Myar",singer:"Han Htoo Lwin"},
   {Id:"./myanmar songs/luu.mp3",title:"Luu",singer:"Zaw Win Htut"},
   {Id:"./myanmar songs/မျိုးကြီး - သူစိမ်းတစ်ယောက် (Live)_256k.mp3",title:"Thu Sein Ta Yauk",singer:"Myo Gyi"},
   {Id:"./myanmar songs/pyan lar chain lay.mp3",title:"Pyan Lar Chain Lay",singer:"Myo Gyi"},
   {Id:"./musics/3_Doors_Down_-_Here_Without_You_(Official_Music_Video)(128k).mp3",title:"Here Without You",singer:"3 Doors Down"},

]

for(let i=0; i<musics.length;i++){
     const tracks = document.createElement('div');
     tracks.addEventListener('click',()=>{
     trackFirst = i;
     playSong();
     });
     tracks.classList.add('track');
     const title = (i+1).toString()+'. '+musics[i].title + '  ( ' + musics[i].singer + ' )';
     tracks.textContent = title;
     playList.append(tracks);
}
let duration = 0;
let totalDuration = '00:00';
audioPlayer.addEventListener('loadeddata',()=>{
       duration = Math.floor(audioPlayer.duration);
      totalDuration = timeFunction(duration);   //note: cannot const or let to (totalDuration) in this line,already declared on global scope;
});
audioPlayer.addEventListener('timeupdate',()=>{
      const currentTime = Math.floor(audioPlayer.currentTime);
      const runTime = timeFunction(currentTime);
      const totalTimes = runTime +" / "+ totalDuration;
      times.textContent = totalTimes;
      progressFunction(currentTime);
});

 const progressFunction =(currentTime) =>{
      const progressWidth = (500/duration)*currentTime;
      currentProgress.style.width = progressWidth.toString() +"px";
 }

const timeFunction = (total)=>{
    const minutes = Math.floor(total/60);
   const seconds = total%60;
   const minuteText = minutes<10 ? "0" + minutes.toString() : minutes;
   const secondText = seconds<10 ? "0" + seconds.toString() : seconds;
   return minuteText +":"+ secondText;
};
let playing = false;
let trackFirst = 0;
playBtn.addEventListener('click',()=>{
      const currentTime = Math.floor(audioPlayer.currentTime);
      playing = true;
      if (currentTime === 0){
            playSong();
      }else{
            audioPlayer.play();
            newFunction();
      }
});

pauseBtn.addEventListener('click',()=>{
      playing = false;
      audioPlayer.pause();
      newFunction();
});
backBtn.addEventListener('click',()=>{
      if(trackFirst === 0){
            return;
      }
      trackFirst -=1;
      playSong();

});
nextBtn.addEventListener('click',()=>{
     if(trackFirst === musics.length - 1){
      return;
     };
     trackFirst +=1;
     playSong();
     
});
const playSong = () =>{
      const songToPlay = musics[trackFirst].Id;
      audioPlayer.src = songToPlay;
      audioPlayer.play();
      playing = true;
      newFunction();
};

const newFunction =()=>{
      if(playing) {
            playBtn.style.display = "none";
            pauseBtn.style.display ="inline";
      }else{
            playBtn.style.display = "inline";
            pauseBtn.style.display = "none";
      }
};

