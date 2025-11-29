(function(){
  /*
    animations.js
    说明: 负责在页面加载与滚动时，为常见元素添加动画类。
    设计原则: 保持非破坏性，不修改 DOM 结构或已有事件，仅添加/切换类名。
    兼容性: 使用 IntersectionObserver（主流浏览器支持良好）；若需要，可在不破坏功能的情况下回退为简单的滚动检测。
  */

  function onReady(fn){
    if(document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(function(){
    // ----- Preloader fade (keeps original behaviour) -----
    var pre = document.getElementById('preloader');
    if(pre){
      // 延迟短暂时间后添加淡出动画类，动画结束后隐藏元素
      setTimeout(function(){
        pre.classList.add('preloader-fade');
        pre.addEventListener('animationend', function(){ try{ pre.style.display = 'none'; }catch(e){} });
      }, 350);
    }

    // ----- Mobile menu icon toggle -----
    var icon = document.getElementById('iconckbtbox');
    if(icon){
      // 切换类名以驱动 css 动画（svg path 变化）
      icon.addEventListener('click', function(){
        icon.classList.toggle('activecs');
      });
    }

    // ----- Nav background toggle on scroll -----
    var nav = document.getElementById('navopcbox');
    function onScrollNav(){
      if(!nav) return;
      if(window.scrollY > 20) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }
    window.addEventListener('scroll', onScrollNav);
    onScrollNav(); // 初始化一次

    // ----- IntersectionObserver: 自动为进入视口的元素添加动画类 -----
    var ioOptions = { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.08 };
    var io;
    // 仅在浏览器支持时使用 IntersectionObserver；若不支持，可考虑后续降级实现
    if('IntersectionObserver' in window){
      io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            var el = entry.target;
            // 允许通过 data-ani / data-animate 指定自定义动画类
            var anim = el.getAttribute('data-ani') || el.getAttribute('data-animate') || el.getAttribute('data-anim-name') || el.dataset.ani || el.dataset.animate;
            // 默认策略：根据元素类型或 class 选取合适动画（可扩展）
            if(!anim){
              if(el.classList.contains('mylog')) anim = 'zoom-in';
              else if(el.tagName.toLowerCase() === 'h1') anim = 'fade-in-up';
              else if(el.classList.contains('nav_items')) anim = 'slide-in-left';
              else if(el.tagName.toLowerCase() === 'img') anim = 'zoom-in';
              else anim = 'fade-in-up';
            }
            el.classList.add('animated');
            el.classList.add(anim);
            // 加入后无需继续观察，避免重复触发
            io.unobserve(el);
          }
        });
      }, ioOptions);
    }

    // 选择默认观察目标并标记为准备动画（初始不可见）
    var selectorList = '.mylog, #bk_119491 h1, .img-responsive, .nav_items, .autovcenterpox .myfullimg, .iconckbtbox';
    var targets = [].slice.call(document.querySelectorAll(selectorList));
    targets.forEach(function(t){
      // 标记为 ready；若 Io 可用则观察元素，否则直接添加动画类以保证可见性
      t.classList.add('animate-ready');
      if(io) io.observe(t);
      else {
        // 未支持 IntersectionObserver 时的安全回退：短延迟后直接显示
        setTimeout(function(){ t.classList.add('animated'); t.classList.add('fade-in-up'); }, 120);
      }
    });

    // ----- Hover effect for buttons: brief pulse on enter -----
    var buttons = document.querySelectorAll('.pubbtnbg, .pubbtnline, .pubbtnwtbg');
    buttons.forEach(function(b){
      b.addEventListener('mouseenter', function(){
        b.classList.add('pulse');
        setTimeout(function(){ b.classList.remove('pulse'); }, 800);
      });
    });
  });
})();
