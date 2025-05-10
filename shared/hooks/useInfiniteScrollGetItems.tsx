import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { itemsApi } from "../api/itemsApiQueryOptions";
import { useIntersection } from "./useIntersection";
import { Button, Spinner } from "@heroui/react";

export const useInfiniteScrollGetItems = () => {
	const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
		...itemsApi.getItemsInfinityQueryOptions(),
	});

	const cursorRef = useIntersection(() => fetchNextPage());

	const cursor = (
		<div className="" ref={cursorRef}>
			{!hasNextPage && (
				<Button
					color="primary"
					className="hover-btn mt-5"
					size="lg"
					onClick={() => {
						window.scrollTo({
							top: 0,
							left: 0,
							behavior: "smooth",
						});
					}}
				>
					Scroll to the top
				</Button>
			)}
			{isFetchingNextPage && <Spinner className="mt-5 flex items-center justify-center" />}
		</div>
	);

	return { error, cursor, data, isLoading };
};
