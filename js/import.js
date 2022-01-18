
$(document).ready(function(){
    console.log($(document).scrollTop());
    console.log($('section.story').eq(0).offset().top);
    console.log($(window).height()/2);
    var offset = $('body  div > fieldset figure').offset();
    // 스크롤 이벤트 
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
    // 접고펼치기
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
    // 상단으로 이동
    $('.top').click(function(){
      $('html,body').animate({scrollTop : 0}, 400);
    })
    // 
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
    $('.menu').on('click',function(ev){
      let target = ev.target;
      let targetClass = target.className;
      scrollMenu(targetClass)
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
    $('#start').on('change',function(){
      $('.inducementClickBox').css({'display':'none'});
      player.playVideo();
    })
});
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'BJXMFkjhttI',
    });
  }
  var done = false;
  function scrollMenu(id){
    let target = document.getElementById(id);
    let targetOffsetTop = $(target).offset().top;
    console.log('targetOffset',targetOffsetTop);
    if(!$('fieldset span').hasClass('fixed')){
      $('fieldset span').addClass('fixed');
      $("input:checkbox[name=fold]").prop("checked",true);
      $('.fold').children('span').text("keyboard_arrow_up");
    }
    $('html,body').animate({scrollTop : targetOffsetTop}, 400);
  }


