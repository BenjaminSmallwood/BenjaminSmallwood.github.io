window.addEventListener('DOMContentLoaded', () => {
    gsap.from("svg path", {duration: 1, opacity: 0, stagger: 0.02});
    gsap.from(".animate-text > *", {duration: 1, y: "100px", opacity: 0, stagger: 0.1});
});