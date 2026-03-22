// 页面加载动画脚本
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.content').style.opacity = '1';
        document.querySelector('.content').style.transform = 'translateY(0)';
    }, 1000);
});