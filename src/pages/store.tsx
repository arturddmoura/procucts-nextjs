import { create } from 'zustand';

type AddModal = {
    show: boolean;
    showUpdate: boolean;
    showDelete: boolean;
    toggleShow: () => void;
    toggleShowUpdate: () => void;
    toggleShowDelete: () => void;
};

export const useStore = create<AddModal>((set) => ({
    show: false,
    showUpdate: false,
    showDelete: false,
    toggleShow: () => set((state) => ({ show: !state.show })),
    toggleShowUpdate: () => set((state) => ({ showUpdate: !state.showUpdate })),
    toggleShowDelete: () => set((state) => ({ showDelete: !state.showDelete })),
}));
