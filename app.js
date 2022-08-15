// gsap.registerPlugin(ScrollTrigger);
// gsap.to('.square', {
//     x: 700,
//     duration: 3,
//     scrollTrigger: '.square'
// })

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");
console.log(sections);

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
    }
});