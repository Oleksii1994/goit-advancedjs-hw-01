import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onCurrentTimeUpdate = data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

const getCurrentTimeFromLS = () => {
  return localStorage.getItem('videoplayer-current-time');
};

player.on('timeupdate', throttle(onCurrentTimeUpdate, 1000));

player.setCurrentTime(getCurrentTimeFromLS());
