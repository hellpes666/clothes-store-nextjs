"use client";

import { useCartStore } from "@/shared/hooks/useCartStore";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from "@heroui/react";

export const CartModal = () => {
	const { isCartOpen, closeCart } = useCartStore();
	console.log(isCartOpen);

	return (
		<Drawer isOpen={isCartOpen} onClose={closeCart}>
			<DrawerContent>
				{(onClose) => (
					<>
						<DrawerHeader className="flex flex-col gap-1">Drawer Title</DrawerHeader>
						<DrawerBody>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
								hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
							</p>
							<p>
								Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
								adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
								eiusmod Lorem aliqua enim laboris do dolor eiusmod.
							</p>
						</DrawerBody>
						<DrawerFooter>
							<Button color="danger" variant="light" onPress={onClose}>
								Close
							</Button>
							<Button color="primary" onPress={onClose}>
								Action
							</Button>
						</DrawerFooter>
					</>
				)}
			</DrawerContent>
		</Drawer>
	);
};
