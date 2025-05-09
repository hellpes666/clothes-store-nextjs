import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";
import { fetchInstance } from "./fetchInstance";
import { Product } from "../entity/Product";

interface ApiResponse {
	status: string;
	message: string;
	products: Product[];
}

export const itemsApi = {
	getItemsInfinityQueryOptions: () => {
		return infiniteQueryOptions<ApiResponse>({
			queryKey: ["items", "list"],
			queryFn: ({ pageParam = 1 }) => fetchInstance("GET", `/products?page=${pageParam}&limit=8`),
			initialPageParam: 1,
			getNextPageParam: (lastPage, allPages) => {
				if (!lastPage.products || lastPage.products.length < 8) {
					return undefined;
				}

				return allPages.length + 1;
			},
			select: (result) => ({
				...result,
				pages: result.pages.map((page) => ({
					...page,
					products: page.products,
				})),
			}),
		});
	},

	getPreviewDataQueryOptions: () => {
		return queryOptions<ApiResponse>({
			queryKey: ["previewItems", "list"],
			queryFn: (meta) => fetchInstance("GET", "/products?limit=6", {}, { signal: meta.signal }),
		});
	},
};
