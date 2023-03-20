function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there'sw1 a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()
function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function(elem){
      
      let spanParent = document.createElement("span");
      let spanChild = document.createElement("span");
      
      spanParent.classList.add("parent")
      spanChild.classList.add("child")
      
      spanChild.innerHTML = elem.innerHTML;
      // console.log(spanChild.textContent)
      spanParent.appendChild(spanChild);
      
      elem.textContent = "";
      elem.appendChild(spanParent);
  })
}
revealToSpan()

function pg2t(){
var tl = gsap.timeline({

})
tl
.from("#page3 #text .child",{
  scrollTrigger:{
    trigger:"#page3",
  scroller:"#main",
  start:"100% 0%",
  // markers:true,
  end:"170% 50%",
  scrub:1
  },
  opacity:0,
  y:"100%",
  ease:Expo.ease,
  stagger:2,
  duration:2
})

}
pg2t()
function pg3t(){
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#page4",
    scroller:"#main",
    start:"40% 0%",
    
    end:"80% 30%",
    scrub:3
    }
  })
  tl
  .from("#page4  .child",{
   
    opacity:0,
    y:"100%",
    ease:Expo.ease,
    stagger:2,
    duration:2,
    skewY:7
  })
  .from("#page4 .card",{
    y:"30px",
    opacity:0,
    duration:1,
    stagger:.5
  })
  }
  pg3t()

function pg4t(){
  var tl = gsap.timeline({
  
  })
  tl
  .from("#page5 .top .child",{
    scrollTrigger:{
      trigger:"#page5 .top",
    scroller:"#main",
    start:"50% 0%",
    // markers:true,
    end:"80% 30%",
    scrub:3
    },
    opacity:0,
    y:"100%",
    ease:Expo.ease,
    stagger:2,
    duration:2,
    skewY:7
  })
} 
pg4t() 
function canva1(){
    const canvas = document.querySelector("#page2>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
})

function files(index) {
    var data =`
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0000.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0001.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0002.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0003.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0004.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0005.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0006.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0007.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0008.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0009.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0010.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0011.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0012.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0013.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0014.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0015.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0016.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0017.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0018.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0019.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0020.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0021.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0022.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0023.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0024.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0025.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0026.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0027.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0028.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0029.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0030.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0031.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0032.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0033.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0034.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0035.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0036.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0037.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0038.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0039.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0040.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0041.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0042.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0043.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0044.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0045.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0046.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0047.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0048.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0049.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0050.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0051.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0052.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0053.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0054.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0055.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0056.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0057.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0058.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0059.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0060.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0061.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0062.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0063.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0064.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0065.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0066.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0067.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0068.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0069.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0070.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0071.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0072.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0073.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0074.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0075.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0076.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0077.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0078.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0079.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0080.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0081.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0082.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0083.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0084.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0085.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0086.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0087.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0088.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0089.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0090.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0091.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0092.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0093.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0094.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0095.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0096.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0097.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0098.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0099.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0100.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0101.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0102.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0103.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0104.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0105.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0106.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0107.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0108.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0109.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0110.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0111.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0112.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0113.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0114.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0115.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0116.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0117.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0118.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0119.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0120.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0121.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0122.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0123.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0124.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0125.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0126.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0127.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0128.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0129.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0130.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0131.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0132.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0133.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0134.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0135.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0136.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0137.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0138.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0139.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0140.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0141.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0142.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0143.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0144.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0145.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0146.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0147.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0148.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0149.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0150.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0151.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0152.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0153.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0154.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0155.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0156.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0157.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0158.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0159.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0160.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0161.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0162.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0163.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0164.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0165.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0166.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0167.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0168.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0169.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0170.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0171.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0172.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0173.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0174.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0175.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0176.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0177.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0178.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0179.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0180.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0181.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0182.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0183.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0184.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0185.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0186.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0187.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0188.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0189.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0190.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0191.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0192.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0193.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0194.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0195.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0196.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0197.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0198.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0199.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0200.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0201.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0202.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0203.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0204.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0205.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0206.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0207.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0208.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0209.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0210.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0211.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0212.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0213.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0214.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0215.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0216.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0217.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0218.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0219.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0220.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0221.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0222.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0223.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0224.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0225.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0226.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0227.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0228.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0229.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0230.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0231.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0232.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0233.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0234.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0235.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0236.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0237.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0238.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0239.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0240.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0241.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0242.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0243.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0244.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0245.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0246.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0247.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0248.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0249.png?auto=compress,format&w=2304&q=30
    https://cubans-edge0.imgix.net/main/Cubans_Edge_Stack_002_0250.png?auto=compress,format&w=2304&q=30`;
    return data.split("\n")[index];
}

const frameCount = 251;

const images = [];
const imageSeq = {
    frame: 0
};

for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub:4,
        trigger:"#page2",
        scroller:"#main",
        start:"top top"
    },
    onUpdate: render
});

images[0].onload = render;

function render() {
    scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
    // var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
   
}
ScrollTrigger.create({
    trigger:"#page2",
    scroller:"#main",
   start:"top top",
    pin:true,
    
})

gsap.to("#page2>canvas",{
    y:"0vw",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"-30% top",
        end:"0% top",
        scrub:.1,
        
    }
})
}
canva1()
function canva2(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
})

