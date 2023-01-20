import { create } from 'zustand';

type AddModal = {
    show: boolean;
    showUpdate: boolean;
    showDelete: boolean;
    snackbar: boolean;
    snackbarError: boolean;
    drawer: boolean;
    toggleShow: () => void;
    toggleShowUpdate: () => void;
    toggleShowDelete: () => void;
    toggleSnackbar: () => void;
    toggleSnackbarError: () => void;
    toggleDrawer: () => void;
};

export const useStore = create<AddModal>((set) => ({
    show: false,
    showUpdate: false,
    showDelete: false,
    snackbar: false,
    snackbarError: false,
    drawer: false,
    toggleShow: () => set((state) => ({ show: !state.show })),
    toggleShowUpdate: () => set((state) => ({ showUpdate: !state.showUpdate })),
    toggleShowDelete: () => set((state) => ({ showDelete: !state.showDelete })),
    toggleSnackbar: () => set((state) => ({ snackbar: !state.snackbar })),
    toggleSnackbarError: () => set((state) => ({ snackbarError: !state.snackbarError })),
    toggleDrawer: () => set((state) => ({ drawer: !state.drawer })),
}));
