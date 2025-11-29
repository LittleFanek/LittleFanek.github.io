/* Consolidated inline scripts extracted from index.html */

/* 主初始化脚本（原始逻辑，未改动功能） */
$(function(){
    $('#preloader').fadeOut();

    var my_pop_ope = new sl.app.my_pop_ope();
    my_pop_ope.bind_event();

    $('.js_up_totop').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    $('#navbox').onePageNav();

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 80) $('.leftsaidtit').show();
        else $('.leftsaidtit').hide();
    });

    $(".js_more_nav_show").hover(function(){ $(".jsmynavhide").show(); }, function(){});
    $(".jshidenavmore").hover(function(){ $(".jsmynavhide").hide(); }, function(){});
    $("#navbox").hover(function(){}, function(){ $(".jsmynavhide").hide(); });

    setTimeout(function(){ $("[data-kui-anim]").css('opacity',1); }, 10000);

    $('.nav_fixed_pos_bak').click(function(){
        var tid = $(this).attr('href');
        if($(tid).length == 0 || $(tid) == undefined) return;
        $('html, body').animate({ scrollTop: $(tid).offset().top }, 600);
    });

    var lazyLoadInstance = new LazyLoad({});

    if($('#iconckbtbox').length > 0){
        var iconckbtbox = document.querySelector('#iconckbtbox');
        iconckbtbox.addEventListener('click', function(){
            if(iconckbtbox.classList.contains('activecs')) iconckbtbox.classList.remove('activecs');
            else iconckbtbox.classList.add('activecs');
        });
    }

    if (self != top) { $('.beian_a').remove(); $('.js_user_report').remove(); }

    if($('.bold_hover').length > 0){
        var now_href = window.location.href;
        now_href = now_href.replace(/^htt.+:\/\/[^\/]+\//, "/");
        $('.bold_hover').each(function(){
            var this_href = $(this).attr('href');
            this_href = this_href.replace(/^htt.+:\/\/[^\/]+\//, "/");
            if(this_href == now_href){
                var nowcc = $(this).css('color');
                $(this).css('border-bottom','1px solid ' + nowcc);
                $(this).css('padding-bottom','2px');
            }
        });
    }

    if($('.myfksubnav[data-target_type="shopcar"]').length > 0){
        var spcar_num = localStorage.getItem('spcar_num');
        if(spcar_num != '' && spcar_num != undefined){
            var tspcar = $('.myfksubnav[data-target_type="shopcar"]');
            var icon = '';
            if(tspcar.find('.myiconfont').length > 0) icon = '<i class="' + tspcar.find('.myiconfont').attr('class') + '"></i>';
            tspcar.html(icon + ' ' + tspcar.attr('data-role') + '(' + spcar_num + ')');
        }
    }
});


/* 小图片弹出处理（原始逻辑） */
$(function(){
    $('.js-myet-pop').click(function(){
        $.alert('<img src="' + $(this).attr('data-my-pop-src') + '">');
    });
});


/* 页面启动时的后台请求（原始逻辑） */
$(function(){
    $.get('/home/mockup/view_add/id/21401_829ecdd1-1743825255', {'at': easyh5s()}, function(d){
        // callback intentionally left blank to match original behavior
    });
});

/* 保证 preloader 在一定时间后隐藏（原始行为） */
$(function(){
    setTimeout(function(){ $('.myjsloader').hide(); }, 6000);
});

/* 百度统计脚本注入（保留原始逻辑） */
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?202986558bd48615268c869e124ee763";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
