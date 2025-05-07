import { useInfiniteQuery } from "@tanstack/react-query"
import { FETCH_PROJECTS } from "../static/query_keys"
import { SelectedFilter } from "../store/useFilterStore"
import { API } from "../apis/API"
export const useFetchPaginatedProject = (filter: SelectedFilter) => {
    return useInfiniteQuery({
        queryKey: [FETCH_PROJECTS, filter],
        queryFn: ({ pageParam = 1 }) => API.getProjects(pageParam, filter),
        getNextPageParam: (lastPage) => lastPage.nextPage,
        initialPageParam: 1,
    })
}