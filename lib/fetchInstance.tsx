type FETCH_METHOD = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
type URL_CATEGORY = "/products" | "/carts";

/**
 * Функция, которая делает запрос на fakestoreapi
 * @param method Метод запроса: "GET", "POST", "PUT", "PATCH", "DELETE"
 * @param url URL в формате '/products' или '/carts'
 * @returns Данные в формате JSON
 */
export const fetchInstance = async (method: FETCH_METHOD, url: URL_CATEGORY): Promise<unknown> => {
	try {
		const response = await fetch(`https://fakestoreapi.com${url}`, { method });

		if (!response.ok) {
			throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
		}

		const res = await response.json();
		return res.then((data: unknown) => data);
	} catch (error) {
		console.error("Ошибка при выполнении запроса:", error);
		throw error;
	}
};
