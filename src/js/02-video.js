import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerIframe = document.querySelector('#vimeo-player');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const player = new Player(playerIframe);

const onPlay = ({ seconds }) => {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const lastCurrentTime = localStorage.getItem(LOCALSTORAGE_KEY);
if (lastCurrentTime) {
  player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
}
