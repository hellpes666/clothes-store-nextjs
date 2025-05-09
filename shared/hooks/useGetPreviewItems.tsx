import { useQuery } from "@tanstack/react-query";
import { itemsApi } from "../api/itemsApiQueryOptions";

export const useGetPreviewItems = () => {
	const { data, error, isLoading } = useQuery({
		...itemsApi.getPreviewDataQueryOptions(),
	});

	return { data, error, isLoading };
};
