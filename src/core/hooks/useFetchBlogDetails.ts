import { useQuery } from "@tanstack/react-query"
import { BLOG_DETAILS } from "../apis/endpoints"
import { API } from "../apis/API"

export const useFetchBlogDetails = (id: string | undefined) => {
    return useQuery({
        queryKey: [BLOG_DETAILS, id],
        queryFn: () => API.fetchBlogDetails(id ?? ""),
        enabled: !!id,
    })
}