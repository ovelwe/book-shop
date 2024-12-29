import React from "react";
import { Filters } from "./use-filters";
import qs from "qs";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
	const router = useRouter();

	React.useEffect(() => {
		const params = {
			...filters.prices,
			authors: Array.from(filters.selectedAuthors),
			filters: Array.from(filters.filters),
		};

		const query = qs.stringify(params, { arrayFormat: "comma" });
		const currentQuery = window.location.search.slice(1);

		if (currentQuery !== query) {
			router.replace(`?${query}`, {
				scroll: false,
			});
		}
	}, [filters, router]);
};
