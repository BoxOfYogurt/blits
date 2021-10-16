/** Setting Store Types */

/**
 * User Prefrences
 */

export interface SettingStore {
  coreTime?: {
    from: number; // as HourTime;
    to: number; // as HourTime
    highLight: boolean;
  };
}

export interface SettingStoreAction {
  payload: SettingStore;
}
