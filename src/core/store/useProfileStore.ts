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
            setProfile: (profile) => set((state) => { state.profile = profile }),
        })),
        {
            name: 'profile-storage', // unique name for localStorage key
            partialize: (state) => ({ profile: state.profile }), // only persist profile data
        }
    )
)