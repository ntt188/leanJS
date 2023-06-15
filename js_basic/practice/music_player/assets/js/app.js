/**
 * 1. render song                                           OK
 * 2. scroll top                                            OK
 * 3. play/ pause/ seek (HTML Audio/Video DOM Reference)    OK
 * 4. CD rotate (animate API)                               OK
 * 5. Next/ prev                                            OK
 * 6. Random                                                OK
 * 7. Next/ repeat when ended                               OK
 * 8. active song                                           OK (nên tự code lại để xử lý đỡ render lại)
 * 9. scroll active song into view (scroll into view js)                          
 * 10. play song when click                                 
 */
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_SRORAGE_KEY = 'MUSIC_PLAYER';

const player = $('.player');
const cd =  $('.cd');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const progress = $('#progress');
const prevBtn = $('.btn-prev');
const nextBtn = $('.btn-next');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const playlist = $('.playlist');



const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_SRORAGE_KEY)) || {},
    songs: [
        {
            name: '\'Dynamite\'',
            singer: 'BTS',
            path: './assets/music/Dynamite.mp3',
            image: './assets/img/BTS-Dynamite.jpg'
        },
        {
            name: 'Queen card',
            singer: '(G)I-DLE',
            path: './assets/music/Queencard.mp3',
            image: './assets/img/gidle-queencard.jpg'
        },
        {
            name: '\'Life Goes On\'',
            singer: 'BTS',
            path: './assets/music/LifeGoesOn.mp3',
            image: './assets/img/BTS-LifeGoesOn.jpg'
        },
        {
            name: 'Một ngày Chẳng Nắng',
            singer: 'Pháo',
            path: './assets/music/MNCN.mp3',
            image: './assets/img/motngaychangnang.jpg'
        },
        {
            name: '\'Shut Down\'',
            singer: 'BLACKPINK',
            path: './assets/music/ShutDown.mp3',
            image: './assets/img/BLACKPINKShutDown.jpg'
        },
        {
            name: '\'Tally\'',
            singer: 'BLACKPINK',
            path: './assets/music/Tally.mp3',
            image: './assets/img/Pink_Venom_Cover.jpg'
        },
        {
            name: '(WHISTLE)',
            singer: 'BLACKPINK',
            path: './assets/music/WHISTLE.mp3',
            image: './assets/img/WhistleBlackpink.jpg'
        },
        {
            name: '\'Pink Venom\'',
            singer: 'BLACKPINK',
            path: './assets/music/PinkVenom.mp3',
            image: './assets/img/Pink_Venom_Cover.jpg'
        }
    ],
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_SRORAGE_KEY, JSON.stringify(this.config));
    },
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index  === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `;
        })
        playlist.innerHTML = htmls.join('');
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function() {    
        const _this = this;          
        const cdWidth = cd.offsetWidth;

        //xử lý khi CD quay /dùng
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)'}
        ], {
            duration: 10000, //10seconds
            iterations: Infinity
        });
        cdThumbAnimate.pause();

        // xử lý phóng to thu nhỏ CD
        document.onscroll = function() {
            // console.log(cdWidth);
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;

            //Kiểm tra newCdWidth có bé hơn 0 ko vì khi ta scroll nhanh thì ko nhận kịp giá trị
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        }

        // Xử lý khi click play
        playBtn.onclick = function() {
            if (_this.isPlaying) {
                audio.pause();  
            } else {
                audio.play();                  
            }
        }

        // Khi bài hát được play
        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add('playing'); 
            cdThumbAnimate.play();
        }

        // Khi bài hát được pause
        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove('playing'); 
            cdThumbAnimate.pause();
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            //audio.duration: thời lượng bài hát
            //audio.currentTime: thời gian hiện tại
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
            }
        }

        // xử lý khi tua song
        progress.onchange = function(e) {
            //e.target.value: là giá trị chúng ta thay đổi
            const seekTime = audio.duration * e.target.value / 100;
            audio.currentTime = seekTime;
        }
         
        // xử lý khi next song
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            audio.play();    
            _this.render();
            _this.scrollToActiveSong();         
        }

        // xử lý khi prev song
        prevBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            audio.play();    
            _this.render(); 
            _this.scrollToActiveSong();  
        }

        // xử lý bật/ tắt random
        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom;
            _this.setConfig('isRandom', _this.isRandom);
            randomBtn.classList.toggle('active', _this.isRandom);
        }

        // xử lý lặp lài 1 song
        repeatBtn.onclick = function(e) {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig('isRepeat', _this.isRepeat);
            repeatBtn.classList.toggle('active', _this.isRepeat);
        }

        // xử lý khi kết thúc bài hát
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        }

        // lắng nghe hành vi click vào play list
        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)');
            if(songNode || e.target.closest('.option')) {
                //xử lý khi click vào song
                if(e.target.closest('.song:not(.active)')){
                    // console.log(songNode.dataset.index)
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }

                //xử lý khi click vào option
                if(e.target.closest('.option')){}
            }
        }
    },
    //xử lý tự cuộn khi khuất khỏi màn hình
    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',

            });
        },300);
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;

    },
    loadConfig: function() {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },
    prevSong: function() {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        
        this.loadCurrentSong();
    },
    nextSong: function() {
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        
        this.loadCurrentSong();
    },
    playRandomSong: function() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while(newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    start: function() {
        //Gán cấu hình từ config vào ứng dụng
        this.loadConfig();

        //định nghĩa các thuộc tính cho object
        this.defineProperties();

        //lắng nghe và xử lý các sự kiện
        this.handleEvents();

        //tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();

        //render playlist
        this.render();

        randomBtn.classList.toggle('active', this.isRandom);
        repeatBtn.classList.toggle('active', this.isRepeat);
    }
}

app.start();

// const songs = [
//     {
//         name: '\'Dynamite\'',
//         singer: 'BTS',
//         path: './music/Dynamite.mp3',
//         img: './img/BTS-Dynamite.jpg'
//     },
//     {
//         name: 'Queen card',
//         singer: '(G)I-DLE',
//         path: './music/Queencard.mp3',
//         img: './img/gidle-queencard.jpg'
//     },
//     {
//         name: '\'Life Goes On\'',
//         singer: 'BTS',
//         path: './music/LifeGoesOn.mp3',
//         img: './img/BTS-LifeGoesOn.jpg'
//     }
// ]