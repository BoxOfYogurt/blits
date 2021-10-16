/** Setting Store Reducer */

import { SettingStore, SettingStoreAction } from './SettingStore.types';

/** Reducer - Extend when more setting options are thought of */

export const SettingStoreReducer: React.Reducer<
  SettingStore,
  SettingStoreAction
> = (store, action) => {
  let copyStore = { ...store };
  return action.payload;
};

const setLocalStorageSettingStore = (store: SettingStore) => {
  localStorage.setItem('SettingStore', JSON.stringify(store));
};
