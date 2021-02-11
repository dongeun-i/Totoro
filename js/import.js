
$(document).ready(function(){
    console.log($(document).scrollTop());
    console.log($('section.story').eq(0).offset().top);
    console.log($(window).height()/2);
    var offset = $('body  div > fieldset figure').offset();
    
    $(document).scroll(function(){
    $('body > div fieldset section ol li').each(function(){
        $scroll = $(document).scrollTop();
        $top = $(this).offset().top
        $windowH = ($(window).height()/2)
        
        
        if($scroll >= $top - $windowH){
            if(!$(this).hasClass('scrollEvent')){
            }
            $(this).addClass('scrollEvent');
        }else{
            $(this).removeClass('scrollEvent');
        }
    })
    });

    $('.fold').click(function(){
      if(!$('fieldset span').hasClass('fixed')){
        $('fieldset span').addClass('fixed');
        $(this).children('span').text("keyboard_arrow_up")
        $('html,body').animate({scrollTop : offset.top - ($(window).height()/3)}, 400);
      }
      else{
        $('fieldset span').removeClass('fixed');
        $(this).children('span').text("keyboard_arrow_down")
        $('html,body').animate({scrollTop : 0}, 400);
      }
    })

    $('.top').click(function(){
      $('html,body').animate({scrollTop : 0}, 400);
    })

    $('fieldset figure figcaption a:first-of-type').click(function(){
      if(!$(this).hasClass('hover')){
        $(this).addClass('hover')
      }else{
        $(this).removeClass('hover')
      }
    })
    $('.mui').click(function(){
      if(!$(this).hasClass('close')){
        $(this).addClass('close');
        $(this).children('span').text("close")
        $('ul li').click(function(){
          $('input.mui').removeAttr('checked');
          $('.mui').children('span').text("menu")
          $('.mui').removeClass('close');
        })
      }else{
        $(this).removeClass('close');
        $(this).children('span').text("menu")
      }
    })
    $('body header nav ul li.poster').click(function(){
      if(!$('fieldset span').hasClass('fixed')){
        $("input:checkbox[name=fold]").prop("checked",true);
        $('fieldset span').addClass('fixed');
        $('.fold').children('span').text("keyboard_arrow_up")
        $('html,body').animate({scrollTop : 780}, 400);
      }else{
        $('html,body').animate({scrollTop : 780}, 400);
      }
    })
    $('body header nav ul li.character').click(function(){
      if(!$('fieldset span').hasClass('fixed')){
        $("input:checkbox[name=fold]").prop("checked",true);
        $('fieldset span').addClass('fixed');
        $('.fold').children('span').text("keyboard_arrow_up")
        $('html,body').animate({scrollTop : 1765}, 400);
      }else{
        $('html,body').animate({scrollTop : 1765}, 400);
      }
    })

    $('body header nav ul li.story').click(function(){
      if(!$('fieldset span').hasClass('fixed')){
        $("input:checkbox[name=fold]").prop("checked",true);
        $('fieldset span').addClass('fixed');
        $('.fold').children('span').text("keyboard_arrow_up")
        $('html,body').animate({scrollTop : 2702}, 400);
      }else{
        $('html,body').animate({scrollTop : 2702}, 400);
      }
    })

    });


