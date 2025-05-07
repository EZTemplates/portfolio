import { FETCH_FILTER } from "../static/query_keys";
import { API } from "../apis/API";
import { useQuery } from '@tanstack/react-query';
import { useFilterStore } from "../store/useFilterStore";
import { useEffect } from "react";

export const useFetchFilter = () => {
    const { data, isLoading, isSuccess, isError, error } = useQuery({
        queryKey: [FETCH_FILTER],
        queryFn: () => API.getProjectFilter(),
    });

    const setData = useFilterStore((s) => s.setData);

    useEffect(() => {
        if (isSuccess && data) {
            setData(data);
        }
    }, [isSuccess, data, setData]);

    return { data, isLoading, isSuccess, isError, error };
};
