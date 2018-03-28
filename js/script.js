function scrollTo(href, top){
    $('html,body').animate({
        scrollTop: $(href).offset().top - top
    });
}

function viewport(){
    var e = window
    , a = 'inner';
    if ( !( 'innerWidth' in window ) )
    {
    a = 'client';
    e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
}

var viewportWith = viewport().width;

$(document).ready(function(){
    // to top
    $().UItoTop({ easingType: 'easeOutQuart' });

    // left menu
    $("#panelMenu").hiraku({
        btn: "#open-left-menu",
        // fixedHeader: ".js-fixed-header",
        direction: "right",
        breakpoint: 992
    });

    // form
    $('.button-more-a').each(function(){
        var tthis = $(this);
        tthis.text(tthis.data('re-click'));
    })
    $('.button-more-a').click(function(){
        var tthis = $(this);
        var target = $(this).data('target');

        if($(target).hasClass('hide')){
            var text = tthis.data('click');
        }else{
            var text = tthis.data('re-click');
        }
        tthis.text(text);
        $(target).toggleClass('hide');

        return false;
    });
    $('#remove-row').click(function(){
        var tthis = $(this);
        var target = $(this).data('target');
        var stt = parseInt($(target+' .data-row:last-child()').find('.text').text());
        if(stt == 1){
            return false;
        }
        $(target+' .data-row:last-child()').remove();
        return false;
    });
    $('#add-row').click(function(){
        var tthis = $(this);
        var target = tthis.data('target');
        var stt = parseInt($(target+' .data-row:last-child()').find('.text').text()) + 1;
        var lastChild = $(target+' .data-row:last-child()').clone().appendTo(target);
        $(target+' .data-row:last-child()').find('.text').text(stt);
        $(target+' .data-row:last-child()').find('input').val('');
        $(target+' .data-row:last-child()').find('.item-remove-after-add').remove();
        return false;
    });

    // scroll to
    $('.scroll-to').click(function(){
        var hhref = $(this).data('href');
        scrollTo(hhref, 50)
        return false;
    })

    //slide product home
    $('.blog-owl-carousel').owlCarousel({
        loop:true,
        // nav:false,
        // nav:true,
        // navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1,
                margin:10
            },
            576:{
                items:1,
                margin:15
            },
            767:{
                items:2,
                margin:15
            },
            1024:{
                items:2,
                margin:20
            },
            1200:{
                items:3,
                margin:30
            },
            1400:{
                items:3,
                margin:30
            }
        }
    }) 
});