function files(index) {
    var data =`https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0000.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0001.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0002.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0003.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0004.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0005.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0006.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0007.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0008.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0009.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0010.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0011.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0012.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0013.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0014.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0015.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0016.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0017.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0018.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0019.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0020.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0021.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0022.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0023.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0024.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0025.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0026.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0027.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0028.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0029.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0030.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0031.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0032.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0033.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0034.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0035.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0036.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0037.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0038.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0039.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0040.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0041.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0042.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0043.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0044.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0045.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0046.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0047.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0048.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0049.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0050.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0051.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0052.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0053.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0054.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0055.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0056.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0057.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0058.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0059.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0060.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0061.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0062.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0063.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0064.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0065.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0066.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0067.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0068.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0069.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0070.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0071.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0072.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0073.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0074.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0075.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0076.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0077.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0078.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0079.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0080.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0081.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0082.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0083.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0084.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0085.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0086.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0087.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0088.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0089.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0090.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0091.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0092.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0093.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0094.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0095.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0096.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0097.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0098.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0099.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0100.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0101.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0102.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0103.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0104.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0105.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0106.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0107.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0108.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0109.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0110.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0111.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0112.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0113.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0114.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0115.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0116.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0117.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0118.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0119.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0120.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0121.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0122.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0123.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0124.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0125.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0126.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0127.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0128.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0129.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0130.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0131.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0132.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0133.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0134.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0135.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0136.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0137.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0138.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0139.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0140.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0141.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0142.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0143.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0144.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0145.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0146.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0147.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0148.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0149.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0150.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0151.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0152.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0153.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0154.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0155.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0156.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0157.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0158.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0159.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0160.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0161.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0162.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0163.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0164.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0165.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0166.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0167.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0168.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0169.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0170.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0171.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0172.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0173.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0174.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0175.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0176.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0177.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0178.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0179.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0180.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0181.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0182.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0183.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0184.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0185.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0186.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0187.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0188.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0189.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0190.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0191.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0192.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0193.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0194.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0195.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0196.png?auto=compress,format&w=1920&q=20
    https://cubans-edge2.imgix.net/Shatter012/Cubans_Edge_whoweare_005_0197.png?auto=compress,format&w=1920&q=20`;
    return data.split("\n")[index];
}

const frameCount = 198;

const images = [];
const imageSeq = {
    frame: 0
};

for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub:4,
        trigger:"#page3",
        scroller:"#main",
        start:"-50% top",
        end:"100% 50%",
        
    },
    onUpdate: render
});

images[0].onload = render;

function render() {
    scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
    // var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
   
}
ScrollTrigger.create({
    trigger:"#page3",
    scroller:"#main",
   start:"top top",
    // pin:true,
    
})


}
canva2()
function ca1(){
    const $card = document.querySelector('#c-1')
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.style.transform = `

    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;

}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
});
}
ca1()
function ca2(){
    const $card = document.querySelector('#c-2')
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.style.transform = `

    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;

}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
});
}
ca2()
function ca3(){
    const $card = document.querySelector('#c-3')
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.style.transform = `

    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;

}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
});
}
ca3()
function ca4(){
    const $card = document.querySelector('#c-4')
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.style.transform = `

    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;

}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
});
}
ca4()
function ca5(){
    const $card = document.querySelector('#c-5')
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.style.transform = `

    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;

}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
});
}
ca5()
function canva3(){
  const canvas = document.querySelector("#page4 #can canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data =`https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0000.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0001.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0002.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0003.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0004.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0005.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0006.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0007.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0008.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0009.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0010.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0011.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0012.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0013.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0014.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0015.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0016.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0017.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0018.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0019.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0020.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0021.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0022.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0023.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0024.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0025.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0026.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0027.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0028.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0029.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0030.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0031.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0032.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0033.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0034.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0035.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0036.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0037.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0038.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0039.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0040.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0041.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0042.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0043.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0044.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0045.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0046.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0047.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0048.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0049.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0050.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0051.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0052.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0053.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0054.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0055.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0056.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0057.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0058.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0059.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0060.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0061.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0062.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0063.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0064.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0065.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0066.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0067.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0068.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0069.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0070.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0071.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0072.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0073.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0074.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0075.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0076.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0077.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0078.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0079.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0080.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0081.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0082.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0083.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0084.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0085.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0086.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0087.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0088.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0089.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0090.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0091.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0092.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0093.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0094.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0095.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0096.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0097.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0098.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0099.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0100.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0101.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0102.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0103.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0104.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0105.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0106.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0107.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0108.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0109.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0110.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0111.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0112.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0113.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0114.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0115.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0116.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0117.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0118.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0119.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0120.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0121.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0122.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0123.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0124.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0125.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0126.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0127.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0128.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0129.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0130.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0131.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0132.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0133.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0134.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0135.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0136.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0137.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0138.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0139.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0140.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0141.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0142.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0143.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0144.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0145.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0146.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0147.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0148.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0149.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0150.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0151.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0152.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0153.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0154.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0155.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0156.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0157.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0158.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0159.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0160.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0161.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0162.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0163.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0164.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0165.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0166.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0167.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0168.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0169.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0170.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0171.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0172.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0173.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0174.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0175.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0176.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0177.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0178.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0179.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0180.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0181.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0182.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0183.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0184.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0185.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0186.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0187.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0188.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0189.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0190.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0191.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0192.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0193.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0194.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0195.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0196.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0197.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0198.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0199.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0200.png?auto=compress,format&w=1920&q=20`;
  return data.split("\n")[index];
}

const frameCount = 201;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 1; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:4,
      trigger:"#page4",
      scroller:"#main",
      start:"10% top",
      end:"100% 50%",
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  // var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
 
}

}
canva3()

function swipe(){
  
document.querySelector("#s #i1")
.addEventListener("click",function(){
  document.querySelector("#s #i1").style.opacity = ".5"
  document.querySelector("#s #i2").style.opacity = "1"
  var tl = gsap.timeline()
  tl
  .to("#s #s1",{
    
    transform:"translateX(-102%) rotateX(10deg)",
    opacity:1
  })
  .to("#s .t1 h1,#s .t2 h3",{
    onStart:function(){
      gsap.from("#s .t1 h1,#s .t2 h3",{
        opacity:0
      })
    },
    transform:"translateY(-100%)",
    duration:1,
    ease:Expo.ease,
    stagger:.2
    
  },"-=1")
  .to("#s #s2",{
    transform:"translateX(-101.6%) rotateX(0deg)",
    opacity:1
  },".5")
    


  
  

})
 
document.querySelector("#s #i2").addEventListener("click",function(){
  document.querySelector("#s #i1").style.opacity = "1"
  document.querySelector("#s #i2").style.opacity = ".5"
  var tl = gsap.timeline()
  tl
  .to("#s2",{
    // y:"-100%",
    transform:"translateX(0%) rotateX(0deg) rotateY(0deg)",
    opacity:1
  })
  .to("#s .t1 h1,#s .t2 h3",{
    onStart:function(){
      gsap.from("#s .t1 h1,#s .t2 h3",{
        opacity:0
      })
    },
    transform:"translateY(-0%)",
    duration:1,
    ease:Expo.ease,
    stagger:.2
    
  },"-=1")
  .to("#s #s1",{
    transform:"translateX(0%) rotateX(0deg) rotateY(0deg)",
    opacity:1

  },".5")

})

function s1(){
  const $card = document.querySelector('#s1')
  let bounds;
  
  function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.style.transform = `
  
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;
  
  }
 
  $card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
  });
  
  $card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
  });
}
s1()
function s2(){
  document.querySelector("#s2").addEventListener("mousemove",function(dets){
    var rotx = 50 - dets.clientX/11;
    var roty = Math.abs(rotx);
    document.querySelector("#s2").style.transfrom = `rotateX(${rotx}deg) rotateY(${-roty}deg)`
  })
}
s2()

