const clearConfig = {
	repeat: 0,
	ease: "none",
	duration: 0.4,
}

const moveConfig = {
	repeat: 0,
	ease: "none",
	duration: 0.3,
}

const DEFAULT_MOVE_PERCENT = 120;

export const clearXPosition = (target) =>
	gsap.to(target, { xPercent: 0, ...clearConfig });

export const clearYPosition = (target) =>
	gsap.to(target, { yPercent: 0, ...clearConfig });

export const moveLeft = (target) =>
	gsap.to(target, { xPercent: -DEFAULT_MOVE_PERCENT, ...moveConfig });

export const moveRight = (target) =>
	gsap.to(target, { xPercent: DEFAULT_MOVE_PERCENT, ...moveConfig });

export const moveTop = (target) =>
	gsap.to(target, { yPercent: -DEFAULT_MOVE_PERCENT, ...moveConfig });

export const moveFromLeft = (target, percent = DEFAULT_MOVE_PERCENT) =>
	gsap.from(target, { xPercent: percent, ...moveConfig });

export const moveFromRight = (target, percent = DEFAULT_MOVE_PERCENT) =>
	gsap.from(target, { xPercent: -percent, ...moveConfig, duration: 0.4 });

// ===============================================

function preventDefaultPositions() {
	clearXPosition(document.querySelector(".cta"));
	clearXPosition(document.querySelector(".img"));
	clearYPosition(document.querySelector(".block"));
	clearXPosition(document.querySelector(".grid"));
}

function handleDesktopAnimations(origin, direction, destination) {
	if (destination.index == 0 && direction == "up") {
		return preventDefaultPositions();
	}
	
	if (origin.index == 0 && direction == "down") {
		moveTop(document.querySelector(".block"));
		destination.item.classList.add("bg");
		return;
	}
	
	if (origin.index == 1 && direction == "up") {
		clearYPosition(document.querySelector(".block"));
		origin.item.classList.remove("bg");
		return;
	}
	
	if (origin.index == 2 && direction == "up") {
		destination.item.classList.add("bg");
		return;
	}
	
	return;
}


function handleMobileAnimations(origin, direction) {
	if (origin.index == 0 && direction == "down") {
		moveLeft(document.querySelector(".cta"));
		moveRight(document.querySelector(".mg"));
		return;
	}

	if (origin.index == 1 && direction == "up") {
		clearXPosition(document.querySelector(".cta"));
		clearXPosition(document.querySelector(".img"));
		return;
	}

	if (origin.index == 1 && direction == "down") {
		moveRight(document.querySelector(".grid"));
		return;
	}

	if (origin.index == 2 && direction == "up") {
		clearXPosition(document.querySelector(".grid"));
		return;
	}

	if (origin.index == 2 && direction == "down") {
		moveRight(document.querySelector(".container"));
		moveRight(document.querySelector(".mobile-text"));
		return;
	}

	if (origin.index == 3 && direction == "up") {
		clearXPosition(document.querySelector(".container"));
		clearXPosition(document.querySelector(".mobile-text"));
		return;
	}
	
  return;
}

function init(origin, destination, direction) {
	const isDesktopMedia = window.matchMedia("(min-width: 1200px)").matches;
	
	if (isDesktopMedia) {
		handleDesktopAnimations(origin, direction, destination)
	}
	
	handleMobileAnimations(origin, direction);
}
