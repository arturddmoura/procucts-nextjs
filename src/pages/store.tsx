import { create } from 'zustand';

type AddModal = {
    show: boolean;
    toggleShow: () => void;
};

// note the "<MyStore>" next to create
export const useStore = create<AddModal>((set) => ({
    show: false,
    toggleShow: () => set((state) => ({ show: !state.show })),
}));
