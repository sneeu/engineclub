(function($){$.fn.verticaltabs=function(j){var k={speed:500,slideShow:true,slideShowSpeed:1000,activeIndex:0,playPausePos:"bottomRight",pauseOnHover:true};var j=$.extend(k,j);return this.each(function(){var a=$(this);var b=$(a).children(".verticalslider_tabs").children();var c=$(a).children(".verticalslider_contents").children();var d;var e="<div class=\"arrow\">&nbsp;</div>";var f=k.activeIndex;var g=j.slideShow;var h;var i;$(c[k.activeIndex]).addClass("activeContent");$(b[f]).addClass("activeTab").append(e);if(j.slideShow){i=$(b).length*$(".verticalslider_tabs a").outerHeight();$(a).children(".verticalslider_contents").append("<div class=\"playPause\"><div class=\"play\"><a href=\"#\"></a></div><div class=\"pause\"><a href=\"#\"></a></div></div>");switch(j.playPausePos){case"topRight":$(".verticalslider .playPause").css({marginTop:"0px",marginLeft:$(".verticalslider_contents").width()-$(".verticalslider .playPause a").width()});break;case"topLeft":$(".verticalslider .playPause").css({marginTop:"0px",marginLeft:"0px"});break;case"bottomRight":$(".verticalslider .playPause").css({marginTop:i-$(".verticalslider .playPause a").height(),marginLeft:$(".verticalslider_contents").width()-$(".verticalslider .playPause a").width()});break;case"bottomLeft":$(".verticalslider .playPause").css({marginTop:i-$(".verticalslider .playPause a").height(),marginLeft:"0px"});break}}$(".verticalslider_tabs a",a).click(function(){if(!$(this).parent().hasClass("activeTab")){f=$(this).parent().prevAll().length;switchContents();if(g){clearTimeout(h);g=false;$(".pause a",a).css("display","none");$(".play a",a).css("display","block")}}return false});$(".play, .pause",a).click(function(){g=!g;$(".play a, .pause a",a).toggle();if(g){startSlideShow()}return false});$(b).add(c).hover(function(){if(j.pauseOnHover&&g){g=!g}},function(){if(j.pauseOnHover&&!g&&$(".pause a",a).is(":visible")){startSlideShow()}});function switchContents(){$(".activeTab",a).removeClass("activeTab");$('.arrow',a).remove();$(b[f],a).addClass("activeTab").append(e);$(".activeContent",a).hide().removeClass(".activeContent");$(c[f],a).fadeIn(j.speed).addClass("activeContent");setTabsHeight()};function setTabsHeight(){tabsHt=$(".verticalslider_tabs",a).height();$(".verticalslider_contents",a).height('auto')if(tabsHt>$(".verticalslider_contents",a).height()){$(".verticalslider_contents",a).height(tabsHt)}}function startSlideShow(){g=true;clearTimeout(h);h=setTimeout(function(){autoUpdate()},j.speed+j.slideShowSpeed)}function autoUpdate(){if(g){f++;if(f==c.length){f=0}switchContents();startSlideShow()}};if(g){h=setTimeout(function(){autoUpdate()},j.speed+j.slideShowSpeed)}})}})(jQuery);