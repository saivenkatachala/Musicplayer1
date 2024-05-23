const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const songTitle = document.getElementById('songTitle');
const songImage = document.getElementById('songImage');

const songs = [
    { title: 'Rubberu Gajulu Song', source: 'song1.mp3', image: 'song1.jpg' },
    { title: 'Noonoogu Meesalodu Song', source: 'song2.mp3', image: 'song2.jpg' },
    { title: 'O Lammi Thikkareginda song', source: 'song3.mp3', image: 'song1.jpg' },
    { title: 'Nuv Muttukunte song', source: 'song4.mp3', image: 'song1.jpg' },
    { title: 'Srikarakarunda song', source: 'song5.mp3', image: 'song1.jpg' },
    { title: 'Chala Challaga Gali song', source: 'song6.mp3', image: 'song1.jpg' },
    { title: 'Young Yama song', source: 'song7.mp3', image: 'song1.jpg' },
    { title: 'Jalsa song', source: 'song8.mp3', image: 'song8.jpg' },
    { title: 'My Heart Is Beating song', source: 'song9.mp3', image: 'song8.jpg' },
    { title: 'Chalore Chalore Chal (Hindi)', source: 'song10.mp3', image: 'song8.jpg' },
    { title: 'Jennifer Lopez song', source: 'song11.mp3', image: 'song8.jpg' },
    { title: 'Gaallo Thelinattunde song', source: 'song12.mp3', image: 'song8.jpg' },

    { title: 'PUSHPA PUSHPA song', source: 'song13.mp3', image: 'song9.jpg' },
    { title: 'Dakko Dakko Meka song', source: 'song14.mp3', image: 'song9.jpg' },
    { title: 'Eyy Bidda Idhi Naa Adda song', source: 'song15.mp3', image: 'song9.jpg' },
    { title: 'Oo Antava Oo Oo Antava song', source: 'song16.mp3', image: 'song9.jpg' },

    { title: 'Nattu Nattu song', source: 'song17.mp3', image: 'song20.jpg' },
    { title: 'Komma Uyyala song', source: 'song18.mp3', image: 'song20.jpg' },
    { title: 'Dosti song', source: 'song19.mp3', image: 'song20.jpg' },
    { title: 'Janani song', source: 'song20.mp3', image: 'song20.jpg' },
    { title: 'Komuram Bheemudo song', source: 'song21.mp3', image: 'song20.jpg' },
    { title: 'Raamam Raaghavam song', source: 'song22.mp3', image: 'song20.jpg' },
    { title: 'Etthara Jenda song', source: 'song23.mp3', image: 'song20.jpg' },
];

let currentSongIndex = 0;

function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.source;
    songTitle.textContent = song.title;
    songImage.src = song.image;
}

function playSong() {
    audioPlayer.play();
}

function pauseSong() {
    audioPlayer.pause();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if (!audioPlayer.paused) {
        audioPlayer.play();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    if (!audioPlayer.paused) {
        audioPlayer.play();
    }
}

function searchSong() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === '') {
        alert('Please enter a search term.');
        return;
    }

    const foundSong = songs.find(song => song.title.toLowerCase().includes(searchTerm));
    if (foundSong) {
        const foundIndex = songs.indexOf(foundSong);
        currentSongIndex = foundIndex;
        loadSong(currentSongIndex);
    } else {
        alert('Song not found!');
    }
}

loadSong(currentSongIndex);

playBtn.addEventListener('click', playSong);
pauseBtn.addEventListener('click', pauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
searchBtn.addEventListener('click', searchSong);
