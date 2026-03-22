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

// 页面加载事件
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.content').style.opacity = '1';
        document.querySelector('.content').style.transform = 'translateY(0)';
        // 加载音乐
        loadMusic();
    }, 1000);
});

// 滚轮和滑动切换功能
const sections = document.querySelectorAll('header, main > section, footer');
let currentSection = 0;
let isScrolling = false;

function scrollToSection(index) {
    if (index < 0 || index >= sections.length || isScrolling) return;
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { isScrolling = false; }, 1000);
    currentSection = index;
}

// 滚轮事件
window.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
        // 向下滚动
        scrollToSection(currentSection + 1);
    } else {
        // 向上滚动
        scrollToSection(currentSection - 1);
    }
}, { passive: false });

// 触摸滑动事件
let startY = 0;
window.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});
window.addEventListener('touchend', (e) => {
    const endY = e.changedTouches[0].clientY;
    const diffY = startY - endY;
    if (Math.abs(diffY) > 50) { // 最小滑动距离
        if (diffY > 0) {
            // 向上滑动（向下滚动）
            scrollToSection(currentSection + 1);
        } else {
            // 向下滑动（向上滚动）
            scrollToSection(currentSection - 1);
        }
    }
});