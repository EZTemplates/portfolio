// stores/filterStore.ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type FilterData = {
    status: string[];
    type: string[];
    skills: string[];

};

export type SelectedFilter = {
    status: string;
    type: string;
    skill: string;
}

type FilterStore = {
    data: FilterData;
    selectedFilter: SelectedFilter;
    setData: (data: FilterData) => void;
    setSelectedStatus: (status: string) => void;
    setSelectedType: (type: string) => void;
    setSelectedSkill: (skill: string) => void;
};

export const useFilterStore = create<FilterStore>()(
    immer((set) => ({
        data: {
            status: [],
            type: [],
            skills: []
        },
        selectedFilter: {
            status: "All",
            type: "All",
            skill: "All"
        },
        setData: (data) => set((state) => { state.data = data }),
        setSelectedStatus: (status) => set((state) => { state.selectedFilter.status = status }),
        setSelectedType: (type) => set((state) => { state.selectedFilter.type = type }),
        setSelectedSkill: (skill) => set((state) => { state.selectedFilter.skill = skill }),
    }))
);
