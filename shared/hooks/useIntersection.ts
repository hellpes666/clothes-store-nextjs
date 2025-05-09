"use client";

import { useCallback, useRef } from "react";

export const useIntersection = (onIntersect: () => void) => {
	const unsibscribe = useRef(() => {});

	return useCallback((el: HTMLDivElement | null) => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((interseciton) => {
				if (interseciton.isIntersecting) {
					onIntersect();
				}
			});
		});
		if (el) {
			observer.observe(el);
			unsibscribe.current = () => observer.disconnect();
		} else {
			unsibscribe.current();
		}
	}, []);
};
