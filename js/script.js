let menu = document.getElementById("menu");
let menuButton = document.getElementById("menuButton");
let burgerMenu1 = document.getElementById("burgerMenu1");
let burgerMenu2 = document.getElementById("burgerMenu2");
let burgerMenu3 = document.getElementById("burgerMenu3");
console.log(menu);




function burgerMenu() {
    console.log(menu);
    burgerMenu1.classList.toggle("checked1");
    burgerMenu2.classList.toggle("checked2");
    burgerMenu3.classList.toggle("checked3");
    menu.classList.toggle("opened");
    menuButton.classList.toggle("opened-menu");
}

function closeMenu() {
    burgerMenu1.classList.toggle("checked1");
    burgerMenu2.classList.toggle("checked2");
    burgerMenu3.classList.toggle("checked3");
    menu.classList.toggle("opened");
    menuButton.classList.toggle("opened-menu");
}


const vidWrapper = document.getElementById("videoBlock");
const myVideo = document.getElementById("videoPLay");
const poster = document.getElementById("videoPoster");
const playButton = document.getElementById("videoButton");

// controls
const controlPlay = document.getElementById("playButton");
const controlVol = document.getElementById("volume");

// const controlRate = vidWrapper.querySelector('.player__slider[name="playbackRate"]');
// const controlSkip = vidWrapper.querySelectorAll('.player__button[data-skip]');
// const controlFullScreen = vidWrapper.querySelector('.player__fullscreen');
const controlProgress = document.getElementById("progress");
// const progressBar = document.getElementById("progressFilled");


// events
var drag;
var grap;

poster.addEventListener('click', toggleVideo);
playButton.addEventListener('click', toggleVideo);
controlPlay.addEventListener('click', toggleVideo);
myVideo.addEventListener('click', stopVideo);
controlVol.addEventListener('change', updateVol);
// controlRate.addEventListener('change', updateRate);
// controlFullScreen.addEventListener('click', goFullScreen);
// controlSkip.forEach(control => control.addEventListener('click', forward));
controlProgress.addEventListener('mouseover', function(){drag = true});
controlProgress.addEventListener('mouseout', function(){drag = false; grap = false});
controlProgress.addEventListener('mousedown', function(){grap = drag});
controlProgress.addEventListener('mouseup', function(){grap = false});
controlProgress.addEventListener('click', updateCurrentPos);
controlProgress.addEventListener('mousemove', function(e){ if(drag && grap){updateCurrentPos(e)}});

var progression;

// functions
function toggleVideo() {
  if (myVideo.paused) {
    myVideo.play();
    playButton.classList.toggle('video-pause');
    controlPlay.classList.remove('pause');
    poster.classList.add('video-play');
    updateProgress();
    progression = window.setInterval(updateProgress, 200);
  } else {
    myVideo.pause();
    controlPlay.classList.add('pause');
    clearInterval(progression);
  };
}

function stopVideo() { 
  if (!myVideo.paused) {
    myVideo.pause();
    playButton.classList.toggle('video-pause');
    controlPlay.classList.add('pause');
};
}


function updateVol() {
  var volume = this.value;
  myVideo.volume = volume;

}

// function updateRate(){
//   var rate = this.value;
//   myVid.playbackRate = rate;
// }
// function goFullScreen(){
//   console.dir(myVid);
//   if(myVid.webkitSupportsFullscreen) myVid.webkitEnterFullScreen();
// }
// function forward(){
//   var value = Number(this.dataset.skip);
//   myVid.currentTime = myVid.currentTime + value;
// }

function updateProgress() {
  var progress = myVideo.currentTime / myVideo.duration;
  // progressBar.style.flexBasis = Math.floor(progress * 1000) / 10 + '%';
}


  
controlProgress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #c8c8c8 ${value}%, #c8c8c8 100%)`
})

function updateCurrentPos(e){
  // offset of the progress bar / video wrapper width
  var newProgress = (e.clientX - vidWrapper.offsetLeft) / vidWrapper.clientWidth;
  // progressBar.style.flexBasis = Math.floor(newProgress * 1000) / 10 + '%';
  myVideo.currentTime = newProgress * myVideo.duration;
}
