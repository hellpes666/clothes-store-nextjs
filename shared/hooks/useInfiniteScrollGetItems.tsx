import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { itemsApi } from "../api/itemsApiQueryOptions";
import { useIntersection } from "./useIntersection";
import { Spinner } from "@heroui/react";

export const useInfiniteScrollGetItems = () => {
	const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
		...itemsApi.getItemsInfinityQueryOptions(),
	});

	const cursorRef = useIntersection(() => fetchNextPage());

	const cursor = (
		<div className="" ref={cursorRef}>
			{!hasNextPage && <p className="text-primary-500">Товары закончились</p>}
			{isFetchingNextPage && <Spinner className="flex items-center justify-center" />}
		</div>
	);

	return { error, cursor, data, isLoading };
};
