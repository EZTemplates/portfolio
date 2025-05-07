import { useQuery } from "@tanstack/react-query";
import { FETCH_EXPERIENCE } from "../static/query_keys";
import { API } from "../apis/API";

export const useFetchExperience = () => {
    return useQuery({ queryKey: [FETCH_EXPERIENCE], queryFn: () => API.getExperience() })
}