document.querySelector("#s1").addEventListener("mousemove",function(dets){
  var dim = document.querySelector("#s1").getBoundingClientRect()
  document.querySelector(".glow").style.background = ` radial-gradient(
    circle at
    ${dets.clientX}px
    ${dets.clientY}px,
    #ffffff55,
    #0000000f
  )`
})
}
swipe()
function canva4(){
  const canvas = document.querySelector("#page5 .three canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data =`https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0000.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0001.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0002.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0003.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0004.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0005.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0006.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0007.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0008.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0009.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0010.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0011.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0012.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0013.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0014.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0015.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0016.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0017.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0018.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0019.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0020.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0021.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0022.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0023.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0024.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0025.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0026.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0027.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0028.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0029.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0030.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0031.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0032.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0033.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0034.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0035.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0036.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0037.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0038.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0039.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0040.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0041.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0042.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0043.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0044.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0045.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0046.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0047.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0048.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0049.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0050.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0051.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0052.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0053.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0054.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0055.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0056.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0057.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0058.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0059.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0060.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0061.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0062.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0063.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0064.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0065.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0066.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0067.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0068.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0069.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0070.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0071.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0072.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0073.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0074.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0075.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0076.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0077.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0078.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0079.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0080.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0081.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0082.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0083.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0084.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0085.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0086.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0087.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0088.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0089.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0090.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0091.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0092.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0093.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0094.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0095.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0096.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0097.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0098.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0099.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0100.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0101.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0102.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0103.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0104.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0105.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0106.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0107.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0108.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0109.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0110.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0111.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0112.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0113.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0114.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0115.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0116.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0117.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0118.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0119.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0120.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0121.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0122.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0123.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0124.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0125.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0126.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0127.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0128.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0129.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0130.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0131.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0132.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0133.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0134.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0135.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0136.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0137.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0138.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0139.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0140.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0141.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0142.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0143.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0144.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0145.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0146.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0147.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0148.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0149.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0150.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0151.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0152.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0153.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0154.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0155.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0156.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0157.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0158.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0159.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0160.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0161.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0162.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0163.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0164.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0165.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0166.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0167.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0168.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0169.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0170.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0171.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0172.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0173.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0174.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0175.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0176.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0177.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0178.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0179.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0180.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0181.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0182.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0183.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0184.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0185.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0186.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0187.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0188.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0189.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0190.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0191.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0192.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0193.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0194.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0195.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0196.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0197.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0198.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0199.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter002/Cubans_Edge_Stack_003_0200.png?auto=compress,format&w=1920&q=20`;
  return data.split("\n")[index];
}

const frameCount = 201;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 1; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:4,
      trigger:"#page5 .three",
      scroller:"#main",
      start:"-70% top",
      end:"100% 50%",
      // markers:true
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  // var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
 
}
// ScrollTrigger.create({
//   trigger:"#page4",
// scroller:"#main",
//  start:"top top",
//   // pin:true,
  
// })


}
canva4()

