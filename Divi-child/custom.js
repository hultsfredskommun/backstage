
(function( $ ){
  $( document ).ready(function() {
   if ($('.autoplay .et_pb_video_box').length !== 0) {
        $('.autoplay .et_pb_video_box').find('video').prop('muted', true);
        $(".autoplay .et_pb_video_box").find('video').attr('loop', 'loop');
        $(".autoplay .et_pb_video_box").find('video').attr('playsInline', '');

        $(".autoplay .et_pb_video_box").each(function() {
            $(this).find('video').get(0).play();
        });
        $('.autoplay .et_pb_video_box').find('video').removeAttr('controls');
    }
  });

})( jQuery );
