import { useQuery } from "@tanstack/react-query";
import { API } from "../apis/API";
import { FETCH_PROFILE } from "../static/query_keys";
import { useProfileStore } from "../store/useProfileStore";

export const useFetchProfile = () => {
    const { setProfile } = useProfileStore()
    return useQuery({
        queryKey: [FETCH_PROFILE],
        queryFn: async () => {
            const res = await API.getProfile()
            setProfile(res)
            return res
        }
    })
}