function canva5(){
  const canvas = document.querySelector("#page5 .four canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data =`https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0000.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0001.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0002.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0003.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0004.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0005.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0006.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0007.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0008.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0009.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0010.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0011.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0012.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0013.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0014.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0015.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0016.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0017.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0018.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0019.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0020.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0021.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0022.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0023.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0024.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0025.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0026.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0027.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0028.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0029.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0030.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0031.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0032.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0033.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0034.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0035.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0036.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0037.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0038.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0039.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0040.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0041.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0042.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0043.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0044.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0045.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0046.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0047.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0048.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0049.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0050.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0051.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0052.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0053.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0054.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0055.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0056.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0057.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0058.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0059.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0060.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0061.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0062.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0063.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0064.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0065.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0066.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0067.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0068.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0069.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0070.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0071.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0072.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0073.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0074.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0075.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0076.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0077.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0078.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0079.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0080.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0081.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0082.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0083.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0084.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0085.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0086.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0087.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0088.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0089.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0090.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0091.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0092.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0093.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0094.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0095.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0096.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0097.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0098.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0099.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0100.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0101.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0102.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0103.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0104.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0105.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0106.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0107.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0108.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0109.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0110.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0111.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0112.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0113.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0114.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0115.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0116.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0117.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0118.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0119.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0120.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0121.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0122.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0123.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0124.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0125.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0126.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0127.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0128.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0129.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0130.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0131.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0132.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0133.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0134.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0135.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0136.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0137.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0138.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0139.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0140.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0141.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0142.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0143.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0144.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0145.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0146.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0147.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0148.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0149.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0150.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0151.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0152.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0153.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0154.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0155.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0156.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0157.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0158.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0159.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0160.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0161.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0162.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0163.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0164.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0165.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0166.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0167.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0168.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0169.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0170.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0171.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0172.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0173.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0174.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0175.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0176.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0177.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0178.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0179.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0180.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0181.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0182.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0183.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0184.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0185.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0186.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0187.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0188.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0189.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0190.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0191.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0192.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0193.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0194.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0195.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0196.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0197.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0198.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0199.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter006/Cubans_Edge_Stack_006_0200.png?auto=compress,format&w=1920&q=20`;
  return data.split("\n")[index];
}

const frameCount = 201;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 1; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:4,
      trigger:"#page5 .four",
      scroller:"#main",
      start:"-70% top",
      end:"100% 50%",
      // markers:true
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  // var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
 
}
// ScrollTrigger.create({
//   trigger:"#page4",
// scroller:"#main",
//  start:"top top",
//   // pin:true,
  
// })


}
canva5()
function swipe1(){
  
  document.querySelector("#sw1 #i1")
  .addEventListener("click",function(){
    document.querySelector("#sw1 #i1").style.opacity = ".5"
    document.querySelector("#sw1 #i2").style.opacity = "1"
    var tl = gsap.timeline()
    tl
    .to("#sw1 #s1",{
      
      transform:"translateX(-102%) rotateX(10deg)",
      opacity:1
    })
    .to("#sw1 .t1 h1,#sw1 .t2 h3",{
      onStart:function(){
        gsap.from("#sw1 .t1 h1,#sw1 .t2 h3",{
          opacity:0
        })
      },
      transform:"translateY(-100%)",
      duration:1,
      ease:Expo.ease,
      // stagger:.2
      
    },"-=1")
    .to("#sw1 #s2",{
      transform:"translateX(-101.6%) rotateX(0deg)",
      opacity:1
    },".5")
      
  
  
    
    
  
  })
   
  document.querySelector("#sw1 #i2").addEventListener("click",function(){
    document.querySelector("#sw1 #i1").style.opacity = "1"
    document.querySelector("#sw1 #i2").style.opacity = ".5"
    var tl = gsap.timeline()
    tl
    .to("#sw1 #s2",{
      // y:"-100%",
      transform:"translateX(0%) rotateX(0deg) rotateY(0deg)",
      opacity:1
    })
    .to("#sw1 .t1 h1,#sw1 .t2 h3",{
      onStart:function(){
        gsap.from("#sw1 .t1 h1,#sw1 .t2 h3",{
          opacity:0
        })
      },
      transform:"translateY(-0%)",
      duration:1,
      ease:Expo.ease,
      // stagger:.2
      
    },"-=1")
    .to("#sw1 #s1",{
      transform:"translateX(0%) rotateX(0deg) rotateY(0deg)",
      opacity:1
  
    },".5")
  
  })
  
  function s1(){
    const $card = document.querySelector('#sw1 #s1')
    let bounds;
    
    function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x**2 + center.y**2);
    
    $card.style.transform = `
    
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance)* 2}deg
      )
    `;
    
    }
   
    $card.addEventListener('mouseenter', () => {
    bounds = $card.getBoundingClientRect();
    document.addEventListener('mousemove', rotateToMouse);
    });
    
    $card.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', rotateToMouse);
    $card.style.transform = '';
    $card.style.background = '';
    });
  }
  s1()
  function s2(){
    document.querySelector("#s2").addEventListener("mousemove",function(dets){
      var rotx = 50 - dets.clientX/11;
      var roty = Math.abs(rotx);
      document.querySelector("#s2").style.transfrom = `rotateX(${rotx}deg) rotateY(${-roty}deg)`
    })
  }
  s2()
  
  document.querySelector("#s1").addEventListener("mousemove",function(dets){
    var dim = document.querySelector("#s1").getBoundingClientRect()
    document.querySelector(".glow").style.background = ` radial-gradient(
      circle at
      ${dets.clientX}px
      ${dets.clientY}px,
      #ffffff55,
      #0000000f
    )`
  })
  }
swipe1()
function canva6(){
  const canvas = document.querySelector("#page5 .five canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data =` https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0000.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0001.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0002.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0003.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0004.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0005.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0006.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0007.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0008.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0009.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0010.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0011.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0012.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0013.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0014.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0015.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0016.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0017.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0018.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0019.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0020.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0021.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0022.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0023.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0024.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0025.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0026.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0027.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0028.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0029.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0030.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0031.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0032.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0033.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0034.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0035.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0036.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0037.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0038.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0039.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0040.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0041.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0042.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0043.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0044.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0045.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0046.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0047.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0048.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0049.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0050.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0051.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0052.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0053.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0054.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0055.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0056.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0057.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0058.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0059.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0060.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0061.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0062.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0063.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0064.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0065.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0066.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0067.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0068.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0069.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0070.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0071.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0072.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0073.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0074.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0075.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0076.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0077.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0078.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0079.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0080.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0081.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0082.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0083.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0084.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0085.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0086.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0087.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0088.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0089.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0090.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0091.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0092.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0093.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0094.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0095.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0096.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0097.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0098.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0099.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0100.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0101.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0102.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0103.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0104.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0105.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0106.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0107.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0108.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0109.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0110.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0111.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0112.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0113.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0114.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0115.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0116.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0117.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0118.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0119.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0120.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0121.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0122.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0123.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0124.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0125.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0126.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0127.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0128.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0129.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0130.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0131.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0132.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0133.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0134.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0135.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0136.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0137.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0138.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0139.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0140.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0141.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0142.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0143.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0144.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0145.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0146.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0147.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0148.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0149.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0150.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0151.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0152.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0153.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0154.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0155.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0156.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0157.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0158.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0159.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0160.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0161.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0162.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0163.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0164.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0165.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0166.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0167.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0168.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0169.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0170.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0171.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0172.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0173.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0174.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0175.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0176.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0177.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0178.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0179.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0180.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0181.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0182.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0183.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0184.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0185.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0186.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0187.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0188.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0189.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0190.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0191.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0192.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0193.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0194.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0195.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0196.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0197.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0198.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0199.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0200.png?auto=compress,format&w=1920&q=20`;
  return data.split("\n")[index];
}

const frameCount = 201;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 1; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:4,
      trigger:"#page5 .five",
      scroller:"#main",
      start:"-70% top",
      end:"100% 50%",
      // markers:true
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  // var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
 
}
// ScrollTrigger.create({
//   trigger:"#page4",
// scroller:"#main",
//  start:"top top",
//   // pin:true,
  
// })


}
canva6()
function swipe2(){
  
  document.querySelector("#sw2 #i1")
  .addEventListener("click",function(){
    document.querySelector("#sw2 #i1").style.opacity = ".5"
    document.querySelector("#sw2 #i2").style.opacity = "1"
    var tl = gsap.timeline()
    tl
    .to("#sw2 #s1",{
      
      transform:"translateX(-102%) rotateX(10deg)",
      opacity:1
    })
    .to("#sw2 .t1 h1,#sw2 .t2 h3",{
      onStart:function(){
        gsap.from("#sw2 .t1 h1,#sw2 .t2 h3",{
          opacity:0
        })
      },
      transform:"translateY(-100%)",
      duration:1,
      ease:Expo.ease,
      // stagger:.2
      
    },"-=1")
    .to("#sw2 #s2",{
      transform:"translateX(-101.6%) rotateX(0deg)",
      opacity:1
    },".5")
      
  
  
    
    
  
  })
   
  document.querySelector("#sw2 #i2").addEventListener("click",function(){
    document.querySelector("#sw2 #i1").style.opacity = "1"
    document.querySelector("#sw2 #i2").style.opacity = ".5"
    var tl = gsap.timeline()
    tl
    .to("#sw2 #s2",{
      // y:"-100%",
      transform:"translateX(0%) rotateX(0deg) rotateY(0deg)",
      opacity:1
    })
    .to("#sw2 .t1 h1,#sw2 .t2 h3",{
      onStart:function(){
        gsap.from("#sw2 .t1 h1,#sw2 .t2 h3",{
          opacity:0
        })
      },
      transform:"translateY(-0%)",
      duration:1,
      ease:Expo.ease,
      // stagger:.2
      
    },"-=1")
    .to("#sw2 #s1",{
      transform:"translateX(0%) rotateX(0deg) rotateY(0deg)",
      opacity:1
  
    },".5")
  
  })
  
  function s1(){
    const $card = document.querySelector('#sw2 #s1')
    let bounds;
    
    function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x**2 + center.y**2);
    
    $card.style.transform = `
    
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance)* 2}deg
      )
    `;
    
    }
   
    $card.addEventListener('mouseenter', () => {
    bounds = $card.getBoundingClientRect();
    document.addEventListener('mousemove', rotateToMouse);
    });
    
    $card.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', rotateToMouse);
    $card.style.transform = '';
    $card.style.background = '';
    });
  }
  s1()
  function s2(){
    document.querySelector("#s2").addEventListener("mousemove",function(dets){
      var rotx = 50 - dets.clientX/11;
      var roty = Math.abs(rotx);
      document.querySelector("#s2").style.transfrom = `rotateX(${rotx}deg) rotateY(${-roty}deg)`
    })
  }
  s2()
  
  document.querySelector("#s1").addEventListener("mousemove",function(dets){
    var dim = document.querySelector("#s1").getBoundingClientRect()
    document.querySelector(".glow").style.background = ` radial-gradient(
      circle at
      ${dets.clientX}px
      ${dets.clientY}px,
      #ffffff55,
      #0000000f
    )`
  })
  }
