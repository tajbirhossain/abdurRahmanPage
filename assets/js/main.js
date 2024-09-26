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





gsap.set(".heroBg21, .heroLastSlide1, .heroLogo1, .heroTextCon1, .heroBg22, .heroLastSlide2, .heroLogo2, .heroTextCon2", { opacity: 0 });


const heroTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero1",
        start: "top top",
        end: "+=1000px",
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1 
    }
});
const heroTimeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero2",
        start: "top top",
        end: "+=1000px",
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1 
    }
});


heroTimeline
    .to(".heroBg21", {
        opacity: 1,
        ease: "power1.out",
        duration: 1
    })
    .to(".heroLastSlide1", {
        opacity: 1,
        ease: "power1.out",
        duration: 1
    }, "+=0.5")
    .to(".heroLogo1", {
        opacity: 1,
        ease: "power1.out",
        duration: 1
    }, "+=0.5")
    .to(".heroTextCon1", {
        opacity: 1,
        ease: "power1.out",
        duration: 1
    }, "-=1");


heroTimeline2
    .to(".heroBg22", {
        opacity: 1,
        ease: "power1.out",
        duration: 1
    })
    .to(".heroLastSlide2", {
        opacity: 1,
        ease: "power1.out",
        duration: 1
    }, "+=0.5")
    .to(".heroLogo2", {
        opacity: 1,
        ease: "power1.out",
        duration: 1
    }, "+=0.5")
    .to(".heroTextCon2", {
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