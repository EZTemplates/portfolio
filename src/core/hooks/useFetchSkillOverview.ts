import { useQuery } from "@tanstack/react-query";
import { API } from "../apis/API";

export const useFetchSkillOverview = () => {
    return useQuery({
        queryKey: ['skill-overview'],
        queryFn: () => API.getSkillOverview(),
    });
};
