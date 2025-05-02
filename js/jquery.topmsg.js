/** jquery.topmsg.js **/
(function(){
	var get_func_lang_ok=false;
	if(!get_func_lang_ok){
		try {
	        if(typeof g_mylang === "function") {
	        	get_func_lang_ok=true;
	        }
	    } catch(e) {}
	}
	var sid;
	jQuery.topmsg=function(msg,sleep,param,animate){
		if(Object.prototype.toString.call(msg)=='[object Array]'){
			if(get_func_lang_ok){
				var vars=msg.length==3?msg[2]:'';
				var df=msg.length==2?msg[1]:'';
				msg=g_mylang(msg[0],df,vars);
			}else{
				msg=msg[0];
			}
		}
		var my_def_param={
			'animate':false,	
			'mb_animate':true,
			'bgcolor':'#fff',
			'top':'25%',
			'icon_color':'#3c8495',
			'icbgcc':'#333',
			'ftcolor':'#333',
			'icon':'',
			'mb_height':'500',
			'close_tip':'Close',
			'show_mb_mask':true,
			'show_pc_mask':true,
			'button_style':'',
			'width':'500px',
			'mb_pos':'auto',
			'pcCtHtMore':'',
			'outstyle':false,
			callback:function(){}
		};
		if(param==undefined||param==''){
			param={};
		}
		param=Object.assign(my_def_param,param);
		
        $(".sl_topmsg").remove();
        if(isNaN(sleep)){
            if(/^加载中/i.test(msg)||/^loading/i.test(msg)){
                sleep=20000;
                param.animate=true;
            }else{
                if(msg.length<=20){
                    sleep=3000;
                }else if(msg.length<=50){
                    sleep=5000;
                }else{
                    sleep=10000;
                }  
            }
        }
        var icbgcc=param.icbgcc;
        if(param.animate){
            var load_icon='<div class="spinner"></div>';
        }else{
            var load_icon='';
        }
        if(param.outstyle){
            var outstyle='height: 100vh;width: 100%;background: #00000038;position: fixed;z-index: 99999;';
        }else{
            var outstyle='';
        }
        var sht=window.innerHeight;
        var mbCtHt=50;
        var btRdius=12;
        var mctht=(param.mb_height=='100vh')?sht:param.mb_height;
        if(param.mb_pos=='auto'){
        	var adjustHt=sht-mctht;
        	if(msg.length<=30){
        		adjustHt=260;
        		mctht=140;
        		btRdius=2;
            }else if(msg.length<=100){
            	adjustHt=280;
            	mctht=160;
            	btRdius=2;
            }
        }else{
        	var adjustHt=param.mb_pos;
        }
        var mht=mctht-mbCtHt;
        var topmsg_close_tip=param.close_tip;
        var ctht=param.pcCtHtMore;
        
        var width=param.width;
        
        var maskStr='<div style="position: fixed;top: 0;width: 100%;height: 100%;background: #33333352;z-index: 999999;"> </div>';
        if((window.innerWidth<600&&!param.show_mb_mask)
        ||	(window.innerWidth>=600&&!param.show_pc_mask)){
        	maskStr='';
        }
        var btCloseStyle=param.button_style?param.button_style:';background-color:#eee;color:'+param.ftcolor;
		var tpl=
		'<style type="text/css" class="sl_topmsg">'+
		'.topmsg_flash_wrapper {position: fixed;color:#fff;z-index: 9999999999;width:100%;top:'+param.top+';overflow: visible;}'+
        '.closethistipbtn{font-size:24px;position: absolute;width: 30px;height: 30px;float: right;text-align: center;right: 0;top: 0;line-height: 30px;cursor: pointer;}'+
		'.closethistipbtn:hover{color:'+param.icon_color+'}'+
        '#sl_topmsg_body{'+
		'    position: relative;'+ 
		'    background: none repeat scroll 0% 0% '+param.bgcolor+';'+ 
		'    font-size: 16px ;margin:auto;'+
		'    padding:30px;'+
		'    color:'+param.ftcolor+';'+ 
		'    border-radius: 4px;'+ 
		'	border: 1px solid #fff;'+
    	'	box-shadow: 8px 8px 10px rgba(0,0,0,.6);'+
    	'	overflow: visible;'+
		'}'+
    	'@media (max-width: 600px) {#sl_topmsg_body{font-size:14px;border-radius:'+btRdius+'px;}.btclosetwrap{height:'+(mbCtHt)+'px;line-height:'+(mbCtHt)+'px}.btclosethistipbtn{display:block;'+btCloseStyle+';text-align:center;width:80%;margin:auto;border-radius:'+btRdius+'px;height:'+(mbCtHt-10)+'px;line-height:'+(mbCtHt-10)+'px;}.closethistipbtn{font-size:30px;margin-right:5px;margin-top:5px}.topmsg_html_box{word-break:break-all;;width:100%;height:'+mht+'px;overflow-y:scroll;padding:15px;padding-top:25px;}#sl_topmsg_body{width:100%;padding:5px 0;} .topmsg_flash_wrapper{top:'+adjustHt+'px;height:100%;}}'+
		'@media (min-width: 600px) {.topmsg_html_box{'+ctht+'}.btclosethistipbtn{display:none}.topmsg_html_box{float:left;padding:5px;width:100%;}#sl_topmsg_body{width:'+width+'}}'+
                '.spinner {width: 60px;height: 60px;background-color:'+param.icon_color+';margin: 50px auto;-webkit-animation: rotateplane 1.2s infinite ease-in-out;animation: rotateplane 1.2s infinite ease-in-out;}'+
                '@-webkit-keyframes rotateplane {0% { -webkit-transform: perspective(120px) }50% { -webkit-transform: perspective(120px) rotateY(180deg) }100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }}'+
                '@keyframes rotateplane {0% {transform: perspective(120px) rotateX(0deg) rotateY(0deg);-webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)} 50% {transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);'+
                '-webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)} 100% {transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);-webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);'+
         '}}'+
		'</style>'+
		'<div id="outtopmsgdiv" class="sl_topmsg" style="'+outstyle+'">'+maskStr+'<div id="sl_topmsg" title=""  class="sl_topmsg topmsg_flash_wrapper my-not-act">'+
		' 	<div id="sl_topmsg_body" class="flash-base my-not-act"><div class="js_closethistipbtn closethistipbtn" style=""> × </div>'+load_icon+'<icon style="float:left;font-size:28px;color:'+param.icon_color+'" class="iconfont iconclass '+param.icon+' "></icon><div class="topmsg_html_box"></div><div class="btclosetwrap js_closethistipbtn "><div class="btclosethistipbtn">'+topmsg_close_tip+'</div></div><div style="clear:both;"></div></div>'+
		'</div></div>';
			var d=$('.sl_topmsg');
			if(d.length==0){
				d=$(tpl);
				$('body').prepend(d);
			}else{
				d.show();
			}
			$('#sl_topmsg_body .topmsg_html_box').html(msg);
			if(window.innerWidth<600&&param.mb_animate){
				$("#sl_topmsg").css('bottom','-500px');
			}
			if(sid){
				d.show();
				clearTimeout(sid);
			}
            var wt=1000;
			if(sleep!=0){
				sid=setTimeout(function(){
					d.fadeOut('show',function(){
						$('#sl_topmsg_body').html();
						d.hide();
					});
				},sleep);
			}else{
            	d.show();
			}
			if(window.innerWidth<600&&param.mb_animate){
				$('#sl_topmsg').animate({bottom: '0px'},400,function(){
				});
			}
            if(animate){
                var bf=$("#sl_topmsg").css('top');
                $("#sl_topmsg").css('top',"-1000px");
                $("#sl_topmsg").animate({top:""+bf+""});
            }
            $('#sl_topmsg').dblclick(function(){
                    d.hide();
            });
            $(".js_closethistipbtn").click(function(){
                    d.hide();
            });
            $(".js_closetopmsg").click(function(){
            	d.hide();
            });
            param.callback();
			return {
				set_time:function(sleep){
					if(sid){
						clearTimeout(sid);
					}
					if (sleep != 0) {
						sid = setTimeout(function(){
							d.fadeOut('show', function(){
								$('#sl_topmsg_body').html();
								d.hide();
							});
						}, sleep);
					}
				},
				hide:function(){
					if(sid){
						clearTimeout(sid);
					}
                                        $("#outtopmsgdiv").remove();
					d.remove();
				},
				clickhide:function(){
					$('#sl_topmsg').click(function(){
						d.hide();
					});
				}
			}
		}
        jQuery.tip_reload=function(msg,sleep,param,animate){                   
            $.topmsg(msg!=''&&msg!=undefined?msg:'',false,{'animate':true,'outstyle':true});
            window.location.reload();
        }
})(jQuery)