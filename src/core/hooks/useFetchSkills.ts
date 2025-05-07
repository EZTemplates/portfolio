import { useQuery } from "@tanstack/react-query";
import { FETCH_SKILLS } from "../static/query_keys";
import { API } from "../apis/API";

export const useFetchSkills = () => {
    return useQuery({ queryKey: [FETCH_SKILLS], queryFn: () => API.getSkills() })
}