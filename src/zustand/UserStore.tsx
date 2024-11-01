import { create } from 'zustand';

interface UserState {
  isLoggedin: boolean;
  name: string;
  setUserState:(login: boolean, name: string) => void;
}

const useUserStore = create<UserState>((set) => ({
  isLoggedin: false,
  name: '',
  setUserState: (login: boolean, name: string) => {
    set({isLoggedin: login, name:name})
  },
}));

export default useUserStore;
