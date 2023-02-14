	var nav_hide = gsap.timeline({
		scrollTrigger: {
			id: "scrub-NavHide",
			scroller: "[data-scroll-container]",
			trigger: "body",
			start: 0,
			end: () => window.innerWidth < 1400 ? "+=10%" : "+=20%",
			// markers: true,
			scrub: true,
		}
	});
	nav_hide.to(".scrub-NavHide", {
		autoAlpha: 0,
		ease: "none"
	});
