import { useInfiniteQuery } from "@tanstack/react-query"
import { FETCH_BLOGS } from "../apis/endpoints"
import { API } from "../apis/API"

export const useFetchPaginatedBlogs = () => {
    return useInfiniteQuery({
        queryKey: [FETCH_BLOGS],
        queryFn: ({ pageParam = 1 }) => API.getBlogs(pageParam),
        getNextPageParam: (lastPage) => lastPage.nextPage,
        initialPageParam: 1,
    })
}