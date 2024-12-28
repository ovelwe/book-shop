import { Book } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const search = async (query: string): Promise<Book[]> => {
	return (
		await axiosInstance.get<Book[]>(ApiRoutes.SEARCH_BOOKS, {
			params: { query },
		})
	).data;
};
