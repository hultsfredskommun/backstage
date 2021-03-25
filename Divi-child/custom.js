__rekai.ready(function() {
  var rekAutocomplete = rekai_autocomplete('#rek-search-input');
  var rekAutocompleteSupport = rekai_autocomplete('#rek-search-input-support', { projectid: 10341071 });
});

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
    $('a[href*="support.hultsfred.se"]').each(function() {
      $(this).on('click', { href: $(this).attr('href') }, hkback_trigger_support );
    });
  });
  hk_trigger_link_hook = function(ev) {
    return hkback_trigger_support(ev);
  }
  hkback_trigger_support = function(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    rand_id = "support"+Math.floor((Math.random() * 100) + 1);

    var params = new Array('rekcsf1','rekcsf2','rekcsf3','rekcsf4');
    var inputs = "";
    for(var i = 0, n = params.length; i < n; i++) {

        inputs += '<input type="hidden" name="' + params[i] + '" value="' + localStorage.getItem(params[i]) + '" />';
    }
    $("body").append('<form action="'+ ev.data.href +'" method="post" id="'+rand_id+'">'+inputs+'</form>');
    $("#"+rand_id).submit();
    //$.post($(this).attr('href'), { rekcsf1: localStorage.getItem('rekcsf1') } );
  }

  /* render support predictions from rek.ai */
  renderSupportPredictions = function(data) {
     data = JSON.parse(data);
     i = 0;
     $(data['predictions']).each(function(index, item) {

       if ( i < 5 && item['url'].includes("knowledge-base") ) {
         i++;
         a = $("<a></a>").text(item['title']).attr('href', "https://support.hultsfred.se" + item['url']);
         $("#supportPredictions").append(a);
       }
     });

     console.log(data['predictions']);
   }


   /* render support predictions from rek.ai */
   renderBackstagePredictions = function(data) {
      data = JSON.parse(data);
      i = 0;
      $(data['predictions']).each(function(index, item) {

        if ( i < 5 ) {
          i++;
          a = $("<a></a>").text(item['title']).attr('href', item['url']);
          $("#backstagePredictions").append(a);
        }
      });

      console.log(data['predictions']);
    }
})( jQuery );
