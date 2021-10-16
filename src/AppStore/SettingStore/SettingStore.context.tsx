/** Setting Store Context */
import { createContext, useContext } from 'react';
import { SettingStore, SettingStoreAction } from './SettingStore.types';

// Context
export type SettingStoreContextType = {
  settingStore: SettingStore;
  settingStoreDispatch: React.Dispatch<SettingStoreAction>;
};
export const SettingStoreContext = createContext<SettingStoreContextType>(
  {} as SettingStoreContextType
);

export const useSettingStore = () => useContext(SettingStoreContext);
