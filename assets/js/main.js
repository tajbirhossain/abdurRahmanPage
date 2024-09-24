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




// Set initial opacity
gsap.set(".heroBg2, .heroLastSlide, .heroLogo, .heroTextCon", { opacity: 0 });

// Create a timeline for all animations
const heroTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=1000px", // Adjust this value based on your needs
        scrub: true,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1 // This helps smooth out the pinning
    }
});

// Add animations to the timeline
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
    }, "+=0.5") // Delay start by 0.5
    .to(".heroLogo", {
        opacity: 1,
        ease: "power1.out",
        duration: 1
    }, "+=0.5") // Delay start by 0.5
    .to(".heroTextCon", {
        opacity: 1,
        ease: "power1.out",
        duration: 1
    }, "+=0"); // Delay start by 0.5


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