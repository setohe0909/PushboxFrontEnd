// This fixes a mis-implementation where browsers don't resize the font when the viewport is resized, as the spec says they should. [See http://www.w3.org/TR/css3-values/#viewport-relative-lengths]. Essentially, this snippit forces the browser to redraw the element when things change. For older browser support, use FitText [http://fittextjs.com/].
(function(){
  var events = ['DOMContentLoaded', 'resize', 'orientationchange'];
  
  var e = document.getElementsByTagName('h1')[0];
  
  // Create a test
  /*  test = {}
  test.el = document.createElement('div');
  document.body.appendChild(test.el);
  test.el.style.fontSize = '100vw';
  initial_value = window.getComputedStyle(test.el).getPropertyValue('font-size');
  events.forEach(function(event){
    current_value = window.getComputedStyle(test.el).getPropertyValue('font-size');
    if (initial_value != current_value) {
      test.pass = true;
    }
  });*/

    var redraw = function(){
    // Force repaint using any CSS selector
    e.style.zIndex = 'auto';
    e.style.zIndex = '';
    
    // Force reflow
    //window.getComputedStyle(e);
    // --OR--
    //e.clientWidth();
  }
  
  //if (!test.pass) {
  events.forEach(function(event){
    window.addEventListener(event, redraw);
  });
  //}
})();

/* Press Here */

$('.show-card').click(function(e) {
  $('#pushbox').hide();
  $('.show-card').hide();
  $('.card').addClass('show').css('display', 'block');
  $('.show-card').addClass('hide');
});

$('.card .close').click(function(e) {
  $('#pushbox').show();
  $('.show-card').show();
  $('.card').css('display', 'none');
});
