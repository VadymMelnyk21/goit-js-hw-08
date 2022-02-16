import Player from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', elem => {
    localStorage.setItem(STORAGE_KEY, elem.seconds)
});

