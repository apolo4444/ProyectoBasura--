const media = document.querySelector('video');
const controls = document.querySelector('.controls');
const carita = document.querySelector('.cara');

const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const rwd = document.querySelector('.rwd');
const fwd = document.querySelector('.fwd');

const timerWrapper = document.querySelector('.timer');
const timer = document.querySelector('.timer span');
const timerBar = document.querySelector('.timer div');

media.removeAttribute('controls');
controls.style.visibility = 'visible';
play.addEventListener('click', playPauseMedia);

function playPauseMedia() {
    if(media.paused) {
      play.setAttribute('data-icon','u');
      media.play();
      carita.style.visibility='hidden';

    } else {
      play.setAttribute('data-icon','P');
      media.pause();
      carita.style.visibility='hidden';

    }
  }
  stop.addEventListener('click', stopMedia);
media.addEventListener('ended', stopMedia);

function stopMedia() {
    media.pause();
    media.currentTime = 0;
    play.setAttribute('data-icon','P');
  carita.style.visibility='visible';
  }

  rwd.addEventListener('click', mediaBackward);
fwd.addEventListener('click', mediaForward);
let intervalFwd;
let intervalRwd;


function mediaBackward() {
  clearInterval(intervalFwd);
  fwd.classList.remove('active');

  if(rwd.classList.contains('active')) {
    rwd.classList.remove('active');
    clearInterval(intervalRwd);
    media.play();
    carita.style.visibility='hidden';
  } else {
    rwd.classList.add('active');
    media.pause();
    intervalRwd = setInterval(windBackward, 200);
    carita.style.visibility='hidden';
  }
}

function mediaForward() {
  clearInterval(intervalRwd);
  rwd.classList.remove('active');

  if(fwd.classList.contains('active')) {
    fwd.classList.remove('active');
    clearInterval(intervalFwd);
    media.play();
    carita.style.visibility='hidden';
  } else {
    fwd.classList.add('active');
    media.pause();
    intervalFwd = setInterval(windForward, 200);
    carita.style.visibility='hidden';
  }
}
function windBackward() {
    if(media.currentTime <= 3) {
      rwd.classList.remove('active');
      clearInterval(intervalRwd);
      stopMedia();
    } else {
      media.currentTime -= 3;
    }
  }
  
  function windForward() {
    if(media.currentTime >= media.duration - 3) {
      fwd.classList.remove('active');
      clearInterval(intervalFwd);
      stopMedia();
    } else {
      media.currentTime += 3;
    }
  }
  media.addEventListener('timeupdate', setTime);

  rwd.classList.remove('active');
  fwd.classList.remove('active');
  clearInterval(intervalRwd);
  clearInterval(intervalFwd);
    