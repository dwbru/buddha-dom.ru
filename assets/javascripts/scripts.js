(function(){$(function(){return $(".first_frame button").click(function(){return $(".first_frame").removeClass("_active").addClass("_inactive"),$(".second_frame").removeClass("_inactive").addClass("_active")}),$(".second_frame button").click(function(){return $(".first_frame").removeClass("_inactive").addClass("_active"),$(".second_frame").removeClass("_active").addClass("_inactive")})})}).call(this),function(){}.call(this),function(){}.call(this),function(){$(function(){var a,t,n,e,r;return n={arrows:!1,click:!0,swipe:!0,keyboard:!0,hash:!0,shadows:!1,loop:!0,nav:"thumbs",fit:"contain",width:"100%",ratio:"1000/500",allowfullscreen:"native",transition:"dissolve"},t=$(".galleries"),a=$(".gallery .close"),[[".galleries",n],[".gallery .albums .album",$.extend(n,{hash:!1})]].forEach(function(a){var t,n,e;return e=a[0],n=a[1],t=$(e),t.each(function(a){return function(t,n){return $(n).fotorama(a)}}(n))}),a.on("click",function(){return $(document.body).removeClass("_gallery-active"),a.fadeOut(),$(".gallery .albums .album").fadeOut(),$(".gallery nav").fadeOut(),t.fadeIn(),t.data("fotorama").resize({width:"100%"}),$(".gallery nav .prev, .gallery nav .next").off("click"),!1}),e=t.data("fotorama").activeFrame,$(e.html).find("a").on("click",function(){return r.call(this)}),t.on("fotorama:show",function(a,t){return t.activeFrame.id!==e.id?$(t.activeFrame.html).find("a").on("click",function(){return r.call(this)}):void 0}),r=function(){var n;return $(document.body).addClass("_gallery-active"),$(document.body).hasClass("_menu")&&$(document.body).removeClass("_menu"),n=$(".gallery .albums .album"+$(this).attr("href")),t.fadeOut(),n.fadeIn(function(){return n.data("fotorama").resize({width:"100%"})}),n.data("fotorama")&&n.data("fotorama").resize({width:"100%"}),a.fadeIn(),$(".gallery nav .title").text($(this).find("span").text()),$(".gallery nav").fadeIn(),$(".gallery nav .prev").on("click",function(){return n.data("fotorama").show("<"),!1}),$(".gallery nav .next").on("click",function(){return n.data("fotorama").show(">"),!1}),!1}})}.call(this),function(){$(function(){var a,t;return t=$(".information_"),a=t.find("article"),$(".nav-menu .item").click(function(){var n;if($(this).attr("id")!==a[0].className)return n=t.find(".articles ."+$(this).attr("id")),a.fadeOut(100,function(){return $(this).removeClass().addClass($(this).attr("id")).html(n.html()).fadeIn(100),$(document.body).removeClass("_menu")}),!1})})}.call(this),function(){$("document").ready(function(){var a,t;return a=55.768132,t=37.616863,ymaps.ready(function(){var n,e;return n=new ymaps.Map("map",{center:[a,t],zoom:16,controls:["zoomControl","fullscreenControl"]}),n.behaviors.disable("scrollZoom"),e=new ymaps.Placemark(n.getCenter(),{balloonContentBody:["<address>","<strong>\u0411\u0443\u0434\u0434\u0430-\u0434\u043e\u043c, \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u043d\u044b\u0439 \u0446\u0435\u043d\u0442\u0440</strong>","<br/>","\u0410\u0434\u0440\u0435\u0441: \u041f\u0415\u0422\u0420\u041e\u0412\u0421\u041a\u0418\u0419 \u0411\u0423\u041b\u042c\u0412\u0410\u0420, 17/1","</address>"].join("")},{preset:"islands#redDotIcon"}),n.geoObjects.add(e)})})}.call(this),function(){$(function(){return $("header .menu-opener").click(function(){return $(document.body).toggleClass("_menu")}),$(window).resize(function(){return $(document).width()>600?$(document.body).removeClass("_menu"):void 0})})}.call(this),function(){$(function(){var a;if($.browser.mobile)return $(document.body).addClass("mobile"),a=function(){return 90===Math.abs(window.orientation)?"landscape":"portrait"},$(window).on("orientationchange",function(){return $(document.body).removeClass("landscape portrait").addClass(a())})})}.call(this),function(){}.call(this);