$(".openbtn").click(function(){//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身にactiveクラスを付与
    $("#g-nav-list").toggleClass('panelactive');//ナビにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
    $(".shop-link").toggleClass('active');

});

$("#g-nav a").click(function(){//ナビのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンのactiveクラスを除去し
    $("#g-nav-list").removeClass('panelactive');//ナビのpanelactiveクラスも除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
    $(".shop-link").removeClass('active');
});

lightbox.option({
    'albumLabel':""
    
});
$('a[rel*=lightbox]').lightbox({
    overlayBgColor: '#fff',
    overlayOpacoty: 0.6
});