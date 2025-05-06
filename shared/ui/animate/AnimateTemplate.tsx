"use client";

import { motion, MotionProps } from "framer-motion";

interface TemplateProps {
	children: React.ReactNode;
	options: MotionProps;
}

export const AnimateTemplate = ({ children, options }: TemplateProps) => {
	return <motion.span {...options}>{children}</motion.span>;
};
