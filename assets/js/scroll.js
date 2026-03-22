// 滚轮和滑动切换功能脚本
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