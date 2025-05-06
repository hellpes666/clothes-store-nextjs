export const gridVariants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const cardVariants = {
	initial: { opacity: 0, scale: 0.95, y: 20 },
	animate: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.4,
			ease: "easeOut",
		},
	},
};
