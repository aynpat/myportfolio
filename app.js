console.clear();
const action = document.querySelector("#action");
const tl = new TimelineMax();
TweenMax.set ("#demo", {xPercent:-50, yPercent:-50});

tl.to("line", 0.75, {attr:{x1:0, x2:1000}, ease:Power4.easeInOut});
tl.to(".reveal", 1, {y:"+=150", repeat:1, yoyo:true, ease:Power4.easeInOut});
tl.to(".reveal", 1, {x:"-=1000", yoyo:true, ease:"power2.in"});
TweenMax.to("line", 4.5, {
    opacity: 0,
    onComplete: function() {
        TweenMax.set("."+type, {display:none});
    }
 });


action.addEventListener("click", doStuff);

function doStuff() {
	tl.play(0);
}