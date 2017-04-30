$(document).ready(function(){
	$(".logo").click(function(){
    	  	$(".logo").animate({
        	right: '55px',
        	},5000,function(){
        		$(".logo").css('left','0px');
        	})
	});
	   $("#titulo").click(function(){
       $("#titulo").toggle(1500);
       $("#titulo").toggle(1500);
    });
	   $("#titulo").hover(function(){
       $("#escondido").toggle(1500);
       $("#escondido").toggle(1500);
     });

});

 