window.initTechStackAnimations = function () {

    const track1 = document.querySelector(".marquee-track");
    const track2 = document.querySelector(".marquee-track-reverse");

    if (!track1 || !track2) return;

    // Duplicate content
    track1.innerHTML += track1.innerHTML;
    track2.innerHTML += track2.innerHTML;

    const width1 = track1.scrollWidth / 2;
    const width2 = track2.scrollWidth / 2;

    // LEFT
    gsap.set(track1, { x: 0 });

    gsap.to(track1, {
        x: `-=${width1}`,
        duration: 25,
        ease: "none",
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % width1)
        }
    });

    // RIGHT
    gsap.set(track2, { x: -width2 });

    gsap.to(track2, {
        x: `+=${width2}`,
        duration: 25,
        ease: "none",
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % width2)
        }
    });

};