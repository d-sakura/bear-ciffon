$(function(){

    $(".openbtn").click(function(){//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身にactiveクラスを付与
        $("#g-nav-list").toggleClass('panelactive');//ナビにpanelactiveクラスを付与
        $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
        $(".shop-link").toggleClass('active');
    
    });
    
    $("#g-nav button").click(function(){//ナビのリンクがクリックされたら
        $(".openbtn").removeClass('active');//ボタンのactiveクラスを除去し
        $("#g-nav-list").removeClass('panelactive');//ナビのpanelactiveクラスも除去
        $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
        $(".shop-link").removeClass('active');
    });
    

    if ($('a[rel*=lightbox]').length > 0) {
        lightbox.option({
            'albumLabel':""    
        });
        $('a[rel*=lightbox]').lightbox({
            overlayBgColor: '#fff',
            overlayOpacoty: 0.6
        });
    }

    $('a[href^="#"]').click(function(){
      let speed = 500;
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });