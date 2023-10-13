gsap.registerPlugin(ScrollTrigger);
let black = '#0A0A0A';
let offWhite = '#EDEEE9';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// saveStyles is used because GSAP writes inline CSS for styling.
// If we resize our browser, we want the styling of each viewport-based animation to be saved.
ScrollTrigger.saveStyles(".first, .second, .cta, .container");

ScrollTrigger.matchMedia({
  
  // the mobile animations are the same as the desktop, except the font colors are different
  // the scrub is delayed by 1s with relation to the scrollbar (scrub: 1)
  // the animation starts a bit earlier
  "(max-width: 768px)": function() {
    
    let mobileTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".marq-cont",
        start: "-100% bottom",
        scrub: 1,
      }
    });

    mobileTL.to(".first", {duration: 2, xPercent: -100, color: offWhite})
            .to(".second", {duration: 2, xPercent: 100, color: offWhite},"<")
            .to(".container", {duration: 0.5, backgroundColor: black},"<")
            .to(".cta", {duration: 2, color: offWhite},"<");
  },
  
  // The tablet and desktop animations have a delay of 7s on scrubs (scrub: 2).
  "(min-width: 769px)": function() {

    let desktopTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".marq-cont",
        start: "-40% bottom",
        scrub: 4,
      }
    });

    desktopTL.to(".first", {duration: 2, xPercent: -100})
            .to(".second", {duration: 2, xPercent: 100},"<")
  }
});


