"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useState } from "react";

export const QueryProvider = ({ children }: { children: ReactNode }) => {
	const [client] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						retry: 2,
						refetchOnWindowFocus: false,
					},
				},
			}),
	);

	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