swipe2()
function canva7(){
  const canvas = document.querySelector("#page5 .six canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data =` https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0000.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0001.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0002.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0003.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0004.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0005.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0006.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0007.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0008.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0009.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0010.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0011.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0012.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0013.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0014.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0015.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0016.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0017.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0018.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0019.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0020.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0021.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0022.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0023.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0024.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0025.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0026.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0027.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0028.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0029.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0030.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0031.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0032.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0033.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0034.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0035.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0036.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0037.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0038.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0039.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0040.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0041.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0042.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0043.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0044.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0045.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0046.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0047.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0048.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0049.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0050.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0051.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0052.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0053.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0054.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0055.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0056.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0057.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0058.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0059.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0060.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0061.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0062.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0063.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0064.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0065.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0066.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0067.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0068.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0069.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0070.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0071.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0072.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0073.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0074.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0075.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0076.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0077.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0078.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0079.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0080.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0081.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0082.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0083.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0084.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0085.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0086.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0087.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0088.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0089.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0090.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0091.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0092.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0093.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0094.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0095.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0096.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0097.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0098.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0099.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0100.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0101.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0102.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0103.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0104.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0105.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0106.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0107.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0108.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0109.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0110.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0111.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0112.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0113.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0114.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0115.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0116.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0117.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0118.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0119.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0120.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0121.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0122.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0123.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0124.png?auto=compress,format&w=1920&q=20
  https://cubans-edge0.imgix.net/Shatter007/Cubans_Edge_Stack_007_0125.png?auto=compress,format&w=1920&q=20`;
  return data.split("\n")[index];
}

const frameCount = 126;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 1; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:4,
      trigger:"#page5 .six",
      scroller:"#main",
      start:"-70% top",
      end:"100% 50%",
      // markers:true
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  // var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
 
}
// ScrollTrigger.create({
//   trigger:"#page4",
// scroller:"#main",
//  start:"top top",
//   // pin:true,
  
// })


}
canva7()
function swipe3(){
  
  document.querySelector("#sw3 #i1")
  .addEventListener("click",function(){
    document.querySelector("#sw3 #i1").style.opacity = ".5"
    document.querySelector("#sw3 #i2").style.opacity = "1"
    var tl = gsap.timeline()
    tl
    .to("#sw3 #s1",{
      
      transform:"translateX(-102%) rotateX(10deg)",
      opacity:1
    })
    .to("#sw3 .t1 h1,#sw3 .t2 h3",{
      onStart:function(){
        gsap.from("#sw3 .t1 h1,#sw3 .t2 h3",{
          opacity:0
        })
      },
      transform:"translateY(-100%)",
      duration:1,
      ease:Expo.ease,
      // stagger:.2
      
    },"-=1")
    .to("#sw3 #s2",{
      transform:"translateX(-101.6%) rotateX(0deg)",
      opacity:1
    },".5")
      
  
  
    
    
  
  })
   
  document.querySelector("#sw3 #i2").addEventListener("click",function(){
    document.querySelector("#sw3 #i1").style.opacity = "1"
    document.querySelector("#sw3 #i2").style.opacity = ".5"
    var tl = gsap.timeline()
    tl
    .to("#sw3 #s2",{
      // y:"-100%",
      transform:"translateX(0%) rotateX(0deg) rotateY(0deg)",
      opacity:1
    })
    .to("#sw3 .t1 h1,#sw3 .t2 h3",{
      onStart:function(){
        gsap.from("#sw3 .t1 h1,#sw3 .t2 h3",{
          opacity:0
        })
      },
      transform:"translateY(-0%)",
      duration:1,
      ease:Expo.ease,
      // stagger:.2
      
    },"-=1")
    .to("#sw3 #s1",{
      transform:"translateX(0%) rotateX(0deg) rotateY(0deg)",
      opacity:1
  
    },".5")
  
  })
  
  function s1(){
    const $card = document.querySelector('#sw3 #s1')
    let bounds;
    
    function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x**2 + center.y**2);
    
    $card.style.transform = `
    
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance)* 2}deg
      )
    `;
    
    }
   
    $card.addEventListener('mouseenter', () => {
    bounds = $card.getBoundingClientRect();
    document.addEventListener('mousemove', rotateToMouse);
    });
    
    $card.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', rotateToMouse);
    $card.style.transform = '';
    $card.style.background = '';
    });
  }
  s1()
  function s2(){
    document.querySelector("#s2").addEventListener("mousemove",function(dets){
      var rotx = 50 - dets.clientX/11;
      var roty = Math.abs(rotx);
      document.querySelector("#s2").style.transfrom = `rotateX(${rotx}deg) rotateY(${-roty}deg)`
    })
  }
  s2()
  
  document.querySelector("#s1").addEventListener("mousemove",function(dets){
    var dim = document.querySelector("#s1").getBoundingClientRect()
    document.querySelector(".glow").style.background = ` radial-gradient(
      circle at
      ${dets.clientX}px
      ${dets.clientY}px,
      #ffffff55,
      #0000000f
    )`
  })
  }
