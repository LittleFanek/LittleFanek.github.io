// 背景音乐控制脚本
// 音乐文件列表
const musicFiles = [
    'Neon_Lights-Doctor_Vox-64648106-128.mp3',
    '永遠の満月-来夢緑-66905882-320.mp3',
    '蟲達の夜-来夢緑-66905920-320.mp3'
];
let currentIndex = Math.floor(Math.random() * musicFiles.length);
const audio = document.getElementById('bg-music');
const playPauseBtn = document.getElementById('play-pause');
const nextBtn = document.getElementById('next');
const volumeSlider = document.getElementById('volume');

// 从localStorage获取音乐启用状态，默认启用
let musicEnabled = localStorage.getItem('musicEnabled') !== 'false';

// 设置初始音乐并根据状态决定是否自动播放
function loadMusic() {
    audio.src = `assets/music/${musicFiles[currentIndex]}`;
    audio.volume = 0.5; // 初始音量
    if (musicEnabled) {
        audio.play().catch(() => {
            // 如果自动播放失败，设置按钮为播放状态
            playPauseBtn.textContent = '▶';
        });
    } else {
        playPauseBtn.textContent = '▶';
    }
}

// 播放/暂停按钮事件
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸';
        musicEnabled = true;
        localStorage.setItem('musicEnabled', 'true');
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶';
        musicEnabled = false;
        localStorage.setItem('musicEnabled', 'false');
    }
});

// 下一曲按钮事件
nextBtn.addEventListener('click', () => {
    currentIndex = Math.floor(Math.random() * musicFiles.length);
    loadMusic();
    playPauseBtn.textContent = '⏸';
});

// 音量调节事件
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});

// 音乐结束时自动下一曲
audio.addEventListener('ended', () => {
    nextBtn.click();
});

// 页面加载时加载音乐
window.addEventListener('load', loadMusic);