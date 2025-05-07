// import { Cart } from "../entity/Cart";
// import { Product } from "../entity/Product";

type FETCH_METHOD = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
// type URL_CATEGORY = "/products" | "/carts" | "/products/category" | "/products?limit=6";
// type ReturnTypeFetchInstance = Promise<Product[]> | Promise<Cart[]>;

/**
 * Функция, которая делает запрос на fakestoreapi
 * @param method Метод запроса: "GET", "POST", "PUT", "PATCH", "DELETE"
 * @param url URL в формате '/products' или '/carts'
 * @returns Данные в формате JSON
 */
export const fetchInstance = async <T,>(method: FETCH_METHOD, url: string, body?: object): Promise<T> => {
	try {
		const response = await fetch(`https://fakestoreapi.in/api${url}`, {
			method,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		});

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
