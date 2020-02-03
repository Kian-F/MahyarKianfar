function splitScroll(){
    var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
    var controller = new ScrollMagic.Controller();
   
    new ScrollMagic.Scene({
        duration: 500,  //how log the scrolling will last 500px
        triggerElement:'.about-title',   // what is going trigger our scroll about tittle
        triggerHook:0
        
    })
    .setPin('.about-title')
    //.addIndicators()
    .addTo(controller); //hook to controller

    // $('.project1').tilt({
    //     scale: 1.2
    // })
    
  
}
splitScroll();