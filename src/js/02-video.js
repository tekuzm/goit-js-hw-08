import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerIframe = document.querySelector('#vimeo-player');
const player = new Player(playerIframe);

const onPlay = ({ sec }) => {
  localStorage.setItem('videoplayer-current-time', sec);
};

player.on('timeuptodate', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
