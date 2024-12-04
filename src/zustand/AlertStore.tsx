import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AlertState {
  alert_flag : boolean;
  message_flag : boolean;
  setAlertState: (alert_state:boolean, message_state:boolean) => void;
}

const AlertStore = create(
  persist<AlertState>(
    (set) => ({
      alert_flag : false,
      message_flag : false,
      setAlertState: (alert_flag:boolean, message_flag:boolean) => {
        set({ alert_flag: alert_flag, message_flag: message_flag });
      },
    }),
    {
      name: 'AlertStorage',
    },
  ),
);

export default AlertStore;
