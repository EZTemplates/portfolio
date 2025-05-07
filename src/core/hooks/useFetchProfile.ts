import { useQuery } from "@tanstack/react-query";
import { API } from "../apis/API";
import { FETCH_PROFILE } from "../static/query_keys";

export const useFetchProfile = () => {
    return useQuery({ queryKey: [FETCH_PROFILE], queryFn: () => API.getProfile() })
}