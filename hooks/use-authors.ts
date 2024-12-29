import { Api } from "@/services/api-client";
import React from "react";

import { Author } from "@prisma/client";

type AuthorItem = Pick<Author, "id" | "name">;

export interface ReturnProps {
	authors: AuthorItem[];
	loading: boolean;
	selectedIds: Set<string>;
	onAddId: (id: string) => void;
}

export const useAuthors = () => {
	const [authors, setAuthors] = React.useState<ReturnProps["authors"]>([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		async function fetchAuthors() {
			try {
				setLoading(true);
				const authors = await Api.authors.getAll();
				setAuthors(
					authors.map((author) => ({
						id: author.id,
						name: author.name,
					}))
				);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}

		fetchAuthors();
	}, []);

	return { authors, loading };
};
