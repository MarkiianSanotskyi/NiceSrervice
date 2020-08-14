
 jQuery(document).ready(function($) {
    

//   $("a[href$='.jpg'], a[href$='.png']")
//           .addClass("fancybox");
          
           $("a[href$='.jpg'], a[href$='.png']").each(function() {
      $(this).addClass("fancybox");
       $(this).attr('rel', 'gallery');
     
});
 
 $(".fancybox").fancybox({
        padding: [0, 0, 0, 0],
        openEffect: 'elastic',
        openSpeed: 300,
//        closeEffect: 'elastic',
//        scrolling: 'visible',
        maxWidth: 800,
	arrows: true,
        fixed: false,
        autoCenter: false,
     
    });});
	
/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#797979" });
 });

jQuery(document).ready(function() {
    // Initialise the first and second carousel by class selector.
	// Note that they use both the same configuration options (none in this case).
	jQuery('.d-carousel .carousel').jcarousel({
        scroll: 1
    });
});




function initialize() {
  var myLatlng = new google.maps.LatLng(49.853766,24.021398);
  var mapOptions = {
    zoom: 14,
    center: myLatlng,
	styles:[  ]
					
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);



  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Добрий сервіс'
  });
}


google.maps.event.addDomListener(window, 'load', initialize);






