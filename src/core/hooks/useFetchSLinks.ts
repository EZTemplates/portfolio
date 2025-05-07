import { useQuery } from "@tanstack/react-query";
import { API } from "../apis/API";
import { FETCH_SOCIAL_LINKS } from "../static/query_keys";

export const useFetchSLinks = () => {
    return useQuery({
        queryKey: [FETCH_SOCIAL_LINKS],
        queryFn: () => API.getSocialLinks(),
    })
}