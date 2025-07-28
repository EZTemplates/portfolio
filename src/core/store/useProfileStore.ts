import { create } from "zustand"
import { IProfile } from "../interface/profile_interface"
import { immer } from "zustand/middleware/immer"
import { persist } from "zustand/middleware"

type ProfileStore = {
    profile: IProfile | undefined,
    setProfile: (profile: IProfile) => void,
}

export const useProfileStore = create<ProfileStore>()(
    persist(
        immer((set) => ({
            profile: undefined,
            setProfile: (profile) => set((state) => {
                state.profile = profile ?? {
                    _id: "1",
                    name: "Not Available",
                    short_info: "Not Available",
                    image: "Not Available",
                    current_role: "Not Available",
                    current_location: "Not Available",
                    number: 9999999999,
                    email: "Not Available",
                    country: "Not Available",
                    github_link: "Not Available",
                    linkedin_link: "Not Available",
                    instagram_link: "Not Available",
                    x_link: "Not Available",
                    resume_link: "Not Available",
                }
            }),
        })),
        {
            name: 'profile-storage', // unique name for localStorage key
            partialize: (state) => ({ profile: state.profile }), // only persist profile data
        }
    )
)