swipe3()
function canva8(){
  const canvas = document.querySelector("#page6 canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data =` https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0000.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0001.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0002.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0003.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0004.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0005.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0006.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0007.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0008.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0009.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0010.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0011.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0012.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0013.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0014.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0015.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0016.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0017.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0018.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0019.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0020.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0021.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0022.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0023.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0024.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0025.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0026.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0027.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0028.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0029.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0030.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0031.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0032.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0033.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0034.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0035.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0036.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0037.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0038.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0039.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0040.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0041.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0042.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0043.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0044.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0045.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0046.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0047.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0048.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0049.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0050.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0051.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0052.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0053.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0054.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0055.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0056.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0057.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0058.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0059.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0060.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0061.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0062.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0063.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0064.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0065.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0066.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0067.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0068.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0069.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0070.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0071.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0072.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0073.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0074.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0075.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0076.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0077.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0078.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0079.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0080.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0081.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0082.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0083.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0084.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0085.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0086.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0087.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0088.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0089.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0090.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0091.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0092.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0093.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0094.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0095.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0096.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0097.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0098.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0099.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0100.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0101.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0102.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0103.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0104.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0105.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0106.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0107.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0108.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0109.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0110.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0111.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0112.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0113.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0114.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0115.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0116.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0117.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0118.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0119.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0120.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0121.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0122.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0123.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0124.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0125.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0126.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0127.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0128.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0129.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0130.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0131.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0132.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0133.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0134.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0135.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0136.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0137.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0138.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0139.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0140.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0141.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0142.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0143.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0144.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0145.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0146.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0147.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0148.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0149.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0150.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0151.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0152.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0153.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0154.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0155.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0156.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0157.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0158.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0159.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0160.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0161.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0162.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0163.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0164.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0165.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0166.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0167.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0168.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0169.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0170.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0171.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0172.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0173.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0174.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0175.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0176.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0177.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0178.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0179.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0180.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0181.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0182.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0183.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0184.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0185.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0186.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0187.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0188.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0189.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0190.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0191.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0192.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0193.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0194.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0195.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0196.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0197.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0198.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0199.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter005/Cubans_Edge_Stack_006_0200.png?auto=compress,format&w=1920&q=20`;
  return data.split("\n")[index];
}

const frameCount = 201;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 1; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:4,
      trigger:"#page6",
      scroller:"#main",
      start:"-70% top",
      end:"100% 0%",
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  // var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
 
}
}
canva8()
function canva9(){
  const canvas = document.querySelector("#page7 #canva canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data =`https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0000.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0001.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0002.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0003.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0004.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0005.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0006.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0007.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0008.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0009.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0010.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0011.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0012.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0013.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0014.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0015.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0016.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0017.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0018.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0019.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0020.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0021.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0022.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0023.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0024.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0025.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0026.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0027.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0028.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0029.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0030.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0031.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0032.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0033.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0034.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0035.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0036.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0037.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0038.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0039.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0040.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0041.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0042.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0043.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0044.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0045.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0046.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0047.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0048.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0049.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0050.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0051.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0052.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0053.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0054.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0055.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0056.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0057.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0058.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0059.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0060.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0061.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0062.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0063.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0064.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0065.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0066.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0067.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0068.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0069.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0070.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0071.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0072.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0073.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0074.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0075.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0076.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0077.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0078.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0079.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0080.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0081.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0082.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0083.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0084.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0085.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0086.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0087.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0088.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0089.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0090.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0091.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0092.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0093.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0094.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0095.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0096.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0097.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0098.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0099.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0100.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0101.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0102.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0103.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0104.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0105.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0106.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0107.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0108.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0109.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0110.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0111.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0112.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0113.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0114.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0115.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0116.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0117.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0118.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0119.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0120.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0121.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0122.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0123.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0124.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0125.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0126.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0127.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0128.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0129.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0130.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0131.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0132.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0133.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0134.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0135.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0136.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0137.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0138.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0139.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0140.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0141.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0142.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0143.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0144.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0145.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0146.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0147.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0148.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0149.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0150.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0151.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0152.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0153.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0154.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0155.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0156.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0157.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0158.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0159.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0160.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0161.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0162.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0163.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0164.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0165.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0166.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0167.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0168.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0169.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0170.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0171.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0172.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0173.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0174.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0175.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0176.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0177.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0178.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0179.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0180.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0181.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0182.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0183.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0184.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0185.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0186.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0187.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0188.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0189.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0190.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0191.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0192.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0193.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0194.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0195.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0196.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0197.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0198.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0199.png?auto=compress,format&w=1920&q=20
  https://cubans-edge1.imgix.net/Shatter009/Cubans_Edge_Stack_009_0200.png?auto=compress,format&w=1920&q=20`;
  return data.split("\n")[index];
}

const frameCount = 201;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 1; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:4,
      trigger:"#page7",
      scroller:"#main",
      start:"10% top",
      end:"100% 50%",
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  // var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
 
}



}
canva9()

