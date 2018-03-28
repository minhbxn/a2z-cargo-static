var w,h,ratio;

var global_page = {'w':1920,'h':1080};
$.fn.initscale = function(options){
    var self = this,current_ratio,privateinfo={};
    
    if(options==undefined){
        var options = {};
    }
    
    options.x==undefined ? options.x = 'left' : options.x;
    options.y==undefined ? options.y = 'top' : options.y;
    
    $(self).load(function(){
        
        // privateinfo.w = $(this).attr('width');
        // privateinfo.h = $(this).attr('height');
        privateinfo.w = $(this).width();
        privateinfo.h = $(this).height();
        privateinfo.x = parseFloat($(this).css('left'));
        privateinfo.y = parseFloat($(this).css('top'));
        
        $(window).on('resize',function(){
            current_ratio = $(window).width()/global_page.w;
            
            var current_width =  parseFloat((privateinfo.w*current_ratio).toFixed(2));
            $(self).css({'width':current_width});

            
            switch(options.x){
                case 'center':
                    $(self).css({'left':($(window).width()-$(self).width())/2})
                    break;  
                case 'left':
                    $(self).css({'left':current_ratio*privateinfo.x })
                    break;
                case 'right':
                    $(self).css({'left': ($('video').width()-parseInt($(self).css('right')-$(self).width()))*current_ratio })
                    break;      
                default:
                    $(self).css({'left':current_ratio*privateinfo.x })
                    break;
            }
            switch(options.y){
                case 'center':
                    $(self).css({'top':($('img.load').height()-$(self).height())/2})
                    break;  
                case 'bottom':
                    $(self).css({'top':( $('img.load').height()- $(self).height() ) })
                    break;  
                default:
                    $(self).css({'top':current_ratio*privateinfo.y })
                    break;
            }
        })
        
        $(window).resize();
        
    })
}
    
$.fn.img = function(){
    this.load(function(){
        return {'width':this.width,'height':this.height};
    })
    
}