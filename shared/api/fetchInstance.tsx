type FETCH_METHOD = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

/**
 * Функция, которая делает запрос на fakestoreapi
 * @param method Метод запроса: "GET", "POST", "PUT", "PATCH", "DELETE"
 * @param url URL в формате '/products' или '/carts'
 * @param body Тело запроса (опционально)
 * @returns Данные в формате JSON
 */
export const fetchInstance = async <T,>(
	method: FETCH_METHOD,
	url: string,
	body?: object,
	init?: RequestInit & { json?: unknown },
): Promise<T> => {
	try {
		const options: RequestInit = {
			method,
			headers: { "Content-Type": "application/json" },
		};

		if (body && (method === "POST" || method === "PUT" || method === "PATCH")) {
			options.body = JSON.stringify(body);
		}

		const response = await fetch(`https://fakestoreapi.in/api${url}`, options);

		if (!response.ok) {
			throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
		}

		const res = await response.json();
		return res as T;
	} catch (error) {
		console.error("Ошибка при выполнении запроса:", error);
		throw error;
	}
};