function  car1(){
  
    const $card = document.querySelector('#car1')
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.style.transform = `

    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;

}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
});


}
car1()
function  car2(){
  
  const $card = document.querySelector('#car2')
let bounds;

function rotateToMouse(e) {
const mouseX = e.clientX;
const mouseY = e.clientY;
const leftX = mouseX - bounds.x;
const topY = mouseY - bounds.y;
const center = {
  x: leftX - bounds.width / 2,
  y: topY - bounds.height / 2
}
const distance = Math.sqrt(center.x**2 + center.y**2);

$card.style.transform = `

  rotate3d(
    ${center.y / 100},
    ${-center.x / 100},
    0,
    ${Math.log(distance)* 2}deg
  )
`;

}

$card.addEventListener('mouseenter', () => {
bounds = $card.getBoundingClientRect();
document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
document.removeEventListener('mousemove', rotateToMouse);
$card.style.transform = '';
$card.style.background = '';
});


}
car2()
function tx(){
var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page5 .three",
    scroller:"#main",
   start:"20% 10%",
    
    scrub:1,
    end:"50% 20%"
  }
});
tl
.from(".three .child",{
 
  y:"110%",
  skewY:8,
  duration:2,
  ease:Circ.ease
})
.from("#s .container",{
  transform:"rotateY(180deg) rotateZ(180deg)",
  duration:2,
  opacity:0,
  ease:Expo.ease
},"-=1")


var tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page5 .four",
    scroller:"#main",
   start:"20% 10%",
    scrub:1,
    end:"50% 20%"
  }
});
tl1
.from("#sw1 .child",{
 
  y:"120%",
  skewY:8,
  duration:2,
  ease:Circ.ease
})
.from("#sw1 .container",{
  transform:"rotateY(180deg) rotateZ(180deg)",
  duration:2,
  opacity:0,
  ease:Expo.ease
},"-=1")

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page5 .five",
    scroller:"#main",
   start:"20% 15%",
    scrub:1,
    end:"50% 40%"
  }
});
tl2
.from(".five .child",{
 
  y:"120%",
  skewY:8,
  duration:2,
  ease:Circ.ease
})
.from(".five .container",{
  transform:"rotateY(180deg) rotateZ(180deg)",
  duration:2,
  opacity:0,
  ease:Expo.ease
},"-=1")

var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page5 .six",
    scroller:"#main",
   start:"20% 20%",
    
    scrub:.5,
    end:"50% 30%"
  }
});
tl3
.from(".six .child",{
 
  y:"120%",
  skewY:8,
  duration:2,
  ease:Circ.ease
})
.from(".six .container",{
  transform:"rotateY(180deg) rotateZ(180deg)",
  duration:2,
  opacity:0,
  ease:Expo.ease
},"-=1")
var pg6 = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page6",
    start:"-30% top",
    scrub:1,
    
    end:"50% 35%"
  }
})
pg6
.from("#page6 .child",{
  y:"150%",
  skewY:7,
  duration:2
})
.from(".sec .car",{
opacity:0,
  transform:"rotateY(90deg) translateX(100%)",
  duration:2
},"-=1")
}
tx()
function hc(){
  const $card = document.querySelector('#page7 .hover .hc:nth-child(1)');
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.style.transform = `
    
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;
  
  $card.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width/2}px
      ${center.y * 2 + bounds.height/2}px,
      #ffffff55,
      #0000000f
    )
  `;
}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
});
}
hc()

function hc1(){
  const $card = document.querySelector('#page7 .hover .hc:nth-child(2)');
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.style.transform = `
    
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;
  
  $card.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width/2}px
      ${center.y * 2 + bounds.height/2}px,
      #ffffff55,
      #0000000f
    )
  `;
}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
});
}
hc1()

function hc2(){
  const $card = document.querySelector('#page7 .hover .hc:nth-child(3)');
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.style.transform = `
    
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;
  
  $card.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width/2}px
      ${center.y * 2 + bounds.height/2}px,
      #ffffff55,
      #0000000f
    )
  `;
}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
});
}
hc2()

function media(){
  ScrollTrigger.matchMedia({
	
    // desktop
    // "(min-width: 500px)": function() {
    //   // setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
    //   // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
    //   var tl = gsap.timeline({

    //   })
    //   tl
    //   .from("#page3 #text .child",{
    //     scrollTrigger:{
    //       trigger:"#page3",
    //     scroller:"#main",
    //     start:"100% 0%",
    //     // markers:true,
    //     end:"170% 50%",
    //     scrub:1
    //     },
    //     // opacity:0,
    //     // y:"100%",
    //     // ease:Expo.ease,
    //     // stagger:2,
    //     // duration:2
    //   })},
     
    //   tl.to(".desktop", {scale: 2, rotation: 360})
    //     .to(".desktop", {scale: 1});
    // }, 
    "(min-width: 500px)": function() {
      // setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
      // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
      gsap.from("#page4 .card",{
        scrollTrigger:{
      trigger:"#page1",
      start:"top top",
      scroller:"#main",
      
        },
        y:"30px",
        opacity:0,
        duration:1,
        // stagger:.5
      })
     },
  
    // all 
    "all": function() {
      // ScrollTriggers created here aren't associated with a particular media query,
      // so they persist.
    }
    
  });
  
}
media()
gsap.set(".cent .child",{y:"100%",opacity:0,skewY:5})

function loader(){
  var tl = gsap.timeline()
  tl.from("#loader .child",{
    y:"120%",
    duration:2,
    skewY:4,
    stagger:.5,
    opacity:0,
    onComplete:function(){
   setTimeout(() => {
            const counters = document.querySelectorAll('.value');
            const speed = 300;
            
            counters.forEach( counter => {
               const animate = () => {
                  const value = +counter.getAttribute('akhi');
                  const data = +counter.innerText;
                 
                  const time = value / speed;
                 if(data < value) {
                      counter.innerText = Math.ceil(data + time);
                      setTimeout(animate, 1);
                    }else{
                      counter.innerText = value;
                    }
                 
               }
               
               animate();
            });
           }, 1000);
      
       
       
    
    
   
    }
  })

  tl.to("#loader",{
    top:"-100%",
    display:"none",
    delay:2,
    duration:2,
    ease:Expo.ease,
    onComplete:function(){
      function pg1t(){
      
        var tl = gsap.timeline()
        tl
        .to(".cent .child",{
          opacity:1,
          y:"0%",
          duration:2,
          ease:Circ.ease,
          skewY:0,
          // skewY:5,
          stagger:.5
        })
        }
        pg1t()
    }
  })
 
 
  

}
loader()
