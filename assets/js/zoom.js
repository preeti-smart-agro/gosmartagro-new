$(function() {

  $('.location')
    .on('mouseover', function(){
     try{
        document.getElementById('terms').style = "margin-top: 1055px";
     }catch(err){}
      $(this).children('.photo').css({'left':'-100px','transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
     try{ document.getElementById('terms').style = "margin-top: 555px";
     }catch(err){}
      $(this).children('.photo').css({'left':'0px','transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        .append('<div class="txt"><div class="x" style="display: none">'+ $(this).attr('data-scale') +'</div></div>')
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })

});