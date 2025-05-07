import { useQuery } from "@tanstack/react-query";
import { FETCH_ABOUT } from "../static/query_keys";
import { API } from "../apis/API";

export const useFetchAbout = () => {
    return useQuery({
        queryKey: [FETCH_ABOUT],
        queryFn: () => API.getAbout()
    });
};