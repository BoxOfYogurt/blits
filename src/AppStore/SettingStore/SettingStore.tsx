/** Setting Store Main */

import React, { useReducer } from 'react';
import { SettingStoreContext } from './SettingStore.context';
import { SettingStoreReducer } from './SettingStore.reducer';
import { SettingStore, SettingStoreAction } from './SettingStore.types';

const getLocalStorageSettingStore = (): SettingStore => {
  const storeValues = localStorage.getItem('SettingStore');
  if (storeValues) {
    return JSON.parse(storeValues) as SettingStore;
  }
  return {
    coreTime: {
      from: 8,
      to: 16,
      highLight: true,
    },
  };
};

export const SettingStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [settingStore, settingStoreDispatch] = useReducer<
    React.Reducer<SettingStore, SettingStoreAction>
  >(SettingStoreReducer, getLocalStorageSettingStore());

  return (
    <SettingStoreContext.Provider
      value={{ settingStore, settingStoreDispatch }}>
      {children}
    </SettingStoreContext.Provider>
  );
};
