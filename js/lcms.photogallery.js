var LCMS=LCMS||{};LCMS.PhotoGallery=LCMS.PhotoGallery||{},(function(n){var f=n,i="ontouchend"in document,r,t,u=function(){var n=window.navigator.userAgent,t=n.indexOf("OS ");return(n.indexOf("iPhone")>-1||n.indexOf("iPad")>-1)&&t>-1?window.Number(n.substr(t+3,3).replace("_",".")):0};n(function(){var f=n(".photoGalleryElement .thumbContents a");f.length>0&&(f.fancybox({padding:0,nextMethod:i?"slideIn":"resizeIn",prevMethod:i?"slideOut":!1,helpers:{title:{type:"over"},overlay:{opacity:.9}}}),i&&(r=u(),r<5||n("html").addClass("lcms_iOS5plus"),t=n("#lcms_fancybox-overlay, .lcms_fancybox-wrap"),t.live("swipeleft",function(){n.fancybox.next()}),t.live("swiperight",function(){n.fancybox.prev()})))}),LCMS.PhotoGallery.ResizeGallery=function(t){n(window).load(function(){var e=n(t),f=0,i=0,s=n(t).parent().parent().width(),h=n(t).parent().width()+parseInt(n(t).parent().css("margin-right"),0)+parseInt(n(t).parent().css("margin-left"),0)+parseInt(n(t).parent().css("padding-left"),0)+parseInt(n(t).parent().css("padding-right"),0),o=parseInt(s/h)-1,r=0,u=[];e.each(function(){r>o&&(LCMS.PhotoGallery.ResizeObjectCollection(u,i),r=0,i=0,u=[]),f=n(this).outerHeight(),i=f>i?f:i,u[r]=n(this),r++}),r>0&&LCMS.PhotoGallery.ResizeObjectCollection(u,i)})},LCMS.PhotoGallery.ResizeObjectCollection=function(t,i){n(t).each(function(){var t=n(this),u=i-(t.outerHeight()-t.height())+5,r=n.browser.msie&&(n.browser.version<7||n.browser.version<8)?"height":"min-height";t.css(r,u+"px")})}})(LCMS.jq)