import { create } from 'zustand';

interface DrawerState {
  openDrawer: boolean;
  like: boolean;
  chart: boolean;
  handleDrawer: (button: string) => void;
}

const useDrawerStore = create<DrawerState>((set) => ({
  openDrawer: false,
  like: false,
  chart: false,
  handleDrawer: (button: string) =>
    set((state) => {
      // drawer가 닫혀있다가 열리는 경우
      if (!state.openDrawer) {
        if (button === 'like') {
          return { openDrawer: true, like: true, chart: false };
        } else if (button === 'chart') {
          return { openDrawer: true, chart: true, like: false };
        }
      } else {
        // drawer가 열려있던 상태에서 한 번 더 눌러서 drawer를 닫을 경우
        if (state.like && button === 'like') {
          return { openDrawer: false, like: false };
        } else if (state.chart && button === 'chart') {
          return { openDrawer: false, chart: false };
        // drawer가 열려있던 상태에서 다른 버튼을 눌러서 content 변화시킬 경우
        } else if (state.like && button === 'chart') {
          return { like: false, chart: true };
        } else if (state.chart && button === 'like') {
          return { chart: false, like: true };
        }
      }
      return state;
    }),
}));

export default useDrawerStore;