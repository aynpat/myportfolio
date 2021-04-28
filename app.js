console.clear();
const action = document.querySelector("#action");
const tl = new TimelineMax({delay:1, repeat:-1});
TweenMax.set ("#demo", {xPercent:-50, yPercent:-50});



 document.addEventListener("DOMContentLoaded", function(){
    tl.to("line", 0.75, {attr:{x1:0, x2:1000}, ease:Power4.easeInOut});
    tl.to(".reveal", 1, {y:"+=150",  ease:Power4.easeInOut});
    tl.to(".reveal", 1, {x:"10%",  ease:"power2.in"});
    tl.to(".banner", 1, {left:"30%", autoAlpha:1, }); 
TweenMax.to("line", 4.5, {
    opacity: 0,
    onComplete: function() {
        TweenMax.set("."+type, {display:none});
    }
 });
 TweenMax.to("text", 4.5, {
    opacity: 0,
    onComplete: function() {
        TweenMax.set("."+type, {display:none});
    }
 });    
  
});
action.addEventListener("click", doStuff);

function doStuff() {
	tl.play(0);
}