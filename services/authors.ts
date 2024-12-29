import { Author } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const getAll = async (): Promise<Author[]> => {
	return (await axiosInstance.get<Author[]>(ApiRoutes.AUTHORS)).data;
};
