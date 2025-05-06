export const animationOnAxis = (delay: number, translateX: number = 0, translateY: number = 0) => ({
	initial: {
		x: translateX,
		y: translateY,
		opacity: 0,
	},
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
	},
	transition: {
		type: "spring",
		stiffness: 60,
		damping: 12,
		delay,
	},
});
