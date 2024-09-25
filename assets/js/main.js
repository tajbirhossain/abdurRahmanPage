const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//     console.log(e)
// })

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)








gsap.registerPlugin(ScrollTrigger);





gsap.set(".heroBg2, .heroLastSlide, .heroLogo, .heroTextCon", { opacity: 0 });


const heroTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=1000px",
        scrub: true,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1 
    }
});


heroTimeline
    .to(".heroBg2", {
        opacity: 1,
        ease: "power1.out",
        duration: 1
    })
    .to(".heroLastSlide", {
        opacity: 1,
        ease: "power1.out",
        duration: 1
    }, "+=0.5")
    .to(".heroLogo", {
        opacity: 1,
        ease: "power1.out",
        duration: 1
    }, "+=0.5")
    .to(".heroTextCon", {
        opacity: 1,
        ease: "power1.out",
        duration: 1
    }, "-=1");


// gsap.set(".heroLastSlide", { width: "0%" });

// gsap.to(".heroLastSlide", {
//     scrollTrigger: {
//         trigger: ".hero",
//         start: "0px top",
//         end: "1100px top",
//         scrub: true,
//         pin: true,
//         pinSpacing: false,
//     },
//     width: "100%",
//     ease: "power1.out"
// });